import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import {
  DEFAULT_QUERY,
  RIOT_OUTAGE_MESSAGE,
  RIOT_OUTAGE_RETRY_SECONDS,
} from '../lookup/constants'
import { lookupPlayer } from '../lookup/api'
import { parseRiotId } from '../lookup/riotId'
import type { LookupResult } from '../lookup/types'
import { usePlayerVotes } from '../votes/usePlayerVotes'
import { LookupStatus } from './components/LookupStatus'
import { PlayerGrid } from './components/PlayerGrid'
import { SearchForm } from './components/SearchForm'

export function HomePage() {
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const [result, setResult] = useState<LookupResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [retryCooldownSeconds, setRetryCooldownSeconds] = useState(0)
  const { playerGameVotes, playerVotes, toggleVote } = usePlayerVotes()

  useEffect(() => {
    if (retryCooldownSeconds <= 0) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setRetryCooldownSeconds((currentSeconds) => Math.max(currentSeconds - 1, 0))
    }, 1000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [retryCooldownSeconds])

  const hasOutput = isLoading || result !== null
  const liveResult = result?.status === 'live' ? result : null
  const isRetryLocked = retryCooldownSeconds > 0
  const isSubmitDisabled = isLoading || isRetryLocked
  const errorMessage =
    result?.status === 'error'
      ? result.source === 'riot-outage' && isRetryLocked
        ? `${RIOT_OUTAGE_MESSAGE} Try again in ${retryCooldownSeconds}s.`
        : result.message
      : null

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isLoading || isRetryLocked) {
      return
    }

    const parsed = parseRiotId(query)

    if (!parsed) {
      setInputMessage('you may have forget the tagline (values after the #)')
      setResult({
        status: 'error',
        lookup: query.trim() || DEFAULT_QUERY,
        message: 'Use the format GameName#TagLine.',
        source: 'generic',
      })
      return
    }

    const lookup = `${parsed.gameName}#${parsed.tagLine}`
    setInputMessage('')
    setQuery(lookup)
    setIsLoading(true)

    try {
      const nextResult = await lookupPlayer(parsed)
      setResult(nextResult)

      if (nextResult.status === 'error' && nextResult.source === 'riot-outage') {
        setRetryCooldownSeconds(RIOT_OUTAGE_RETRY_SECONDS)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleQueryChange = (value: string) => {
    setQuery(value)

    if (inputMessage && value.includes('#')) {
      setInputMessage('')
    }
  }

  return (
    <main className={`page-shell${hasOutput ? ' has-output' : ''}`}>
      <SearchForm
        query={query}
        placeholder={DEFAULT_QUERY}
        inputMessage={inputMessage}
        isLoading={isLoading}
        isSubmitDisabled={isSubmitDisabled}
        retryCooldownSeconds={retryCooldownSeconds}
        onQueryChange={handleQueryChange}
        onSubmit={handleSubmit}
      />

      {liveResult ? (
        <PlayerGrid
          result={liveResult}
          playerGameVotes={playerGameVotes}
          playerVotes={playerVotes}
          onVote={toggleVote}
        />
      ) : null}

      <LookupStatus result={result} errorMessage={errorMessage} />
    </main>
  )
}
