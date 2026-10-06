import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { 
  ArrowDown, 
  Cpu, 
  Briefcase, 
  Layers, 
  GraduationCap, 
  Award, 
  Mail, 
  FileText,
  User,
  Download
} from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, MediumIcon } from '../components/BrandIcons'

interface HeroProps {
  onOpenResume?: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  const shouldReduceMotion = useReducedMotion()

  const [photoSrc] = useState<string>(() => {
    return localStorage.getItem('sanika_user_photo') || '/me.png'
  })
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const savedPhoto = localStorage.getItem('sanika_user_photo')
    if (savedPhoto && savedPhoto.startsWith('data:image/')) {
      fetch('/api/upload-avatar', {
        method: 'POST',
        body: savedPhoto,
      }).catch(() => {
        // ignore if offline
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navigationSections = [
    {
      id: 'skills',
      title: 'Skills & Toolkit',
      icon: Cpu,
      accent: 'group-hover:text-brand-500 group-hover:border-brand-300',
    },
    {
      id: 'experience',
      title: 'Work Experience',
      icon: Briefcase,
      accent: 'group-hover:text-blue-600 group-hover:border-blue-300',
    },
    {
      id: 'portfolio',
      title: 'Projects & Code',
      icon: Layers,
      accent: 'group-hover:text-indigo-600 group-hover:border-indigo-300',
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      accent: 'group-hover:text-amber-600 group-hover:border-amber-300',
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: Award,
      accent: 'group-hover:text-emerald-600 group-hover:border-emerald-300',
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      icon: Mail,
      accent: 'group-hover:text-rose-600 group-hover:border-rose-300',
    },
  ]

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center py-6 sm:py-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative my-auto"
      >
        {/* Main Hero Split: Left Side Photo (Circle with Blue Border) + Right Side Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 max-w-5xl mx-auto">
          {/* Left Side: Exact Picture in Circle with Blue Border */}
          <motion.div variants={itemVariants} className="shrink-0 flex justify-center">
            <div className="relative">
              {/* Subtle ambient glow behind avatar */}
              <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-xl -m-2 pointer-events-none" />
              
              {/* Circle with Blue Border */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full border-4 sm:border-[5px] border-blue-500 shadow-2xl overflow-hidden bg-slate-100 p-1">
                {!imgError ? (
                  <img
                    src={photoSrc}
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                    <User className="h-14 w-14 text-blue-400" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Introduction & Action Buttons */}
          <div className="flex-1 text-center md:text-left">
            {/* Main Title Banner */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                I&apos;m <span className="text-brand-500 font-extrabold drop-shadow-xs">{profile.firstName}</span>,
                <br />
                <span className="text-slate-800">AI Software Engineer</span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
                Results-driven Software Engineer and Computer Engineering student building sustainable web applications, LLM Digital Twins, and grounded RAG systems.
              </p>
            </motion.div>

            {/* Direct Action Buttons & External Profiles */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3"
            >
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-md hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="whitespace-nowrap">View Resume</span>
                </button>
              )}

              <a
                href="/Sanika_Tare_Resume.pdf"
                download="Sanika_Tare_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-md hover:-translate-y-0.5"
                title="Download Sanika Tare Resume (PDF)"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="Medium profile"
              >
                <MediumIcon size={16} />
                <span>Medium</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Complete On-Page Navigation Directory */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto w-full">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Explore Portfolio Sections
            </span>
            <span className="text-[11px] font-semibold text-brand-600 flex items-center gap-1">
              <span>Quick Navigation</span>
              <ArrowDown className="h-3 w-3" />
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
            {navigationSections.map((sec) => {
              const Icon = sec.icon
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`group text-left px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex items-center justify-between hover:-translate-y-0.5 ${sec.accent}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                      {sec.title}
                    </h2>
                  </div>
                  <ArrowDown className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-500 transition-colors shrink-0 ml-1.5" />
                </button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
