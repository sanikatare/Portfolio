import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { portfolioProjects, getTechBadgeStyle, type PortfolioProject } from '../data/portfolio'
import ProjectModal from '../components/ProjectModal'
import { sectionContainerVariants, fadeInUpVariants, cardStaggerVariants } from '../utils/motion'

const categories = ['All', 'AI / ML & RAG', 'Distributed Systems', 'Full-Stack MERN', 'Deep Learning & IoT'] as const

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="min-h-[100dvh] flex flex-col justify-center py-6 sm:py-8 bg-slate-50/50">
      <motion.div
        variants={sectionContainerVariants(shouldReduceMotion)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px', amount: 0.12 }}
        className="container-custom my-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants(shouldReduceMotion)}
          className="flex flex-col items-center text-center gap-3 mb-4 sm:mb-6"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
              Applied Work &amp; <span className="text-brand-500">Code Repositories</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Projects Grid with smooth opacity transition on category state change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={cardStaggerVariants(shouldReduceMotion)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUpVariants(shouldReduceMotion)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015, y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                onClick={() => setSelectedProject(project)}
                className="relative group rounded-2xl bg-white border-2 border-slate-200/90 hover:border-brand-500 hover:ring-4 hover:ring-brand-500/15 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Animated Top Border Highlight Bar */}
                <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-brand-400 via-sky-400 to-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Visual Browser / App Mockup Frame */}
                  <div className="relative h-36 sm:h-40 bg-gradient-to-br from-slate-900 via-dark-850 to-slate-950 p-3.5 flex flex-col justify-between overflow-hidden border-b border-slate-100">
                    {/* Glowing warm ambient background with subtle zoom on hover */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-brand-500/20 rounded-full blur-2xl group-hover:bg-brand-500/35 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                    {/* Browser Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/10 group-hover:bg-brand-500/25 group-hover:text-brand-200 transition-colors px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>

                    {/* Mockup Preview Graphic with subtle zoom */}
                    <div className="relative z-10 my-auto text-left transition-transform duration-500 ease-out group-hover:scale-[1.02] origin-left">
                      <span className="text-[11px] font-mono font-bold text-brand-400 uppercase tracking-wider">
                        {project.badge || 'Featured Work'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mt-0.5 group-hover:text-brand-300 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                        {project.impact}
                      </p>
                    </div>

                    {/* Bottom mock status */}
                    <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1.5 border-t border-white/10">
                      <span>STATUS: VERIFIED</span>
                      <span className="text-emerald-400">DEPLOYED</span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-4 sm:p-5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {project.subtitle}
                    </h4>

                    {/* Color-coded Tech Stack Badges directly under title */}
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {project.tech.map((t, idx) => {
                        const style = getTechBadgeStyle(t)
                        return (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold transition-transform group-hover:scale-[1.02] ${style.badge}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                            {t}
                          </span>
                        )
                      })}
                    </div>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Direct Links & Action Button */}
                <div className="px-4 sm:px-5 pb-4 pt-2.5 flex items-center justify-between gap-2 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-brand-500 text-white px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={13} />
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-2.5 py-1.5 text-xs font-semibold transition-colors"
                        title="Launch Live Application"
                      >
                        <span>Live</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Circular Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 group-hover:bg-brand-500 group-hover:text-white transition-all group-hover:rotate-45"
                    aria-label="Inspect project"
                    title="Project details"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
