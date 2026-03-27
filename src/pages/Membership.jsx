import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function Membership() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Membership" subtitle="Join our community" />

      <section>
        <div className="container">
          <div className="info-box">
            <h2>Join KASSTA</h2>
            <h3>Option 1: Through KSEA</h3>
            <p>Members of the Korean-American Scientists and Engineers Association (KSEA) can join KASSTA by selecting it as their Affiliated Professional Society (APS) with no additional fee required.</p>
            <h3>Option 2: Direct KASSTA Membership</h3>
            <p>For non-KSEA members or those preferring direct enrollment:</p>
          </div>

          <div className="pricing-grid">
            {[
              { tier: 'Undergraduate', price: 'Free', sub: '' },
              { tier: 'Graduate', price: '$15', sub: '/year' },
              { tier: 'Regular', price: '$35', sub: '/year', featured: true },
              { tier: 'Lifetime', price: '$525', sub: 'one-time' },
            ].map(p => (
              <div key={p.tier} className={`pricing-card${p.featured ? ' featured' : ''}`}>
                <div className="tier">{p.tier}</div>
                <div className="price">{p.price}<small>{p.sub && ` ${p.sub}`}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg">
        <div className="container">
          <h2 className="section-title">Member Benefits</h2>
          <div className="card-grid">
            {[
              { title: 'Networking', desc: 'Connect with aerospace professionals across NASA, KARI, Boeing, universities, and leading companies.' },
              { title: 'Professional Development', desc: 'Access workshops, seminars, and webinars featuring world-class speakers and cutting-edge research.' },
              { title: 'Latest Research', desc: 'Stay informed on advancements in aerospace technology, space exploration, and scientific discoveries.' },
            ].map(b => (
              <div key={b.title} className="card">
                <div className="card-body">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="info-box">
            <h2>Payment Methods</h2>
            <h3>By Check</h3>
            <p>Make checks payable to KASSTA and mail to:<br /><strong>KASSTA, 19213 Olney Mill Rd., Olney, MD 20832</strong></p>
            <h3>By Zelle</h3>
            <p>Contact the Financial Director at <a href="mailto:kassta.fd@gmail.com">kassta.fd@gmail.com</a> for Zelle transfer instructions.</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="https://kassta.ksea.org/membership" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>Sign Up Now</a>
          </div>
        </div>
      </section>
    </>
  )
}
