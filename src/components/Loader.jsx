import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = ['booting portfolio...', 'loading projects...', 'compiling skills...', 'ready.']

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(false)
      return
    }
    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, LINES.length - 1))
    }, 320)
    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 18, 100))
    }, 120)
    const exitTimer = setTimeout(() => setVisible(false), 1300)

    return () => {
      clearInterval(lineTimer)
      clearInterval(progressTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <div className="mono">HoodAkram:~$ {LINES[lineIndex]}</div>
          <div className="loader-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
