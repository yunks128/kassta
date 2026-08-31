import { links } from './links'

export const leaders = {
  executive: [
    { name: 'Eun-Suk Seo', role: 'President', affiliation: 'Professor of Physics\nUniversity of Maryland', img: 'seo' },
    { name: 'Jeong-Beom Ihn', role: 'Vice President', affiliation: 'Technical Fellow\nThe Boeing Company', img: 'ihn' },
    { name: 'Chunyoung Park', role: 'Executive Director', affiliation: 'Aerospace Engineer\nPyramid Space Inc.', img: 'park' },
    { name: 'Yaeji Kim', role: 'Deputy Executive Director', affiliation: 'Postdoctoral Researcher Astronomy\nUniversity of Maryland', img: 'kim_y' },
  ],
  directors: [
    { name: 'Jayoung Wu', role: 'Finance Director', affiliation: 'Visiting Senior Faculty Specialist\nUniversity of Maryland', img: 'wu' },
    { name: 'Daniel Warren', role: 'Director of Strategic Partnerships', affiliation: 'VP of Sales and Programs Americas\nLatecoere', img: 'warren' },
    { name: 'Sunjae Kim', role: 'Membership Director', affiliation: 'Assistant Professor of Mechanical & Aerospace Engineering\nUniversity of Florida', img: 'kim_s' },
    { name: 'Soyeon Yi', role: 'Public Relations Director', affiliation: 'Astronaut\nGBD at SPEX, Inc', img: 'yi' },
    { name: 'Simon Sim', role: 'Media Director', affiliation: 'Principal / Adjunct\nKorean-American Society of Civil and Environmental Engineers (KSCEE)', img: 'sim' },
    { name: 'Kyongsik Yun', role: 'IT Director', affiliation: 'Technologist\nNASA JPL', img: 'yun' },
    { name: 'Eunjung Chae', role: 'Auditor', affiliation: 'Associate Professor of Mechanical and Aerospace Engineering\nCalifornia State University, Long Beach', img: 'chae' },
  ],
  advisors: [
    { name: 'Jaehoon Kim', role: 'Advisor', affiliation: 'Executive / Senior Technical Fellow\nThe Boeing Company', img: 'kim_j' },
    { name: 'Sung-Ju Kim', role: 'Business Advisor', affiliation: 'Associate Professor of School of Social Work\nNC State University', img: 'kim_sj' },
  ],
}

// Video ID → actual content mapping (verified via thumbnails)
// YouTube titles on KASSTA channel are off-by-one from actual content.
// The labels below reflect the ACTUAL video content.

