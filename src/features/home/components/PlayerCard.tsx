import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { buildArenaSweatsUrl, buildOpggUrl } from '../../lookup/externalLinks'
import type { PlayerRow } from '../../lookup/types'
import { getPlayerVoteKey, getVoteButtonLabel, getVoteButtonTitle } from '../../votes/selectors'
import {
  getVoteReasonOptions,
  UNSPECIFIED_VOTE_REASON,
  type PlayerGameVoteCache,
  type PlayerVoteCounts,
  type VoteDirection,
  type VoteReason,
} from '../../votes/types'

type PlayerCardProps = {
  player: PlayerRow
  gameId: number
  rankWidth: string
  playerGameVotes: PlayerGameVoteCache
  voteCounts: PlayerVoteCounts
  voteDisabledReason: string | null
  onVote: (player: PlayerRow, gameId: number, direction: VoteDirection, reason: VoteReason) => void
  onClearVote: (player: PlayerRow, gameId: number) => void
}

export function PlayerCard({
  player,
  gameId,
  rankWidth,
  playerGameVotes,
  voteCounts,
  voteDisabledReason,
  onVote,
  onClearVote,
}: PlayerCardProps) {
  const [openVoteDirection, setOpenVoteDirection] = useState<VoteDirection | null>(null)
  const voteBoxRef = useRef<HTMLDivElement | null>(null)
  const currentVote = playerGameVotes[String(gameId)]?.[getPlayerVoteKey(player)]
  const currentVoteDirection = currentVote?.direction ?? null
  const currentVoteReason = currentVote?.reason ?? null
  const voteDisableMessage = player.isSearchedPlayer
    ? `You cannot vote on ${player.gameName}#${player.tagLine}.`
    : voteDisabledReason
  const isVoteDisabled = voteDisableMessage !== null
  const upVoteLabel = getVoteButtonLabel(player, 'up', currentVoteDirection, voteCounts, voteDisableMessage)
  const downVoteLabel = getVoteButtonLabel(player, 'down', currentVoteDirection, voteCounts, voteDisableMessage)
  const upVoteTitle = getVoteButtonTitle(player, 'up', currentVoteDirection, voteDisableMessage)
  const downVoteTitle = getVoteButtonTitle(player, 'down', currentVoteDirection, voteDisableMessage)
  const reasonOptions = openVoteDirection ? getVoteReasonOptions(openVoteDirection) : []

  useEffect(() => {
    if (!openVoteDirection) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (voteBoxRef.current?.contains(event.target as Node)) {
        return
      }

      setOpenVoteDirection(null)
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [openVoteDirection])

  const handleVoteClick = (direction: VoteDirection) => {
    if (isVoteDisabled) {
      return
    }

    if (openVoteDirection === direction) {
      setOpenVoteDirection(null)
      return
    }

    if (currentVoteDirection !== direction || currentVoteReason === null) {
      onVote(player, gameId, direction, UNSPECIFIED_VOTE_REASON)
    }

    setOpenVoteDirection(direction)
  }

  const handleReasonClick = (reason: VoteReason) => {
    if (!openVoteDirection) {
      return
    }

    onVote(player, gameId, openVoteDirection, reason)
    setOpenVoteDirection(null)
  }

  const handleClearVote = () => {
    onClearVote(player, gameId)
    setOpenVoteDirection(null)
  }

  return (
    <article
      className={`player-tile${player.isSearchedPlayer ? ' searched' : ''}`}
      style={{ '--player-rank-width': rankWidth } as CSSProperties}
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
        <div className="player-vote-stack" ref={voteBoxRef}>
          <button
            type="button"
            className={`player-vote player-vote-up${currentVoteDirection === 'up' ? ' is-active' : ''}`}
            onClick={() => handleVoteClick('up')}
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
            onClick={() => handleVoteClick('down')}
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
          {openVoteDirection ? (
            <div
              className={`player-vote-popup player-vote-popup-${openVoteDirection}`}
              role="dialog"
              aria-label={`Choose why you ${openVoteDirection}voted ${player.gameName}#${player.tagLine}`}
            >
              {reasonOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`vote-reason-option${
                    currentVoteDirection === openVoteDirection && currentVoteReason === option.value ? ' is-selected' : ''
                  }`}
                  onClick={() => handleReasonClick(option.value)}
                >
                  {option.label}
                </button>
              ))}
              {currentVoteDirection === openVoteDirection ? (
                <button type="button" className="vote-reason-clear" onClick={handleClearVote}>
                  Clear vote
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
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
}
