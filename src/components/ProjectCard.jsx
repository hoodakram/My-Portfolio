import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="pc-bar">
        <div className="pc-dot" style={{ background: '#f47067' }}></div>
        <div className="pc-dot" style={{ background: '#f5c26b' }}></div>
        <div className="pc-dot" style={{ background: project.accent }}></div>
        <span>{project.category.toLowerCase()}</span>
      </div>
      <div className="pc-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="pc-tags">
          {project.tags.slice(0, 4).map((t) => (
            <span className="pc-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="pc-foot">
        <span className="pc-status">{project.status} · {project.year}</span>
        <Link to={`/projects/${project.id}`} className="pc-link">View case study →</Link>
      </div>
    </div>
  )
}
