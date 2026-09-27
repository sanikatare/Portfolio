import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 h-1 bg-slate-200/40 pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-brand-600 via-brand-500 to-sky-400 shadow-glow-blue"
        style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
      />
    </div>
  )
}
