import { createFileRoute } from '@tanstack/react-router'
import type { CSSProperties, FormEvent } from 'react'
import { useEffect, useState } from 'react'

const LOOKUP_URL = 'https://618arena-backend-production.up.railway.app/lookup'
const DEFAULT_QUERY = 'TON618#4337'
const PLAYER_GAME_VOTE_CACHE_KEY = '618arena-player-game-votes'
const RIOT_OUTAGE_RETRY_SECONDS = 15
const RIOT_OUTAGE_MESSAGE = 'Riot servers shit themselves. Try again in a bit.'

type VoteDirection = 'up' | 'down'

type PlayerVoteCounts = {
  up: number
  down: number
}

type PlayerVoteCache = Record<string, PlayerVoteCounts>

type PlayerGameVoteState = {
  direction: VoteDirection | null
}

type PlayerGameVoteCache = Record<string, Record<string, PlayerGameVoteState>>

type PlayerRow = {
  id: string
  riotId: string
  gameName: string
  tagLine: string
  championName: string
  championIcon: string
  arenaRank: number
  isSearchedPlayer: boolean
}

type LiveLookup = {
  status: 'live'
  lookup: string
  gameId: number
  queueLabel: string
  players: PlayerRow[]
}

type OfflineLookup = {
  status: 'offline'
  lookup: string
  message: string
}

type ErrorLookup = {
  status: 'error'
  lookup: string
  message: string
  source: 'generic' | 'riot-outage'
}

type LookupResult = LiveLookup | OfflineLookup | ErrorLookup

type BackendOkResponse = {
  status: 'ok'
  player: {
    gameName: string
    tagLine: string
    puuid: string
  }
  match: {
    gameId: number
    gameMode: string
    gameType: string
    queueId: number
  }
  players: Array<{
    riotId: string
    gameName: string
    tagLine: string
    championId: number
    championName: string
    championIcon: string
    playerRank: number
  }>
}

type BackendNotInMatchResponse = {
  status: 'not_in_match'
  player: {
    gameName: string
    tagLine: string
    puuid: string
  }
}

