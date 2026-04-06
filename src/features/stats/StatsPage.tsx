import type { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useAuthSession } from '../auth/useAuthSession'
import { AccountMenuButton } from '../auth/components/AccountMenuButton'
import { SiteSectionNav } from '../navigation/SiteSectionNav'
import {
  DOWNVOTE_REASON_OPTIONS,
  getVoteReasonLabel,
  type VoteDirection,
  type VoteReason,
  UNSPECIFIED_VOTE_REASON,
  UPVOTE_REASON_OPTIONS,
} from '../votes/types'
import { type MyVoteStats, type PlayerVoteStats, useMyVoteStats } from './useMyVoteStats'

const AGGREGATE_KEY = '__aggregate__'

type ChartRowData = {
  reason: VoteReason
  label: string
  direction: VoteDirection
  count: number
}

type SelectedView = {
  positiveRows: ChartRowData[]
  negativeRows: ChartRowData[]
  maxPositiveCount: number
  maxNegativeCount: number
}

export function StatsPage() {
  const auth = useAuthSession()
  const [selectedKey, setSelectedKey] = useState(AGGREGATE_KEY)
  const [searchQuery, setSearchQuery] = useState('')
  const railListRef = useRef<HTMLDivElement | null>(null)
  const railScrollbarRef = useRef<HTMLDivElement | null>(null)
  const railScrollbarThumbRef = useRef<HTMLSpanElement | null>(null)
  const { stats, isLoading, errorMessage } = useMyVoteStats({
    userId: auth.session?.user.id ?? null,
  })
  const normalizedSearchQuery = normalizeSearchValue(searchQuery)
  const filteredPlayers = normalizedSearchQuery
    ? stats.players.filter((player) => matchesPlayerSearch(player, normalizedSearchQuery))
    : stats.players
  const barMessages = [
    auth.isSyncingProfile ? { text: 'Refreshing your Discord connections.', tone: 'muted' } : null,
    auth.errorMessage ? { text: auth.errorMessage, tone: 'error' } : null,
  ].filter((message) => message !== null)
  const selectedPlayer = filteredPlayers.find((player) => player.playerKey === selectedKey)
    ?? (normalizedSearchQuery ? filteredPlayers[0] ?? null : stats.players.find((player) => player.playerKey === selectedKey) ?? null)
  const selectedView = selectedPlayer
    ? buildPlayerView(selectedPlayer)
    : normalizedSearchQuery
      ? null
      : buildAggregateView(stats)
  const isAggregateSelected = !normalizedSearchQuery && selectedPlayer === null
  const isSearchDisabled = !auth.session || isLoading || stats.totalVotes === 0
  const searchPlaceholder = !auth.isConfigured
    ? 'Add Supabase environment variables to enable sign-in'
    : !auth.session
      ? 'Sign in with Discord to search your stats'
      : stats.totalVotes === 0
        ? 'Vote on players from Live Game to unlock stats search'
        : 'Search players you voted on'

  useEffect(() => {
    const railList = railListRef.current
    const railScrollbar = railScrollbarRef.current
    const railScrollbarThumb = railScrollbarThumbRef.current

    if (!railList || !railScrollbar || !railScrollbarThumb) {
      return
    }

    let frameId = 0

    const updateScrollbarThumb = () => {
      const { clientHeight, scrollHeight, scrollTop } = railList
      const isScrollable = scrollHeight > clientHeight + 1

      railScrollbar.dataset.visible = isScrollable ? 'true' : 'false'

      if (!isScrollable) {
        railScrollbarThumb.style.height = '0px'
        railScrollbarThumb.style.transform = 'translateY(0px)'
        return
      }

      const thumbHeight = Math.max(48, (clientHeight / scrollHeight) * clientHeight)
      const maxScrollTop = scrollHeight - clientHeight
      const maxThumbOffset = clientHeight - thumbHeight
      const thumbOffset = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbOffset : 0

      railScrollbarThumb.style.height = `${thumbHeight}px`
      railScrollbarThumb.style.transform = `translateY(${thumbOffset}px)`
    }

    const scheduleScrollbarThumbUpdate = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateScrollbarThumb)
    }

    scheduleScrollbarThumbUpdate()
    railList.addEventListener('scroll', scheduleScrollbarThumbUpdate, { passive: true })
    window.addEventListener('resize', scheduleScrollbarThumbUpdate)

    return () => {
      cancelAnimationFrame(frameId)
      railList.removeEventListener('scroll', scheduleScrollbarThumbUpdate)
      window.removeEventListener('resize', scheduleScrollbarThumbUpdate)
    }
  }, [filteredPlayers.length, normalizedSearchQuery, stats.totalPlayers])

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSearchDisabled) {
      return
    }

    if (!normalizedSearchQuery) {
      setSelectedKey(AGGREGATE_KEY)
      return
    }

    const exactMatch = filteredPlayers.find((player) => isExactPlayerMatch(player, normalizedSearchQuery))
    const nextSelectedPlayer = exactMatch ?? filteredPlayers[0] ?? null

    if (nextSelectedPlayer) {
      setSelectedKey(nextSelectedPlayer.playerKey)
    }
  }

  return (
    <main className="page-shell has-output">
      <section className="everything-stage">
        <form className="everything-bar" onSubmit={handleSearchSubmit}>
          <SiteSectionNav activeSection="stats" />
          <input
            className="everything-search-input"
            aria-label="Search voted players"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={searchPlaceholder}
            autoComplete="off"
            disabled={isSearchDisabled}
          />
          <button
            type="submit"
            className="everything-search-button"
            disabled={isSearchDisabled}
            aria-label="Search voted players"
            title="Search voted players"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M5 12h12m-5-5 5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <AccountMenuButton
            isConfigured={auth.isConfigured}
            isAuthLoading={auth.isLoading}
            isSignedIn={Boolean(auth.session)}
            isSyncingProfile={auth.isSyncingProfile}
            profile={auth.profile}
            onSignIn={auth.signIn}
            onSignOut={auth.signOut}
          />
        </form>

        {barMessages.length > 0 ? (
          <div className="bar-messages">
            {barMessages.map((message) => (
              <p key={message.text} className={`bar-message ${message.tone === 'error' ? 'is-error' : ''}`}>
                {message.text}
              </p>
            ))}
          </div>
        ) : null}
      </section>

      {!auth.isConfigured ? (
        <p className="status-text">Add Supabase environment variables to enable sign-in and stats.</p>
      ) : !auth.session ? (
        <p className="status-text">Sign in with Discord to see the players you have voted on.</p>
      ) : isLoading ? (
        <p className="status-text">Loading your stats...</p>
      ) : errorMessage ? (
        <p className="status-text error">{errorMessage}</p>
      ) : stats.totalVotes === 0 ? (
        <p className="status-text">No votes yet. Vote on players from Live Game and they will start showing up here.</p>
      ) : (
        <section className="stats-board" aria-label="Vote stats board">
          <aside className="stats-rail" aria-label="Players you voted on">
            <div className="stats-rail-list-shell">
              <div ref={railListRef} className="stats-rail-list">
                {!normalizedSearchQuery ? (
                  <button
                    type="button"
                    className={`stats-rail-item${isAggregateSelected ? ' is-active' : ''}`}
                    onClick={() => setSelectedKey(AGGREGATE_KEY)}
                  >
                    <span className="stats-rail-item-main">
                      <span className="stats-rail-item-title">All votes</span>
                      <span className="stats-rail-item-meta">{stats.totalPlayers} players combined</span>
                    </span>
                    <span className="stats-rail-item-totals">
                      <span className="stats-rail-up">{stats.totalUp}</span>
                      <span className="stats-rail-divider">/</span>
                      <span className="stats-rail-down">{stats.totalDown}</span>
                    </span>
                  </button>
                ) : null}

                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map((player) => (
                    <button
                      key={player.playerKey}
                      type="button"
                      className={`stats-rail-item${selectedPlayer?.playerKey === player.playerKey ? ' is-active' : ''}`}
                      onClick={() => setSelectedKey(player.playerKey)}
                    >
                      <span className="stats-rail-item-main">
                        <span className="stats-rail-item-title">{player.displayName}</span>
                        <span className="stats-rail-item-meta">{player.totalGames} games voted</span>
                      </span>
                      <span className="stats-rail-item-totals">
                        <span className="stats-rail-up">{player.totalUp}</span>
                        <span className="stats-rail-divider">/</span>
                        <span className="stats-rail-down">{player.totalDown}</span>
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="stats-panel-empty">No voted players match that search.</p>
                )}
              </div>
              <div ref={railScrollbarRef} className="stats-rail-scrollbar" data-visible="false" aria-hidden="true">
                <span ref={railScrollbarThumbRef} className="stats-rail-scrollbar-thumb" />
              </div>
            </div>
          </aside>

          <section className="stats-chart-panel" aria-label="Vote breakdown charts">
            {selectedView ? (
              <>
                <div className="stats-chart-halves">
                  <section className="stats-chart-half stats-chart-half-up" aria-label="Positive votes by type">
                    <div className="stats-chart-rows">
                      {selectedView.positiveRows.map((row) => (
                        <ChartRow key={`up:${row.reason}`} row={row} maxCount={selectedView.maxPositiveCount} />
                      ))}
                    </div>
                  </section>

                  <section className="stats-chart-half stats-chart-half-down" aria-label="Negative votes by type">
                    <div className="stats-chart-rows">
                      {selectedView.negativeRows.map((row) => (
                        <ChartRow key={`down:${row.reason}`} row={row} maxCount={selectedView.maxNegativeCount} />
                      ))}
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <div className="stats-panel-empty stats-chart-empty">No vote breakdowns match that search.</div>
            )}
          </section>
        </section>
      )}
    </main>
  )
}

