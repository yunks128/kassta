import { Link } from 'react-router-dom'
import YouTubeCard from '../components/YouTubeCard'
import { webinars } from '../data/content'

export default function Home() {
  const recentVideos = webinars
    .filter(w => w.videos && w.videos.length > 0)
    .slice(0, 3)
    .flatMap(w => w.videos)
    .slice(0, 6)

  return (
    <>
      <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(11,29,58,0.7), rgba(26,82,118,0.7)), url(${import.meta.env.BASE_URL}images/hero-banner.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
          <h2 className="section-title">Upcoming Event</h2>
          <div className="info-box" style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap', maxWidth: 900, margin: '0 auto' }}>
            <img src={import.meta.env.BASE_URL + 'images/webinar-apr2026.jpg'} alt="KASSTA Regular Meeting April 2026" style={{ width: 280, borderRadius: 8, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 280 }}>
              <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>Upcoming</span>
              <h2 style={{ color: 'var(--primary)', marginBottom: 8 }}>KASSTA Regular Meeting</h2>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 12 }}>Friday, April 24, 2026 | 4:00 PM PT / 7:00 PM ET</p>
              <p style={{ marginBottom: 8 }}><strong>Woosang Park</strong> (Postdoctoral Researcher, Texas A&amp;M University)<br />Dynamic Nonlinearity and Model Fidelity Effects on Uncorrelated Track Processing</p>
              <p style={{ marginBottom: 16 }}><strong>Hyomin Kim</strong> (Assistant Professor, NJIT)<br />Space Weather: How Sun-Earth Interactions Affect Human Technology</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScZBsZd4_LEmGZGb0j0TRpSUqjGAuURaHVNUeiVGkdkNIeQ3g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register</a>
                <a href="https://ufl.zoom.us/j/94786118635?pwd=bB2CytlDfqM3KZLXPUXgWh7CYWcTxa.1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Zoom Link</a>
                <a href="https://open.kakao.com/o/gnsHNZag" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>KakaoTalk</a>
                <a href={import.meta.env.BASE_URL + 'files/KASSTA-Webinar-04-24-2026.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>View Flyer (PDF)</a>
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
            {recentVideos.map(v => (
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
