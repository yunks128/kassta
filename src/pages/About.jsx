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
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 16 }}>
              <img src={import.meta.env.BASE_URL + 'images/president-seo.jpg'} alt="Dr. Eun-Suk Seo" style={{ width: 180, borderRadius: 10, flexShrink: 0 }} />
              <div>
                <p><strong>Eun-Suk Seo, Ph.D.</strong></p>
                <p>Founding President</p>
                <p>Professor of Physics, University of Maryland</p>
              </div>
            </div>
            <p>KASSTA was established as a 501(c)(3) nonprofit in 2024 to strengthen U.S.-Korea collaboration in aerospace fields. Since our founding, we have achieved significant milestones in bringing together the aerospace community.</p>

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

            <h3>PURPOSE AND PROGRAMS</h3>
            <h4 style={{ color: 'var(--accent)', marginTop: 16, marginBottom: 8 }}>Statement of Purpose</h4>
            <p>The Korean American AeroSpace Science and Technology Association (KASSTA), hereinafter abbreviated as Association, shall be operated exclusively as a non-profit organization exempt from Federal income tax under Section 501(c)(3) of the Internal Revenue Code to achieve the following objectives:</p>
            <ol style={{ paddingLeft: 24, marginTop: 8 }}>
              <li>Contribute to the social welfare and the industrial development in the USA and Korea through the promotion of Space and Aeronautics-related science and engineering.</li>
              <li>Promote cooperation between the USA and Korea in Space and Aeronautics-related fields.</li>
              <li>Promote fellowship among Korean-American professionals engaged in Space and Aeronautics-related science and engineering.</li>
              <li>Promote and cultivate the next generation of Korean-American scientists and engineers in the Space and Aeronautics-related fields.</li>
            </ol>

            <h4 style={{ color: 'var(--accent)', marginTop: 20, marginBottom: 8 }}>Programs</h4>
            <ol style={{ paddingLeft: 24 }}>
              <li>Activities to advance technical capabilities and industrial development in the USA and Korea.</li>
              <li>Activities to promote cooperation between the USA and Korea.</li>
              <li>Technical conferences, symposiums, and workshops in the USA and Korea.</li>
              <li>Scholarship and internship programs in the United States and Korea.</li>
              <li>Activities to promote friendship and fellowship among the members.</li>
              <li>Activities to promote and cultivate the next generation of Korean-American scientists and engineers.</li>
            </ol>

            <h3>MEMBERSHIP</h3>
            <p>The members of the association include regular members, associate members, and supporting members with following qualifications. A person may become a member after the Executive Committee has examined the application and approved the membership.</p>
            <ol style={{ paddingLeft: 24, marginTop: 8 }}>
              <li><strong>Regular members</strong> are Korean Aeronautics and Space science scholars residing in North America who possess a bachelor's degree or higher in Space and Aeronautics-related fields or equivalent qualifications.</li>
              <li><strong>Associate members</strong> are Korean students studying at a university or graduate school in North America majoring in AeroSpace Science and Technology related fields.</li>
              <li><strong>Supporting members</strong> are supporters of the association or individuals or organizations that have contributed to the development and dissemination of AeroSpace Science.</li>
            </ol>
            <p style={{ marginTop: 12 }}>A voting member is a regular member, associate member, or supporting member, who has paid the membership due at least once within the last two fiscal years (the current and the past) received by the association or KSEA Headquarters. Regular members can become life members by paying lifetime membership fees. All rights and privileges of membership shall be lost if the annual due is not paid for two consecutive fiscal years. A voting member has a right to be elected as an officer of the association.</p>

            <h3>Meeting of Members ("General Assembly")</h3>
            <p>Except as otherwise provided in these Bylaws or by law, at all general assemblies, the presence, including electronic presence, of one-tenth of the voting members at the commencement of such meeting shall be necessary and sufficient to constitute a quorum for the transaction of any business. Every voting member shall have one (1) vote. Decisions shall be made by a majority of the votes cast except as otherwise provided by law or by these Bylaws. In case of a tie vote, the Chair shall have the deciding power.</p>

            <h3>Disciplinary Actions</h3>
            <p>In accordance with the policies and procedure adopted by the Council, the Council may suspend the rights and privileges of membership or expel any member who violates the Bylaws or policies, interferes with the association's goals and business, or disgraces association's reputation.</p>
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
