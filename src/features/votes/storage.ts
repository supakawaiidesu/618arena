import { normalizeVoteReasons, type PlayerGameVoteCache, type PlayerGameVoteState } from './types'

const PLAYER_GAME_VOTE_CACHE_KEY = '618arena-player-game-votes'

export function loadPlayerGameVoteCache(): PlayerGameVoteCache {
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
          Object.entries(players).map(([playerKey, voteState]) => [playerKey, normalizeGameVoteState(voteState)]),
        ),
      ]),
    )
  } catch {
    return {}
  }
}

export function savePlayerGameVoteCache(votes: PlayerGameVoteCache) {
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
    return { direction: null, reasons: [] }
  }

  const voteState = value as {
    direction?: unknown
    reason?: unknown
    reasons?: unknown
    up?: unknown
    down?: unknown
  }

  if (voteState.direction === 'up' || voteState.direction === 'down') {
    return {
      direction: voteState.direction,
      reasons: normalizeVoteReasons(voteState.reasons ?? voteState.reason, voteState.direction),
    }
  }

  if (normalizeGameVoteFlag(voteState.down)) {
    return { direction: 'down', reasons: normalizeVoteReasons(undefined, 'down') }
  }

  if (normalizeGameVoteFlag(voteState.up)) {
    return { direction: 'up', reasons: normalizeVoteReasons(undefined, 'up') }
  }

  return { direction: null, reasons: [] }
}
