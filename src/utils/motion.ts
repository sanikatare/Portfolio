import type { Variants } from 'framer-motion'

export const defaultEase = [0.22, 1, 0.36, 1] as const

export const sectionContainerVariants = (reduced?: boolean | null): Variants => {
  const isReduced = Boolean(reduced)
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReduced ? 0 : 0.12,
        delayChildren: isReduced ? 0 : 0.04,
      },
    },
  }
}

export const fadeInUpVariants = (reduced?: boolean | null): Variants => {
  const isReduced = Boolean(reduced)
  return {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: defaultEase,
      },
    },
  }
}

export const cardStaggerVariants = (reduced?: boolean | null): Variants => {
  const isReduced = Boolean(reduced)
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReduced ? 0 : 0.08,
        delayChildren: isReduced ? 0 : 0.04,
      },
    },
  }
}
