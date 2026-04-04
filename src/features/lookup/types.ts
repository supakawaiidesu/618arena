export type RiotId = {
  gameName: string
  tagLine: string
}

export type PlayerRow = {
  id: string
  riotId: string
  gameName: string
  tagLine: string
  championName: string
  championIcon: string
  arenaRank: number
  isSearchedPlayer: boolean
}

export type LiveLookup = {
  status: 'live'
  lookup: string
  gameId: number
  queueLabel: string
  players: PlayerRow[]
}

export type OfflineLookup = {
  status: 'offline'
  lookup: string
  message: string
}

export type ErrorLookup = {
  status: 'error'
  lookup: string
  message: string
  source: 'generic' | 'riot-outage'
}

export type LookupResult = LiveLookup | OfflineLookup | ErrorLookup

export type BackendOkResponse = {
  status: 'ok'
  player: {
    gameName: string
    tagLine: string
    puuid: string
  }
  match: {
    gameId: number
    gameMode: string
    gameType: string
    queueId: number
  }
  players: Array<{
    riotId: string
    gameName: string
    tagLine: string
    championId: number
    championName: string
    championIcon: string
    playerRank: number
  }>
}

export type BackendNotInMatchResponse = {
  status: 'not_in_match'
  player: {
    gameName: string
    tagLine: string
    puuid: string
  }
}

export type BackendLookupResponse = BackendOkResponse | BackendNotInMatchResponse
