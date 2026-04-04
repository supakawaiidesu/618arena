import type { LookupResult } from '../../lookup/types'

type LookupStatusProps = {
  result: LookupResult | null
  errorMessage: string | null
}

export function LookupStatus({ result, errorMessage }: LookupStatusProps) {
  return (
    <>
      {result?.status === 'offline' ? <p className="status-text">{result.message}</p> : null}
      {errorMessage ? <p className="status-text error">{errorMessage}</p> : null}
    </>
  )
}