// Announcements with linked YouTube videos
export const announcements = [
  {
    date: { month: 'SEP', day: '16', year: '2026' },
    title: 'KASSTA Webinar: Why Do We Talk About Space?',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual (Zoom)',
    desc: 'Sung Joo Kang, 항성 (Ph.D. in Astrophysics; Director, MORE SCIENCE Co., Ltd.; science YouTuber and creator of <안될과학>) — "Why Do We Talk About Space? When Technology Becomes a Story". Moderator: Soyeon Yi. Gift cards are planned for selected participants; to qualify, join KASSTA and choose KASSTA as your APS if you are a KSEA member.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSchmhttnbwuu6MECxNNtmjz8qV8Kdo1_tX37MN7b4TzyaAzlQ/viewform?usp=publish-editor',
    zoom: 'https://ufl.zoom.us/j/94786118635?pwd=bB2CytlDfqM3KZLXPUXgWh7CYWcTxa.1',
    kakao: links.kakaoOpenChat,
    flyer: 'files/KASSTA-Webinar-09-16-2026.pdf',
    videos: [],
  },
  {
    date: { month: 'AUG', day: '6', year: '2026' },
    title: 'UKC 2026 AeroSpace Signature Symposium — Shaping the Future of Space',
    meta: '10:15 AM - 12:00 PM | International Ballroom, Omni Orlando Resort at ChampionsGate, FL',
    desc: 'Chair: Eun-Suk Seo (KASSTA President). Speakers: Soyeon Yi (Astronaut, SPEX) - Healthcare Challenges of Space Flight; Dae Young Lee (KAIST) - Reliability through Softness: A Soft Robotics Approach to Space Exploration; Eun Jung Chae (CSU Long Beach) - Aerodynamic Performance of the Next Generation Aircraft/Spacecraft; Kyongsik Yun (NASA JPL) - Next-Generation Space Processors: HPSC and Hybrid Co-Processor Architectures',
    link: 'https://ukc2026.ksea.org/aerospace',
    linkLabel: 'Symposium Page',
    videos: [
      { id: 'Pv9E0NDTkAM', title: 'UKC 2026 Day 1' },
      { id: 'LZUfi_zoBCg', title: 'UKC 2026: Aerospace & Ocean Forum (Beyond the Earth)' },
      { id: 'NfXpjygJUl8', title: 'UKC 2026 Signature Forum: Dr. Dae Young Lee, KAIST (full talk)' },
      { id: 'ZNssy875Dao', title: 'UKC 2026 Speaker Preview: Dr. Dae Young Lee, KAIST' },
    ],
  },
  {
    date: { month: 'APR', day: '24', year: '2026' },
    title: 'KASSTA Regular Meeting',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual (Zoom)',
    desc: 'Woosang Park (Texas A&M) - "Dynamic Nonlinearity and Model Fidelity Effects on Uncorrelated Track Processing"; Hyomin Kim (NJIT) - "Space Weather: How Sun-Earth Interactions Affect Human Technology"',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScZBsZd4_LEmGZGb0j0TRpSUqjGAuURaHVNUeiVGkdkNIeQ3g/viewform?usp=dialog',
    videos: [],
  },
  {
    date: { month: 'MAR', day: '20', year: '2026' },
    title: 'KASSTA Webinar',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual',
    desc: 'John C. Mankins (Artemis Innovation) - "An Overview of Modern and Modular Space Solar Power"; Dae-Young Lee (KAIST) - "Reliability through Softness: A Soft Robotics Approach to Space Exploration". Moderator: Soyeon Yi',
    videos: [
      { id: 'XO9M0IrJ4j0', title: 'John C. Mankins - Modern and Modular Space Solar Power' },
      { id: '5gyXLBRMGWk', title: 'Dae-Young Lee - Soft Robotics for Space Exploration, KAIST' },
    ],
  },
  {
    date: { month: 'FEB', day: '18', year: '2026' },
    title: 'KASSTA Webinar',
    meta: '4:00-5:00 PM PT / 7:00-8:00 PM ET | Virtual',
    desc: 'Deok-Ho Kim (Johns Hopkins University Professor), Ruth Chiang Carter (NASA GSFC Retired). Moderator: Soyeon Yi',
    videos: [
      { id: '8Xw_1Pydo1A', title: 'Ruth Chiang Carter - NASA Mission Development' },
      { id: 'sK4LsHJ4-gE', title: 'Deok-Ho Kim - Human Organ Chips for Space, Johns Hopkins' },
    ],
  },
  {
    date: { month: 'NOV', day: '20', year: '2025' },
    title: 'KASSTA Webinar: Quantum Technology & Space Manufacturing',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual',
    desc: 'Dr. Jason Hyon (NASA JPL) - JPL Quantum Space Innovation Center; Dr. Jae-Hung Han (KAIST) - Space services and manufacturing. Moderator: Soyeon Yi',
    videos: [
      { id: 'JLyi1Lcw3lU', title: 'Jason Hyon - Quantum Space Innovation Center (QSIC), NASA JPL' },
      { id: 'DwHVfhm4wEM', title: 'Kwangsun Ryu - Space Environment Monitoring, KAIST SaTReC' },
      { id: '9xNTg-uyUBA', title: 'Jae-Hung Han - Space Service and Manufacturing, KAIST' },
    ],
  },
  {
    date: { month: 'SEP', day: '24', year: '2025' },
    title: 'KASSTA Webinar',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual',
    desc: 'Prof. Hae-Dong Kim (Gyeongsang National University) - On-Orbit Servicing; Dr. JangKeun Kim (Weill Cornell) - Multi-omic dynamics of spaceflight. Moderator: Jeong-Beom Ihn',
    videos: [
      { id: 'VkP_M3HbwlA', title: 'Hae-Dong Kim - On-Orbit Servicing' },
      { id: '2eFw_xx7q1c', title: 'JangKeun Kim - Multi-omic Dynamics of Spaceflight, Weill Cornell' },
    ],
  },
  {
    date: { month: 'AUG', day: '7', year: '2025' },
    title: 'UKC 2025 AeroSpace Forum',
    meta: '11:00 AM - 1:00 PM | Grand Ballroom E, Atlanta, GA',
    desc: 'Part of UKC 2025 in Atlanta, GA (August 5-9, 2025).',
    videos: [
      { id: 'oJI6Tjf9_Fo', title: 'UKC 2025: KSEA AeroSpace Forum' },
      { id: 'GTKPsRFTQAE', title: 'UKC 2025: Space Signature Forum' },
      { id: 'rlco7rvLDow', title: 'UKC Signature Space Forum: Dr. Young Sil Kwak' },
    ],
  },
  {
    date: { month: 'APR', day: '23', year: '2025' },
    title: 'KASSTA Webinar',
    meta: '5:00 PM PST / 8:00 PM EST | Virtual',
    desc: 'Jae Hwan Kang (Caltech) - SPHEREx Near-Infrared Observatory; Chunyoung Park (Pyramid Space) - Advanced Propulsion Systems. Moderator: Jeong-Beom Ihn',
    videos: [
      { id: 'oPBI_5LMNmA', title: 'Jae Hwan Kang - SPHEREx Observatory, Caltech' },
      { id: 'l0lyUpFrF0A', title: 'Soyeon Yi - Astronaut Experience' },
    ],
  },
  {
    date: { month: 'MAR', day: '19', year: '2025' },
    title: 'KASSTA Webinar',
    meta: '5:00 PM PST / 8:00 PM EST | Virtual',
    desc: 'Prof. Regina Lee (York University) - AI Image Processing for Space; Henry Huh (AFRL) - Electrospray Thrusters. Moderator: Jeong-Beom Ihn',
    videos: [
      { id: 'gD8MGGQ5b4U', title: 'Henry Huh - Electrospray Thrusters, AFRL' },
      { id: 'yS2NHtDsfGw', title: 'Regina Lee - AI Image Processing for Space, York University' },
    ],
  },
  {
    date: { month: 'FEB', day: '15', year: '2025' },
    title: 'KASSTA Webinar',
    meta: '5:00 PM PST / 8:00 PM EST | Virtual',
    desc: 'Jaewoo Jung (NASA Ames) - NASA Extensible Traffic Management; Seungwhan Baek (KARI) - Cryogenic Heat Transfer. Moderator: Jeong-Beom Ihn',
    videos: [
      { id: 'D1RaZkC01zc', title: 'Seungwhan Baek - Cryogenic Heat Transfer, KARI' },
      { id: 'fDqZ7djh9fM', title: 'Regina Lee - Near-Earth Collision Detection, York University' },
    ],
  },
  {
    date: { month: 'NOV', day: '16', year: '2024' },
    title: 'KASSTA Webinar',
    meta: '5:00 PM PDT / 8:00 PM EDT | Zoom',
    desc: 'Yoon Shin (Perigee Aerospace CEO) - Propulsion systems; Chunyoung Park (Pyramid Space) - Space economy and advanced propulsion.',
    videos: [],
  },
]

