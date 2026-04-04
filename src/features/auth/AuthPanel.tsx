import type { AuthProfile } from './types'

type AuthPanelProps = {
  isConfigured: boolean
  isLoading: boolean
  isSignedIn: boolean
  isSyncingProfile: boolean
  profile: AuthProfile | null
  errorMessage: string | null
  onSignIn: () => Promise<void>
  onSignOut: () => Promise<void>
}

export function AuthPanel({
  isConfigured,
  isLoading,
  isSignedIn,
  isSyncingProfile,
  profile,
  errorMessage,
  onSignIn,
  onSignOut,
}: AuthPanelProps) {
  return (
    <section className="auth-panel">
      <div>
        <p className="auth-eyebrow">Discord voting</p>
        <p className="auth-title">
          {profile?.discordUsername ?? (isSignedIn ? 'Discord account connected' : 'Sign in with Discord to vote')}
        </p>
        <p className="auth-copy">
          {!isConfigured
            ? 'Add the Supabase URL and anon key to enable Discord sign-in on this app.'
            : !isSignedIn
              ? 'Votes are now stored per Discord account instead of browser cache.'
              : profile?.riotIdNormalized
                ? `Votes will be attributed to ${profile.riotGameName}#${profile.riotTagLine}.`
                : 'Discord is connected, but no Riot connection was found yet.'}
        </p>
        {isSyncingProfile ? <p className="auth-copy auth-copy-muted">Refreshing your Discord connections.</p> : null}
        {errorMessage ? <p className="auth-copy auth-copy-error">{errorMessage}</p> : null}
      </div>

      <div className="auth-actions">
        {isSignedIn ? (
          <button type="button" className="auth-button auth-button-secondary" onClick={() => void onSignOut()}>
            Sign out
          </button>
        ) : (
          <button type="button" className="auth-button" onClick={() => void onSignIn()} disabled={!isConfigured || isLoading}>
            {isLoading ? 'Loading...' : 'Sign in with Discord'}
          </button>
        )}
      </div>
    </section>
  )
}
