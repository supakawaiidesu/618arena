import type { RiotId } from './types'

export function parseRiotId(value: string): RiotId | null {
  const trimmed = value.trim()
  const hashIndex = trimmed.lastIndexOf('#')

  if (hashIndex <= 0 || hashIndex === trimmed.length - 1) {
    return null
  }

  const gameName = trimmed.slice(0, hashIndex).trim()
  const tagLine = trimmed.slice(hashIndex + 1).trim()

  if (!gameName || !tagLine) {
    return null
  }

  return { gameName, tagLine }
}