// Webinar series with linked YouTube videos (verified via thumbnails)
export const webinars = [
  {
    date: { month: 'SEP', day: '16', year: '2026' },
    title: 'Why Do We Talk About Space? — When Technology Becomes a Story',
    speakers: 'Sung Joo Kang, 항성 (Director, MORE SCIENCE Co., Ltd.; creator of <안될과학>) - Why Do We Talk About Space? When Technology Becomes a Story. Moderator: Soyeon Yi',
    videos: [],
  },
  {
    date: { month: 'APR', day: '24', year: '2026' },
    title: 'Dynamic Nonlinearity & Space Weather',
    speakers: 'Woosang Park (Texas A&M) - Dynamic Nonlinearity and Model Fidelity Effects on Uncorrelated Track Processing; Hyomin Kim (NJIT) - Space Weather: How Sun-Earth Interactions Affect Human Technology',
    videos: [],
  },
  {
    date: { month: 'MAR', day: '20', year: '2026' },
    title: 'Space Solar Power & Soft Robotics for Space',
    speakers: 'John C. Mankins (Artemis Innovation) - Modern and Modular Space Solar Power; Dae-Young Lee (KAIST) - Soft Robotics Approach to Space Exploration',
    videos: [
      { id: 'XO9M0IrJ4j0', title: 'John C. Mankins - Modern and Modular Space Solar Power' },
      { id: '5gyXLBRMGWk', title: 'Dae-Young Lee - Soft Robotics for Space Exploration, KAIST' },
    ],
  },
  {
    date: { month: 'FEB', day: '18', year: '2026' },
    title: 'Bioengineering & NASA Mission Development',
    speakers: 'Deok-Ho Kim (Johns Hopkins University) - Human Organ Chips for Space; Ruth Chiang Carter (NASA GSFC Retired) - NASA Mission Development',
    videos: [
      { id: '8Xw_1Pydo1A', title: 'Ruth Chiang Carter - NASA Mission Development' },
      { id: 'sK4LsHJ4-gE', title: 'Deok-Ho Kim - Human Organ Chips for Space, Johns Hopkins' },
    ],
  },
  {
    date: { month: 'DEC', day: '17', year: '2025' },
    title: 'Korea\'s Space Heritage & Planetary Geochemistry',
    speakers: 'Kwangsun Ryu (KAIST SaTReC) - Korea\'s space heritage and science missions; DJ Lee (Purdue) - Planetary geochemistry using LIBS technology',
    videos: [
      { id: 'hML7nOc8NNY', title: 'DJ Lee - Planetary Geochemistry via LIBS, Purdue' },
      { id: 'DwHVfhm4wEM', title: 'Kwangsun Ryu - Space Environment Monitoring, KAIST SaTReC' },
    ],
  },
  {
    date: { month: 'NOV', day: '20', year: '2025' },
    title: 'Quantum Technology & Space Manufacturing',
    speakers: 'Dr. Jason Hyon (NASA JPL) - Quantum Space Innovation Center (QSIC); Dr. Jae-Hung Han (KAIST) - Space services, manufacturing, ADR-sat debris removal',
    videos: [
      { id: 'JLyi1Lcw3lU', title: 'Jason Hyon - Quantum Space Innovation Center (QSIC), NASA JPL' },
      { id: '9xNTg-uyUBA', title: 'Jae-Hung Han - Space Service and Manufacturing, KAIST' },
      { id: 'L9qln0gDc6w', title: 'Dr. Jae Hyung Han, KAIST' },
    ],
  },
  {
    date: { month: 'SEP', day: '24', year: '2025' },
    title: 'On-Orbit Servicing & Spaceflight Biology',
    speakers: 'Prof. Hae-Dong Kim (Gyeongsang National University) - On-Orbit Servicing technologies; Dr. JangKeun Kim (Weill Cornell) - Multi-omic dynamics of spaceflight',
    videos: [
      { id: 'VkP_M3HbwlA', title: 'Hae-Dong Kim - On-Orbit Servicing' },
      { id: '2eFw_xx7q1c', title: 'JangKeun Kim - Multi-omic Dynamics of Spaceflight, Weill Cornell' },
    ],
  },
  {
    date: { month: 'APR', day: '23', year: '2025' },
    title: 'SPHEREx Observatory & Advanced Propulsion',
    speakers: 'Jae Hwan Kang (Caltech) - SPHEREx near-infrared all-sky survey; Chunyoung Park (Pyramid Space) - Advanced propulsion and space economy',
    videos: [
      { id: 'oPBI_5LMNmA', title: 'Jae Hwan Kang - SPHEREx Observatory, Caltech' },
      { id: 'jahs7lkJKRs', title: 'Chunyoung Park - Advanced Propulsion & the Space Economy, Pyramid Space' },
      { id: 'l0lyUpFrF0A', title: 'Soyeon Yi - Astronaut Experience' },
    ],
  },
  {
    date: { month: 'MAR', day: '19', year: '2025' },
    title: 'AI for Space & Electrospray Thrusters',
    speakers: 'Prof. Regina Lee (York University) - AI-based image processing for space situational awareness; Henry Huh (AFRL) - Electrospray thruster computational analysis',
    videos: [
      { id: 'gD8MGGQ5b4U', title: 'Henry Huh - Electrospray Thrusters, AFRL' },
      { id: 'yS2NHtDsfGw', title: 'Regina Lee - AI Image Processing for Space, York University' },
    ],
  },
  {
    date: { month: 'FEB', day: '15', year: '2025' },
    title: 'Traffic Management & Cryogenic Systems',
    speakers: 'Jaewoo Jung (NASA Ames) - NASA Extensible Traffic Management (xTM); Seungwhan Baek (KARI) - Cryogenic heat transfer for space applications',
    videos: [
      { id: 'D1RaZkC01zc', title: 'Seungwhan Baek - Cryogenic Heat Transfer, KARI' },
      { id: 'fDqZ7djh9fM', title: 'Regina Lee - Near-Earth Collision Detection, York University' },
    ],
  },
  {
    date: { month: 'OCT', day: '19', year: '2024' },
    title: 'Infrared Astronomy & Cryogenic Flow Boiling',
    speakers: 'Jeonghee Rho (SETI Institute) - Status of Infrared and X-ray Space Missions; Sunjae Kim (Purdue University) - Cryogenic Flow Boiling Physics in Terrestrial, Partial, and Microgravity Conditions',
    videos: [
      { id: 'MEjV-Wsb4oo', title: 'Tech Webinar - Jeonghee Rho & Sunjae Kim, Oct 19, 2024' },
    ],
  },
  {
    date: { month: 'MAY', day: '19', year: '2024' },
    title: 'KASSTA Webinar',
    speakers: 'KASSTA monthly technical webinar',
    videos: [
      { id: 'nzTEKw3x3vU', title: 'KASSTA Webinar - May 19, 2024' },
    ],
  },
  {
    date: { month: 'APR', day: '21', year: '2024' },
    title: 'Mindfulness from Weightlessness & JWST Science',
    speakers: 'Soyeon Yi (First astronaut of South Korea) - Mindfulness from Weightlessness; Tony S. Sohn (STScI) - The Science Performance of the James Webb Space Telescope',
    videos: [
      { id: 'OeGHRZ6fq5I', title: 'KASSTA-KSEA Webinar - April 21, 2024' },
    ],
  },
]

