import type { CSSProperties } from 'react'
import type { LiveLookup } from '../../lookup/types'
import { getPlayerVoteKey } from '../../votes/selectors'
import type { PlayerGameVoteCache, PlayerVoteCache, VoteDirection, VoteReason } from '../../votes/types'
import { getPlayerColumn, getRankWidths } from '../playerGrid'
import { PlayerCard } from './PlayerCard'

type PlayerGridProps = {
  result: LiveLookup
  playerGameVotes: PlayerGameVoteCache
  playerVotes: PlayerVoteCache
  voteDisabledReason: string | null
  onVote: PlayerCardProps['onVote']
  onClearVote: PlayerCardProps['onClearVote']
}

type PlayerCardProps = {
  onVote: (player: LiveLookup['players'][number], gameId: number, direction: VoteDirection, reasons: VoteReason[]) => void
  onClearVote: (player: LiveLookup['players'][number], gameId: number) => void
}

export function PlayerGrid({ result, playerGameVotes, playerVotes, voteDisabledReason, onVote, onClearVote }: PlayerGridProps) {
  const rowCount = Math.ceil(result.players.length / 2)
  const rankWidths = getRankWidths(result.players, rowCount)
  const playerGridStyle = {
    gridTemplateRows: `repeat(${rowCount}, auto)`,
    gridAutoFlow: 'column',
    '--player-rank-width-mobile': rankWidths.mobile,
  } as CSSProperties

  return (
    <section className="results-block">
      <div className="players-grid" style={playerGridStyle}>
        {result.players.map((player, index) => {
          const playerColumn = getPlayerColumn(index, rowCount)
          const voteCounts = playerVotes[getPlayerVoteKey(player)] ?? { up: 0, down: 0 }

          return (
            <PlayerCard
              key={player.id}
              player={player}
              gameId={result.gameId}
              rankWidth={rankWidths[playerColumn]}
              playerGameVotes={playerGameVotes}
              voteCounts={voteCounts}
              voteDisabledReason={voteDisabledReason}
              onVote={onVote}
              onClearVote={onClearVote}
            />
          )
        })}
      </div>
    </section>
  )
}
