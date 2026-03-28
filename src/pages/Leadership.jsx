import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { leaders } from '../data/content'

function LeaderCard({ name, role, affiliation, img }) {
  return (
    <div className="leader-card">
      {img ? (
        <img
          src={import.meta.env.BASE_URL + `images/leaders/${img}.jpg`}
          alt={name}
          className="leader-photo"
        />
      ) : (
        <div className="leader-avatar">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
      <h3>{name}</h3>
      <div className="role">{role}</div>
      <div className="affiliation">{affiliation.split('\n').map((line, i) => (
        <span key={i}>{line}{i < affiliation.split('\n').length - 1 && <br />}</span>
      ))}</div>
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