function ChartRow({ row, maxCount }: { row: ChartRowData; maxCount: number }) {
  const fillPercent = maxCount > 0 ? `${(row.count / maxCount) * 100}%` : '0%'

  return (
    <div className={`stats-chart-row stats-chart-row-${row.direction}`}>
      <span className="stats-chart-row-label">{row.label}</span>
      <div className="stats-chart-row-bar" aria-hidden="true">
        <span className="stats-chart-row-fill" style={{ width: fillPercent }} />
      </div>
      <span className="stats-chart-row-count">{row.count}</span>
    </div>
  )
}

function buildAggregateView(stats: MyVoteStats): SelectedView {
  const aggregateCounts = new Map<string, number>()

  for (const player of stats.players) {
    for (const reason of player.reasonBreakdown) {
      const key = `${reason.direction}:${reason.reason}`
      aggregateCounts.set(key, (aggregateCounts.get(key) ?? 0) + reason.count)
    }
  }

  const positiveRows = buildChartRows('up', aggregateCounts)
  const negativeRows = buildChartRows('down', aggregateCounts)

  return {
    positiveRows,
    negativeRows,
    maxPositiveCount: getMaxCount(positiveRows),
    maxNegativeCount: getMaxCount(negativeRows),
  }
}

function buildPlayerView(player: PlayerVoteStats): SelectedView {
  const playerCounts = new Map<string, number>()

  for (const reason of player.reasonBreakdown) {
    playerCounts.set(`${reason.direction}:${reason.reason}`, reason.count)
  }

  const positiveRows = buildChartRows('up', playerCounts)
  const negativeRows = buildChartRows('down', playerCounts)

  return {
    positiveRows,
    negativeRows,
    maxPositiveCount: getMaxCount(positiveRows),
    maxNegativeCount: getMaxCount(negativeRows),
  }
}

