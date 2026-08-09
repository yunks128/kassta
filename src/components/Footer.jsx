import { Link } from 'react-router-dom'
import { links, subscribeHref } from '../data/links'

// Only accounts that actually exist get a footer link — see src/data/links.js.
const socials = [
  { label: 'YouTube', href: links.youtube },
  { label: 'KakaoTalk Open Chat', href: links.kakaoOpenChat },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Instagram', href: links.instagram },
].filter(s => s.href)

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/announcements">Announcements</Link>
          </div>
          <div>
            <h4>Get Involved</h4>
            <Link to="/students">For Students</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/leadership">Leadership</Link>
          </div>
          <div>
            <h4>Connect</h4>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
            <a href={subscribeHref}>Email Announcements</a>
            <a href={`mailto:${links.email}`}>Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 KASSTA. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
