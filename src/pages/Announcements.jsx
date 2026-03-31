import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import YouTubeCard from '../components/YouTubeCard'
import { announcements } from '../data/content'

export default function Announcements() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Announcements" subtitle="Latest news and upcoming events" />
      <section>
        <div className="container">
          <div className="event-list">
            {announcements.map((a, i) => (
              <div key={i} className="event-item" style={{ flexDirection: 'column' }}>
                <div className="event-inner" style={{ display: 'flex', gap: 24 }}>
                  <div className="event-date-box">
                    <span className="month">{a.date.month}</span>
                    <span className="day">{a.date.day}</span>
                    <span className="year">{a.date.year}</span>
                  </div>
                  <div className="event-details">
                    <h3>{a.title}</h3>
                    <div className="meta">{a.meta}</div>
                    <p>{a.desc}</p>
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 12, display: 'inline-block', fontSize: '0.85rem', padding: '8px 20px' }}>
                        Register
                      </a>
                    )}
                  </div>
                </div>
                {a.videos && a.videos.length > 0 && (
                  <div className="yt-grid" style={{ marginTop: 16 }}>
                    {a.videos.map(v => (
                      <YouTubeCard key={v.id} id={v.id} title={v.title} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
