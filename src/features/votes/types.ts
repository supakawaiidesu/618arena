export type VoteDirection = 'up' | 'down'

export const UNSPECIFIED_VOTE_REASON = 'unspecified'

export type UpVoteReason = 'builds-good' | 'good-mechanics' | 'vibe-check-passed'

export type DownVoteReason = 'lost-the-game' | 'builds-terrible' | 'toxic-af' | 'for-fun-player' | 'unskilled-player'

export type VoteReason = typeof UNSPECIFIED_VOTE_REASON | UpVoteReason | DownVoteReason

export const UPVOTE_REASON_OPTIONS: ReadonlyArray<{ value: UpVoteReason; label: string }> = [
  { value: 'builds-good', label: 'Builds good' },
  { value: 'good-mechanics', label: 'Good mechanics' },
  { value: 'vibe-check-passed', label: 'Vibe check passed' },
]

export const DOWNVOTE_REASON_OPTIONS: ReadonlyArray<{ value: DownVoteReason; label: string }> = [
  { value: 'lost-the-game', label: 'Lost the game' },
  { value: 'builds-terrible', label: 'Builds terrible' },
  { value: 'toxic-af', label: 'Toxic af' },
  { value: 'for-fun-player', label: 'For fun player' },
  { value: 'unskilled-player', label: 'Unskilled player' },
]

export type PlayerVoteCounts = {
  up: number
  down: number
}

export type PlayerVoteCache = Record<string, PlayerVoteCounts>

export type PlayerGameVoteState = {
  direction: VoteDirection | null
  reason: VoteReason | null
}

export type PlayerGameVoteCache = Record<string, Record<string, PlayerGameVoteState>>

export function getVoteReasonOptions(direction: VoteDirection) {
  return direction === 'up' ? UPVOTE_REASON_OPTIONS : DOWNVOTE_REASON_OPTIONS
}

export function normalizeVoteReason(reason: unknown, direction: VoteDirection): VoteReason {
  if (reason === UNSPECIFIED_VOTE_REASON) {
    return reason
  }

  if (direction === 'up' && UPVOTE_REASON_OPTIONS.some((option) => option.value === reason)) {
    return reason as UpVoteReason
  }

  if (direction === 'down' && DOWNVOTE_REASON_OPTIONS.some((option) => option.value === reason)) {
    return reason as DownVoteReason
  }

  return UNSPECIFIED_VOTE_REASON
}
