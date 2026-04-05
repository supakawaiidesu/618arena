import { type FormEvent, useEffect, useRef, useState } from 'react'
import type { AuthProfile } from '../../auth/types'

type SearchFormProps = {
  query: string
  placeholder: string
  inputMessage: string
  isLoading: boolean
  isSubmitDisabled: boolean
  retryCooldownSeconds: number
   isConfigured: boolean
   isAuthLoading: boolean
   isSignedIn: boolean
   isSyncingProfile: boolean
   profile: AuthProfile | null
   authErrorMessage: string | null
  onQueryChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
   onSignIn: () => Promise<void>
   onSignOut: () => Promise<void>
}

export function SearchForm({
  query,
  placeholder,
  inputMessage,
  isLoading,
  isSubmitDisabled,
  retryCooldownSeconds,
  isConfigured,
  isAuthLoading,
  isSignedIn,
  isSyncingProfile,
  profile,
  authErrorMessage,
  onQueryChange,
  onSubmit,
  onSignIn,
  onSignOut,
}: SearchFormProps) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const accountMenuRef = useRef<HTMLDivElement | null>(null)
  const isRetryLocked = retryCooldownSeconds > 0
  const retryMessage = isRetryLocked
    ? `Search unavailable for ${retryCooldownSeconds} more seconds.`
    : undefined
  const connectedRiotName = profile?.riotGameName && profile.riotTagLine
    ? `${profile.riotGameName}#${profile.riotTagLine}`
    : null
  const authLabel = isSignedIn
    ? connectedRiotName ?? profile?.discordUsername ?? (isSyncingProfile ? 'Syncing...' : 'Connected')
    : isAuthLoading
      ? 'Loading...'
      : 'Sign in'
  const statusMessages = [
    inputMessage ? { text: inputMessage, tone: 'muted' } : null,
    isSyncingProfile ? { text: 'Refreshing your Discord connections.', tone: 'muted' } : null,
    authErrorMessage ? { text: authErrorMessage, tone: 'error' } : null,
  ].filter((message) => message !== null)

  useEffect(() => {
    if (!isAccountMenuOpen) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (accountMenuRef.current?.contains(event.target as Node)) {
        return
      }

      setIsAccountMenuOpen(false)
    }

    window.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isAccountMenuOpen])

  useEffect(() => {
    if (!isSignedIn) {
      setIsAccountMenuOpen(false)
    }
  }, [isSignedIn])

  const handleAuthClick = () => {
    if (isSignedIn) {
      setIsAccountMenuOpen((currentValue) => !currentValue)
      return
    }

    void onSignIn()
  }

  const handleSignOutClick = () => {
    setIsAccountMenuOpen(false)
    void onSignOut()
  }

  return (
    <section className="everything-stage">
      <form className="everything-bar" onSubmit={onSubmit}>
        <nav className="everything-nav" aria-label="Site sections">
          <span className="everything-nav-item is-active">Live Game</span>
          <span className="everything-nav-item">Wiki</span>
          <span className="everything-nav-item">Stats</span>
        </nav>

        <input
          className="everything-search-input"
          aria-label="Riot ID"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button
          type="submit"
          className={`everything-search-button${isLoading ? ' is-loading' : ''}`}
          disabled={isSubmitDisabled}
          aria-label={retryMessage}
          title={retryMessage}
        >
          {isLoading ? (
            <span className="loading-dots" aria-label="Loading">
              <span />
              <span />
              <span />
            </span>
          ) : isRetryLocked ? (
            <span>{retryCooldownSeconds}s</span>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M5 12h12m-5-5 5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          )}
        </button>

        <div className="everything-auth-stack" ref={accountMenuRef}>
          <button
            type="button"
            className={`everything-auth${isSignedIn ? ' is-signed-in' : ''}${isAccountMenuOpen ? ' is-open' : ''}${isAuthLoading ? ' is-auth-loading' : ''}`}
            disabled={!isSignedIn && (!isConfigured || isAuthLoading)}
            onClick={handleAuthClick}
            aria-expanded={isSignedIn ? isAccountMenuOpen : undefined}
            aria-haspopup={isSignedIn ? 'dialog' : undefined}
            title={
              isSignedIn
                ? 'Open account menu'
                : !isConfigured
                  ? 'Add Supabase environment variables to enable Discord sign-in.'
                  : isAuthLoading
                    ? 'Loading...'
                    : 'Sign in with Discord'
            }
          >
            {authLabel}
          </button>
          {isSignedIn && isAccountMenuOpen ? (
            <div className="account-menu-popup" role="dialog" aria-label="Account actions">
              <button type="button" className="account-menu-action" onClick={handleSignOutClick}>
                Sign out
              </button>
            </div>
          ) : null}
        </div>
      </form>

      {statusMessages.length > 0 ? (
        <div className="bar-messages">
          {statusMessages.map((message) => (
            <p key={message.text} className={`bar-message ${message.tone === 'error' ? 'is-error' : ''}`}>
              {message.text}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  )
}
