import { useEffect, useState } from 'react'
import type { PlayerRow } from '../lookup/types'
import { buildPlayerVoteCache, getPlayerVoteKey } from './selectors'
import { loadPlayerGameVoteCache, savePlayerGameVoteCache } from './storage'
import { normalizeVoteReason, type PlayerGameVoteCache, type VoteDirection, type VoteReason } from './types'

export function usePlayerVotes() {
  const [playerGameVotes, setPlayerGameVotes] = useState<PlayerGameVoteCache>({})

  useEffect(() => {
    setPlayerGameVotes(loadPlayerGameVoteCache())
  }, [])

  const playerVotes = buildPlayerVoteCache(playerGameVotes)

  const setVote = (player: PlayerRow, gameId: number, direction: VoteDirection, reason: VoteReason) => {
    if (player.isSearchedPlayer) {
      return
    }

    const gameKey = String(gameId)
    const playerKey = getPlayerVoteKey(player)

    setPlayerGameVotes((currentGameVotes) => {
      const nextGameVotes = {
        ...currentGameVotes,
        [gameKey]: {
          ...currentGameVotes[gameKey],
          [playerKey]: {
            direction,
            reason: normalizeVoteReason(reason, direction),
          },
        },
      }

      savePlayerGameVoteCache(nextGameVotes)

      return nextGameVotes
    })
  }

  const clearVote = (player: PlayerRow, gameId: number) => {
    if (player.isSearchedPlayer) {
      return
    }

    const gameKey = String(gameId)
    const playerKey = getPlayerVoteKey(player)

    setPlayerGameVotes((currentGameVotes) => {
      const nextGameVotes = {
        ...currentGameVotes,
        [gameKey]: {
          ...currentGameVotes[gameKey],
          [playerKey]: {
            direction: null,
            reason: null,
          },
        },
      }

      savePlayerGameVoteCache(nextGameVotes)

      return nextGameVotes
    })
  }

  return {
    playerGameVotes,
    playerVotes,
    setVote,
    clearVote,
  }
}
