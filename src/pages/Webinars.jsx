import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import YouTubeCard from '../components/YouTubeCard'
import { webinars } from '../data/content'

export default function Webinars() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Webinar Series" subtitle="Monthly talks featuring leading aerospace experts" />

      <section>
        <div className="container">
          <div className="event-list">
            {webinars.map((w, i) => (
              <div key={i} className="event-item" style={{ flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 24 }}>
                  <div className="event-date-box">
                    <span className="month">{w.date.month}</span>
                    <span className="day">{w.date.day}</span>
                    <span className="year">{w.date.year}</span>
                  </div>
                  <div className="event-details">
                    <h3>{w.title}</h3>
                    <p>{w.speakers}</p>
                  </div>
                </div>
                {w.videos && w.videos.length > 0 && (
                  <div className="yt-grid" style={{ marginTop: 16 }}>
                    {w.videos.map(v => (
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
