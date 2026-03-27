import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About', to: '/about',
    children: [
      { label: "President's Message", to: '/about' },
      { label: 'Bylaws', to: '/about#bylaws' },
      { label: 'Partners & Sponsors', to: '/about#partners' },
    ],
  },
  {
    label: 'Activities', to: '/activities',
    children: [
      { label: 'Webinar Series', to: '/webinars' },
      { label: 'Workshop 2025', to: '/activities#workshop2025' },
      { label: 'AeroSpace Forum 2025', to: '/activities#forum2025' },
      { label: 'Workshop 2024', to: '/activities#workshop2024' },
      { label: 'AeroSpace Forum 2024', to: '/activities#forum2024' },
      { label: 'Newsletter', to: '/media#newsletter' },
    ],
  },
  { label: 'Announcements', to: '/announcements' },
  { label: 'Donation', to: '/donation' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Media', to: '/media' },
  { label: 'Membership', to: '/membership' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDd, setOpenDd] = useState(null)
  const location = useLocation()

  const isActive = (to) => {
    const path = to.split('#')[0]
    return location.pathname === path || (path === '/' && location.pathname === '')
  }

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
          <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="KASSTA" className="logo-img" />
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
                      className={isActive(item.to) ? 'active' : ''}
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
                    className={isActive(item.to) ? 'active' : ''}
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
