import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeByPath, routes, SITE_URL, DEFAULT_OG_IMAGE } from '../data/routes'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, name, key] = selector.match(/\[(property|name)="(.+)"\]/) || []
    if (!name) return
    el.setAttribute(name, key)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Keeps <title> and the description/OG tags in sync as the user navigates.
// The same values are baked into each prerendered HTML file at build time
// (scripts/prerender.mjs), so this only matters for in-app navigation.
export default function useDocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeByPath[pathname] || routes[0]
    const url = SITE_URL + (meta.path === '/' ? '/' : meta.path)
    const image = SITE_URL + (meta.image || DEFAULT_OG_IMAGE)

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:image"]', 'content', image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [pathname])
}
