import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { SiteSectionNav } from '../navigation/SiteSectionNav'
import { AUGMENT_TIERS, allAugments, type Augment, type AugmentTier } from './data/augments'

const WIKI_SECTIONS = ['Augments', 'Champions', 'Items'] as const
const AUGMENT_TAG_OPTIONS = Array.from(new Set(allAugments.flatMap((augment) => augment.tags))).sort((a, b) =>
  formatTag(a).localeCompare(formatTag(b)),
)
const AUGMENT_LEVEL_FILTERS = [
  { value: 'with-levels', label: 'With levels' },
  { value: 'without-levels', label: 'Without levels' },
] as const

type WikiSection = (typeof WIKI_SECTIONS)[number]
type AugmentLevelFilter = (typeof AUGMENT_LEVEL_FILTERS)[number]['value']
type AugmentFilterMenu = 'tier' | 'type' | 'levels'

type AugmentFilters = {
  tiers: AugmentTier[]
  tags: string[]
  levels: AugmentLevelFilter[]
}

export function WikiPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [openFilterMenu, setOpenFilterMenu] = useState<AugmentFilterMenu | null>(null)
  const [augmentFilters, setAugmentFilters] = useState<AugmentFilters>({ tiers: [], tags: [], levels: [] })
  const activeSection: WikiSection = 'Augments'
  const normalizedSearchQuery = normalizeSearchValue(searchQuery)
  const searchedAugments = normalizedSearchQuery
    ? allAugments.filter((augment) => matchesAugmentSearch(augment, normalizedSearchQuery))
    : allAugments
  const filteredAugments = searchedAugments.filter((augment) => matchesAugmentFilters(augment, augmentFilters))

  const handleTierToggle = (tier: AugmentTier) => {
    setAugmentFilters((filters) => ({ ...filters, tiers: toggleFilterValue(filters.tiers, tier) }))
  }

  const handleTagToggle = (tag: string) => {
    setAugmentFilters((filters) => ({ ...filters, tags: toggleFilterValue(filters.tags, tag) }))
  }

  const handleLevelToggle = (levelFilter: AugmentLevelFilter) => {
    setAugmentFilters((filters) => ({ ...filters, levels: toggleFilterValue(filters.levels, levelFilter) }))
  }

  const handleFiltersClear = () => {
    setAugmentFilters({ tiers: [], tags: [], levels: [] })
    setOpenFilterMenu(null)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="page-shell has-output">
      <section className="everything-stage">
        <form className="everything-bar wiki-search-bar" onSubmit={handleSearchSubmit}>
          <SiteSectionNav activeSection="wiki" />
          <input
            className="everything-search-input"
            aria-label="Search augments"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search augments, effects, champions, items"
            autoComplete="off"
          />
        </form>

        <nav className="wiki-section-tabs" aria-label="Wiki sections">
          {WIKI_SECTIONS.map((section) => (
            <button
              key={section}
              type="button"
              className={`wiki-section-tab${section === activeSection ? ' is-active' : ' is-disabled'}`}
              disabled={section !== 'Augments'}
              aria-current={section === activeSection ? 'page' : undefined}
            >
              {section}
            </button>
          ))}
        </nav>
      </section>

      <section className="wiki-board" aria-label="Augment wiki browser">
        <WikiListTools
          section={activeSection}
          augmentFilters={augmentFilters}
          openFilterMenu={openFilterMenu}
          resultCount={filteredAugments.length}
          totalCount={allAugments.length}
          onFilterMenuChange={setOpenFilterMenu}
          onTierToggle={handleTierToggle}
          onTagToggle={handleTagToggle}
          onLevelToggle={handleLevelToggle}
          onClear={handleFiltersClear}
        />

        <div className="wiki-augment-list" aria-label="Filtered augments">
          {filteredAugments.length > 0 ? (
            filteredAugments.map((augment) => (
              <AugmentRow
                key={augment.id}
                augment={augment}
                isExpanded={expandedId === augment.id}
                onToggle={() => setExpandedId((currentId) => (currentId === augment.id ? null : augment.id))}
              />
            ))
          ) : (
            <p className="stats-panel-empty wiki-augment-empty">No augments match that search.</p>
          )}
        </div>
      </section>
    </main>
  )
}

