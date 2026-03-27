import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import YouTubeCard from '../components/YouTubeCard'
import { webinars, workshop2024Videos, forumVideos, otherTalks } from '../data/content'

export default function Media() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  const allWebinarVideos = webinars.flatMap(w => w.videos || [])

  return (
    <>
      <PageHeader title="Media & Publications" subtitle="News, articles, and resources" />

      <section id="newsletter">
        <div className="container">
          <div className="info-box">
            <h2>2025 KASSTA Newsletter</h2>
            <p>Our annual newsletter covering KASSTA activities, achievements, and upcoming events.</p>
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Webinar Recordings</h2>
          <p className="section-subtitle">Monthly tech webinar recordings</p>
          <div className="yt-grid">
            {allWebinarVideos.slice(0, 6).map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Workshop & Forum Recordings</h2>
          <p className="section-subtitle">Event recordings from workshops and UKC forums</p>
          <div className="yt-grid">
            {[...forumVideos, ...workshop2024Videos.slice(0, 3)].map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Featured Talks</h2>
          <div className="yt-grid">
            {otherTalks.map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="https://www.youtube.com/@KASSTA_USA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View All on YouTube
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Media Coverage</h2>
          <p className="section-subtitle">KASSTA in the news</p>
          <div className="media-grid">
            <div className="media-card">
              <h3>WISET Interview</h3>
              <p>Features Dr. Eun-Suk Seo (KASSTA President) on her journey in astrophysics at the University of Maryland.</p>
              <a href="https://www.instagram.com/p/DMO9SSozXfM/?img_index=1" target="_blank" rel="noopener noreferrer">Read on Instagram</a>
            </div>
            <div className="media-card">
              <h3>KSEA e-Letters (May 2025)</h3>
              <p>Highlights KASSTA Webinar Series with speakers from NASA, KARI, York University, AFRL, Caltech, and Pyramid Space Inc.</p>
              <a href="https://ksealetters.com/2025/05/21/kassta-webinar-series/" target="_blank" rel="noopener noreferrer">Read Article</a>
            </div>
            <div className="media-card">
              <h3>Workshop Coverage (Feb 2025)</h3>
              <p>Featured in KSEA e-Letter covering autonomous systems, space exploration technologies from the Caltech workshop.</p>
              <a href="https://ksealetters.com/2025/02/01/workshop-on-aerospace-science-and-technology/" target="_blank" rel="noopener noreferrer">Read Article</a>
            </div>
            <div className="media-card">
              <h3>Johns Hopkins Heart Tissue Project</h3>
              <p>NASA collaboration sending tissue specimens to space, focusing on mitochondrial changes in microgravity.</p>
            </div>
            <div className="media-card">
              <h3>JWST Cassiopeia A Observations</h3>
              <p>Supernova remnant research featuring Jeonghee Rho and collaborative researchers on dust formation.</p>
            </div>
            <div className="media-card">
              <h3>Dong-A Science Interview</h3>
              <p>Interview with Dr. Eun-Suk Seo on international scientific cooperation and institutional support for researchers.</p>
              <a href="https://m.dongascience.com/news.php?idx=66454" target="_blank" rel="noopener noreferrer">Read Article (Korean)</a>
            </div>
            <div className="media-card">
              <h3>KASSTA in KSEA Newsletter (June 2024)</h3>
              <p>Highlights KASSTA's founding activities and achievements in its inaugural year.</p>
              <a href="https://ksealetters.com/2024/06/03/korean-american-aerospace-science-and-technology-association-kassta/" target="_blank" rel="noopener noreferrer">Read Article</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