function matchesPlayerSearch(player: PlayerVoteStats, normalizedSearchQuery: string) {
  return [player.displayName, player.gameName, player.tagLine, player.playerKey].some((value) =>
    normalizeSearchValue(value).includes(normalizedSearchQuery),
  )
}

function isExactPlayerMatch(player: PlayerVoteStats, normalizedSearchQuery: string) {
  return [player.displayName, player.playerKey].some((value) => normalizeSearchValue(value) === normalizedSearchQuery)
}

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase()
}

function buildChartRows(direction: VoteDirection, counts: Map<string, number>): ChartRowData[] {
  const reasonOptions = direction === 'up' ? UPVOTE_REASON_OPTIONS : DOWNVOTE_REASON_OPTIONS
  const rows: ChartRowData[] = reasonOptions.map((option) => ({
    reason: option.value,
    label: option.label,
    direction,
    count: counts.get(`${direction}:${option.value}`) ?? 0,
  }))

  rows.push({
    reason: UNSPECIFIED_VOTE_REASON,
    label: 'No reason',
    direction,
    count: counts.get(`${direction}:${UNSPECIFIED_VOTE_REASON}`) ?? 0,
  })

  return rows
}

function getMaxCount(rows: ChartRowData[]) {
  return rows.reduce((maxCount, row) => Math.max(maxCount, row.count), 0)
}
