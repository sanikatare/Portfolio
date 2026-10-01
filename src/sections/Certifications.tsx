import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Award, CheckCircle2, X } from 'lucide-react'
import { certifications, type CertificationItem } from '../data/portfolio'
import { sectionContainerVariants, fadeInUpVariants, cardStaggerVariants } from '../utils/motion'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="certifications" className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 bg-slate-50/60 border-t border-slate-200/80">
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
          className="flex flex-col items-center text-center gap-2.5 mb-4 sm:mb-6"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600 mb-0.5">
              Continuous Learning &amp; Credentials
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
              From my <span className="text-brand-500">Certifications &amp; Insights</span>
            </h2>
          </div>

          <a
            href="https://linkedin.com/in/sanikatare"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-1.5 text-xs font-bold shadow-md transition-all hover:scale-105"
          >
            <span>See All on LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={cardStaggerVariants(shouldReduceMotion)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {certifications.slice(0, 4).map((cert) => {
            return (
              <motion.div
                key={cert.id}
                variants={fadeInUpVariants(shouldReduceMotion)}
                onClick={() => setSelectedCert(cert)}
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-brand-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-0.5"
              >
                <div>
                  {/* Card Visual Graphic Mockup */}
                  <div className="relative h-36 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 p-3.5 text-white flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-white/10 px-2 py-0.5 rounded text-brand-300">
                        {cert.date}
                      </span>
                      <Award className="h-3.5 w-3.5 text-brand-400" />
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-brand-300 uppercase tracking-wider">
                        {cert.issuer}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold font-display leading-tight text-white mt-0.5 group-hover:text-brand-300 transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="text-[10px] text-slate-400 font-mono truncate">
                      {cert.credential}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-brand-50 border border-brand-200/80 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-brand-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Arrow Button */}
                <div className="px-4 pb-3.5 pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-brand-600 transition-colors">
                    View Verification
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white group-hover:bg-brand-500 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Credential Details Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 text-slate-800 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-brand-50 border border-brand-200 text-brand-600 px-3 py-0.5 text-xs font-semibold">
                {selectedCert.date}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {selectedCert.issuer}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-slate-900">{selectedCert.title}</h3>
            <p className="text-sm font-semibold text-brand-600 mt-1">{selectedCert.credential}</p>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Covered Skills &amp; Concepts
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full bg-slate-900 text-white px-5 py-2 text-xs font-semibold hover:bg-brand-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
