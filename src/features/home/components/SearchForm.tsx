import type { FormEvent } from 'react'
import { AccountMenuButton } from '../../auth/components/AccountMenuButton'
import type { AuthProfile } from '../../auth/types'
import { SiteSectionNav } from '../../navigation/SiteSectionNav'

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
  const isRetryLocked = retryCooldownSeconds > 0
  const retryMessage = isRetryLocked
    ? `Search unavailable for ${retryCooldownSeconds} more seconds.`
    : undefined
  const statusMessages = [
    inputMessage ? { text: inputMessage, tone: 'muted' } : null,
    isSyncingProfile ? { text: 'Refreshing your Discord connections.', tone: 'muted' } : null,
    authErrorMessage ? { text: authErrorMessage, tone: 'error' } : null,
  ].filter((message) => message !== null)

  return (
    <section className="everything-stage">
      <form className="everything-bar" onSubmit={onSubmit}>
        <SiteSectionNav activeSection="live" />

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

        <AccountMenuButton
          isConfigured={isConfigured}
          isAuthLoading={isAuthLoading}
          isSignedIn={isSignedIn}
          isSyncingProfile={isSyncingProfile}
          profile={profile}
          onSignIn={onSignIn}
          onSignOut={onSignOut}
        />
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
