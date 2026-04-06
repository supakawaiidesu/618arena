import { Link } from '@tanstack/react-router'

type SiteSection = 'live' | 'stats'

type SiteSectionNavProps = {
  activeSection: SiteSection
}

export function SiteSectionNav({ activeSection }: SiteSectionNavProps) {
  return (
    <nav className="everything-nav" aria-label="Site sections">
      <Link to="/" className={`everything-nav-item${activeSection === 'live' ? ' is-active' : ''}`}>
        Live Game
      </Link>
      <span className="everything-nav-item is-disabled" aria-disabled="true">
        Wiki
      </span>
      <Link to="/stats" className={`everything-nav-item${activeSection === 'stats' ? ' is-active' : ''}`}>
        Stats
      </Link>
    </nav>
  )
}
