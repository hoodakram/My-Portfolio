import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section>
      <div className="wrap">
        <div className="cta-banner">
          <div className="glow-orb teal" style={{ width: 260, height: 260, top: -90, left: -70 }} />
          <div className="glow-orb violet" style={{ width: 220, height: 220, bottom: -80, right: -50 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>let's talk</div>
            <h2 style={{ marginBottom: 16 }}>Got a role or a project in mind?</h2>
            <p style={{ color: 'var(--text-dim)', maxWidth: 460, margin: '0 auto 32px' }}>
  I'm passionate about building modern web applications and always excited to take on new opportunities. Let's create something great together.
</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-solid">Get in touch →</Link>
              <Link to="/projects" className="btn btn-ghost">See my work</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
