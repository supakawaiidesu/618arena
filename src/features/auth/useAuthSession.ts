import type { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { syncDiscordIdentity } from './syncDiscordIdentity'
import { getSupabaseBrowserClient, isSupabaseConfigured } from './supabase'
import { buildProfileUpsert, mapProfileRow, type AuthProfile, type ProfileRow } from './types'

type UseAuthSessionResult = {
  isConfigured: boolean
  isLoading: boolean
  isSyncingProfile: boolean
  session: Session | null
  profile: AuthProfile | null
  errorMessage: string | null
  voteDisabledReason: string | null
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export function useAuthSession(): UseAuthSessionResult {
  const supabase = getSupabaseBrowserClient()
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<AuthProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSyncingProfile, setIsSyncingProfile] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false)
      setSession(null)
      setProfile(null)
      return
    }

    let isDisposed = false

    const loadSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (isDisposed) {
        return
      }

      if (error) {
        setErrorMessage(error.message)
      }

      setSession(data.session ?? null)
      setIsLoading(false)
    }

    void loadSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: unknown, nextSession: Session | null) => {
      if (isDisposed) {
        return
      }

      setSession(nextSession)
      setIsLoading(false)

      if (!nextSession) {
        setProfile(null)
      }
    })

    return () => {
      isDisposed = true
      subscription.unsubscribe()
    }
  }, [supabase])

  useEffect(() => {
    if (!supabase || !session?.user.id) {
      setIsSyncingProfile(false)

      if (!session) {
        setProfile(null)
      }

      return
    }

    let isDisposed = false

    const syncProfile = async () => {
      setIsSyncingProfile(true)
      setErrorMessage(null)

      const existingProfile = await loadStoredProfile(supabase, session.user.id)

      if (isDisposed) {
        return
      }

      const providerToken = getProviderToken(session)

      if (!providerToken) {
        setProfile(existingProfile)
        setIsSyncingProfile(false)

        if (!existingProfile) {
          setErrorMessage('Discord signed in, but the app could not refresh your Discord connection data.')
        }

        return
      }

      try {
        const identity = await syncDiscordIdentity({
          data: {
            providerToken,
          },
        })

        if (isDisposed) {
          return
        }

        const { data, error } = await supabase
          .from('profiles')
          .upsert(buildProfileUpsert(session.user.id, identity), { onConflict: 'user_id' })
          .select(
            'user_id, discord_user_id, discord_username, discord_avatar_url, discord_banner_url, riot_connection_type, riot_connection_id, riot_account_name, riot_game_name, riot_tag_line, riot_id_normalized',
          )
          .single()

        if (isDisposed) {
          return
        }

        if (error) {
          throw error
        }

        setProfile(mapProfileRow(data as ProfileRow))
      } catch (error) {
        setProfile(existingProfile)
        setErrorMessage(getErrorMessage(error))
      } finally {
        if (!isDisposed) {
          setIsSyncingProfile(false)
        }
      }
    }

    void syncProfile()

    return () => {
      isDisposed = true
    }
  }, [session, supabase])

  const signIn = async () => {
    if (!supabase || typeof window === 'undefined') {
      return
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: window.location.href,
        scopes: 'identify connections',
      },
    })

    if (error) {
      setErrorMessage(error.message)
    }
  }

  const signOut = async () => {
    if (!supabase) {
      return
    }

    const { error } = await supabase.auth.signOut()

    if (error) {
      setErrorMessage(error.message)
      return
    }

    setProfile(null)
    setErrorMessage(null)
  }

  return {
    isConfigured: isSupabaseConfigured(),
    isLoading,
    isSyncingProfile,
    session,
    profile,
    errorMessage,
    voteDisabledReason: getVoteDisabledReason({
      isConfigured: isSupabaseConfigured(),
      session,
      profile,
      isSyncingProfile,
    }),
    signIn,
    signOut,
  }
}

async function loadStoredProfile(supabase: NonNullable<ReturnType<typeof getSupabaseBrowserClient>>, userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select(
      'user_id, discord_user_id, discord_username, discord_avatar_url, discord_banner_url, riot_connection_type, riot_connection_id, riot_account_name, riot_game_name, riot_tag_line, riot_id_normalized',
    )
    .eq('user_id', userId)
    .maybeSingle()

  if (error || !data) {
    return null
  }

  return mapProfileRow(data as ProfileRow)
}

function getProviderToken(session: Session | null) {
  if (!session) {
    return null
  }

  return (session as Session & { provider_token?: string | null }).provider_token ?? null
}

function getVoteDisabledReason({
  isConfigured,
  session,
  profile,
  isSyncingProfile,
}: {
  isConfigured: boolean
  session: Session | null
  profile: AuthProfile | null
  isSyncingProfile: boolean
}) {
  if (!isConfigured) {
    return 'Add Supabase environment variables to enable Discord voting.'
  }

  if (!session) {
    return 'Sign in with Discord to vote.'
  }

  if (isSyncingProfile) {
    return 'Checking your Discord Riot connection.'
  }

  if (!profile?.riotIdNormalized) {
    return 'Link your Riot account in Discord, make it visible, then sign out and sign back in.'
  }

  return null
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'Something went wrong while syncing your Discord identity.'
}
