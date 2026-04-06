import { useEffect, useRef, useState } from 'react'
import type { AuthProfile } from '../types'

type AccountMenuButtonProps = {
  isConfigured: boolean
  isAuthLoading: boolean
  isSignedIn: boolean
  isSyncingProfile: boolean
  profile: AuthProfile | null
  onSignIn: () => Promise<void>
  onSignOut: () => Promise<void>
}

export function AccountMenuButton({
  isConfigured,
  isAuthLoading,
  isSignedIn,
  isSyncingProfile,
  profile,
  onSignIn,
  onSignOut,
}: AccountMenuButtonProps) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const accountMenuRef = useRef<HTMLDivElement | null>(null)
  const connectedRiotName = profile?.riotGameName && profile.riotTagLine
    ? `${profile.riotGameName}#${profile.riotTagLine}`
    : null
  const authLabel = isSignedIn
    ? connectedRiotName ?? profile?.discordUsername ?? (isSyncingProfile ? 'Syncing...' : 'Connected')
    : isAuthLoading
      ? 'Loading...'
      : 'Sign in'

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
  )
}
