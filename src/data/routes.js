// Single source of truth for every real URL on the site.
//
// Consumed in two places:
//   1. src/hooks/useDocumentMeta.js — updates <title>/<meta> on client-side navigation
//   2. scripts/prerender.mjs        — writes dist/<path>/index.html with these tags baked
//      in, plus dist/sitemap.xml, so crawlers and social scrapers that do not run
//      JavaScript still see per-page metadata.
//
// Adding a route? Add it here AND to the <Routes> list in src/App.jsx.

export const SITE_URL = 'https://kassta.ksea.org'
export const SITE_NAME = 'KASSTA'
export const DEFAULT_OG_IMAGE = '/images/og-image.jpg'

export const routes = [
  {
    path: '/',
    title: 'KASSTA — Korean American AeroSpace Science and Technology Association',
    description:
      'KASSTA is a 501(c)(3) nonprofit advancing U.S.–Korea collaboration in aerospace science and technology through monthly webinars, international workshops, and the UKC AeroSpace Forum.',
    priority: '1.0',
  },
  {
    path: '/about',
    title: "About KASSTA — President's Message, Bylaws, and Partners",
    description:
      "Founded in 2024 and led by Dr. Eun-Suk Seo, KASSTA promotes cooperation between the U.S. and Korea in space and aeronautics. Read the President's message, our bylaws, and our partner organizations.",
    priority: '0.7',
  },
  {
    path: '/activities',
    title: 'Activities — UKC AeroSpace Forums and KOR-US Joint Workshops | KASSTA',
    description:
      'Programs and full session schedules from the UKC 2026 AeroSpace Signature Symposium in Orlando, the KOR-US Joint Workshops on Space Science & Technology, and past UKC AeroSpace Forums.',
    // Per-route OG images must be 1200x630 — index.html declares those dimensions.
    image: '/images/og-ukc2026.jpg',
    priority: '0.9',
  },
  {
    path: '/webinars',
    title: 'Webinar Series — Monthly Aerospace Talks | KASSTA',
    description:
      'Recordings from KASSTA’s monthly webinar series, featuring speakers from NASA, JPL, KARI, KAIST, Johns Hopkins, Caltech, and the aerospace industry on space science, propulsion, robotics, and spaceflight biology.',
    priority: '0.9',
  },
  {
    path: '/announcements',
    title: 'News & Events — Upcoming Webinars and Meetings | KASSTA',
    description:
      'Upcoming KASSTA webinars, meetings, and conference sessions, with registration links and recordings of past events.',
    priority: '0.8',
  },
  {
    path: '/leadership',
    title: 'Leadership — Officers, Directors, and Advisors | KASSTA',
    description:
      'Meet the KASSTA executive committee, directors, and advisors: researchers and engineers from the University of Maryland, Boeing, NASA JPL, the University of Florida, and more.',
    priority: '0.6',
  },
  {
    path: '/students',
    title: 'For Students — Free Membership, Mentorship, and Conferences | KASSTA',
    description:
      'Free KASSTA membership for undergraduates and $15/year for graduate students. Monthly aerospace webinars, the chance to present at the UKC AeroSpace Forum, SEED and FIRE, KSEA scholarships, and 40+ recorded talks.',
    priority: '0.9',
  },
  {
    path: '/membership',
    title: 'Membership — Join KASSTA',
    description:
      'Join KASSTA as a student, researcher, or aerospace professional. Free for undergraduates, and no additional fee for KSEA members who select KASSTA as their Affiliated Professional Society.',
    priority: '0.9',
  },
  {
    path: '/donation',
    title: 'Donation — Support KASSTA',
    description:
      'Support KASSTA’s webinars, workshops, and student programs. KASSTA is a 501(c)(3) nonprofit, so contributions are tax deductible.',
    priority: '0.5',
  },
  {
    path: '/media',
    title: 'Media & Publications — KASSTA Letters, Recordings, and Press',
    description:
      'KASSTA Letters newsletters, webinar and workshop recordings, member spotlight interviews, press coverage, and photos from KASSTA events.',
    priority: '0.7',
  },
]

export const routeByPath = Object.fromEntries(routes.map(r => [r.path, r]))

// Legacy URLs that Google still has in its index but that this site never served.
// They come from the pre-2026 KASSTA site's nested URL scheme (/about/bylaws,
// /activities/workshop-2025, /media-publications, ...) and currently return 404 in
// Search Console. GitHub Pages cannot issue a 301, so prerender.mjs writes a small
// HTML file at each of these paths that meta-refreshes to the live equivalent and
// declares it canonical. Google treats an instant meta refresh as a redirect, so the
// 404s clear and whatever link equity those URLs hold moves to the real page.
//
// These are deliberately NOT in `routes` — they must stay out of the sitemap.
export const redirects = [
  { from: '/about/presidents-message', to: '/about' },
  { from: '/about/bylaws', to: '/about#bylaws' },
  { from: '/about/partners-sponsors', to: '/about#partners' },
  { from: '/about/leadership', to: '/leadership' },
  { from: '/about/officers', to: '/leadership' },
  { from: '/activities/webinar-series', to: '/webinars' },
  { from: '/activities/newsletter', to: '/media#kassta-letters' },
  { from: '/activities/signature-forum-2026', to: '/activities#signatureforum2026' },
  { from: '/activities/signature-forum-2025', to: '/activities#signatureforum2025' },
  { from: '/activities/forum-2025', to: '/activities#forum2025' },
  { from: '/activities/forum-2024', to: '/activities#forum2024' },
  { from: '/activities/workshop-2025', to: '/activities#workshop2025' },
  { from: '/activities/workshop-2024', to: '/activities#workshop2024' },
  { from: '/media-publications', to: '/media' },
  { from: '/media-publications/newsletter', to: '/media#kassta-letters' },
  { from: '/media-publications/photo-gallery', to: '/media#photo-gallery' },
  { from: '/webinar-series', to: '/webinars' },
  { from: '/news', to: '/announcements' },
  { from: '/join', to: '/membership' },
  { from: '/donate', to: '/donation' },
]
