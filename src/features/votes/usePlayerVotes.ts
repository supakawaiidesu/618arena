import { useEffect, useState } from 'react'
import { getSupabaseBrowserClient } from '../auth/supabase'
import type { AuthProfile } from '../auth/types'
import type { LiveLookup, PlayerRow } from '../lookup/types'
import { getPlayerVoteKey } from './selectors'
import {
  normalizeVoteReason,
  type PlayerGameVoteCache,
  type PlayerGameVoteState,
  type PlayerVoteCache,
  type VoteDirection,
  type VoteReason,
} from './types'

type UsePlayerVotesOptions = {
  result: LiveLookup | null
  profile: AuthProfile | null
  voteDisabledReason: string | null
}

type VoteRow = {
  riot_game_id: number
  player_riot_id_normalized: string
  direction: VoteDirection
  reason: VoteReason
}

export function usePlayerVotes({ result, profile, voteDisabledReason }: UsePlayerVotesOptions) {
  const supabase = getSupabaseBrowserClient()
  const [playerGameVotes, setPlayerGameVotes] = useState<PlayerGameVoteCache>({})
  const [playerVotes, setPlayerVotes] = useState<PlayerVoteCache>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const userId = profile?.userId ?? null
  const voterRiotIdNormalized = profile?.riotIdNormalized ?? null
  const playerKeys = result?.players.map(getPlayerVoteKey) ?? []
  const playerKeySignature = playerKeys.join('|')

  useEffect(() => {
    if (!supabase || !result || !userId) {
      setPlayerGameVotes({})
      setPlayerVotes({})
      setErrorMessage(null)
      return
    }

    let isDisposed = false

    const loadVotes = async () => {
      setErrorMessage(null)

      try {
        const { data, error } = await supabase
          .from('votes')
          .select('riot_game_id, player_riot_id_normalized, direction, reason')
          .eq('user_id', userId)
          .in('player_riot_id_normalized', playerKeys)

        if (isDisposed) {
          return
        }

        if (error) {
          throw error
        }

        const rows = (data ?? []) as VoteRow[]

        setPlayerGameVotes(buildGameVoteState(rows, result.gameId))
        setPlayerVotes(buildVoteCounts(rows))
      } catch (error) {
        if (!isDisposed) {
          setErrorMessage(getErrorMessage(error))
        }
      }
    }

    void loadVotes()

    return () => {
      isDisposed = true
    }
  }, [result, playerKeySignature, supabase, userId])

  const setVote = async (player: PlayerRow, gameId: number, direction: VoteDirection, reason: VoteReason) => {
    if (player.isSearchedPlayer || voteDisabledReason || !supabase || !result || !userId || !voterRiotIdNormalized) {
      return
    }

    const playerKey = getPlayerVoteKey(player)
    const gameKey = String(gameId)
    const normalizedReason = normalizeVoteReason(reason, direction)
    const previousVote = playerGameVotes[gameKey]?.[playerKey] ?? { direction: null, reason: null }

    setPlayerGameVotes((currentVotes) => ({
      ...currentVotes,
      [gameKey]: {
        ...currentVotes[gameKey],
        [playerKey]: {
          direction,
          reason: normalizedReason,
        },
      },
    }))
    setPlayerVotes((currentVotes) => applyVoteCountChange(currentVotes, playerKey, previousVote.direction, direction))

    try {
      await ensureGameRow(supabase, result)

      const { error } = await supabase.from('votes').upsert(
        {
          user_id: userId,
          voter_riot_id_normalized: voterRiotIdNormalized,
          riot_game_id: gameId,
          player_riot_id_normalized: playerKey,
          direction,
          reason: normalizedReason,
        },
        {
          onConflict: 'user_id,riot_game_id,player_riot_id_normalized',
        },
      )

      if (error) {
        throw error
      }

      setErrorMessage(null)
    } catch (error) {
      setErrorMessage(getErrorMessage(error))
      void reloadVotes({ supabase, result, userId, setPlayerGameVotes, setPlayerVotes })
    }
  }

  const clearVote = async (player: PlayerRow, gameId: number) => {
    if (player.isSearchedPlayer || voteDisabledReason || !supabase || !result || !userId) {
      return
    }

    const playerKey = getPlayerVoteKey(player)
    const gameKey = String(gameId)
    const previousVote = playerGameVotes[gameKey]?.[playerKey] ?? { direction: null, reason: null }

    setPlayerGameVotes((currentVotes) => ({
      ...currentVotes,
      [gameKey]: {
        ...currentVotes[gameKey],
        [playerKey]: {
          direction: null,
          reason: null,
        },
      },
    }))
    setPlayerVotes((currentVotes) => applyVoteCountChange(currentVotes, playerKey, previousVote.direction, null))

    try {
      const { error } = await supabase
        .from('votes')
        .delete()
        .eq('user_id', userId)
        .eq('riot_game_id', gameId)
        .eq('player_riot_id_normalized', playerKey)

      if (error) {
        throw error
      }

      setErrorMessage(null)
    } catch (error) {
      setErrorMessage(getErrorMessage(error))
      void reloadVotes({ supabase, result, userId, setPlayerGameVotes, setPlayerVotes })
    }
  }

  return {
    playerGameVotes,
    playerVotes,
    errorMessage,
    setVote,
    clearVote,
  }
}

