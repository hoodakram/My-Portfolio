import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  useEffect(() => { document.title = 'Projects — Hood Akram' }, [])

  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <PageTransition>
      <section style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">projects</div>
              <h1>Things I've built</h1>
              <p>Two full‑stack builds — one commercial, one product‑style with real workflows.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="filter-row">
              {categories.map((c) => (
                <button key={c} className={`filter-chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div className="projects-grid" layout>
            {visible.map((p, i) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
