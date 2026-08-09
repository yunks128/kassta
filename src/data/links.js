// Every external destination the site links to, in one place.
// Add new social accounts here and they appear in the footer automatically.

export const links = {
  youtube: 'https://www.youtube.com/@KASSTA_USA',
  kakaoOpenChat: 'https://open.kakao.com/o/gnsHNZag',
  email: 'kassta.fd@gmail.com',

  membershipForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSe8ECV3lfhmW3JnS6Oq7AYSAayOJAVQFZe71709znxpriZ_ww/viewform',
  kseaMembership: 'https://www.ksea.org/membership',
  kseaScholarships: 'https://www.ksea.org/scholarship',
  seed: 'https://seed.ksea.org/',
  fire: 'https://fire.ksea.org/',

  // KASSTA has no LinkedIn or Instagram account on record. Add the URLs here
  // once they exist and they will show up in the footer without other edits.
  linkedin: null,
  instagram: null,
}

// Announcement sign-up.
//
// There is no mailing-list backend, and GitHub Pages cannot host one. Until a
// Google Form or Mailchimp list exists, this opens a pre-filled email, which
// works today with zero setup. To switch: set `announcementsSignupUrl` to the
// form URL and the buttons become normal links — no other changes needed.
export const announcementsSignupUrl = null

export const subscribeMailto =
  `mailto:${links.email}` +
  '?subject=' + encodeURIComponent('Subscribe to KASSTA announcements') +
  '&body=' + encodeURIComponent(
    "Please add me to the KASSTA announcement list.\n\nName:\nAffiliation (university / company):\nCareer stage (undergrad / grad / postdoc / professional):\n"
  )

export const subscribeHref = announcementsSignupUrl || subscribeMailto
