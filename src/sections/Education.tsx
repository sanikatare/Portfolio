import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2, BookOpen, Award, Sparkles } from 'lucide-react'
import { educationHistory } from '../data/portfolio'
import { PccoeLogo, DavLogo } from '../components/OrgLogos'
import { sectionContainerVariants, fadeInUpVariants, cardStaggerVariants } from '../utils/motion'

export default function Education() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="education" className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 bg-slate-50/70">
      <motion.div
        variants={sectionContainerVariants(shouldReduceMotion)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px', amount: 0.1 }}
        className="container-custom my-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeInUpVariants(shouldReduceMotion)}
          className="text-center max-w-2xl mx-auto mb-4 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
            Formal <span className="text-brand-500">Education</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
            Strong theoretical grounding in Computer Engineering and foundational sciences.
          </p>
        </motion.div>

        {/* Education Cards Grid with Authentic PCCOE and DAV Logos */}
        <motion.div
          variants={cardStaggerVariants(shouldReduceMotion)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          {educationHistory.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUpVariants(shouldReduceMotion)}
              className="group rounded-2xl bg-white border border-slate-200/90 hover:border-brand-500/50 p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5"
            >
              <div>
                {/* Header Row with Official Logo */}
                <div className="flex flex-wrap items-start justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm p-1.5 shrink-0 group-hover:border-brand-500 transition-colors">
                      {edu.id === 'pccoe' ? (
                        <PccoeLogo className="h-full w-full object-contain" />
                      ) : (
                        <DavLogo className="h-full w-full object-contain" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
                        {edu.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    <Calendar className="h-3 w-3 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Location */}
                <div className="mb-3 pb-3 border-b border-slate-100">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {edu.degree}
                  </p>
                  <p className="text-xs font-medium text-brand-600 mt-0.5">
                    {edu.field}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-slate-500">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-brand-500" />
                    <span>Key Milestones &amp; Involvement</span>
                  </h4>
                  <div className="space-y-1">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* School Activities / Co-curriculars if present */}
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mb-3.5 pt-3 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-600 mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                      <span>{edu.id === 'dav' ? 'School Activities & Leadership' : 'Campus Leadership & Activities'}</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.activities.map((activity, aIdx) => (
                        <span
                          key={aIdx}
                          className="rounded-md bg-brand-50 border border-brand-200/70 px-2 py-0.5 text-[11px] font-medium text-brand-800"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Coursework Pills */}
              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                  <span>Relevant Coursework &amp; Topics</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
