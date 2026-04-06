import { useEffect, useState } from 'react'
import { getSupabaseBrowserClient } from '../auth/supabase'
import { getVoteReasonLabel, normalizeVoteReasons, type VoteDirection, type VoteReason } from '../votes/types'

type UseMyVoteStatsOptions = {
  userId: string | null
}

type VoteRow = {
  riot_game_id: number
  player_riot_id_normalized: string
  direction: VoteDirection
  reason: unknown
  created_at: string
}

type GameRow = {
  riot_game_id: number
  queue_label: string
}

type GamePlayerRow = {
  riot_game_id: number
  riot_id_normalized: string
  game_name: string
  tag_line: string
  champion_name: string
  champion_icon: string
  arena_rank: number
}

type VoteReasonCount = {
  reason: VoteReason
  label: string
  direction: VoteDirection
  count: number
}

type PlayerGameVoteEntry = {
  key: string
  gameId: number
  queueLabel: string
  votedAt: string
  direction: VoteDirection
  reasonLabels: string[]
  championName: string | null
  championIcon: string | null
  arenaRank: number | null
}

export type PlayerVoteStats = {
  playerKey: string
  gameName: string
  tagLine: string
  displayName: string
  totalVotes: number
  totalUp: number
  totalDown: number
  totalGames: number
  lastVotedAt: string
  latestChampionName: string | null
  latestChampionIcon: string | null
  reasonBreakdown: VoteReasonCount[]
  games: PlayerGameVoteEntry[]
}

export type MyVoteStats = {
  totalPlayers: number
  totalVotes: number
  totalUp: number
  totalDown: number
  players: PlayerVoteStats[]
}

type UseMyVoteStatsResult = {
  isLoading: boolean
  errorMessage: string | null
  stats: MyVoteStats
}

type PlayerAccumulator = {
  playerKey: string
  gameName: string
  tagLine: string
  displayName: string
  totalVotes: number
  totalUp: number
  totalDown: number
  totalGames: number
  lastVotedAt: string
  latestChampionName: string | null
  latestChampionIcon: string | null
  games: PlayerGameVoteEntry[]
  reasonCounts: Map<string, VoteReasonCount>
}

const EMPTY_STATS: MyVoteStats = {
  totalPlayers: 0,
  totalVotes: 0,
  totalUp: 0,
  totalDown: 0,
  players: [],
}

export function useMyVoteStats({ userId }: UseMyVoteStatsOptions): UseMyVoteStatsResult {
  const supabase = getSupabaseBrowserClient()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [stats, setStats] = useState<MyVoteStats>(EMPTY_STATS)

  useEffect(() => {
    if (!supabase || !userId) {
      setIsLoading(false)
      setErrorMessage(null)
      setStats(EMPTY_STATS)
      return
    }

    let isDisposed = false

    const loadStats = async () => {
      setIsLoading(true)
      setErrorMessage(null)

      try {
        const { data, error } = await supabase
          .from('votes')
          .select('riot_game_id, player_riot_id_normalized, direction, reason, created_at')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (isDisposed) {
          return
        }

        if (error) {
          throw error
        }

        const voteRows = (data ?? []) as VoteRow[]

        if (voteRows.length === 0) {
          setStats(EMPTY_STATS)
          return
        }

        const gameIds = Array.from(new Set(voteRows.map((row) => row.riot_game_id)))
        const playerKeys = Array.from(new Set(voteRows.map((row) => row.player_riot_id_normalized)))

        const [gamesResult, gamePlayersResult] = await Promise.all([
          supabase.from('games').select('riot_game_id, queue_label').in('riot_game_id', gameIds),
          supabase
            .from('game_players')
            .select('riot_game_id, riot_id_normalized, game_name, tag_line, champion_name, champion_icon, arena_rank')
            .in('riot_game_id', gameIds)
            .in('riot_id_normalized', playerKeys),
        ])

        if (isDisposed) {
          return
        }

        if (gamesResult.error) {
          throw gamesResult.error
        }

        if (gamePlayersResult.error) {
          throw gamePlayersResult.error
        }

        setStats(
          buildMyVoteStats({
            voteRows,
            gameRows: (gamesResult.data ?? []) as GameRow[],
            gamePlayerRows: (gamePlayersResult.data ?? []) as GamePlayerRow[],
          }),
        )
      } catch (error) {
        if (!isDisposed) {
          setErrorMessage(getErrorMessage(error))
          setStats(EMPTY_STATS)
        }
      } finally {
        if (!isDisposed) {
          setIsLoading(false)
        }
      }
    }

    void loadStats()

    return () => {
      isDisposed = true
    }
  }, [supabase, userId])

  return {
    isLoading,
    errorMessage,
    stats,
  }
}

