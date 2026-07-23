import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Code2, Server, Database } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import SkillRing from '../components/SkillRing.jsx'
import Reveal from '../components/Reveal.jsx'
import TechMarquee from '../components/TechMarquee.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { heroOrbitSkills } from '../data/skills.js'
import { projects } from '../data/projects.js'

const PHRASES = ['Whoami', 'echo "Full Stack Developer"', 'git status']

const FEATURES = [
  { icon: Code2, t: 'Interfaces', d: 'React & Next.js front ends that stay fast and readable as features pile up.' },
  { icon: Server, t: 'APIs', d: 'REST APIs on Node.js and Express, with JWT auth and sane error handling.' },
  { icon: Database, t: 'Data', d: 'MongoDB schemas and queries designed around how the product actually gets used.' },
]

function useTypewriter(phrases) {
  const [text, setText] = useState('')
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timer
    const tick = () => {
      const phrase = phrases[pi]
      if (!deleting) {
        ci++
        setText(phrase.slice(0, ci))
        if (ci === phrase.length) { deleting = true; timer = setTimeout(tick, 1400); return }
      } else {
        ci--
        setText(phrase.slice(0, ci))
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      timer = setTimeout(tick, deleting ? 35 : 65)
    }
    tick()
    return () => clearTimeout(timer)
  }, [phrases])
  return text
}

export default function Home() {
  const typed = useTypewriter(PHRASES)
  const featured = projects.slice(0, 2)

  useEffect(() => { document.title = 'Hood Akram — Full Stack Developer' }, [])

  return (
    <PageTransition>
      <section className="hero">
        <div className="glow-orb teal" style={{ width: 340, height: 340, top: -100, left: '8%' }} />
        <div className="glow-orb violet" style={{ width: 300, height: 300, bottom: -60, right: '6%' }} />

        <div className="wrap hero-grid">
          <div>
            <div className="hero-tag"><span className="dot"></span> Open to full‑time roles</div>
            <div className="terminal-line"><span className="prompt">Hood Akram</span>:~$ {typed}<span className="caret"></span></div>
           <h1>
  Building <span className="gradient-text">fast, scalable, and user-focused</span> web applications.
</h1>
            <p className="hero-sub">
              I'm Hood Akram, a full‑stack developer based in Lahore, Pakistan. I build scalable web applications
              using React, Next.js, Node.js and MongoDB — from admin dashboards to AI‑connected features.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-solid">View projects →</Link>
              <a href="/Hood_Akram_Resume.pdf" download className="btn btn-ghost" aria-label="Download resume">Download resume</a>
            </div>
            <div className="hero-stats">
              <div><b>5+</b><span>Projects shipped</span></div>
              {/* <div><b>8mo</b><span>Internship experience</span></div> */}
              <div><b>MERN</b><span>Core stack</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <SkillRing items={heroOrbitSkills} radius={180} sceneSize={300} coreSize={150} coreLabel="Full<br/>Stack<br/>Dev" />
          </div>
        </div>
      </section>

      <TechMarquee />

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">what I do</div>
              <h2>End to end, front to back.</h2>
              <p>Three things I focus on when I build a product.</p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {FEATURES.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="feature-card">
                  <div className="feature-icon"><c.icon size={20} /></div>
                  <h4>{c.t}</h4>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">featured work</div>
              <h2>A couple of things I've shipped.</h2>
              <p>The full case studies — stack, features, and links — live on the projects page.</p>
            </div>
          </Reveal>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn btn-ghost">View all projects →</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
