import type { PlayerRow } from '../lookup/types'
import type { PlayerGameVoteCache, PlayerVoteCache, PlayerVoteCounts, VoteDirection } from './types'

export function getPlayerVoteKey(player: PlayerRow) {
  return player.riotId.toLowerCase()
}

export function buildPlayerVoteCache(gameVotes: PlayerGameVoteCache): PlayerVoteCache {
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

export function getVoteButtonLabel(
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
    return `Edit your ${direction}vote for ${riotId}. Total ${direction}votes ${voteCount}`
  }

  if (currentDirection) {
    return `Switch vote for ${riotId} to ${getVoteArticle(direction)} ${direction}vote. Current ${direction}votes ${voteCount}`
  }

  return `${capitalizeVoteDirection(direction)}vote ${riotId}. Current ${direction}votes ${voteCount}`
}

export function getVoteButtonTitle(
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
    return `Edit your ${direction}vote for ${riotId}`
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