function buildMyVoteStats({
  voteRows,
  gameRows,
  gamePlayerRows,
}: {
  voteRows: VoteRow[]
  gameRows: GameRow[]
  gamePlayerRows: GamePlayerRow[]
}): MyVoteStats {
  const gamesById = new Map(gameRows.map((row) => [row.riot_game_id, row]))
  const playerSnapshots = new Map(gamePlayerRows.map((row) => [buildSnapshotKey(row.riot_game_id, row.riot_id_normalized), row]))
  const players = new Map<string, PlayerAccumulator>()

  for (const row of voteRows) {
    const snapshot = playerSnapshots.get(buildSnapshotKey(row.riot_game_id, row.player_riot_id_normalized))
    const fallbackIdentity = buildFallbackIdentity(row.player_riot_id_normalized)
    const gameName = snapshot?.game_name ?? fallbackIdentity.gameName
    const tagLine = snapshot?.tag_line ?? fallbackIdentity.tagLine
    const displayName = tagLine ? `${gameName}#${tagLine}` : gameName
    const queueLabel = gamesById.get(row.riot_game_id)?.queue_label ?? 'Arena'
    const reasonValues = normalizeVoteReasons(row.reason, row.direction)
    const reasonLabels = reasonValues.map((reason) => getVoteReasonLabel(reason, row.direction))
    const existingPlayer = players.get(row.player_riot_id_normalized)
    const player = existingPlayer ?? {
      playerKey: row.player_riot_id_normalized,
      gameName,
      tagLine,
      displayName,
      totalVotes: 0,
      totalUp: 0,
      totalDown: 0,
      totalGames: 0,
      lastVotedAt: row.created_at,
      latestChampionName: snapshot?.champion_name ?? null,
      latestChampionIcon: snapshot?.champion_icon ?? null,
      games: [],
      reasonCounts: new Map<string, VoteReasonCount>(),
    }

    player.totalVotes += 1
    player.totalGames += 1
    player.lastVotedAt = player.lastVotedAt > row.created_at ? player.lastVotedAt : row.created_at
    player.latestChampionName = player.latestChampionName ?? snapshot?.champion_name ?? null
    player.latestChampionIcon = player.latestChampionIcon ?? snapshot?.champion_icon ?? null

    if (row.direction === 'up') {
      player.totalUp += 1
    } else {
      player.totalDown += 1
    }

    for (const reason of reasonValues) {
      const reasonKey = `${row.direction}:${reason}`
      const existingReason = player.reasonCounts.get(reasonKey)

      if (existingReason) {
        existingReason.count += 1
      } else {
        player.reasonCounts.set(reasonKey, {
          reason,
          label: getVoteReasonLabel(reason, row.direction),
          direction: row.direction,
          count: 1,
        })
      }
    }

    player.games.push({
      key: `${row.riot_game_id}:${row.player_riot_id_normalized}:${row.created_at}`,
      gameId: row.riot_game_id,
      queueLabel,
      votedAt: row.created_at,
      direction: row.direction,
      reasonLabels,
      championName: snapshot?.champion_name ?? null,
      championIcon: snapshot?.champion_icon ?? null,
      arenaRank: snapshot?.arena_rank ?? null,
    })

    players.set(row.player_riot_id_normalized, player)
  }

  const playerList = Array.from(players.values())
    .map<PlayerVoteStats>((player) => ({
      playerKey: player.playerKey,
      gameName: player.gameName,
      tagLine: player.tagLine,
      displayName: player.displayName,
      totalVotes: player.totalVotes,
      totalUp: player.totalUp,
      totalDown: player.totalDown,
      totalGames: player.totalGames,
      lastVotedAt: player.lastVotedAt,
      latestChampionName: player.latestChampionName,
      latestChampionIcon: player.latestChampionIcon,
      reasonBreakdown: Array.from(player.reasonCounts.values()).sort((left, right) => right.count - left.count),
      games: player.games,
    }))
    .sort((left, right) => right.lastVotedAt.localeCompare(left.lastVotedAt))

  return {
    totalPlayers: playerList.length,
    totalVotes: voteRows.length,
    totalUp: voteRows.filter((row) => row.direction === 'up').length,
    totalDown: voteRows.filter((row) => row.direction === 'down').length,
    players: playerList,
  }
}

function buildSnapshotKey(gameId: number, playerKey: string) {
  return `${gameId}:${playerKey}`
}

function buildFallbackIdentity(playerKey: string) {
  const separatorIndex = playerKey.indexOf('#')

  if (separatorIndex === -1) {
    return {
      gameName: playerKey,
      tagLine: '',
    }
  }

  return {
    gameName: playerKey.slice(0, separatorIndex),
    tagLine: playerKey.slice(separatorIndex + 1),
  }
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    const details = 'details' in error && typeof error.details === 'string' ? error.details : ''
    return details ? `${error.message} ${details}`.trim() : error.message
  }

  return 'Something went wrong while loading your stats.'
}
