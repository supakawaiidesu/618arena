import { useEffect, useState } from 'react'
import type { PlayerRow } from '../lookup/types'
import { buildPlayerVoteCache, getPlayerVoteKey } from './selectors'
import { loadPlayerGameVoteCache, savePlayerGameVoteCache } from './storage'
import type { PlayerGameVoteCache, VoteDirection } from './types'

export function usePlayerVotes() {
  const [playerGameVotes, setPlayerGameVotes] = useState<PlayerGameVoteCache>({})

  useEffect(() => {
    setPlayerGameVotes(loadPlayerGameVoteCache())
  }, [])

  const playerVotes = buildPlayerVoteCache(playerGameVotes)

  const toggleVote = (player: PlayerRow, gameId: number, direction: VoteDirection) => {
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

  return {
    playerGameVotes,
    playerVotes,
    toggleVote,
  }
}
