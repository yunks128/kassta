import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { links, subscribeHref } from '../data/links'

const benefits = [
  {
    title: 'Monthly Webinars',
    desc: 'Hear directly from researchers at NASA JPL, KAIST, Johns Hopkins, Caltech, KARI, and the aerospace industry — and ask them questions live. Every session is recorded.',
    action: { label: 'Browse past webinars', to: '/webinars' },
  },
  {
    title: 'Present at the UKC AeroSpace Forum',
    desc: 'Graduate students have presented alongside agency and industry speakers at every UKC forum we have run. It is a real conference talk, on a program you can put on a CV.',
    action: { label: 'See past programs', to: '/activities' },
  },
  {
    title: 'SEED Workshop',
    desc: 'KSEA’s early-career development workshop runs just before UKC each year, pairing roughly 80 Ph.D. students, postdocs, and junior faculty with about 15 mentors.',
    action: { label: 'SEED website', href: links.seed },
  },
  {
    title: 'FIRE Symposium',
    desc: 'Fostering Innovation in Rising Experts brings students and early-career professionals across STEM together at UKC for career development and mentorship.',
    action: { label: 'FIRE website', href: links.fire },
  },
  {
    title: 'Scholarships & Awards',
    desc: 'KSEA runs scholarship and award programs open to student members. Selecting KASSTA as your Affiliated Professional Society keeps you eligible at no extra cost.',
    action: { label: 'KSEA scholarships', href: links.kseaScholarships },
  },
  {
    title: 'A Recordings Library',
    desc: 'Forty-plus talks spanning propulsion, soft robotics, space weather, spaceflight biology, quantum sensing, and lunar exploration — free, no membership required.',
    action: { label: 'Watch on YouTube', href: links.youtube },
  },
]

export default function Students() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="For Students" subtitle="Free membership, mentorship, and a way into the aerospace community" />

      <section>
        <div className="container">
          <div className="info-box" style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2>Undergraduate membership is free</h2>
            <p>KASSTA is a 501(c)(3) nonprofit connecting Korean American students, researchers, and engineers across aerospace. If you are an undergraduate, membership costs nothing. Graduate students pay $15 a year &mdash; and if you are already a KSEA member, you can select KASSTA as your Affiliated Professional Society and pay nothing at all.</p>

            <div className="pricing-grid" style={{ marginTop: 24 }}>
              <div className="pricing-card featured">
                <div className="tier">Undergraduate</div>
                <div className="price">Free</div>
              </div>
              <div className="pricing-card">
                <div className="tier">Graduate</div>
                <div className="price">$15<small> /year</small></div>
              </div>
              <div className="pricing-card">
                <div className="tier">Via KSEA</div>
                <div className="price">$0<small> extra</small></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
              <a href={links.membershipForm} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join KASSTA</a>
              <a href={links.kseaMembership} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Join via KSEA</a>
              <Link to="/membership" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>Membership details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">What You Get</h2>
          <p className="section-subtitle">The things worth joining for, not a list of benefits</p>
          <div className="card-grid">
            {benefits.map(b => (
              <div key={b.title} className="card">
                <div className="card-body">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                  {b.action && (
                    b.action.to ? (
                      <Link to={b.action.to} className="btn btn-outline" style={{ marginTop: 14, fontSize: '0.82rem', padding: '7px 16px', color: 'var(--accent)', borderColor: 'var(--accent)' }}>{b.action.label}</Link>
                    ) : (
                      <a href={b.action.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: 14, fontSize: '0.82rem', padding: '7px 16px', color: 'var(--accent)', borderColor: 'var(--accent)' }}>{b.action.label}</a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Stay Connected</h2>
          <p className="section-subtitle">Two ways to hear about the next webinar</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            <div className="info-box" style={{ marginBottom: 0 }}>
              <h3 style={{ marginTop: 0 }}>KakaoTalk Open Chat</h3>
              <p>The fastest way to reach us and other members. Webinar reminders, questions, and informal conversation &mdash; no membership needed to join.</p>
              <a href={links.kakaoOpenChat} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 12 }}>Open KakaoTalk Chat</a>
            </div>
            <div className="info-box" style={{ marginBottom: 0 }}>
              <h3 style={{ marginTop: 0 }}>Email Announcements</h3>
              <p>Get the webinar schedule, UKC calls for abstracts, and workshop announcements in your inbox. Tell us your name, school, and career stage.</p>
              <a href={subscribeHref} className="btn btn-primary" style={{ marginTop: 12 }}>Get Announcements</a>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <div className="info-box" style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2>Bring KASSTA to your campus</h2>
            <p>We are looking for graduate students willing to act as a KASSTA campus liaison &mdash; sharing webinar announcements with your department and Korean student association, and telling us what students at your school actually need from us.</p>
            <p>It is a named volunteer role, not a time sink. If your university has a KSEA Young Generation group, we would especially like to hear from you.</p>
            <a
              href={`mailto:${links.email}?subject=${encodeURIComponent('KASSTA campus liaison')}&body=${encodeURIComponent('University:\nDepartment:\nDegree program and year:\nIs there a KSEA YG group on campus?\n')}`}
              className="btn btn-primary"
              style={{ marginTop: 8 }}
            >
              Email Us About Becoming a Liaison
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
