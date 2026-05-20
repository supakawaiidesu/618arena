import { Link } from '@tanstack/react-router'

type SiteSection = 'live' | 'stats' | 'wiki'

type SiteSectionNavProps = {
  activeSection: SiteSection
}

export function SiteSectionNav({ activeSection }: SiteSectionNavProps) {
  return (
    <nav className="everything-nav" aria-label="Site sections">
      <Link to="/" className={`everything-nav-item${activeSection === 'live' ? ' is-active' : ''}`}>
        Live Game
      </Link>
      <Link to="/wiki" className={`everything-nav-item${activeSection === 'wiki' ? ' is-active' : ''}`}>
        Wiki
      </Link>
      <Link to="/stats" className={`everything-nav-item${activeSection === 'stats' ? ' is-active' : ''}`}>
        Stats
      </Link>
    </nav>
  )
}
