import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <PageHeader title="Page Not Found" subtitle="That link does not point anywhere on this site" />
      <section>
        <div className="container">
          <div className="info-box" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <p>The page you were looking for may have moved. Try one of these instead:</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
              <Link to="/" className="btn btn-primary">Home</Link>
              <Link to="/activities" className="btn btn-secondary">Activities</Link>
              <Link to="/webinars" className="btn btn-outline" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>Webinars</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
