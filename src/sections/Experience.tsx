import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Award, Zap } from 'lucide-react'
import { workExperience } from '../data/portfolio'
import { TataLogo, GdgcLogo, AcmLogo } from '../components/OrgLogos'
import { sectionContainerVariants, fadeInUpVariants, cardStaggerVariants } from '../utils/motion'

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>('tata-technologies')
  const shouldReduceMotion = useReducedMotion()

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="experience" className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 bg-slate-50/60 border-y border-slate-200/80">
      <motion.div
        variants={sectionContainerVariants(shouldReduceMotion)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px', amount: 0.1 }}
        className="container-custom my-auto"
      >
        {/* Section Heading */}
        <motion.div
          variants={fadeInUpVariants(shouldReduceMotion)}
          className="text-center max-w-2xl mx-auto mb-4 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
            Work and <span className="text-brand-500">Leadership Experience</span>
          </h2>
        </motion.div>

        {/* Timeline with Authentic Logos */}
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden sm:block absolute left-7 top-5 bottom-5 w-0.5 bg-dashed border-l-2 border-dashed border-brand-300" />

          <motion.div
            variants={cardStaggerVariants(shouldReduceMotion)}
            className="space-y-4 sm:space-y-5"
          >
            {workExperience.map((item, index) => {
              const isExpanded = expandedId === item.id

              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUpVariants(shouldReduceMotion)}
                  className="relative flex flex-col sm:flex-row gap-3 sm:gap-5 group"
                >
                  {/* Organization Logo Node */}
                  <div className="sm:shrink-0 flex items-center gap-3 sm:block">
                    <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white border-2 border-slate-200 shadow-sm group-hover:border-brand-500 transition-colors p-2">
                      {item.id === 'tata-technologies' ? (
                        <TataLogo className="h-full w-full object-contain" />
                      ) : item.id === 'gdgc-pccoe' ? (
                        <GdgcLogo className="h-full w-full object-contain" />
                      ) : item.id === 'acm-pccoe' ? (
                        <AcmLogo className="h-full w-full object-contain" />
                      ) : item.id === 'patent-innovation' ? (
                        <Award className="h-6 w-6 text-brand-500" />
                      ) : (
                        <Zap className="h-6 w-6 text-brand-500" />
                      )}
                    </div>
                    <span className="sm:hidden text-xs font-bold text-slate-400">Step 0{index + 1}</span>
                  </div>

                  {/* Experience Card */}
                  <div className="grow rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                            {item.role}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mt-0.5 text-xs text-slate-500">
                          <span className="font-semibold text-brand-600 text-xs sm:text-sm">
                            {item.company}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-slate-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            item.current
                              ? 'bg-brand-50 border border-brand-200 text-brand-600'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Calendar className="h-3 w-3" />
                          <span>{item.period}</span>
                        </span>
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-3 space-y-1.5">
                      {(isExpanded ? item.bullets : item.bullets.slice(0, 2)).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools badges if present */}
                    {item.tools && item.tools.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="font-bold text-slate-700">Tools:</span>
                        <div className="flex flex-wrap gap-1">
                          {item.tools.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-brand-50 border border-brand-200 text-brand-700 font-semibold text-[11px]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills list if expanded */}
                    {isExpanded && item.skills && item.skills.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1.5">
                          {item.id === 'gdgc-pccoe'
                            ? 'Design & Digital Content Skills:'
                            : item.id === 'acm-pccoe'
                            ? 'Marketing & Strategic Skills:'
                            : 'Core Skills & Competencies:'}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60 text-slate-700 font-medium text-[11px] hover:bg-brand-50 hover:text-brand-700 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.bullets.length > 2 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="mt-2 text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                      >
                        <span>{isExpanded ? 'Show Less' : `+${item.bullets.length - 2} more details`}</span>
                      </button>
                    )}

                    {/* Tags */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
