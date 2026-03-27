import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import EventItem from '../components/EventItem'
import YouTubeCard from '../components/YouTubeCard'
import { webinars, youtubeVideos } from '../data/content'

export default function Webinars() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const webinarVideos = youtubeVideos.filter(v =>
    v.title.toLowerCase().includes('webinar') ||
    v.title.toLowerCase().includes('dr.') ||
    v.title.toLowerCase().includes('prof.')
  )

  return (
    <>
      <PageHeader title="Webinar Series" subtitle="Monthly talks featuring leading aerospace experts" />

      <section>
        <div className="container">
          <h2 className="section-title">Upcoming & Past Webinars</h2>
          <p className="section-subtitle">Expert talks on cutting-edge aerospace research</p>
          <div className="event-list">
            {webinars.map((w, i) => (
              <EventItem
                key={i}
                date={w.date}
                title={w.title}
                meta={w.speakers}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Webinar Recordings</h2>
          <p className="section-subtitle">Watch past webinars on YouTube</p>
          <div className="yt-grid">
            {webinarVideos.map(v => (
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
    </>
  )
}
