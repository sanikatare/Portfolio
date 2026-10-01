import { motion, useReducedMotion } from 'framer-motion'
import { Server, BrainCircuit, Cpu, Layout } from 'lucide-react'
import { sectionContainerVariants, fadeInUpVariants, cardStaggerVariants } from '../utils/motion'

interface SkillGroup {
  id: string
  title: string
  icon: typeof Server
  badge: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'genai-rag',
    title: 'GenAI, Multi-Agent & RAG',
    icon: BrainCircuit,
    badge: 'Home IQ · VedaWise · Digital Twin',
    skills: [
      'Google GenAI (Gemini 2.5 Flash)',
      'Multi-Agent Orchestration',
      'Hybrid & Grounded RAG',
      'LangChain & ChromaDB',
      'Vector Search & Embeddings',
      'Explainable AI (4 Epistemic Layers)',
      'Document OCR & SHA-256 Dedup',
    ],
  },
  {
    id: 'ml-dl',
    title: 'Machine Learning & Deep Learning',
    icon: Cpu,
    badge: 'Digital Twin · Hinglish NLP',
    skills: [
      'Python & Scikit-Learn',
      'TensorFlow & Keras',
      'BiLSTM, LSTM & RNN',
      'XGBoost & LightGBM',
      'Random Forest',
      'Predictive Maintenance & RUL',
      'OBD-II Telemetry & Health Scoring',
      'Code-Mixed NLP & Tokenization',
      'Pandas, NumPy & Matplotlib',
    ],
  },
  {
    id: 'backend-db',
    title: 'Backend, APIs & Databases',
    icon: Server,
    badge: 'Home IQ · PawPrints · ElectroFine',
    skills: [
      'FastAPI & Pydantic v2',
      'Node.js 22 & Express.js',
      'SQL & AWS RDS',
      'PostgreSQL 16 & pgvector',
      'MongoDB & Mongoose ODM',
      'RESTful APIs & Microservices',
      'gRPC & Protobuf',
      'RabbitMQ & Async Event Bus',
      'WebSockets & Uvicorn',
      'Node-Cron & Background Workers',
    ],
  },
  {
    id: 'frontend-devops',
    title: 'Frontend, Cloud & Dev Toolkit',
    icon: Layout,
    badge: 'Full-Stack Web & Cloud Delivery',
    skills: [
      'React 19 & React.js',
      'TypeScript & JavaScript (ES6+)',
      'Tailwind CSS v4 & Vite',
      'Docker, Docker Compose & Nginx',
      'Render Blueprints & Vercel',
      'AWS Cloud Practitioner',
      'Git, GitHub, Postman & pytest',
      'Figma, Canva & UI/UX Design',
      'Agile Scrum & Jira Workflows',
    ],
  },
]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="skills"
      className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 bg-gradient-to-b from-brand-50/50 via-white to-brand-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-brand-100/80 dark:border-brand-900/30"
    >
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
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1.5">
            Technical Competencies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
            Core Skills &amp; <span className="text-brand-500">Engineering Toolkit</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Production technologies, AI/ML models, and full-stack frameworks implemented across Digital Twin, VedaWise GenAI, ElectroFine, Home IQ, PawPrints, and Hinglish NLP.
          </p>
        </motion.div>

        {/* Responsive 4-Column Grid of Skill Badges */}
        <motion.div
          variants={cardStaggerVariants(shouldReduceMotion)}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.id}
                variants={fadeInUpVariants(shouldReduceMotion)}
                className="rounded-2xl border p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col bg-gradient-to-br from-brand-50/80 via-brand-50/30 to-white border-brand-200/90 hover:border-brand-400 hover:shadow-brand-500/10 dark:from-brand-950/50 dark:via-slate-900/80 dark:to-slate-900 dark:border-brand-800/60"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-brand-200/60 dark:border-brand-800/40">
                  <div className="p-2 rounded-xl border shrink-0 bg-brand-500 text-white border-brand-500 shadow-sm shadow-brand-500/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 leading-tight truncate">
                      {group.title}
                    </h3>
                    <span className="text-[10px] font-semibold block truncate mt-0.5 text-brand-600 dark:text-brand-400">
                      {group.badge}
                    </span>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-colors shadow-2xs bg-brand-50 border-brand-200/90 text-brand-700 hover:bg-brand-100/80 hover:border-brand-400 hover:text-brand-800 dark:bg-brand-950/50 dark:border-brand-800/60 dark:text-brand-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-brand-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
