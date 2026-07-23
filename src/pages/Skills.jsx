import { useEffect } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import SkillRing from '../components/SkillRing.jsx'
import { skillGroups, orbitSkills } from '../data/skills.js'

export default function Skills() {
  useEffect(() => { document.title = 'Skills — Hood Akram' }, [])

  return (
    <PageTransition>
      <section style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">skills</div>
              <h1>The stack, in orbit</h1>
              <p>Drag the ring to spin it — or just read the list.</p>
            </div>
          </Reveal>

          <div className="skills-layout">
            <Reveal>
              <div className="ring-wrap">
                <SkillRing items={orbitSkills} radius={220} sceneSize={300} coreSize={150} coreLabel="Core<br/>Stack" coreFontSize="16px" coreGap="18px" />
                <div className="drag-hint">⟷ drag to rotate</div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <div className="sg-title"><em style={{ background: group.color }}></em>{group.label.toLowerCase()}</div>
                    <div className="sg-tags">
                      {group.items.map((item) => <span className="sg-tag" key={item}>{item}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
