import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const SOURCE_PATH = resolve(process.argv[2] ?? 'augmentlist.lua')
const DATA_DIR = resolve('src/features/wiki/data')

const TIERS = ['Silver', 'Gold', 'Prismatic']

const source = readFileSync(SOURCE_PATH, 'utf8')
const lines = source.split(/\r?\n/)
const returnLineIndex = lines.findIndex((line) => /^\s*return\s*\{/.test(line))

if (returnLineIndex < 0) {
  throw new Error(`Could not find a Lua return table in ${SOURCE_PATH}`)
}

const entryStarts = []
const entryStartPattern = /^\s*\["((?:\\.|[^"])*)"\]\s*=\s*\{/

for (let lineIndex = returnLineIndex + 1; lineIndex < lines.length; lineIndex += 1) {
  const match = lines[lineIndex].match(entryStartPattern)

  if (match) {
    entryStarts.push({ name: unescapeLuaString(match[1]), lineIndex })
  }
}

const usedIds = new Set()
const augments = entryStarts.map((entry, index) => {
  const nextEntry = entryStarts[index + 1]
  const block = lines.slice(entry.lineIndex, nextEntry?.lineIndex ?? lines.length).join('\n')
  const tier = readLuaField(block, 'tier')

  if (!TIERS.includes(tier)) {
    throw new Error(`Unsupported tier "${tier}" for ${entry.name}`)
  }

  const rawNotes = readLuaField(block, 'notes') ?? readLuaField(block, 'note') ?? ''
  const levels = [1, 2, 3]
    .map((level) => {
      const raw = readLuaField(block, `level${level}`) ?? ''

      return {
        level,
        raw,
        text: cleanWikiText(raw),
      }
    })
    .filter((level) => level.raw.trim())
  const rawBody = [
    readLuaField(block, 'description') ?? '',
    ...levels.map((level) => level.raw),
    rawNotes,
  ].join('\n')
  const cleanBody = cleanWikiText(rawBody)

  return {
    id: createUniqueId(entry.name, usedIds),
    name: entry.name,
    tier,
    description: {
      raw: readLuaField(block, 'description') ?? '',
      text: cleanWikiText(readLuaField(block, 'description') ?? ''),
    },
    levels,
    notes: rawNotes.trim()
      ? {
          raw: normalizeMultilineRaw(rawNotes),
          text: cleanWikiText(rawNotes),
        }
      : null,
    references: extractReferences(rawBody),
    tags: buildTags(rawBody, cleanBody),
  }
})

const byTier = Object.fromEntries(TIERS.map((tier) => [
  tier,
  augments.filter((augment) => augment.tier === tier).sort((a, b) => a.name.localeCompare(b.name)),
]))

mkdirSync(DATA_DIR, { recursive: true })

writeTierFile('silverAugments.generated.ts', 'silverAugments', byTier.Silver)
writeTierFile('goldAugments.generated.ts', 'goldAugments', byTier.Gold)
writeTierFile('prismaticAugments.generated.ts', 'prismaticAugments', byTier.Prismatic)

console.log(`Converted ${augments.length} augments from ${SOURCE_PATH}`)
console.log(`Silver: ${byTier.Silver.length}, Gold: ${byTier.Gold.length}, Prismatic: ${byTier.Prismatic.length}`)

function writeTierFile(fileName, exportName, items) {
  const filePath = resolve(DATA_DIR, fileName)
  const fileContents = [
    "import type { Augment } from './types'",
    '',
    '// Generated once from scraped Arena augment wiki data. This checked-in file is the app data source.',
    `export const ${exportName} = ${JSON.stringify(items, null, 2)} satisfies Augment[]`,
    '',
  ].join('\n')

  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, fileContents)
}