// Workshop 2024 recordings
export const workshop2024Videos = [
  { id: 'MshjVWphn2Q', title: 'KOR-US Joint Workshop on Space Science & Technology, Dec 15-17, 2024' },
  { id: 'GA1y1e3ISd8', title: 'KOR-US Joint Workshop Day 1 - Opening Introduction' },
  { id: 'okY_ui8fKxI', title: 'KOR-US Joint Workshop Day 1 - Sessions' },
  { id: 'Ucki2cHFbwk', title: 'KOR-US Joint Workshop Day 1 - Dinner & Award' },
  { id: 'Wqzw2f5sWKo', title: 'KOR-US Joint Workshop Day 2' },
  { id: 'wyTP0GFpedY', title: 'KOR-US Joint Workshop Day 2 - Presentations' },
  { id: '8HDouBD8INo', title: 'KOR-US Joint Workshop Day 2 - Presentations (Updated)' },
  { id: '_fpyavkr7Pg', title: 'KOR-US Joint Workshop Day 3 - NASA/JPL Tour' },
  { id: 'HTGBlec73OI', title: 'KOR-US Joint Workshop - NASA/JPL Tour' },
  { id: 'InT9xTLjblI', title: 'KOR-US Joint Workshop - Opening, Dec 15, 2024' },
  { id: 'bfkEOjwfTVk', title: 'Sunjae Kim - Cryogenic Flow Boiling Physics, Purdue' },
]

