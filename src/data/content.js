export const leaders = {
  executive: [
    { name: 'Eun-Suk Seo', role: 'President', affiliation: 'Professor of Physics, University of Maryland' },
    { name: 'Jeong-Beom Ihn', role: 'Vice President', affiliation: 'Technical Fellow, The Boeing Company' },
    { name: 'Chunyoung Park', role: 'Executive Director', affiliation: 'Aerospace Engineer, Pyramid Space Inc.' },
    { name: 'Yaeji Kim', role: 'Deputy Executive Director', affiliation: 'Postdoctoral Researcher, University of Maryland' },
  ],
  directors: [
    { name: 'Jayoung Wu', role: 'Finance Director', affiliation: 'Visiting Senior Faculty Specialist, University of Maryland' },
    { name: 'Daniel Warren', role: 'Director of Strategic Partnerships', affiliation: 'VP of Sales and Programs Americas, Latecoere' },
    { name: 'Sunjae Kim', role: 'Membership Director', affiliation: 'Assistant Professor, University of Florida' },
    { name: 'Soyeon Yi', role: 'Public Relations Director', affiliation: 'Astronaut, GBD at SPEX Inc.' },
    { name: 'Simon Sim', role: 'Media Director', affiliation: 'Principal/Adjunct, KSCEE' },
    { name: 'Kyongsik Yun', role: 'IT Director', affiliation: 'Technologist, NASA JPL' },
    { name: 'Eunjung Chae', role: 'Auditor', affiliation: 'Associate Professor, Cal State Long Beach' },
  ],
  advisors: [
    { name: 'Jaehoon Kim', role: 'Advisor', affiliation: 'Executive/Senior Technical Fellow, The Boeing Company' },
    { name: 'Sung-Ju Kim', role: 'Advisor', affiliation: 'Associate Professor, NC State University' },
  ],
}

// Video ID → actual content mapping (verified via thumbnails)
// YouTube titles on KASSTA channel are off-by-one from actual content.
// The labels below reflect the ACTUAL video content.

// Announcements with linked YouTube videos
export const announcements = [
  {
    date: { month: 'APR', day: '24', year: '2026' },
    title: 'KASSTA Regular Meeting',
    meta: '4:00 PM PT / 7:00 PM ET | Virtual (Zoom)',
    desc: 'Woosang Park (Texas A&M) - "Dynamic Nonlinearity and Model Fidelity Effects on Uncorrelated Track Processing"; Hyomin Kim (NJIT) - "Space Weather: How Sun-Earth Interactions Affect Human Technology"',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScZBsZd4_LEmGZGb0j0TRpSUqjGAuURaHVNUeiVGkdkNIeQ3g/viewform?usp=dialog',
    zoom: 'https://ufl.zoom.us/j/94786118635?pwd=bB2CytlDfqM3KZLXPUXgWh7CYWcTxa.1',
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
]

// Workshop 2024 recordings
export const workshop2024Videos = [
  { id: 'GA1y1e3ISd8', title: 'KOR-US Joint Workshop Day 1 - Opening Introduction' },
  { id: 'okY_ui8fKxI', title: 'KOR-US Joint Workshop Day 1 - Sessions' },
  { id: 'Wqzw2f5sWKo', title: 'KOR-US Joint Workshop Day 2' },
  { id: 'wyTP0GFpedY', title: 'KOR-US Joint Workshop Day 2 - Presentations' },
  { id: '_fpyavkr7Pg', title: 'KOR-US Joint Workshop Day 3 - NASA/JPL Tour' },
  { id: 'HTGBlec73OI', title: 'KOR-US Joint Workshop - NASA/JPL Tour' },
  { id: 'InT9xTLjblI', title: 'KOR-US Joint Workshop - Opening, Dec 15, 2024' },
]

// UKC Forum recordings
export const forumVideos = [
  { id: 'oJI6Tjf9_Fo', title: 'UKC 2025: KSEA AeroSpace Forum' },
  { id: 'GTKPsRFTQAE', title: 'UKC 2025: Space Signature Forum' },
  { id: 'rlco7rvLDow', title: 'UKC Signature Space Forum: Dr. Young Sil Kwak, KASI' },
]

// Other featured talks
export const otherTalks = [
  { id: 'knYBIGRBX1U', title: 'Sangmo Tony Sohn - Science Performance of JWST, STScI' },
  { id: '6lLeEWzeG-M', title: 'KASSTA Space Signature Forum Panel' },
]
