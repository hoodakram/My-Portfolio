import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  )
}
