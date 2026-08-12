import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Ordered by visitor intent, not alphabetically: what's happening now, who we
// are, what we do, what we've published, then the two asks (join, give) last.
const navItems = [
  { label: 'Home', to: '/' },
  // Label is 'News & Events'; the path stays /announcements so indexed URLs hold.
  { label: 'News & Events', to: '/announcements' },
  {
    label: 'About', to: '/about',
    children: [
      { label: "President's Message", to: '/about' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Bylaws', to: '/about#bylaws' },
      { label: 'Partners & Sponsors', to: '/about#partners' },
    ],
  },
  {
    label: 'Activities', to: '/activities',
    children: [
      { label: 'Webinar Series', to: '/webinars' },
      { label: 'UKC 2026 Signature Symposium', to: '/activities#signatureforum2026' },
      { label: 'Workshop 2025', to: '/activities#workshop2025' },
      { label: 'AeroSpace Forum 2025', to: '/activities#forum2025' },
      { label: 'Workshop 2024', to: '/activities#workshop2024' },
      { label: 'AeroSpace Forum 2024', to: '/activities#forum2024' },
    ],
  },
  {
    label: 'Media', to: '/media',
    children: [
      { label: 'Video Recordings', to: '/media#recordings' },
      { label: 'Member Spotlights', to: '/media#member-spotlights' },
      { label: 'KASSTA Letters', to: '/media#kassta-letters' },
      { label: 'Media Coverage', to: '/media#media-coverage' },
      { label: 'Photo Gallery', to: '/media#photo-gallery' },
    ],
  },
  { label: 'Students', to: '/students' },
  { label: 'Membership', to: '/membership' },
  { label: 'Donation', to: '/donation' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDd, setOpenDd] = useState(null)
  const location = useLocation()

  const matches = (to) => {
    const path = to.split('#')[0]
    return location.pathname === path || (path === '/' && location.pathname === '')
  }

  // A parent also lights up on its children's own pages (e.g. About on /leadership).
  const isActive = (item) => matches(item.to) || (item.children || []).some(c => matches(c.to))

  const handleDdClick = (e, idx) => {
    if (window.innerWidth <= 900) {
      e.preventDefault()
      setOpenDd(openDd === idx ? null : idx)
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDd(null)
  }

  return (
    <header>
      <div className="nav-wrapper">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="KASSTA" className="logo-full-img" />
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav>
          <ul className={menuOpen ? 'open' : ''}>
            {navItems.map((item, idx) => (
              <li key={item.label} className={openDd === idx ? 'dd-open' : ''}>
                {item.children ? (
                  <>
                    <a
                      href="#"
                      className={isActive(item) ? 'active' : ''}
                      onClick={(e) => handleDdClick(e, idx)}
                    >
                      {item.label}
                    </a>
                    <div className="dropdown">
                      {item.children.map((child) => (
                        <Link key={child.label} to={child.to} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={isActive(item) ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
