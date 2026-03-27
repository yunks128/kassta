import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function About() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      <PageHeader title="About KASSTA" />

      <section>
        <div className="container">
          <div className="info-box">
            <h2>President's Message</h2>
            <p><strong>Eun-Suk Seo, Ph.D.</strong> — Founding President, Professor at University of Maryland</p>
            <p style={{ marginTop: 16 }}>KASSTA was established as a 501(c)(3) nonprofit in 2024 to strengthen U.S.-Korea collaboration in aerospace fields. Since our founding, we have achieved significant milestones in bringing together the aerospace community.</p>

            <h3>Recent Achievements</h3>
            <ul>
              <li>Monthly webinar series featuring astronauts, NASA scientists, and aerospace engineers</li>
              <li>First AeroSpace Forum during UKC 2024 in San Francisco (August 2024)</li>
              <li>Three-day workshop at Caltech in December 2024, jointly organized with Korean Space Science Society and NASA JPL, attracting 70 scientists</li>
            </ul>

            <h3>Future Plans</h3>
            <p>We are planning a second workshop in Korea (October 2025) and a third in the U.S. (August 2026), aiming to foster partnerships and enhance capabilities in space exploration for both nations.</p>

            <p style={{ marginTop: 16 }}>I invite you to take leadership roles, visit our website, and participate in UKC 2025 in Atlanta (August 5-9). Together, we are expanding opportunities for knowledge sharing, mentorship, and innovation while supporting the next generation of aerospace professionals.</p>
          </div>
        </div>
      </section>

      <section className="alt-bg" id="bylaws">
        <div className="container">
          <div className="info-box">
            <h2>Bylaws</h2>
            <h3>Purpose</h3>
            <p>KASSTA operates as a 501(c)(3) non-profit with four main objectives:</p>
            <ul>
              <li>Advancing space and aeronautics through USA-Korea cooperation</li>
              <li>Promoting professional fellowship among Korean-American aerospace professionals</li>
              <li>Cultivating the next generation of Korean-American scientists and engineers</li>
              <li>Supporting technical conferences, workshops, and scholarship initiatives</li>
            </ul>

            <h3>Membership Categories</h3>
            <ul>
              <li><strong>Regular Members:</strong> Korean aerospace scholars in North America with bachelor's degrees or equivalent</li>
              <li><strong>Associate Members:</strong> Korean students pursuing aerospace-related degrees at North American institutions</li>
              <li><strong>Supporting Members:</strong> Organizational or individual supporters of the association's mission</li>
            </ul>
            <p style={{ marginTop: 12 }}>Voting members must have paid dues within the last two fiscal years. Regular members may purchase lifetime memberships.</p>
          </div>
        </div>
      </section>

      <section id="partners">
        <div className="container">
          <div className="info-box">
            <h2>Partners &amp; Sponsors</h2>
            <p>KASSTA collaborates with leading organizations in aerospace science and technology:</p>
            <div className="card-grid" style={{ marginTop: 20 }}>
              {[
                { name: 'Korean Space Science Society (KSSS)', desc: 'Co-organizer of international workshops' },
                { name: 'NASA Jet Propulsion Laboratory', desc: 'Workshop partner and research collaboration' },
                { name: 'Korea Aerospace Research Institute (KARA)', desc: 'Supporting organization for workshops' },
                { name: 'KSEA', desc: 'Korean-American Scientists and Engineers Association - parent organization' },
              ].map(p => (
                <div key={p.name} className="card">
                  <div className="card-body">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
