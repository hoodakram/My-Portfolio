import { useEffect } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import { timeline } from '../data/timeline.js'

export default function About() {
  useEffect(() => { document.title = 'About — Hood Akram' }, [])

  return (
    <PageTransition>
      <section style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="about-grid">
            <Reveal>
              <div className="eyebrow">about</div>
              <h1>A developer who likes<br />finishing what he starts.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about-body">
                <p>
                  I'm a <strong>Full Stack Developer</strong> based in Bahria Town, Lahore, currently finishing my{' '}
                  <strong>BS in Computer Science</strong> at Superior University. I work mainly in the{' '}
                  <strong>MERN stack</strong> — React and Next.js on the front end, Node.js and Express on the back,
                  MongoDB underneath — and I care about REST APIs, JWT auth and interfaces that don't feel like an
                  afterthought.
                </p>
                <p>
                  Over the past year I've shipped a full‑stack e‑commerce platform and a hospital management system
                  with an AI‑powered chatbot, while completing a hands‑on Full Stack Developer internship. I'm now
                  looking for my first full‑time role, where I can keep building things that are actually used.
                </p>
                <div className="facts">
                  <div className="fact"><span>Location</span><b>Lahore, Pakistan</b></div>
                  <div className="fact"><span>Focus</span><b>MERN + Next.js</b></div>
                  <div className="fact"><span>Education</span><b>BS Computer Science</b></div>
                  <div className="fact"><span>Status</span><b>Open to work</b></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">journey</div>
              <h2>Education, internship & certifications</h2>
              <p>The path so far — chronologically, from high school to actively job‑hunting.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="timeline">
              {timeline.map((item) => (
                <div className={`tl-item ${item.isNow ? 'is-now' : ''}`} key={item.title}>
                  <div className="tl-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  {item.tag && <span className="tl-tag">{item.tag}</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
