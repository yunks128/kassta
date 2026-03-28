import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'

export default function Membership() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Membership" subtitle="Join our community" />

      <section>
        <div className="container">
          <div className="info-box" style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2>Join KASSTA</h2>

            <h3>Option 1: Through KSEA (No Additional Fee)</h3>
            <p>Members of the Korean-American Scientists and Engineers Association (KSEA) can join KASSTA by selecting it as their Affiliated Professional Society (APS) during enrollment or renewal. No additional fee is required.</p>
            <div style={{ marginTop: 12 }}>
              <a href="https://www.ksea.org/membership" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">KSEA Membership Sign Up</a>
            </div>

            <h3>Option 2: Direct KASSTA Membership</h3>
            <p>For non-KSEA members or those preferring direct enrollment, you can join KASSTA directly by paying the membership fee below.</p>
          </div>

          <div className="pricing-grid" style={{ maxWidth: 900, margin: '24px auto 0' }}>
            {[
              { tier: 'Undergraduate', price: 'Free', sub: '' },
              { tier: 'Graduate', price: '$15', sub: '/year' },
              { tier: 'Regular', price: '$35', sub: '/year', featured: true },
              { tier: 'Lifetime', price: '$525', sub: 'or less' },
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
          <p className="section-subtitle">Why join KASSTA?</p>
          <div className="card-grid">
            {[
              { title: 'Networking', desc: 'Connect with professionals and experts in the aerospace industry across NASA, KARI, Boeing, universities, and leading companies.' },
              { title: 'Professional Development', desc: 'Access workshops, seminars, and conferences featuring world-class speakers and cutting-edge aerospace research.' },
              { title: 'Latest Research', desc: 'Stay informed on current research and advancements in aerospace science and technology.' },
              { title: 'Innovation & Community', desc: 'Support innovation initiatives within the Korean American aerospace community and help cultivate the next generation of professionals.' },
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
          <div className="info-box" style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2>How to Pay</h2>

            <h3>By Check</h3>
            <p>Make checks payable to <strong>KASSTA</strong> and mail to:</p>
            <p style={{ background: 'var(--light-bg)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: 8 }}>
              <strong>KASSTA</strong><br />
              19213 Olney Mill Rd.<br />
              Olney, MD 20832
            </p>

            <h3>By Zelle</h3>
            <p>Send payment via Zelle to: <a href="mailto:kassta.fd@gmail.com"><strong>kassta.fd@gmail.com</strong></a></p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', marginTop: 4 }}>Contact the Financial Director at the same email for any questions.</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--text-light)', marginBottom: 16 }}>Ready to join? Sign up through KSEA or contact us directly.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.ksea.org/membership" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1rem', padding: '13px 32px' }}>Join via KSEA</a>
              <a href="mailto:kassta.fd@gmail.com" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '13px 32px' }}>Contact Us to Join</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
