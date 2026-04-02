import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import YouTubeCard from '../components/YouTubeCard'
import { workshop2024Videos, forumVideos } from '../data/content'

export default function Activities() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      <PageHeader title="Activities" subtitle="Workshops, Forums, and Events" />

      <section id="workshop2025">
        <div className="container">
          <img src={import.meta.env.BASE_URL + 'images/workshop2025-banner.jpg'} alt="Workshop 2025" style={{ width: '100%', borderRadius: 10, marginBottom: 24 }} />
          <div className="info-box">
            <h2>International Collaboration Workshop on Space Science &amp; Technology 2025</h2>
            <p><strong>Dates:</strong> October 26-29, 2025</p>
            <p><strong>Location:</strong> Jeju Shinhwa World, South Korea</p>
            <p><strong>Organizers:</strong> Korean Space Science Society (KSSS), KASSTA, NASA Jet Propulsion Laboratory</p>
            <p><strong>Supporting:</strong> Korea Aerospace Research Institute (KARA)</p>
            <p style={{ marginTop: 16 }}>This workshop brings together leading minds from across the globe to foster collaboration, share cutting-edge research, and forge partnerships advancing space exploration. Programming includes keynote addresses from international space agency officials, technical sessions on satellite systems and Earth observation, networking opportunities, and technology exhibitions.</p>
            <p style={{ marginTop: 12 }}><strong>Target Attendees:</strong> Researchers, scientists, industry representatives, and policymakers interested in space science and technology advancement.</p>
            <img src={import.meta.env.BASE_URL + 'images/workshop-group.jpg'} alt="Workshop 2025 group photo" style={{ width: '100%', borderRadius: 8, marginTop: 20 }} />
          </div>
        </div>
      </section>

      <section className="alt-bg" id="forum2025">
        <div className="container">
          <div className="info-box">
            <h2>UKC 2025 AeroSpace Forum</h2>
            <p><strong>Date:</strong> August 7, 2025 (Thursday)</p>
            <p><strong>Time:</strong> 11:00 AM - 1:00 PM</p>
            <p><strong>Location:</strong> Grand Ballroom E, Atlanta, GA</p>
            <p style={{ marginTop: 16 }}>Part of the UKC 2025 conference in Atlanta, GA (August 5-9, 2025).</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcrHIOBcdmIAuFqhuS6x73Orr4SHrqWwe0VYXhN8J1Yvw4Sw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>Apply Now</a>
          </div>
          <h3 className="section-title" style={{ marginTop: 40, fontSize: '1.3rem' }}>UKC Forum Recordings</h3>
          <div className="yt-grid" style={{ marginTop: 20 }}>
            {forumVideos.map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="workshop2024">
        <div className="container">
          <div className="info-box">
            <h2>KASSTA Workshop 2024</h2>
            <p><strong>Dates:</strong> December 15-17, 2024</p>
            <p><strong>Location:</strong> California Institute of Technology (Caltech), Pasadena, CA</p>
            <p><strong>Organizers:</strong> KASSTA, Korean Space Science Society (KSSS), and NASA JPL</p>
            <p style={{ marginTop: 16 }}>This three-day workshop fostered collaboration between participating organizations, attracting 70 scientists from across the aerospace community to share research and forge new partnerships.</p>
          </div>
          <h3 className="section-title" style={{ marginTop: 40, fontSize: '1.3rem' }}>Workshop 2024 Recordings</h3>
          <div className="yt-grid" style={{ marginTop: 20 }}>
            {workshop2024Videos.map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg" id="forum2024">
        <div className="container">
          <div className="info-box">
            <h2>UKC 2024 AeroSpace Forum</h2>
            <p><strong>Date:</strong> Friday, August 23, 2024</p>
            <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
            <p><strong>Location:</strong> Cypress A</p>
            <p style={{ marginTop: 16 }}>Part of the UKC 2024 KSEA Forum in San Francisco.</p>
          </div>
        </div>
      </section>
    </>
  )
}
