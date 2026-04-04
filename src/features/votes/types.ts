export type VoteDirection = 'up' | 'down'

export type PlayerVoteCounts = {
  up: number
  down: number
}

export type PlayerVoteCache = Record<string, PlayerVoteCounts>

export type PlayerGameVoteState = {
  direction: VoteDirection | null
}

export type PlayerGameVoteCache = Record<string, Record<string, PlayerGameVoteState>>
