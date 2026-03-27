import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { leaders } from '../data/content'

function LeaderCard({ name, role, affiliation }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  return (
    <div className="leader-card">
      <div className="leader-avatar">{initials}</div>
      <h3>{name}</h3>
      <div className="role">{role}</div>
      <div className="affiliation">{affiliation}</div>
    </div>
  )
}

export default function Leadership() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Leadership" subtitle="Meet our team" />

      <section>
        <div className="container">
          <h2 className="section-title">Executive Leadership</h2>
          <p className="section-subtitle">Guiding KASSTA's mission and vision</p>
          <div className="leader-grid">
            {leaders.executive.map(l => <LeaderCard key={l.name} {...l} />)}
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Directors</h2>
          <p className="section-subtitle">Leading our operational teams</p>
          <div className="leader-grid">
            {leaders.directors.map(l => <LeaderCard key={l.name} {...l} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Advisory Board</h2>
          <p className="section-subtitle">Providing strategic guidance</p>
          <div className="leader-grid" style={{ maxWidth: 600, margin: '0 auto' }}>
            {leaders.advisors.map(l => <LeaderCard key={l.name} {...l} />)}
          </div>
        </div>
      </section>
    </>
  )
}
