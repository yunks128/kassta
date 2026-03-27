import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import EventItem from '../components/EventItem'
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
              <EventItem key={i} date={a.date} title={a.title} meta={a.meta} desc={a.desc} link={a.link} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
