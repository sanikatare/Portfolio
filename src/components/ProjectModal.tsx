import { useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ExternalLink, X, CheckCircle2, Cpu, Layers } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { getTechBadgeStyle, type PortfolioProject } from '../data/portfolio'

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-slate-800 shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 text-white p-6 sm:p-8 rounded-t-3xl overflow-hidden border-b border-white/10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 px-3 py-1 text-xs font-semibold text-brand-300">
              <Cpu className="h-3.5 w-3.5 text-brand-400" />
              {project.category}
            </span>
            {project.badge && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                {project.badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
            {project.title}
          </h2>
          <p className="mt-1 text-base text-slate-300 font-medium">
            {project.subtitle}
          </p>

          <div className="mt-4 inline-block rounded-xl bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs text-brand-300 font-mono">
            Key Impact: {project.impact}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              System Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Highlights & Engineering Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-brand-500" />
              Key Engineering Achievements
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => {
                const style = getTechBadgeStyle(t)
                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                    {t}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Source: Verified repository by Sanika Tare
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-brand-600 transition-colors"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