// UKC 2026 recordings
export const ukc2026Videos = [
  { id: 'Pv9E0NDTkAM', title: 'UKC 2026 Day 1' },
  { id: 'LZUfi_zoBCg', title: 'UKC 2026: Aerospace & Ocean Forum (Beyond the Earth)' },
  { id: 'NfXpjygJUl8', title: 'UKC 2026 Signature Forum: Dr. Dae Young Lee, KAIST (full talk)' },
  { id: 'ZNssy875Dao', title: 'UKC 2026 Speaker Preview: Dr. Dae Young Lee, KAIST' },
]

// UKC Forum recordings
export const forumVideos = [
  { id: 'oJI6Tjf9_Fo', title: 'UKC 2025: KSEA AeroSpace Forum' },
  { id: 'GTKPsRFTQAE', title: 'UKC 2025: Space Signature Forum' },
  { id: 'rlco7rvLDow', title: 'UKC Signature Space Forum: Dr. Young Sil Kwak, KASI' },
]

// Career-stage testimonials shown on the home page.
//
// ⚠️ PLACEHOLDER COPY — the quotes below are illustrative, written from what
// KASSTA actually offers (monthly webinars, UKC forums, KOR-US workshops,
// mentoring, collaboration). They are attributed to a career stage rather than
// a person on purpose: do not publish a quote under a real member's name until
// that member has given it. Replace `quote`/`name` with real submissions as
// they come in, and add `img` (a file in public/images/testimonials/) if you
// want headshots.
export const testimonials = [
  {
    stage: 'Graduate Student',
    quote: 'The monthly webinars were the first place I heard directly from engineers at NASA, KARI, and KAIST about what they actually work on. It turned a vague interest in aerospace into a concrete list of labs, missions, and people to reach out to.',
    name: 'Ph.D. Student',
    role: 'Aerospace Engineering',
  },
  {
    stage: 'Early Career',
    quote: 'Presenting at the UKC AeroSpace Forum gave me an audience of exactly the researchers I wanted to reach on both sides of the Pacific. The conversations afterward led to a collaboration I could not have started from a cold email.',
    name: 'Postdoctoral Researcher',
    role: 'Planetary & Space Science',
  },
  {
    stage: 'Industry & National Labs',
    quote: 'KASSTA is the shortest path I have found between U.S. and Korean aerospace programs. The KOR-US joint workshops put agency, university, and industry people in the same room for three days, and the follow-up is real.',
    name: 'Engineer',
    role: 'Aerospace Industry / National Laboratory',
  },
  {
    stage: 'Senior & Faculty',
    quote: 'What keeps me involved is the pipeline. Chairing sessions and mentoring at UKC lets me hand younger researchers the introductions that took me a decade to build, and the community keeps growing because of it.',
    name: 'Professor & Principal Investigator',
    role: 'University Research Group',
  },
]

