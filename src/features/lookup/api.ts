import { LOOKUP_URL, RIOT_OUTAGE_MESSAGE } from './constants'
import type {
  BackendLookupResponse,
  BackendOkResponse,
  LookupResult,
  RiotId,
  LiveLookup,
} from './types'

type BackendErrorPayload = {
  message?: string
  status?: string
}

export async function lookupPlayer(riotId: RiotId): Promise<LookupResult> {
  const lookup = `${riotId.gameName}#${riotId.tagLine}`

  try {
    const response = await fetch(LOOKUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(riotId),
    })

    const rawResponseText = await response.text()
    const payload = parseLookupPayload(rawResponseText)
    const payloadMessage = getLookupPayloadMessage(payload)

    if (!response.ok) {
      if (isRiotServiceOutage(response.status, payloadMessage, rawResponseText)) {
        return {
          status: 'error',
          lookup,
          message: RIOT_OUTAGE_MESSAGE,
          source: 'riot-outage',
        }
      }

      throw new Error(payloadMessage ?? `Lookup failed with status ${response.status}.`)
    }

    if (isBackendOkResponse(payload)) {
      return mapBackendSuccess(payload)
    }

    if (payload?.status === 'not_in_match') {
      return {
        status: 'offline',
        lookup,
        message: 'This player is not currently in an Arena game.',
      }
    }

    throw new Error(payloadMessage ?? 'Backend returned an unexpected response.')
  } catch (error) {
    return {
      status: 'error',
      lookup,
      message: getErrorMessage(error),
      source: 'generic',
    }
  }
}

function mapBackendSuccess(payload: BackendOkResponse): LiveLookup {
  const target = `${payload.player.gameName}#${payload.player.tagLine}`.toLowerCase()
  const sortedPlayers = [...payload.players].sort((left, right) => {
    const leftIsTarget = `${left.gameName}#${left.tagLine}`.toLowerCase() === target
    const rightIsTarget = `${right.gameName}#${right.tagLine}`.toLowerCase() === target

    if (leftIsTarget && !rightIsTarget) return -1
    if (!leftIsTarget && rightIsTarget) return 1

    return left.playerRank - right.playerRank
  })

  return {
    status: 'live',
    lookup: `${payload.player.gameName}#${payload.player.tagLine}`,
    gameId: payload.match.gameId,
    queueLabel: formatQueueLabel(payload.match.gameMode, payload.match.queueId),
    players: sortedPlayers.map((player, index) => ({
      id: `${player.riotId}-${index}`,
      riotId: player.riotId,
      gameName: player.gameName,
      tagLine: player.tagLine,
      championName: player.championName,
      championIcon: player.championIcon,
      arenaRank: player.playerRank,
      isSearchedPlayer: `${player.gameName}#${player.tagLine}`.toLowerCase() === target,
    })),
  }
}

function formatQueueLabel(gameMode: string, queueId: number) {
  if (gameMode === 'CHERRY' || queueId === 1700) {
    return 'Arena'
  }

  return `${gameMode} / ${queueId}`
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'Something went wrong while talking to the backend.'
}

function parseLookupPayload(rawResponseText: string): BackendLookupResponse | BackendErrorPayload | null {
  if (!rawResponseText) {
    return null
  }

  try {
    return JSON.parse(rawResponseText) as BackendLookupResponse | BackendErrorPayload
  } catch {
    return null
  }
}

function isRiotServiceOutage(status: number, payloadMessage: string | null, rawResponseText: string) {
  const errorText = `${payloadMessage ?? ''}\n${rawResponseText}`.toLowerCase()

  if (status !== 502 && !errorText.includes('error code 502') && !errorText.includes('bad gateway')) {
    return false
  }

  return (
    errorText.includes('api.riotgames.com') ||
    errorText.includes('cloudflare') ||
    errorText.includes('<!doctype html') ||
    errorText.includes('bad gateway')
  )
}

function getLookupPayloadMessage(payload: BackendLookupResponse | BackendErrorPayload | null) {
  return payload && 'message' in payload && typeof payload.message === 'string' ? payload.message : null
}

function isBackendOkResponse(payload: BackendLookupResponse | BackendErrorPayload | null): payload is BackendOkResponse {
  return !!payload && payload.status === 'ok' && 'player' in payload && 'match' in payload && 'players' in payload
}
