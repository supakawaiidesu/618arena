export type ProfileRow = {
  user_id: string
  discord_user_id: string
  discord_username: string
  discord_avatar_url: string | null
  discord_banner_url: string | null
  riot_connection_type: string | null
  riot_connection_id: string | null
  riot_account_name: string | null
  riot_game_name: string | null
  riot_tag_line: string | null
  riot_id_normalized: string | null
}

export type AuthProfile = {
  userId: string
  discordUserId: string
  discordUsername: string
  discordAvatarUrl: string | null
  discordBannerUrl: string | null
  riotConnectionType: string | null
  riotConnectionId: string | null
  riotAccountName: string | null
  riotGameName: string | null
  riotTagLine: string | null
  riotIdNormalized: string | null
}

export type DiscordIdentity = Omit<ProfileRow, 'user_id'>

export function mapProfileRow(row: ProfileRow): AuthProfile {
  return {
    userId: row.user_id,
    discordUserId: row.discord_user_id,
    discordUsername: row.discord_username,
    discordAvatarUrl: row.discord_avatar_url,
    discordBannerUrl: row.discord_banner_url,
    riotConnectionType: row.riot_connection_type,
    riotConnectionId: row.riot_connection_id,
    riotAccountName: row.riot_account_name,
    riotGameName: row.riot_game_name,
    riotTagLine: row.riot_tag_line,
    riotIdNormalized: row.riot_id_normalized,
  }
}

export function buildProfileUpsert(userId: string, identity: DiscordIdentity): ProfileRow {
  return {
    user_id: userId,
    ...identity,
  }
}
