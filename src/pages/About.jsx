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
            <p><em>Dear Fellow KASSTA Members,</em></p>

            <p style={{ marginTop: 12 }}>The Korean American Aerospace Science and Technology Association (KASSTA) was established as a nonprofit organization in 2024 to promote collaboration between the U.S. and Korea in the fields of space and aeronautics. I am honored to serve as the Founding President of KASSTA, and I am pleased to report the enthusiastic launch of our association.</p>

            <p style={{ marginTop: 12 }}>KASSTA is exempt from federal income tax under Section 501(c)(3) of the Internal Revenue Code, and it is an Affiliated Professional Society (APS) of the Korean-American Scientists and Engineers Association (KSEA).</p>

            <p style={{ marginTop: 12 }}>KASSTA's monthly Webinar Series has featured inspiring talks from astronauts, NASA scientists, aerospace engineers in the industry, and researchers in academia, providing our community with valuable insights on cutting-edge research and industry trends.</p>

            <p style={{ marginTop: 12 }}>Our first AeroSpace Forum was successfully held in August 2024 during the US-Korea Conference on Science, Technology, and Entrepreneurship (UKC 2024) in San Francisco, CA. The pre-conference tour to SETI and NASA Ames Research Center was inspiring and reinforced our commitment to engaging with the global scientific community.</p>

            <p style={{ marginTop: 12 }}>Another significant event was the Workshop on AeroSpace Science and Technology held at Caltech in Pasadena, CA, in December 2024. This three-day workshop was organized jointly by KASSTA, the Korean Space Science Society (KSSS), and NASA JPL. The primary goal of the workshop was to foster and strengthen collaboration between the U.S. and Korea in the field of AeroSpace Science and Technology, which is one of Korea's 12 National Strategic Technologies.</p>

            <p style={{ marginTop: 12 }}>Seventy scientists and engineers from Korea, the U.S., and Canada participated to discuss shared interests in space science and technology. The event included oral presentations as well as small group sessions that allowed participants to explore potential cooperation plans in greater detail. Attendees engaged in in-depth discussions to define the missions of each group, and action plans were summarized at the end of the workshop. Additionally, participants enjoyed a post-conference tour of NASA JPL.</p>

            <p style={{ marginTop: 12 }}>Building on the success of the first workshop, KASSTA, KSSS, and JPL are planning to hold a second workshop in Korea in October 2025. A third workshop is tentatively scheduled for August 2026 in the U.S. in conjunction with the UKC. This series of workshops aims to foster new partnerships and joint initiatives that will enhance the scientific and technological capabilities of both Korea and the U.S., while also contributing to the global advancement of space exploration.</p>

            <p style={{ marginTop: 12 }}>I encourage you to consider serving as officers and committee members for KASSTA. Please feel free to submit your nominations by contacting me or any of the Directors. I invite you to visit our website at <a href="https://kassta.ksea.org/">kassta.ksea.org</a>. When renewing your KSEA membership at <a href="http://www.ksea.org/">ksea.org</a>, make sure to select KASSTA as your APS to have the KASSTA membership fee waived.</p>

            <p style={{ marginTop: 12 }}>Additionally, I hope many of you will attend UKC 2025 in Atlanta, GA, August 5 - 9, 2025. This annual conference brings together around 1,000 Korean scientists and engineers and features many engaging programs you may enjoy. We want KASSTA to remain connected to you. We are here to listen to your needs and to build a stronger organization that can benefit even more members.</p>

            <p style={{ marginTop: 12 }}>As we move forward, we will focus on expanding opportunities for knowledge sharing, mentorship, and innovation. We are committed to fostering the next generation of aerospace professionals, supporting research collaborations, and providing valuable platforms for engagement.</p>

            <p style={{ marginTop: 12 }}>I sincerely thank our members, supporters, and partners who have contributed to KASSTA's remarkable progress. Your dedication and enthusiasm drive our mission forward, and I look forward to the exciting advancements we will achieve together.</p>

            <p style={{ marginTop: 20 }}>All the best,</p>
            <p><strong>Eun-Suk Seo, Ph.D.</strong><br />President of KASSTA</p>
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
