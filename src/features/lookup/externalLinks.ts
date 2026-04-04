import type { PlayerRow } from './types'

export function buildOpggUrl(player: PlayerRow) {
  return `https://op.gg/lol/summoners/na/${encodeURIComponent(player.gameName)}-${encodeURIComponent(player.tagLine)}`
}

export function buildArenaSweatsUrl(player: PlayerRow) {
  return `https://arenasweats.lol/na/${encodeURIComponent(player.gameName)}-${encodeURIComponent(player.tagLine)}/`
}
