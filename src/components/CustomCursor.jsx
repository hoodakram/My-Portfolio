import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0, ringY = 0, targetX = 0, targetY = 0
    let raf

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%,-50%)`
    }
    const loop = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        ring.classList.add('hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        ring.classList.remove('hover')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  )
}
