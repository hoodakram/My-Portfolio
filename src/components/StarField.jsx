import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let stars = []
    let raf
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const count = Math.floor((canvas.width * canvas.height) / 8500)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        s: Math.random() * 0.4 + 0.1,
        p: Math.random() * Math.PI * 2,
      }))
    }
    window.addEventListener('resize', resize)
    resize()

    const styles = getComputedStyle(document.documentElement)
    let t = 0
    const draw = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--star').trim() || '#e7edf9'
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = color
      for (const st of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t * st.s + st.p)
        ctx.globalAlpha = 0.12 + twinkle * 0.5
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      t += 0.02
      if (!reduced) raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="starfield" ref={canvasRef} />
}
