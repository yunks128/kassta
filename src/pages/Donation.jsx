import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'

export default function Donation() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Donation" subtitle="Support our mission" />

      <section>
        <div className="container">
          <div className="info-box" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
            <h2>Support KASSTA</h2>
            <p>KASSTA is a tax-exempt non-profit organization under Section 501(c)(3) of the Internal Revenue Code.</p>
            <p><strong>EIN: 99-2256919</strong></p>
            <p style={{ marginTop: 12 }}>Your contributions are vital in advancing our mission of strengthening U.S.-Korea collaboration in aerospace science and technology. Thank you for your generous support.</p>
          </div>

          <div className="donation-methods">
            <div className="donation-card">
              <div className="icon">&#9993;</div>
              <h3>By Check</h3>
              <p>Make checks payable to KASSTA and mail to:</p>
              <p><strong>KASSTA<br />19213 Olney Mill Rd.<br />Olney, MD 20832</strong></p>
            </div>
            <div className="donation-card">
              <div className="icon">&#36;</div>
              <h3>By Zelle</h3>
              <p>For digital donations via Zelle, contact the Financial Director:</p>
              <p><a href="mailto:kassta.fd@gmail.com"><strong>kassta.fd@gmail.com</strong></a></p>
            </div>
          </div>

          <div className="info-box" style={{ textAlign: 'center', maxWidth: 700, margin: '40px auto 0' }}>
            <h2>Individual Donors</h2>
            <p style={{ marginTop: 12 }}>We gratefully acknowledge the generous support of our individual donors:</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 16 }}>
              <img src={import.meta.env.BASE_URL + 'images/carter.png'} alt="Ruth Chiang Carter" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
              <p><strong>Ruth Chiang Carter</strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
