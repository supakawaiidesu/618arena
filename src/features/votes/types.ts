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
  reasons: VoteReason[]
}

export type PlayerGameVoteCache = Record<string, Record<string, PlayerGameVoteState>>

export function getVoteReasonOptions(direction: VoteDirection) {
  return direction === 'up' ? UPVOTE_REASON_OPTIONS : DOWNVOTE_REASON_OPTIONS
}

export function getVoteReasonLabel(reason: VoteReason, direction: VoteDirection) {
  if (reason === UNSPECIFIED_VOTE_REASON) {
    return direction === 'up' ? 'Upvote with no reason' : 'Downvote with no reason'
  }

  const option = getVoteReasonOptions(direction).find((candidate) => candidate.value === reason)

  return option?.label ?? reason
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

export function normalizeVoteReasons(reasons: unknown, direction: VoteDirection): VoteReason[] {
  const rawReasons = parseVoteReasons(reasons)
  const normalizedReasons = Array.from(new Set(rawReasons.map((reason) => normalizeVoteReason(reason, direction))))
  const specifiedReasons = normalizedReasons.filter((reason) => reason !== UNSPECIFIED_VOTE_REASON)

  return specifiedReasons.length > 0 ? specifiedReasons : [UNSPECIFIED_VOTE_REASON]
}

export function serializeVoteReasons(reasons: VoteReason[]) {
  return JSON.stringify(reasons)
}

export function toggleVoteReason(
  currentReasons: VoteReason[],
  nextReason: Exclude<VoteReason, typeof UNSPECIFIED_VOTE_REASON>,
  direction: VoteDirection,
): VoteReason[] {
  const normalizedReasons = normalizeVoteReasons(currentReasons, direction).filter(
    (reason) => reason !== UNSPECIFIED_VOTE_REASON,
  )

  if (normalizedReasons.includes(nextReason)) {
    const remainingReasons = normalizedReasons.filter((reason) => reason !== nextReason)
    return remainingReasons.length > 0 ? remainingReasons : [UNSPECIFIED_VOTE_REASON]
  }

  return [...normalizedReasons, normalizeVoteReason(nextReason, direction)]
}

function parseVoteReasons(reasons: unknown): unknown[] {
  if (Array.isArray(reasons)) {
    return reasons
  }

  if (typeof reasons === 'string') {
    try {
      const parsedReasons = JSON.parse(reasons) as unknown

      if (Array.isArray(parsedReasons)) {
        return parsedReasons
      }
    } catch {
      return [reasons]
    }

    return [reasons]
  }

  if (reasons === undefined || reasons === null) {
    return []
  }

  return [reasons]
}
