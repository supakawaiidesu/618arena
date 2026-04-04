import type { PlayerRow } from '../lookup/types'

export function getPlayerColumn(index: number, rowCount: number) {
  if (rowCount <= 0) {
    return 0
  }

  return index < rowCount ? 0 : 1
}

export function getRankWidths(players: PlayerRow[], rowCount: number) {
  const columnDigits = [1, 1]

  players.forEach((player, index) => {
    const column = getPlayerColumn(index, rowCount)
    const digits = String(Math.abs(player.arenaRank)).length

    columnDigits[column] = Math.max(columnDigits[column], digits)
  })

  return {
    0: buildRankWidth(columnDigits[0]),
    1: buildRankWidth(columnDigits[1]),
    mobile: buildRankWidth(Math.max(columnDigits[0], columnDigits[1])),
  }
}

function buildRankWidth(digits: number) {
  return `calc(${digits + 1}ch + 34px)`
}