function readLuaField(block, fieldName) {
  const marker = `["${fieldName}"]`
  const markerIndex = block.indexOf(marker)

  if (markerIndex < 0) {
    return undefined
  }

  const equalsIndex = block.indexOf('=', markerIndex + marker.length)
  let cursor = equalsIndex + 1

  while (/\s/.test(block[cursor])) {
    cursor += 1
  }

  if (block[cursor] === '"') {
    return readQuotedLuaString(block, cursor)
  }

  const longStringStart = block.slice(cursor).match(/^\[(=*)\[/)

  if (longStringStart) {
    const startIndex = cursor + longStringStart[0].length
    const endToken = `]${longStringStart[1]}]`
    const endIndex = block.indexOf(endToken, startIndex)

    if (endIndex < 0) {
      throw new Error(`Unterminated Lua long string for ${fieldName}`)
    }

    return block.slice(startIndex, endIndex)
  }

  throw new Error(`Unsupported Lua value for ${fieldName}`)
}

function readQuotedLuaString(value, startIndex) {
  let result = ''

  for (let cursor = startIndex + 1; cursor < value.length; cursor += 1) {
    const character = value[cursor]

    if (character === '\\') {
      result += unescapeLuaCharacter(value[cursor + 1])
      cursor += 1
      continue
    }

    if (character === '"') {
      return result
    }

    result += character
  }

  throw new Error('Unterminated Lua string')
}

function unescapeLuaString(value) {
  return value.replace(/\\(.)/g, (_, character) => unescapeLuaCharacter(character))
}

function unescapeLuaCharacter(character) {
  switch (character) {
    case 'n':
      return '\n'
    case 'r':
      return '\r'
    case 't':
      return '\t'
    default:
      return character
  }
}

function normalizeMultilineRaw(value) {
  const normalized = value.replace(/\r\n/g, '\n').replace(/\t/g, '  ')
  const trimmed = normalized.replace(/^\n+|\n+$/g, '')
  const nonEmptyLines = trimmed.split('\n').filter((line) => line.trim())
  const commonIndent = nonEmptyLines.reduce((indent, line) => {
    const lineIndent = line.match(/^ */)?.[0].length ?? 0

    return Math.min(indent, lineIndent)
  }, Number.POSITIVE_INFINITY)

  if (!Number.isFinite(commonIndent) || commonIndent === 0) {
    return trimmed
  }

  return trimmed
    .split('\n')
    .map((line) => line.slice(commonIndent))
    .join('\n')
}

function cleanWikiText(rawValue) {
  if (!rawValue.trim()) {
    return ''
  }

  let value = normalizeMultilineRaw(rawValue)
    .replace(/<!--.*?-->/gs, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(?:ul|ol)[^>]*>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<code[^>]*>/gi, '`')
    .replace(/<\/code>/gi, '`')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[\[File:[^\]]+\]\]/gi, ' ')
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/'''/g, '')
    .replace(/''/g, '')

  value = replaceTemplates(value)

  return value
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function replaceTemplates(value) {
  let previous = ''
  let current = value
  let pass = 0

  while (current !== previous && pass < 80) {
    previous = current
    current = current.replace(/\{\{([^{}]*)\}\}/g, (_, templateContent) => replaceTemplate(templateContent))
    pass += 1
  }

  return current.replace(/\{\{[^{}]*\}\}/g, '')
}

function replaceTemplate(templateContent) {
  const parts = templateContent.split('|').map((part) => part.trim()).filter(Boolean)
  const name = parts.shift()?.toLowerCase() ?? ''
  const positional = parts.filter((part) => !/^[a-z0-9_-]+\s*=/.test(part))
  const hasIconOnly = parts.some((part) => /^icononly\s*=/.test(part))

  switch (name) {
    case 'as':
    case 'ccs':
      return formatStatText(positional[0], positional[1])
    case 'sti':
    case 'stil':
      return positional.at(-1) ?? ''
    case 'sbc':
    case 'fd':
    case 'ap':
    case 'rd':
    case 'g':
    case 'adaptive':
    case 'nie':
    case 'rutngt':
      return positional[0] ?? ''
    case 'pp':
      return positional[0] ?? ''
    case 'ft':
    case 'tt':
      return positional[0] ?? ''
    case 'tip':
      if (hasIconOnly) return ''

      return positional[1] ?? positional[0] ?? ''
    case 'ai':
    case 'ais':
    case 'cai':
    case 'cais':
      return positional[2] ?? positional[0] ?? ''
    case 'bi':
    case 'cis':
    case 'ci':
    case 'csl':
    case 'ii':
    case 'iis':
    case 'ri':
    case 'si':
    case 'ui':
      return positional[1] && !isMarkupOption(positional[1]) ? positional[1] : positional[0] ?? ''
    case 'aug':
      return positional.at(-1) ?? ''
    case 'times':
      return 'x'
    case 'minus':
      return '-'
    case 'bug':
    case 'citation needed':
      return ''
    default:
      return positional[0] ?? ''
  }
}

function formatStatText(value = '', label = '') {
  if (!label || isMarkupOption(label) || ['ad', 'ap', 'as', 'ms', 'hp', 'mr'].includes(label.toLowerCase())) {
    return value
  }

  if (value.toLowerCase().includes(label.toLowerCase())) {
    return value
  }

  return `${value} ${label}`.trim()
}

function isMarkupOption(value) {
  return /^(?:icononly|link|nolink|image|color|key|label|label1|type|formula)\s*=/.test(value)
    || /^(?:yes|true|false)$/.test(value)
}

function extractReferences(rawValue) {
  return {
    augments: unique([
      ...matchTemplateArg(rawValue, /\{\{aug\|[^|{}]+\|([^|{}]+)\}\}/g),
      ...matchTemplateArg(rawValue, /\[\[File:([^\]|]+) ar augment\.[^\]]+\]\]/gi).map((name) => name.trim()),
    ]),
    champions: unique([
      ...matchTemplateArg(rawValue, /\{\{ci?s?\|([^|{}]+)(?:\|[^{}]+)?\}\}/g),
      ...matchTemplateArg(rawValue, /\{\{cai?s?\|[^|{}]+\|([^|{}]+)(?:\|[^{}]+)?\}\}/g),
      ...matchTemplateArg(rawValue, /\{\{csl\|([^|{}]+)(?:\|[^{}]+)?\}\}/g),
    ]),
    items: unique(matchTemplateArg(rawValue, /\{\{ii?s?\|([^|{}]+)(?:\|[^{}]+)?\}\}/g)),
    runes: unique(matchTemplateArg(rawValue, /\{\{ri\|([^|{}]+)(?:\|[^{}]+)?\}\}/g)),
  }
}

function matchTemplateArg(value, pattern) {
  return [...value.matchAll(pattern)]
    .map((match) => match[1]?.trim())
    .filter(Boolean)
}

function buildTags(rawBody, cleanBody) {
  const body = `${rawBody}\n${cleanBody}`.toLowerCase()
  const tags = []

  if (body.includes('this augment is only available for')) tags.push('champion-specific')
  if (body.includes('removed since')) tags.push('removed')
  if (body.includes('quest:')) tags.push('quest')
  if (body.includes('replaces {{si|flee}}') || body.includes('replaces flee')) tags.push('flee-replacement')
  if (body.includes('burn')) tags.push('burn')
  if (body.includes('cursed power')) tags.push('curse')
  if (body.includes('critical strike') || body.includes('critically strike')) tags.push('crit')
  if (body.includes('shield')) tags.push('shield')
  if (body.includes('heal')) tags.push('healing')
  if (body.includes('dash') || body.includes('blink')) tags.push('mobility')
  if (body.includes('attack speed')) tags.push('attack-speed')
  if (body.includes('ability haste')) tags.push('ability-haste')
  if (body.includes('adaptive force')) tags.push('adaptive')
  if (body.includes('item')) tags.push('item')

  return unique(tags)
}

function createUniqueId(name, used) {
  const baseId = name
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'augment'
  let id = baseId
  let suffix = 2

  while (used.has(id)) {
    id = `${baseId}-${suffix}`
    suffix += 1
  }

  used.add(id)

  return id
}

function unique(values) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b))
}