// Member spotlight interviews
export const memberVideos = [
  { id: 'v0tytPBjMxs', title: 'Dr. Eun-Suk Seo - President of KASSTA' },
  { id: 'JKlR04JRZvU', title: 'Dr. Yaeji Kim - Deputy Executive Director, KASSTA' },
  { id: 'AqeUhLnG2M4', title: 'Dr. Michael Kelley & Dr. Ludmilla Kolokolova, University of Maryland' },
  { id: 'KarlFs5zXU8', title: 'Dr. Sangmo Tony Sohn, STScI' },
]

// Community outreach and activity highlights
export const activityVideos = [
  { id: 'o97EPOqTlIc', title: 'Kennedy Space Center, Orlando, Florida - UKC 2026 Visit' },
  { id: 'rpC3SBF9Sk8', title: 'Beyond the Cradle - Aurelia Institute at MIT Media Lab, April 2026' },
  { id: '7f9NNwmD0CU', title: 'Starship Flight 12 V3 Launch - Narration by 항성, 안될과학' },
  { id: 'x8FmsFZgjoU', title: 'KASSTA at SETI Institute and NASA Ames' },
  { id: '9hqmQYnW5yY', title: 'AeroSpace Forum Brief at UKC 2024' },
]

// Other featured talks
export const otherTalks = [
  { id: 'knYBIGRBX1U', title: 'Sangmo Tony Sohn - Science Performance of JWST, STScI' },
  { id: '6lLeEWzeG-M', title: 'KASSTA Space Signature Forum Panel' },
]