function WikiListTools({
  section,
  augmentFilters,
  openFilterMenu,
  resultCount,
  totalCount,
  onFilterMenuChange,
  onTierToggle,
  onTagToggle,
  onLevelToggle,
  onClear,
}: {
  section: WikiSection
  augmentFilters: AugmentFilters
  openFilterMenu: AugmentFilterMenu | null
  resultCount: number
  totalCount: number
  onFilterMenuChange: (menu: AugmentFilterMenu | null) => void
  onTierToggle: (tier: AugmentTier) => void
  onTagToggle: (tag: string) => void
  onLevelToggle: (levelFilter: AugmentLevelFilter) => void
  onClear: () => void
}) {
  if (section !== 'Augments') {
    return null
  }

  return (
    <AugmentFilterBar
      filters={augmentFilters}
      openMenu={openFilterMenu}
      resultCount={resultCount}
      totalCount={totalCount}
      onMenuChange={onFilterMenuChange}
      onTierToggle={onTierToggle}
      onTagToggle={onTagToggle}
      onLevelToggle={onLevelToggle}
      onClear={onClear}
    />
  )
}

function AugmentFilterBar({
  filters,
  openMenu,
  resultCount,
  totalCount,
  onMenuChange,
  onTierToggle,
  onTagToggle,
  onLevelToggle,
  onClear,
}: {
  filters: AugmentFilters
  openMenu: AugmentFilterMenu | null
  resultCount: number
  totalCount: number
  onMenuChange: (menu: AugmentFilterMenu | null) => void
  onTierToggle: (tier: AugmentTier) => void
  onTagToggle: (tag: string) => void
  onLevelToggle: (levelFilter: AugmentLevelFilter) => void
  onClear: () => void
}) {
  const activeFilterCount = filters.tiers.length + filters.tags.length + filters.levels.length

  return (
    <div className="wiki-filter-bar" aria-label="Augment filters">
      <FilterMenuButton
        id="tier"
        label="Tier"
        valueLabel={formatFilterButtonValue(filters.tiers)}
        isOpen={openMenu === 'tier'}
        isActive={filters.tiers.length > 0}
        onMenuChange={onMenuChange}
      >
        {AUGMENT_TIERS.map((tier) => (
          <FilterOption key={tier} isSelected={filters.tiers.includes(tier)} onClick={() => onTierToggle(tier)}>
            {tier}
          </FilterOption>
        ))}
      </FilterMenuButton>

      <FilterMenuButton
        id="type"
        label="Type"
        valueLabel={formatFilterButtonValue(filters.tags.map(formatTag))}
        isOpen={openMenu === 'type'}
        isActive={filters.tags.length > 0}
        onMenuChange={onMenuChange}
      >
        {AUGMENT_TAG_OPTIONS.map((tag) => (
          <FilterOption key={tag} isSelected={filters.tags.includes(tag)} onClick={() => onTagToggle(tag)}>
            {formatTag(tag)}
          </FilterOption>
        ))}
      </FilterMenuButton>

      <FilterMenuButton
        id="levels"
        label="Levels"
        valueLabel={formatFilterButtonValue(
          AUGMENT_LEVEL_FILTERS.filter((option) => filters.levels.includes(option.value)).map((option) => option.label),
        )}
        isOpen={openMenu === 'levels'}
        isActive={filters.levels.length > 0}
        onMenuChange={onMenuChange}
      >
        {AUGMENT_LEVEL_FILTERS.map((option) => (
          <FilterOption
            key={option.value}
            isSelected={filters.levels.includes(option.value)}
            onClick={() => onLevelToggle(option.value)}
          >
            {option.label}
          </FilterOption>
        ))}
      </FilterMenuButton>

      <button
        type="button"
        className="wiki-filter-clear"
        disabled={activeFilterCount === 0}
        onClick={onClear}
        aria-label="Clear augment filters"
      >
        Clear
      </button>

      <span className="wiki-filter-count" aria-live="polite">
        {resultCount}/{totalCount}
      </span>
    </div>
  )
}

function FilterMenuButton({
  id,
  label,
  valueLabel,
  isOpen,
  isActive,
  onMenuChange,
  children,
}: {
  id: AugmentFilterMenu
  label: string
  valueLabel: string
  isOpen: boolean
  isActive: boolean
  onMenuChange: (menu: AugmentFilterMenu | null) => void
  children: ReactNode
}) {
  return (
    <div className="wiki-filter-menu">
      <button
        type="button"
        className={`wiki-filter-button${isActive ? ' is-active' : ''}`}
        aria-expanded={isOpen}
        onClick={() => onMenuChange(isOpen ? null : id)}
      >
        <span>{label}</span>
        <strong>{valueLabel}</strong>
      </button>

      {isOpen ? <div className="wiki-filter-popup">{children}</div> : null}
    </div>
  )
}

function FilterOption({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button type="button" className={`wiki-filter-option${isSelected ? ' is-selected' : ''}`} onClick={onClick}>
      <span className="wiki-filter-check" aria-hidden="true" />
      <span>{children}</span>
    </button>
  )
}