type BackendLookupResponse = BackendOkResponse | BackendNotInMatchResponse

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const [result, setResult] = useState<LookupResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [playerGameVotes, setPlayerGameVotes] = useState<PlayerGameVoteCache>({})
  const [retryCooldownSeconds, setRetryCooldownSeconds] = useState(0)

  useEffect(() => {
    if (retryCooldownSeconds <= 0) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setRetryCooldownSeconds((currentSeconds) => Math.max(currentSeconds - 1, 0))
    }, 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [retryCooldownSeconds])

  useEffect(() => {
    setPlayerGameVotes(loadPlayerGameVoteCache())
  }, [])

  const hasOutput = isLoading || result !== null
  const liveResult = result?.status === 'live' ? result : null
  const rowCount = liveResult ? Math.ceil(liveResult.players.length / 2) : 0
  const rankWidths = liveResult ? getRankWidths(liveResult.players, rowCount) : null
  const playerVotes = buildPlayerVoteCache(playerGameVotes)
  const isRetryLocked = retryCooldownSeconds > 0
  const isSubmitDisabled = isLoading || isRetryLocked
  const errorMessage =
    result?.status === 'error'
      ? result.source === 'riot-outage' && isRetryLocked
        ? `${RIOT_OUTAGE_MESSAGE} Try again in ${retryCooldownSeconds}s.`
        : result.message
      : null
  const playerGridStyle =
    liveResult && rankWidths
      ? ({
          gridTemplateRows: `repeat(${rowCount}, auto)`,
          gridAutoFlow: 'column',
          '--player-rank-width-mobile': rankWidths.mobile,
        } as CSSProperties)
      : undefined

  const handleVote = (player: PlayerRow, gameId: number, direction: VoteDirection) => {
    if (player.isSearchedPlayer) {
      return
    }

    const gameKey = String(gameId)
    const playerKey = getPlayerVoteKey(player)

    setPlayerGameVotes((currentGameVotes) => {
      const currentDirection = currentGameVotes[gameKey]?.[playerKey]?.direction ?? null
      const nextDirection = currentDirection === direction ? null : direction

      const nextGameVotes = {
        ...currentGameVotes,
        [gameKey]: {
          ...currentGameVotes[gameKey],
          [playerKey]: {
            direction: nextDirection,
          },
        },
      }

      savePlayerGameVoteCache(nextGameVotes)

      return nextGameVotes
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isLoading || isRetryLocked) {
      return
    }

    const parsed = parseRiotId(query)

    if (!parsed) {
      setInputMessage('you may have forget the tagline (values after the #)')
      setResult({
        status: 'error',
        lookup: query.trim() || DEFAULT_QUERY,
        message: 'Use the format GameName#TagLine.',
        source: 'generic',
      })
      return
    }

    const lookup = `${parsed.gameName}#${parsed.tagLine}`
    setInputMessage('')
    setQuery(lookup)
    setIsLoading(true)

    try {
      const response = await fetch(LOOKUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed),
      })

      const rawResponseText = await response.text()
      const payload = parseLookupPayload(rawResponseText) as
        | BackendLookupResponse
        | { message?: string; status?: string }
        | null
      const payloadMessage = getLookupPayloadMessage(payload)

      if (!response.ok) {
        if (isRiotServiceOutage(response.status, payloadMessage, rawResponseText)) {
          setRetryCooldownSeconds(RIOT_OUTAGE_RETRY_SECONDS)
          setResult({
            status: 'error',
            lookup,
            message: RIOT_OUTAGE_MESSAGE,
            source: 'riot-outage',
          })
          return
        }

        throw new Error(payloadMessage ?? `Lookup failed with status ${response.status}.`)
      }

      if (isBackendOkResponse(payload)) {
        setResult(mapBackendSuccess(payload))
        return
      }

      if (payload?.status === 'not_in_match') {
        setResult({
          status: 'offline',
          lookup,
          message: 'This player is not currently in an Arena game.',
        })
        return
      }

      throw new Error(payloadMessage ?? 'Backend returned an unexpected response.')
    } catch (error) {
      setResult({
        status: 'error',
        lookup,
        message: getErrorMessage(error),
        source: 'generic',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={`page-shell${hasOutput ? ' has-output' : ''}`}>
      <section className="search-stage">
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            aria-label="Riot ID"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)

              if (inputMessage && event.target.value.includes('#')) {
                setInputMessage('')
              }
            }}
            placeholder={DEFAULT_QUERY}
            autoComplete="off"
          />
          <button
            type="submit"
            className={isLoading ? 'is-loading' : undefined}
            disabled={isSubmitDisabled}
            aria-label={
              isRetryLocked
                ? `Search unavailable for ${retryCooldownSeconds} more seconds.`
                : undefined
            }
            title={
              isRetryLocked ? `Search unavailable for ${retryCooldownSeconds} more seconds.` : undefined
            }
          >
            {isLoading ? (
              <span className="loading-dots" aria-label="Loading">
                <span />
                <span />
                <span />
              </span>
            ) : isRetryLocked ? (
              <span>{retryCooldownSeconds}s</span>
            ) : (
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
            )}
          </button>
        </form>

        {inputMessage ? <p className="input-message">{inputMessage}</p> : null}
      </section>

      {liveResult ? (
        <section className="results-block">
          <div className="players-grid" style={playerGridStyle}>
            {liveResult.players.map((player, index) => {
              const playerColumn = getPlayerColumn(index, rowCount)
              const voteCounts = playerVotes[getPlayerVoteKey(player)] ?? { up: 0, down: 0 }
              const currentVoteDirection =
                playerGameVotes[String(liveResult.gameId)]?.[getPlayerVoteKey(player)]?.direction ?? null
              const isVoteDisabled = player.isSearchedPlayer
              const upVoteLabel = getVoteButtonLabel(player, 'up', currentVoteDirection, voteCounts, isVoteDisabled)
              const downVoteLabel = getVoteButtonLabel(
                player,
                'down',
                currentVoteDirection,
                voteCounts,
                isVoteDisabled,
              )
              const upVoteTitle = getVoteButtonTitle(player, 'up', currentVoteDirection, isVoteDisabled)
              const downVoteTitle = getVoteButtonTitle(player, 'down', currentVoteDirection, isVoteDisabled)

              return (
                <article
                  className={`player-tile${player.isSearchedPlayer ? ' searched' : ''}`}
                  key={player.id}
                  style={{ '--player-rank-width': rankWidths![playerColumn] } as CSSProperties}
                >
                  <div className="player-main">
                    <img
                      className="champion-icon"
                      src={player.championIcon}
                      alt={player.championName}
                      title={player.championName}
                      loading="lazy"
                    />
                    <a
                      className="player-name"
                      href={buildOpggUrl(player)}
                      target="_blank"
                      rel="noreferrer"
                      title={`${player.gameName}#${player.tagLine}`}
                    >
                      {player.gameName}#{player.tagLine}
                    </a>
                  </div>
                  <div className="player-side">
                    <button
                      type="button"
                      className={`player-vote player-vote-up${currentVoteDirection === 'up' ? ' is-active' : ''}`}
                      onClick={() => handleVote(player, liveResult.gameId, 'up')}
                      disabled={isVoteDisabled}
                      aria-pressed={currentVoteDirection === 'up'}
                      aria-label={upVoteLabel}
                      title={upVoteTitle}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path
                          d="M12 17V7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M7.5 11.5 12 7l4.5 4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                      <span>{voteCounts.up}</span>
                    </button>
                    <button
                      type="button"
                      className={`player-vote player-vote-down${currentVoteDirection === 'down' ? ' is-active' : ''}`}
                      onClick={() => handleVote(player, liveResult.gameId, 'down')}
                      disabled={isVoteDisabled}
                      aria-pressed={currentVoteDirection === 'down'}
                      aria-label={downVoteLabel}
                      title={downVoteTitle}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path
                          d="M12 7v10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M7.5 12.5 12 17l4.5-4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                      <span>{voteCounts.down}</span>
                    </button>
                    <a
                      className="player-rank player-rank-link"
                      href={buildArenaSweatsUrl(player)}
                      target="_blank"
                      rel="noreferrer"
                      title={`Open ${player.gameName}-${player.tagLine} on ArenaSweats`}
                      aria-label={`Open ${player.gameName}-${player.tagLine} on ArenaSweats`}
                    >
                      #{player.arenaRank}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ) : null}

      {result?.status === 'offline' ? (
        <p className="status-text">{result.message}</p>
      ) : null}

      {errorMessage ? <p className="status-text error">{errorMessage}</p> : null}
    </main>
  )
}

function parseRiotId(value: string) {
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

function mapBackendSuccess(payload: BackendOkResponse): LiveLookup {
  const target = `${payload.player.gameName}#${payload.player.tagLine}`.toLowerCase()
  const sortedPlayers = [...payload.players].sort((left, right) => {
    const leftIsTarget = `${left.gameName}#${left.tagLine}`.toLowerCase() === target
    const rightIsTarget = `${right.gameName}#${right.tagLine}`.toLowerCase() === target

    if (leftIsTarget && !rightIsTarget) return -1
    if (!leftIsTarget && rightIsTarget) return 1

    return left.playerRank - right.playerRank
  })

  return {
    status: 'live',
    lookup: `${payload.player.gameName}#${payload.player.tagLine}`,
    gameId: payload.match.gameId,
    queueLabel: formatQueueLabel(payload.match.gameMode, payload.match.queueId),
    players: sortedPlayers.map((player, index) => ({
      id: `${player.riotId}-${index}`,
      riotId: player.riotId,
      gameName: player.gameName,
      tagLine: player.tagLine,
      championName: player.championName,
      championIcon: player.championIcon,
      arenaRank: player.playerRank,
      isSearchedPlayer: `${player.gameName}#${player.tagLine}`.toLowerCase() === target,
    })),
  }
}

function formatQueueLabel(gameMode: string, queueId: number) {
  if (gameMode === 'CHERRY' || queueId === 1700) {
    return 'Arena'
  }

  return `${gameMode} / ${queueId}`
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'Something went wrong while talking to the backend.'
}

function parseLookupPayload(rawResponseText: string) {
  if (!rawResponseText) {
    return null
  }

  try {
    return JSON.parse(rawResponseText) as BackendLookupResponse | { message?: string; status?: string }
  } catch {
    return null
  }
}

function isRiotServiceOutage(status: number, payloadMessage: string | null, rawResponseText: string) {
  const errorText = `${payloadMessage ?? ''}\n${rawResponseText}`.toLowerCase()

  if (status !== 502 && !errorText.includes('error code 502') && !errorText.includes('bad gateway')) {
    return false
  }

  return (
    errorText.includes('api.riotgames.com') ||
    errorText.includes('cloudflare') ||
    errorText.includes('<!doctype html') ||
    errorText.includes('bad gateway')
  )
}

function getLookupPayloadMessage(
  payload: BackendLookupResponse | { message?: string; status?: string } | null,
) {
  return payload && 'message' in payload && typeof payload.message === 'string' ? payload.message : null
}

function isBackendOkResponse(
  payload: BackendLookupResponse | { message?: string; status?: string } | null,
): payload is BackendOkResponse {
  return !!payload && payload.status === 'ok' && 'player' in payload && 'match' in payload && 'players' in payload
}

function buildOpggUrl(player: PlayerRow) {
  return `https://op.gg/lol/summoners/na/${encodeURIComponent(player.gameName)}-${encodeURIComponent(player.tagLine)}`
}

function buildArenaSweatsUrl(player: PlayerRow) {
  return `https://arenasweats.lol/na/${encodeURIComponent(player.gameName)}-${encodeURIComponent(player.tagLine)}/`
}

function getPlayerVoteKey(player: PlayerRow) {
  return player.riotId.toLowerCase()
}

function getPlayerColumn(index: number, rowCount: number) {
  if (rowCount <= 0) {
    return 0
  }

  return index < rowCount ? 0 : 1
}

function getRankWidths(players: PlayerRow[], rowCount: number) {
  const columnDigits = [1, 1]

  players.forEach((player, index) => {
    const column = getPlayerColumn(index, rowCount)
    const digits = String(Math.abs(player.arenaRank)).length

    columnDigits[column] = Math.max(columnDigits[column], digits)
  })

  return {
    0: buildRankWidth(columnDigits[0]),
    1: buildRankWidth(columnDigits[1]),
    mobile: buildRankWidth(Math.max(columnDigits[0], columnDigits[1])),
  }
}

function buildRankWidth(digits: number) {
  return `calc(${digits + 1}ch + 34px)`
}

function loadPlayerGameVoteCache(): PlayerGameVoteCache {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const rawValue = window.localStorage.getItem(PLAYER_GAME_VOTE_CACHE_KEY)

    if (!rawValue) {
      return {}
    }

    const parsed = JSON.parse(rawValue) as Record<string, Record<string, unknown>>

    return Object.fromEntries(
      Object.entries(parsed).map(([gameKey, players]) => [
        gameKey,
        Object.fromEntries(
          Object.entries(players).map(([playerKey, voteState]) => [
            playerKey,
            normalizeGameVoteState(voteState),
          ]),
        ),
      ]),
    )
  } catch {
    return {}
  }
}

function savePlayerGameVoteCache(votes: PlayerGameVoteCache) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(PLAYER_GAME_VOTE_CACHE_KEY, JSON.stringify(votes))
}

function normalizeGameVoteFlag(value: unknown) {
  return value === true
}

function normalizeGameVoteState(value: unknown): PlayerGameVoteState {
  if (!value || typeof value !== 'object') {
    return { direction: null }
  }

  const voteState = value as {
    direction?: unknown
    up?: unknown
    down?: unknown
  }

  if (voteState.direction === 'up' || voteState.direction === 'down') {
    return { direction: voteState.direction }
  }

  if (normalizeGameVoteFlag(voteState.down)) {
    return { direction: 'down' }
  }

  if (normalizeGameVoteFlag(voteState.up)) {
    return { direction: 'up' }
  }

  return { direction: null }
}

function getVoteButtonLabel(
  player: PlayerRow,
  direction: VoteDirection,
  currentDirection: VoteDirection | null,
  voteCounts: PlayerVoteCounts,
  isDisabled: boolean,
) {
  const riotId = `${player.gameName}#${player.tagLine}`
  const voteCount = voteCounts[direction]

  if (isDisabled) {
    return `You cannot vote on ${riotId}.`
  }

  if (currentDirection === direction) {
    return `Remove your ${direction}vote from ${riotId}. Total ${direction}votes ${voteCount}`
  }

  if (currentDirection) {
    return `Switch vote for ${riotId} to ${getVoteArticle(direction)} ${direction}vote. Current ${direction}votes ${voteCount}`
  }

  return `${capitalizeVoteDirection(direction)}vote ${riotId}. Current ${direction}votes ${voteCount}`
}

function getVoteButtonTitle(
  player: PlayerRow,
  direction: VoteDirection,
  currentDirection: VoteDirection | null,
  isDisabled: boolean,
) {
  const riotId = `${player.gameName}#${player.tagLine}`

  if (isDisabled) {
    return `You cannot vote on ${riotId}`
  }

  if (currentDirection === direction) {
    return `Remove your ${direction}vote from ${riotId}`
  }

  if (currentDirection) {
    return `Switch ${riotId} to ${getVoteArticle(direction)} ${direction}vote`
  }

  return `${capitalizeVoteDirection(direction)}vote ${riotId}`
}

function capitalizeVoteDirection(direction: VoteDirection) {
  return direction[0].toUpperCase() + direction.slice(1)
}

function getVoteArticle(direction: VoteDirection) {
  return direction === 'up' ? 'an' : 'a'
}

function buildPlayerVoteCache(gameVotes: PlayerGameVoteCache): PlayerVoteCache {
  const voteCounts: PlayerVoteCache = {}

  Object.values(gameVotes).forEach((players) => {
    Object.entries(players).forEach(([playerKey, voteState]) => {
      if (voteState.direction !== 'up' && voteState.direction !== 'down') {
        return
      }

      const playerVotes = voteCounts[playerKey] ?? { up: 0, down: 0 }
      playerVotes[voteState.direction] += 1
      voteCounts[playerKey] = playerVotes
    })
  })

  return voteCounts
}
