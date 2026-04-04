import type { CSSProperties } from 'react'
import { buildArenaSweatsUrl, buildOpggUrl } from '../../lookup/externalLinks'
import type { PlayerRow } from '../../lookup/types'
import { getPlayerVoteKey, getVoteButtonLabel, getVoteButtonTitle } from '../../votes/selectors'
import type { PlayerGameVoteCache, PlayerVoteCounts, VoteDirection } from '../../votes/types'

type PlayerCardProps = {
  player: PlayerRow
  gameId: number
  rankWidth: string
  playerGameVotes: PlayerGameVoteCache
  voteCounts: PlayerVoteCounts
  onVote: (player: PlayerRow, gameId: number, direction: VoteDirection) => void
}

export function PlayerCard({ player, gameId, rankWidth, playerGameVotes, voteCounts, onVote }: PlayerCardProps) {
  const currentVoteDirection = playerGameVotes[String(gameId)]?.[getPlayerVoteKey(player)]?.direction ?? null
  const isVoteDisabled = player.isSearchedPlayer
  const upVoteLabel = getVoteButtonLabel(player, 'up', currentVoteDirection, voteCounts, isVoteDisabled)
  const downVoteLabel = getVoteButtonLabel(player, 'down', currentVoteDirection, voteCounts, isVoteDisabled)
  const upVoteTitle = getVoteButtonTitle(player, 'up', currentVoteDirection, isVoteDisabled)
  const downVoteTitle = getVoteButtonTitle(player, 'down', currentVoteDirection, isVoteDisabled)

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
        <button
          type="button"
          className={`player-vote player-vote-up${currentVoteDirection === 'up' ? ' is-active' : ''}`}
          onClick={() => onVote(player, gameId, 'up')}
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
          onClick={() => onVote(player, gameId, 'down')}
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
}
