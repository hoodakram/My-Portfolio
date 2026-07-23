const STACK = [
  { label: 'JavaScript (ES6+)', color: '#5eead4' },
  { label: 'React.js', color: '#5eead4' },
  { label: 'Next.js', color: '#5eead4' },
  { label: 'Node.js', color: '#a48bfa' },
  { label: 'Express.js', color: '#a48bfa' },
  { label: 'MongoDB', color: '#a48bfa' },
  { label: 'Tailwind CSS', color: '#5eead4' },
  { label: 'JWT', color: '#f5c26b' },
  { label: 'REST APIs', color: '#a48bfa' },
  { label: 'Git & GitHub', color: '#f5c26b' },
]

export default function TechMarquee() {
  const items = [...STACK, ...STACK]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
