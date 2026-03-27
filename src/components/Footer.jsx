import { Link } from 'react-router-dom'

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
            <Link to="/membership">Membership</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/leadership">Leadership</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="https://www.youtube.com/@KASSTA_USA" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="mailto:kassta.fd@gmail.com">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2026 KASSTA. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
