import type { FormEvent } from 'react'

type SearchFormProps = {
  query: string
  placeholder: string
  inputMessage: string
  isLoading: boolean
  isSubmitDisabled: boolean
  retryCooldownSeconds: number
  onQueryChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function SearchForm({
  query,
  placeholder,
  inputMessage,
  isLoading,
  isSubmitDisabled,
  retryCooldownSeconds,
  onQueryChange,
  onSubmit,
}: SearchFormProps) {
  const isRetryLocked = retryCooldownSeconds > 0
  const retryMessage = isRetryLocked
    ? `Search unavailable for ${retryCooldownSeconds} more seconds.`
    : undefined

  return (
    <section className="search-stage">
      <form className="search-box" onSubmit={onSubmit}>
        <input
          aria-label="Riot ID"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button
          type="submit"
          className={isLoading ? 'is-loading' : undefined}
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
      </form>

      {inputMessage ? <p className="input-message">{inputMessage}</p> : null}
    </section>
  )
}