async function reloadVotes({
  supabase,
  result,
  userId,
  setPlayerGameVotes,
  setPlayerVotes,
}: {
  supabase: NonNullable<ReturnType<typeof getSupabaseBrowserClient>>
  result: LiveLookup
  userId: string
  setPlayerGameVotes: (value: PlayerGameVoteCache) => void
  setPlayerVotes: (value: PlayerVoteCache) => void
}) {
  const playerKeys = result.players.map(getPlayerVoteKey)
  const { data, error } = await supabase
    .from('votes')
    .select('riot_game_id, player_riot_id_normalized, direction, reason')
    .eq('user_id', userId)
    .in('player_riot_id_normalized', playerKeys)

  if (error) {
    return
  }

  const rows = (data ?? []) as VoteRow[]
  setPlayerGameVotes(buildGameVoteState(rows, result.gameId))
  setPlayerVotes(buildVoteCounts(rows))
}

async function ensureGameRow(supabase: NonNullable<ReturnType<typeof getSupabaseBrowserClient>>, result: LiveLookup) {
  const { error: gameError } = await supabase.from('games').upsert(
    {
      riot_game_id: result.gameId,
      queue_label: result.queueLabel,
    },
    {
      onConflict: 'riot_game_id',
    },
  )

  if (gameError) {
    throw gameError
  }
}

function buildGameVoteState(rows: VoteRow[], gameId: number): PlayerGameVoteCache {
  const gameKey = String(gameId)
  const gameVotes = rows.reduce<Record<string, PlayerGameVoteState>>((votes, row) => {
    if (row.riot_game_id !== gameId) {
      return votes
    }

    votes[row.player_riot_id_normalized] = {
      direction: row.direction,
      reason: normalizeVoteReason(row.reason, row.direction),
    }
    return votes
  }, {})

  return {
    [gameKey]: gameVotes,
  }
}

function buildVoteCounts(rows: VoteRow[]): PlayerVoteCache {
  return rows.reduce<PlayerVoteCache>((voteCounts, row) => {
    const playerVoteCounts = voteCounts[row.player_riot_id_normalized] ?? { up: 0, down: 0 }
    playerVoteCounts[row.direction] += 1
    voteCounts[row.player_riot_id_normalized] = playerVoteCounts
    return voteCounts
  }, {})
}

function applyVoteCountChange(
  currentVotes: PlayerVoteCache,
  playerKey: string,
  previousDirection: VoteDirection | null,
  nextDirection: VoteDirection | null,
) {
  const playerVoteCounts = currentVotes[playerKey] ?? { up: 0, down: 0 }
  const nextVoteCounts = {
    ...playerVoteCounts,
  }

  if (previousDirection) {
    nextVoteCounts[previousDirection] = Math.max(0, nextVoteCounts[previousDirection] - 1)
  }

  if (nextDirection) {
    nextVoteCounts[nextDirection] += 1
  }

  return {
    ...currentVotes,
    [playerKey]: nextVoteCounts,
  }
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    const details = 'details' in error && typeof error.details === 'string' ? error.details : ''
    return details ? `${error.message} ${details}`.trim() : error.message
  }

  return 'Something went wrong while syncing votes.'
}
