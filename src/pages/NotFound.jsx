import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

export default function NotFound() {
  useEffect(() => { document.title = '404 — Hood Akram' }, [])

  return (
    <PageTransition>
      <div className="wrap">
        <div className="notfound">
          <div className="big mono">404</div>
          <h2>This route doesn't exist.</h2>
          <p style={{ color: 'var(--text-dim)' }}>Even a well-structured Express API would 404 this one.</p>
          <Link to="/" className="btn btn-solid" style={{ marginTop: 10 }}>Back to home →</Link>
        </div>
      </div>
    </PageTransition>
  )
}
