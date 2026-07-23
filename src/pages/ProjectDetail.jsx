import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import { getProjectById } from '../data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  useEffect(() => {
    if (project) document.title = `${project.title} — Hood Akram`
  }, [project])

  if (!project) return <Navigate to="/projects" replace />

  return (
    <PageTransition>
      <section style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal>
            <Link to="/projects" className="back-link">← back to projects</Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="pd-head">
              <div className="eyebrow">{project.category}</div>
              <h1>{project.title}</h1>
              <p>{project.tagline}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="pd-meta">
              <div><span>Status</span><b>{project.status}</b></div>
              <div><span>Timeline</span><b>{project.year}</b></div>
              <div><span>Category</span><b>{project.category}</b></div>
            </div>
          </Reveal>

          <div className="pd-grid">
            <Reveal delay={0.12}>
              <div className="pd-body">
                {project.longDescription.map((para, i) => <p key={i}>{para}</p>)}

                <h4 className="mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text-faint)', margin: '32px 0 18px' }}>
                  Key features
                </h4>
                <ul className="pd-features">
                  {project.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="pd-side">
                <div className="pd-card">
                  <h4>Tech stack</h4>
                  <div className="pc-tags">
                    {project.tags.map((t) => <span className="pc-tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="pd-card">
                  <h4>Links</h4>
                  <div className="pd-actions">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                        Visit live site ↗
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      View on GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
