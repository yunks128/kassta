// Post-build step: turn the single-page bundle into one real HTML file per route.
//
// Why: GitHub Pages serves static files, and social scrapers (LinkedIn, KakaoTalk,
// Slack, Facebook) do not execute JavaScript. Without this, every URL would return
// the same <title> and og:image, so a shared link to the UKC symposium would preview
// as the generic home page. Writing dist/activities/index.html etc. with the tags
// already substituted fixes that, and also gives search engines distinct pages.
//
// It does NOT render React to HTML — the body is still hydrated client-side. Only
// the <head> differs per file. That is enough for crawlers and share previews.
//
// Also emits sitemap.xml and the 404.html fallback for unknown paths.

import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { routes, SITE_URL, DEFAULT_OG_IMAGE } from '../src/data/routes.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Replace the content of a <meta>/<title>/<link> already present in index.html.
function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: expected tag not found in index.html: ${pattern}`)
  }
  return html.replace(pattern, replacement)
}

function buildPage(template, route) {
  const url = SITE_URL + (route.path === '/' ? '/' : route.path)
  const image = SITE_URL + (route.image || DEFAULT_OG_IMAGE)
  const title = escape(route.title)
  const description = escape(route.description)

  let html = template
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = replaceTag(html, /(<meta name="description" content=")[\s\S]*?(" \/>)/, `$1${description}$2`)
  html = replaceTag(html, /(<link rel="canonical" href=")[\s\S]*?(" \/>)/, `$1${url}$2`)
  html = replaceTag(html, /(<meta property="og:title" content=")[\s\S]*?(" \/>)/, `$1${title}$2`)
  html = replaceTag(html, /(<meta property="og:description" content=")[\s\S]*?(" \/>)/, `$1${description}$2`)
  html = replaceTag(html, /(<meta property="og:url" content=")[\s\S]*?(" \/>)/, `$1${url}$2`)
  html = replaceTag(html, /(<meta property="og:image" content=")[\s\S]*?(" \/>)/, `$1${image}$2`)
  html = replaceTag(html, /(<meta name="twitter:title" content=")[\s\S]*?(" \/>)/, `$1${title}$2`)
  html = replaceTag(html, /(<meta name="twitter:description" content=")[\s\S]*?(" \/>)/, `$1${description}$2`)
  html = replaceTag(html, /(<meta name="twitter:image" content=")[\s\S]*?(" \/>)/, `$1${image}$2`)
  return html
}

const template = await readFile(join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  const html = buildPage(template, route)
  if (route.path === '/') {
    await writeFile(join(dist, 'index.html'), html)
  } else {
    const dir = join(dist, route.path.replace(/^\//, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html)
  }
}

// GitHub Pages serves 404.html for any path it cannot match. Serving the SPA there
// lets React Router render the NotFound page instead of GitHub's default 404.
await copyFile(join(dist, 'index.html'), join(dist, '404.html'))

const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)

console.log(`prerender: wrote ${routes.length} pages, 404.html, and sitemap.xml`)
