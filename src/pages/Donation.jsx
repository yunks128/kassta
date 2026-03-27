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
        </div>
      </section>
    </>
  )
}
