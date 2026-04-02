import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import YouTubeCard from '../components/YouTubeCard'
import { workshop2024Videos, forumVideos } from '../data/content'

export default function Activities() {
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
      <PageHeader title="Activities" subtitle="Workshops, Forums, and Events" />

      <section id="workshop2025">
        <div className="container">
          <img src={import.meta.env.BASE_URL + 'images/workshop2025-banner.jpg'} alt="Workshop 2025" style={{ width: '100%', borderRadius: 10, marginBottom: 24 }} />
          <div className="info-box" style={{ display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img src={import.meta.env.BASE_URL + 'images/workshop-group.jpg'} alt="Workshop 2025 group photo" style={{ width: 280, borderRadius: 8, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2>International Collaboration Workshop on Space Science &amp; Technology 2025</h2>
              <p><strong>Dates:</strong> October 26-29, 2025</p>
              <p><strong>Location:</strong> Jeju Shinhwa World, South Korea</p>
              <p><strong>Organizers:</strong> Korean Space Science Society (KSSS), KASSTA, NASA Jet Propulsion Laboratory</p>
              <p><strong>Supporting:</strong> Korea Aerospace Research Institute (KARA)</p>
              <p style={{ marginTop: 16 }}>This workshop brings together leading minds from across the globe to foster collaboration, share cutting-edge research, and forge partnerships advancing space exploration. Programming includes keynote addresses from international space agency officials, technical sessions on satellite systems and Earth observation, networking opportunities, and technology exhibitions.</p>
              <p style={{ marginTop: 12 }}><strong>Target Attendees:</strong> Researchers, scientists, industry representatives, and policymakers interested in space science and technology advancement.</p>
              <a href="https://drive.google.com/file/d/1erQg0_AEMajc0YWEXkerXOUnhbn94NJ5/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>Workshop Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-bg" id="forum2025">
        <div className="container">
          <div className="info-box">
            <h2>UKC 2025 AeroSpace Forum</h2>
            <p><strong>Date:</strong> Thursday, August 7, 2025</p>
            <p><strong>Time:</strong> 4:30 - 6:30 PM</p>
            <p><strong>Location:</strong> Grand Ballroom C, Atlanta, GA</p>
            <p style={{ marginTop: 16 }}>Part of the UKC 2025 conference in Atlanta, GA (August 5-9, 2025).</p>

            <h4 style={{ marginTop: 24 }}>Our Mission</h4>
            <p>A comprehensive platform highlighting the full spectrum of space and aeronautics, spanning cutting-edge scientific advancements, technological breakthroughs, and the cultivation of global collaboration. We foster dialogue, innovation, and strategic partnerships to advance aerospace science and technology while promoting the broader utilization of space for the benefit of humanity.</p>

            <h4 style={{ marginTop: 20 }}>Looking Ahead &mdash; Our Vision for the Future</h4>
            <p>The Forum aims to expand its role as a catalyst for innovation and international cooperation, with a vision to strengthen U.S.&ndash;Korea partnerships in space exploration, satellite technology, and aeronautics research. By uniting government, academia, and industry leaders, we seek to accelerate the development of advanced aerospace capabilities and inspire the next generation of scientists and engineers.</p>

            <h4 style={{ marginTop: 20 }}>Ultimate Goal</h4>
            <p>We aspire to contribute to a future where space science and technology not only push the boundaries of human knowledge but also deliver transformative benefits for society on Earth and beyond.</p>

            <h3 style={{ marginTop: 28, fontSize: '1.2rem' }}>Program Schedule</h3>
            <table style={{ width: '100%', marginTop: 12, borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>4:30 - 4:45 PM</td>
                  <td style={{ padding: '10px 8px' }}>Welcoming &amp; Congratulatory Remarks<br /><em>Eun-Suk Seo (Chair), Jae Hyeon Ryu (President, KSEA), Hyunjoon Kwon (KASA)</em><br />KASSTA Award Presentation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>4:45 - 5:05 PM</td>
                  <td style={{ padding: '10px 8px' }}>Multi-omic Dynamics of Human Spaceflight and Interplanetary Biology<br /><em>JangKeun Kim (Weill Cornell Medicine)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>5:05 - 5:25 PM</td>
                  <td style={{ padding: '10px 8px' }}>NASA Space Mission/Project Lifecycle<br /><em>Ruth Carter (NASA GSFC Retiree)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>5:25 - 5:45 PM</td>
                  <td style={{ padding: '10px 8px' }}>Cryogenic Two-phase Flow and Heat Transfer Physics for Long-Duration Deep Space Explorations<br /><em>Sunjae Kim (University of Florida)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>5:45 - 6:05 PM</td>
                  <td style={{ padding: '10px 8px' }}>Modeling Small Solar System Bodies: Surface and Interior Perspectives<br /><em>Yaeji Kim (University of Maryland)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>6:05 - 6:25 PM</td>
                  <td style={{ padding: '10px 8px' }}>Panel Discussion<br /><em>Hyunjoon Kwon (KASA), Jongbin Im (KARI), Young-Sil Kwak (KASI)</em></td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>6:25 - 6:30 PM</td>
                  <td style={{ padding: '10px 8px' }}>Concluding Remarks &amp; Photo Session</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="section-title" style={{ marginTop: 40, fontSize: '1.3rem' }}>UKC Forum Recordings</h3>
          <div className="yt-grid" style={{ marginTop: 20 }}>
            {forumVideos.map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="signatureforum2025">
        <div className="container">
          <div className="info-box">
            <h2>UKC 2025 Signature Forum &mdash; Shaping the Future of Space</h2>
            <p><strong>Date:</strong> August 7, 2025 (Thursday)</p>
            <p><strong>Time:</strong> 11:00 AM - 1:00 PM</p>
            <p><strong>Location:</strong> Grand Ballroom D, Atlanta, GA</p>
            <p style={{ marginTop: 16 }}>Part of the UKC 2025 conference in Atlanta, GA (August 5-9, 2025).</p>
            <p style={{ marginTop: 16 }}>This Signature Forum offers a uniquely comprehensive perspective on South Korea's rapidly advancing space capabilities and their diverse applications. As a pivotal platform for leadership, collaboration, and innovation, it brings together key stakeholders from government, industry, research institutions, and academia. The forum highlights Korea's holistic approach to space, spanning foundational research, industrial growth, policy development, and societal impact. By promoting dialogue and fostering strategic partnerships, it aims to accelerate advancements in aerospace science and technology, while enhancing global understanding and the responsible use of space for the benefit of humanity.</p>
            <p style={{ marginTop: 12 }}><strong>Organizers:</strong></p>
            <ul style={{ marginTop: 4 }}>
              <li>KASA &mdash; Korea AeroSpace Administration</li>
              <li>KASSTA &mdash; Korean American AeroSpace Science and Technology Association</li>
              <li>KASI &mdash; Korea Astronomy &amp; Space Science Institute</li>
              <li>NAS &mdash; National Institute of Agricultural Sciences</li>
            </ul>

            <h4 style={{ marginTop: 24, textAlign: 'center', fontStyle: 'italic' }}>Chair</h4>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
              <img src={import.meta.env.BASE_URL + 'images/leaders/seo.jpg'} alt="Eun-Suk Seo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
              <p style={{ marginTop: 8, textAlign: 'center' }}><strong>Eun-Suk Seo</strong><br />President of KASSTA<br />Professor of Physics<br />University of Maryland</p>
            </div>

            <h4 style={{ marginTop: 24, textAlign: 'center', fontStyle: 'italic' }}>Speakers</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
                <img src={import.meta.env.BASE_URL + 'images/speakers/kwon.png'} alt="Hyunjoon Kwon" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center', fontSize: '0.9rem' }}><strong>Hyunjoon Kwon</strong><br />Director General<br />Aerospace Policy Department<br />KASA</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
                <img src={import.meta.env.BASE_URL + 'images/speakers/park_h.png'} alt="Heeho Park" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center', fontSize: '0.9rem' }}><strong>Heeho Park</strong><br />Senior VP<br />Advanced Aero Engine Business Unit<br />Hanwha Aerospace</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
                <img src={import.meta.env.BASE_URL + 'images/speakers/kwak.png'} alt="Young-Sil Kwak" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center', fontSize: '0.9rem' }}><strong>Young-Sil Kwak</strong><br />Korea Astronomy &amp; Space Science Institute</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
                <img src={import.meta.env.BASE_URL + 'images/speakers/kim_m.png'} alt="Minyoung Kim" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center', fontSize: '0.9rem' }}><strong>Minyoung Kim</strong><br />National Institute of Agricultural Sciences (NAS)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workshop2024">
        <div className="container">
          <div className="info-box">
            <h2>KASSTA Workshop 2024</h2>
            <p><strong>Organizers:</strong> KASSTA, Korean Space Science Society (KSSS), and NASA JPL</p>
            <p><strong>Dates:</strong> December 15-17, 2024</p>
            <p><strong>Location:</strong> California Institute of Technology (Caltech), Pasadena, CA</p>
            <p style={{ marginTop: 16 }}>This workshop was organized jointly by KASSTA, KSSS, and JPL to foster and strengthen collaboration between the U.S. and Korea in the field of AeroSpace Science and Technology, attracting 70 scientists from across the aerospace community.</p>

            <h4 style={{ marginTop: 20 }}>Objectives</h4>
            <ul>
              <li>Strengthening Cooperation between the US and Korea</li>
              <li>Timely Engagement: With the establishment of the Korea AeroSpace Administration (KASA) and Korea's growing interest in space</li>
              <li>Knowledge and Expertise Exchange</li>
              <li>Early-Career Researcher Engagement</li>
            </ul>

            <h4 style={{ marginTop: 16 }}>Topics</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px', marginTop: 4 }}>
              <span>Heliospheric Science</span>
              <span>L4 Space Mission</span>
              <span>Optical Communication</span>
              <span>Space Environment</span>
              <span>Astrophysics</span>
              <span>Lunar Exploration</span>
              <span>Rover and Payload Technology</span>
              <span>Lunar Satellite Navigation and Lunar Science</span>
              <span>Planetary and Earth Observation Technology</span>
            </div>

            <h3 style={{ marginTop: 28, fontSize: '1.2rem' }}>Program Agenda</h3>

            <h4 style={{ marginTop: 16 }}>Day 1: Sunday, December 15, 2024</h4>
            <table style={{ width: '100%', marginTop: 8, borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>13:30 – 15:00</td>
                  <td style={{ padding: '8px' }}>Opening Session<br /><em>Welcome Remarks, Presentations on Current R&amp;D Status by Institution (KSSS, KASSTA, and JPL), Group Photo</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>15:30 – 17:00</td>
                  <td style={{ padding: '8px' }}>KSSS-KASSTA Session</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>17:30 – 19:30</td>
                  <td style={{ padding: '8px' }}>Welcome Reception</td>
                </tr>
              </tbody>
            </table>

            <h4 style={{ marginTop: 16 }}>Day 2: Monday, December 16, 2024</h4>
            <table style={{ width: '100%', marginTop: 8, borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>08:00 – 09:00</td>
                  <td style={{ padding: '8px' }}>Breakfast</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>09:00 – 10:30</td>
                  <td style={{ padding: '8px' }}>Space Science Session I<br /><em>Heliospheric Science, L4 Space Telescope, Optical Communication, Space Environment</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>11:00 – 12:30</td>
                  <td style={{ padding: '8px' }}>Space Science Session II<br /><em>Current and Future Astrophysics Missions</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>12:30 – 13:30</td>
                  <td style={{ padding: '8px' }}>Lunch</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>13:30 – 15:00</td>
                  <td style={{ padding: '8px' }}>Space Technology Session I<br /><em>Lunar Exploration, Rover and Payload Technology, Lunar Satellite Navigation, Lunar Science</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>15:30 – 17:00</td>
                  <td style={{ padding: '8px' }}>Space Technology Session II<br /><em>Planetary and Earth Observation Technology</em></td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>17:30 – 19:30</td>
                  <td style={{ padding: '8px' }}>Dinner</td>
                </tr>
              </tbody>
            </table>

            <h4 style={{ marginTop: 16 }}>Day 3: Tuesday, December 17, 2024</h4>
            <table style={{ width: '100%', marginTop: 8, borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>08:00 – 09:00</td>
                  <td style={{ padding: '8px' }}>Breakfast</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>09:00 – 11:30</td>
                  <td style={{ padding: '8px' }}>Group Discussion Sessions<br /><em>Focus: Cooperation Plans in Space Observation and Lunar Exploration</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>11:30 – 12:30</td>
                  <td style={{ padding: '8px' }}>Closing Session<br /><em>Discussion Reports, Workshop Wrap-up, Sharing of Results and Future Plans</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>12:30 – 13:30</td>
                  <td style={{ padding: '8px' }}>Lunch</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>13:30 – 16:00</td>
                  <td style={{ padding: '8px' }}>Technical Tour (NASA JPL)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>17:00 – 18:00</td>
                  <td style={{ padding: '8px' }}>Farewell Dinner</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="section-title" style={{ marginTop: 40, fontSize: '1.3rem' }}>Workshop 2024 Recordings</h3>
          <div className="yt-grid" style={{ marginTop: 20 }}>
            {workshop2024Videos.map(v => (
              <YouTubeCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="alt-bg" id="forum2024">
        <div className="container">
          <div className="info-box">
            <h2>UKC 2024 AeroSpace Forum</h2>
            <p><strong>Date:</strong> Friday, August 23, 2024</p>
            <p><strong>Time:</strong> 2:00 PM - 4:00 PM</p>
            <p><strong>Location:</strong> Cypress A, San Francisco, CA</p>
            <p style={{ marginTop: 16 }}>Part of the UKC 2024 KSEA Forum in San Francisco. Jointly organized by KSEA and Korean-American AeroSpace Science and Technology Association (KASSTA).</p>

            <p style={{ marginTop: 16 }}>This Forum serves as a comprehensive platform encompassing every facet of space and aeronautics related fields, from cutting-edge scientific advancements to breakthroughs in technology development and fostering global collaboration. By facilitating dialogue, innovation, and strategic partnerships, this forum aims to propel the boundaries of aerospace science and technology forward while advancing the collective understanding and utilization of space for the betterment of humanity.</p>

            <h4 style={{ marginTop: 24, textAlign: 'center', fontStyle: 'italic' }}>Chair &amp; Co-Chair</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginTop: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 180 }}>
                <img src={import.meta.env.BASE_URL + 'images/leaders/seo.jpg'} alt="Eun-Suk Seo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center' }}><strong>Eun-Suk Seo</strong><br />Chair<br />President of KASSTA<br />Professor of Physics<br />University of Maryland</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 180 }}>
                <img src={import.meta.env.BASE_URL + 'images/speakers/hong.png'} alt="Choong Seon Hong" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ marginTop: 8, textAlign: 'center' }}><strong>Choong Seon Hong</strong><br />Co-Chair<br />Provost<br />Kyung Hee University</p>
              </div>
            </div>

            <h3 style={{ marginTop: 28, fontSize: '1.2rem' }}>Program Schedule</h3>
            <table style={{ width: '100%', marginTop: 12, borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>2:00 - 2:15 PM</td>
                  <td style={{ padding: '10px 8px' }}>Welcoming Remarks<br /><em>Eun-Suk Seo (Chair), Choong Seon Hong (Co-Chair)</em><br />Congratulatory Remarks<br /><em>Tae &ldquo;Tom&rdquo; Oh (President of KSEA), Tai Sik Lee (President of KOFST), Jong Uk &ldquo;James&rdquo; Park (President of KSSS)</em><br />KASSTA Award Presentation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>2:15 - 2:35 PM</td>
                  <td style={{ padding: '10px 8px' }}>Keynote: The Search for Life Beyond Earth... Where it Stands and Why it Matters<br /><em>Bill Diamond (CEO of SETI Institute)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>2:35 - 2:55 PM</td>
                  <td style={{ padding: '10px 8px' }}>Keynote: The Search for Life on Mars<br /><em>Carol Stoker (NASA Ames Research Center)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>2:55 - 3:15 PM</td>
                  <td style={{ padding: '10px 8px' }}>Pioneering Practical Sustainable Aviation: The Impact of Hybrid Electric Propulsion on Advanced Air Mobility<br /><em>Jongwon &ldquo;JP&rdquo; Park (Archimedes Defense Inc.)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>3:15 - 3:35 PM</td>
                  <td style={{ padding: '10px 8px' }}>Status of Space Missions in Infrared and X-rays<br /><em>Jeonghee Rho (SETI Institute)</em></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>3:35 - 3:50 PM</td>
                  <td style={{ padding: '10px 8px' }}>Space Economy (from a Space Transportation Technology Perspective)<br /><em>Chunyoung Park (Pyramid Space Inc.)</em></td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 8px', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 'bold' }}>3:50 - 4:00 PM</td>
                  <td style={{ padding: '10px 8px' }}>Concluding Remarks and Photo Session</td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
              <a href="https://photos.google.com/share/AF1QipNW72aT5WZk0DXcrEdlmWeVNoJDTfkXc4hof8D99GqOwfAna5f9MG4lCw1svAw1tA?key=d1c0ZUpMOGV4allHNG5uSnVlaW0xdHRaLWFRRUN3" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Photo Album</a>
            </div>
          </div>
          <h3 className="section-title" style={{ marginTop: 40, fontSize: '1.3rem' }}>Forum Recording</h3>
          <div className="yt-grid" style={{ marginTop: 20 }}>
            <YouTubeCard id="tDFwWUuWJRM" title="UKC 2024: KSEA AeroSpace Forum" />
            <YouTubeCard id="Ul8VJhYePA0" title="UKC 2024: AeroSpace Forum Presentations" />
          </div>
        </div>
      </section>
    </>
  )
}
