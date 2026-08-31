import { Link } from 'react-router-dom'
import YouTubeCard from '../components/YouTubeCard'
import { webinars, testimonials } from '../data/content'
import { links } from '../data/links'

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
            <img src={import.meta.env.BASE_URL + 'images/webinar-sep2026.jpg'} alt="KASSTA Webinar flyer, September 16, 2026" style={{ width: 280, borderRadius: 8, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 280 }}>
              <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>Upcoming</span>
              <h2 style={{ color: 'var(--primary)', marginBottom: 8 }}>KASSTA Webinar</h2>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 12 }}>Wednesday, September 16, 2026 | 4:00 PM PT / 7:00 PM ET | Virtual</p>
              <p style={{ marginBottom: 8 }}><strong>Sung Joo Kang, 항성</strong> (Ph.D. in Astrophysics; Director, MORE SCIENCE Co., Ltd.; science YouTuber and creator of &lt;안될과학&gt;)<br />Why Do We Talk About Space? &mdash; When Technology Becomes a Story</p>
              <p style={{ marginBottom: 16 }}>Moderated by <strong>Soyeon Yi</strong> (KASSTA Public Relations Director, former astronaut). Gift cards are planned for selected participants &mdash; to qualify, <Link to="/membership">join KASSTA</Link> and choose KASSTA as your APS if you are a KSEA member.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchmhttnbwuu6MECxNNtmjz8qV8Kdo1_tX37MN7b4TzyaAzlQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register</a>
                <a href="https://ufl.zoom.us/j/94786118635?pwd=bB2CytlDfqM3KZLXPUXgWh7CYWcTxa.1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Zoom Link</a>
                <a href={links.kakaoOpenChat} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>KakaoTalk</a>
                <a href={import.meta.env.BASE_URL + 'files/KASSTA-Webinar-09-16-2026.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>View Flyer (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Latest Event</h2>
          <div className="info-box" style={{ maxWidth: 1000, margin: '0 auto' }}>
            <img src={import.meta.env.BASE_URL + 'images/ukc-forum-2026.jpg'} alt="UKC 2026 AeroSpace Signature Symposium group photo" style={{ width: '100%', borderRadius: 8, display: 'block', marginBottom: 20 }} />
            <span className="tag" style={{ marginBottom: 12, display: 'inline-block' }}>Just Held</span>
            <h2 style={{ color: 'var(--primary)', marginBottom: 8 }}>UKC 2026 AeroSpace Signature Symposium &mdash; Shaping the Future of Space</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 12 }}>Thursday, August 6, 2026 | 10:15 AM - 12:00 PM | International Ballroom, Omni Orlando Resort at ChampionsGate, FL</p>
            <p style={{ marginBottom: 12 }}>KASSTA hosted the AeroSpace Signature Symposium at UKC 2026 in Orlando, Florida, offering a comprehensive perspective on the future of space through advances in human spaceflight, soft robotics, aerospace engineering, and next-generation space computing.</p>
            <p style={{ marginBottom: 8 }}><strong>Chair:</strong> Eun-Suk Seo (President of KASSTA, University of Maryland)</p>
            <p style={{ marginBottom: 16 }}><strong>Speakers:</strong> Soyeon Yi (Astronaut, SPEX), Dae Young Lee (KAIST), Eun Jung Chae (CSU Long Beach), Kyongsik Yun (NASA JPL)</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/activities#signatureforum2026" className="btn btn-primary">Symposium Details</Link>
              <a href="https://youtu.be/Pv9E0NDTkAM" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch UKC 2026 Day 1</a>
              <a href={import.meta.env.BASE_URL + 'files/UKC-2026-AeroSpace-Signature-Symposium.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>Program (PDF)</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">About KASSTA</h2>
          <p className="section-subtitle">Korean American AeroSpace Science and Technology Association</p>
          <div className="info-box" style={{ maxWidth: 800, margin: '0 auto' }}>
            <p>KASSTA is a 501(c)(3) nonprofit organization established in 2024 to strengthen U.S.-Korea collaboration in aerospace science and technology. We bring together researchers, engineers, and professionals through monthly webinars, international workshops, and forums.</p>
            <p style={{ marginTop: 16 }}>Our members include scientists from NASA, KARI, Boeing, universities, and leading aerospace companies, working together to advance space exploration for both nations.</p>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Link to="/about" className="btn btn-primary">Read President's Message</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-join">
        <div className="container">
          <h2 className="section-title">A Resource at Every Career Stage</h2>
          <p className="section-subtitle">From first conference talk to leading international collaborations &mdash; how members put KASSTA to work</p>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="testimonial-stage">{t.stage}</span>
                <blockquote>{t.quote}</blockquote>
                <div className="testimonial-author">
                  <span className="name">{t.name}</span>
                  <span className="role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/membership" className="btn btn-primary">Join KASSTA</Link>
            <Link to="/students" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>Students &mdash; Join Free</Link>
          </div>
        </div>
      </section>

      <section className="alt-bg">
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