function AugmentRow({
  augment,
  isExpanded,
  onToggle,
}: {
  augment: Augment
  isExpanded: boolean
  onToggle: () => void
}) {
  const hasLevels = augment.levels.length > 0
  const hasNotes = augment.notes !== null
  const referenceGroups = [
    { label: 'Augments', values: augment.references.augments },
    { label: 'Champions', values: augment.references.champions },
    { label: 'Items', values: augment.references.items },
    { label: 'Runes', values: augment.references.runes },
  ].filter((group) => group.values.length > 0)

  return (
    <article
      className={`wiki-augment-row wiki-tier-${getTierClass(augment.tier)}${isExpanded ? ' is-expanded' : ''}`}
      aria-label={`${augment.name}, ${augment.tier} augment`}
    >
      <button
        type="button"
        className={`wiki-augment-summary${hasLevels ? ' has-levels' : ''}${hasNotes ? ' has-notes' : ''}`}
        aria-expanded={isExpanded}
        onClick={onToggle}
      >
        <span className="wiki-augment-heading">
          <span className="wiki-augment-title-group">
            <span className="wiki-augment-title">{augment.name}</span>
          </span>
        </span>

        <span className="wiki-augment-body">
          <span className="wiki-copy wiki-augment-description">{augment.description.text}</span>
        </span>

        {hasLevels || hasNotes ? (
          <span className="wiki-augment-flags" aria-label="Additional augment details">
            {hasNotes ? <span className="wiki-augment-flag">Notes</span> : null}
            {hasLevels ? <span className="wiki-augment-flag">Levels</span> : null}
          </span>
        ) : null}
      </button>

      {isExpanded ? (
        <div className="wiki-augment-expanded">
          <section className="wiki-detail-section">
            <h3 className="wiki-section-title">Effect</h3>
            <p className="wiki-copy">{augment.description.text}</p>
          </section>

          {augment.levels.length > 0 ? (
            <section className="wiki-detail-section wiki-level-section" aria-label="Augment levels">
              <div className="wiki-level-table">
                {augment.levels.map((level) => (
                  <div key={level.level} className="wiki-level-row">
                    <span className="wiki-level-marker">Level {level.level}</span>
                    <p className="wiki-copy wiki-level-copy">{level.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {augment.notes ? (
            <section className="wiki-detail-section">
              <h3 className="wiki-section-title">Notes</h3>
              <p className="wiki-copy">{augment.notes.text}</p>
            </section>
          ) : null}

          {referenceGroups.length > 0 ? (
            <section className="wiki-detail-section wiki-reference-section" aria-label="References">
              <div className="wiki-reference-table">
                {referenceGroups.map((group) => (
                  <div key={group.label} className="wiki-reference-row">
                    <span className="wiki-section-title wiki-reference-label">{group.label}</span>
                    <div className="wiki-reference-strip">
                      {group.values.map((value) => (
                        <span key={value} className="wiki-reference-cell">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {augment.tags.length > 0 ? (
            <section className="wiki-detail-section wiki-tags-section">
              <span className="wiki-section-title wiki-tags-label">Tags</span>
              <div className="wiki-tag-strip" aria-label="Augment tags">
                {augment.tags.map((tag) => (
                  <span key={tag} className="wiki-tag-cell">
                    {formatTag(tag)}
                  </span>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

function matchesAugmentSearch(augment: Augment, normalizedSearchQuery: string) {
  return [
    augment.name,
    augment.id,
    augment.tier,
    augment.description.text,
    augment.notes?.text ?? '',
    ...augment.levels.map((level) => level.text),
    ...augment.tags,
    ...augment.references.augments,
    ...augment.references.champions,
    ...augment.references.items,
    ...augment.references.runes,
  ].some((value) => normalizeSearchValue(value).includes(normalizedSearchQuery))
}

function matchesAugmentFilters(augment: Augment, filters: AugmentFilters) {
  if (filters.tiers.length > 0 && !filters.tiers.includes(augment.tier)) {
    return false
  }

  if (filters.tags.length > 0 && !filters.tags.some((tag) => augment.tags.includes(tag))) {
    return false
  }

  if (filters.levels.length > 0 && filters.levels.length < AUGMENT_LEVEL_FILTERS.length) {
    const levelFilter = augment.levels.length > 0 ? 'with-levels' : 'without-levels'

    if (!filters.levels.includes(levelFilter)) {
      return false
    }
  }

  return true
}

function toggleFilterValue<T extends string>(values: T[], value: T) {
  return values.includes(value) ? values.filter((existingValue) => existingValue !== value) : [...values, value]
}

function formatFilterButtonValue(values: string[]) {
  if (values.length === 0) {
    return 'Any'
  }

  if (values.length === 1) {
    return values[0]
  }

  return `${values.length} selected`
}

function getTierClass(tier: AugmentTier) {
  return tier.toLowerCase()
}

function formatTag(tag: string) {
  return tag.replace(/-/g, ' ')
}

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase()
}
