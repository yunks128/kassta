import { Link } from 'react-router-dom'
import YouTubeCard from '../components/YouTubeCard'
import { youtubeVideos } from '../data/content'

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>KASSTA</h1>
          <p>Advancing U.S.-Korea collaboration in aerospace science and technology</p>
          <div className="hero-buttons">
            <Link to="/membership" className="btn btn-primary">Join KASSTA</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Join our next webinar, workshop, or forum</p>
          <div className="card-grid">
            <div className="card">
              <div className="card-body">
                <span className="tag">Webinar</span>
                <h3>KASSTA Webinar - March 20, 2026</h3>
                <div className="meta">Wednesday | 4:00 PM PT / 7:00 PM ET | Virtual</div>
                <p>Speakers: John C. Mankins (Space Solar Power) &amp; Dae-Young Lee (Soft Robotics for Space). Moderator: Soyeon Yi</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3LW158m2I7dApEz0zpPaRyQiLAHAPg82cOzwiXaoNN-HEgg/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16, fontSize: '0.85rem', padding: '8px 20px' }}>Register</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="tag">Workshop</span>
                <h3>Workshop 2025 - Jeju, South Korea</h3>
                <div className="meta">October 26-29, 2025</div>
                <p>International collaboration workshop on space science &amp; technology. Organized by KSSS, KASSTA, and NASA JPL.</p>
                <Link to="/activities#workshop2025" className="btn btn-secondary" style={{ marginTop: 16, fontSize: '0.85rem', padding: '8px 20px' }}>Details</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="tag">Forum</span>
                <h3>UKC 2025 AeroSpace Forum</h3>
                <div className="meta">August 7, 2025 | 11:00 AM - 1:00 PM | Atlanta, GA</div>
                <p>Grand Ballroom E, Atlanta, GA. Part of UKC 2025 conference.</p>
                <Link to="/activities#forum2025" className="btn btn-secondary" style={{ marginTop: 16, fontSize: '0.85rem', padding: '8px 20px' }}>Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">About KASSTA</h2>
          <p className="section-subtitle">Korean American AeroSpace Science and Technology Association</p>
          <div className="info-box" style={{ maxWidth: 800, margin: '0 auto' }}>
            <p>KASSTA is a 501(c)(3) nonprofit organization established in 2024 to strengthen U.S.-Korea collaboration in aerospace science and technology. We bring together researchers, engineers, and professionals through monthly webinars, international workshops, and forums.</p>
            <p style={{ marginTop: 16 }}>Our members include scientists from NASA, KARI, Boeing, universities, and leading aerospace companies, working together to advance space exploration for both nations.</p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-block' }}>Read President's Message</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Recent Webinar Recordings</h2>
          <p className="section-subtitle">Watch past webinars on our YouTube channel</p>
          <div className="yt-grid">
            {youtubeVideos.slice(0, 6).map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/webinars" className="btn btn-secondary">View All Webinars</Link>
          </div>
        </div>
      </section>
    </>
  )
}
