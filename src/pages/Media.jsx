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

      <section id="kassta-letters">
        <div className="container">
          <h2 className="section-title">KASSTA Letters</h2>
          <p className="section-subtitle">Our publication covering KASSTA activities, achievements, and upcoming events</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
            <div className="card" style={{ textAlign: 'center', width: 240 }}>
              <a href={import.meta.env.BASE_URL + 'kassta-letters-vol1-no2.pdf'} target="_blank" rel="noopener noreferrer">
                <img src={import.meta.env.BASE_URL + 'images/newsletter-vol1-no2.jpg'} alt="KASSTA Letters Vol.1 No.2" className="card-img" style={{ objectFit: 'cover' }} />
              </a>
              <div className="card-body">
                <h3>Vol.1 No.2</h3>
                <a href={import.meta.env.BASE_URL + 'kassta-letters-vol1-no2.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Download PDF</a>
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center', width: 240 }}>
              <a href={import.meta.env.BASE_URL + 'kassta-letters-vol1-no1.pdf'} target="_blank" rel="noopener noreferrer">
                <img src={import.meta.env.BASE_URL + 'images/newsletter-2024.jpg'} alt="KASSTA Letters Vol.1 No.1" className="card-img" style={{ objectFit: 'cover' }} />
              </a>
              <div className="card-body">
                <h3>Vol.1 No.1</h3>
                <a href={import.meta.env.BASE_URL + 'kassta-letters-vol1-no1.pdf'} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Download PDF</a>
              </div>
            </div>
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

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Highlights from KASSTA events</p>
          <div className="card-grid">
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/ukc-forum-2025.jpg'} alt="2025 UKC AeroSpace Forum group photo" className="card-img" />
              <div className="card-body">
                <h3>2025 UKC AeroSpace Forum</h3>
                <p>Photos from the 2025 UKC AeroSpace Forum.</p>
                <a href="https://drive.google.com/drive/folders/1U5MFPIbMJTDZCqfCxm-lNiaRkdSvU7z4" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>View Photos</a>
              </div>
            </div>
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/workshop-group.jpg'} alt="Workshop group photo" className="card-img" />
              <div className="card-body">
                <h3>KOR-US Joint Workshop at Caltech</h3>
                <p>70 scientists gathered for three days of collaboration, December 2024.</p>
              </div>
            </div>
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/conference-collage.jpg'} alt="Conference highlights" className="card-img" />
              <div className="card-body">
                <h3>Conference Highlights</h3>
                <p>Presentations and networking at KASSTA events.</p>
              </div>
            </div>
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/korea-visit.jpg'} alt="Korean Space Environment Center" className="card-img" />
              <div className="card-body">
                <h3>Korean Space Environment Center Visit</h3>
                <p>KASSTA delegation visiting space facilities in Korea.</p>
              </div>
            </div>
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/space-center-visit.jpg'} alt="Space center visit" className="card-img" />
              <div className="card-body">
                <h3>Space Weather Monitoring Center</h3>
                <p>Tour of space weather research facilities.</p>
              </div>
            </div>
            <div className="card">
              <img src={import.meta.env.BASE_URL + 'images/presenter.jpg'} alt="Presenter" className="card-img" />
              <div className="card-body">
                <h3>The Search for Life Beyond Earth</h3>
                <p>A talk at the KASSTA workshop on astrobiology research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
