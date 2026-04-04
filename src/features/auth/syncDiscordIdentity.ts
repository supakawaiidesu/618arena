import { createServerFn } from '@tanstack/react-start'
import { parseRiotId } from '../lookup/riotId'
import type { DiscordIdentity } from './types'

type DiscordUserResponse = {
  id: string
  username: string
  global_name?: string | null
  avatar?: string | null
  banner?: string | null
}

type DiscordConnectionResponse = {
  id: string
  name: string
  type: string
  verified: boolean
}

export const syncDiscordIdentity = createServerFn({ method: 'POST' })
  .inputValidator((input: { providerToken: string }) => input)
  .handler(async ({ data }): Promise<DiscordIdentity> => {
    const headers = {
      Authorization: `Bearer ${data.providerToken}`,
    }

    const [userResponse, connectionsResponse] = await Promise.all([
      fetch('https://discord.com/api/v10/users/@me', { headers }),
      fetch('https://discord.com/api/v10/users/@me/connections', { headers }),
    ])

    if (!userResponse.ok) {
      throw new Error('Discord sign-in succeeded, but your Discord profile could not be loaded.')
    }

    if (!connectionsResponse.ok) {
      throw new Error('Discord sign-in succeeded, but your third-party connections were not granted to the app.')
    }

    const user = (await userResponse.json()) as DiscordUserResponse
    const connections = (await connectionsResponse.json()) as DiscordConnectionResponse[]
    const riotConnection = pickRiotConnection(connections)
    const riotId = riotConnection ? parseRiotId(riotConnection.name) : null

    return {
      discord_user_id: user.id,
      discord_username: user.global_name?.trim() || user.username,
      discord_avatar_url: buildDiscordAssetUrl(user.id, user.avatar, 'avatars'),
      discord_banner_url: buildDiscordAssetUrl(user.id, user.banner, 'banners'),
      riot_connection_type: riotConnection?.type ?? null,
      riot_connection_id: riotConnection?.id ?? null,
      riot_account_name: riotConnection?.name ?? null,
      riot_game_name: riotId?.gameName ?? null,
      riot_tag_line: riotId?.tagLine ?? null,
      riot_id_normalized: riotId ? `${riotId.gameName}#${riotId.tagLine}`.toLowerCase() : null,
    }
  })

function pickRiotConnection(connections: DiscordConnectionResponse[]) {
  return (
    connections.find((connection) => connection.type === 'riotgames' && connection.verified) ??
    connections.find((connection) => connection.type === 'leagueoflegends' && connection.verified) ??
    connections.find((connection) => connection.type === 'riotgames') ??
    connections.find((connection) => connection.type === 'leagueoflegends') ??
    null
  )
}

function buildDiscordAssetUrl(userId: string, assetHash: string | null | undefined, assetType: 'avatars' | 'banners') {
  if (!assetHash) {
    return null
  }

  return `https://cdn.discordapp.com/${assetType}/${userId}/${assetHash}.png?size=256`
}
