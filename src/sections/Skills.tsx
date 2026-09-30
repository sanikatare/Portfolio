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
      'Human-in-the-Loop (HITL) Gates',
      'Hybrid & Grounded RAG',
      'LangChain & ChromaDB',
      'Vector Search & Embeddings',
      'BioBERT & PubMedQA (99.7% F1)',
      'LayoutLMv3, Donut & SciBERT',
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
      'Golden Evaluation Benchmarks',
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
      'SQLAlchemy 2.0 & Alembic',
      'PostgreSQL 16 (22-Table Core)',
      'MongoDB & Mongoose ODM',
      'RESTful APIs & Microservices',
      'JWT Auth & bcrypt Encryption',
      'Role-Based Access Control (RBAC)',
      '3-Tier Tool Sandboxing',
      'Dynamic Valuation & Ledger Engines',
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
      'React Router DOM, Axios & Chart.js',
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
    <section id="skills" className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 bg-white border-t border-slate-100">
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
            Production technologies, AI/ML models, and full-stack frameworks implemented across Digital Twin, VedaWise GenAI, ElectroFine, HomeIQ, PawPrints, and Hinglish NLP.
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
                className="rounded-2xl bg-slate-50/70 border border-slate-200/80 p-4 sm:p-5 hover:border-brand-300 hover:shadow-md transition-all flex flex-col"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-xs shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 leading-tight truncate">
                      {group.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-brand-600 block truncate mt-0.5">
                      {group.badge}
                    </span>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-2xs"
                    >
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
