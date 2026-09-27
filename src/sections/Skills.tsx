import { motion, useReducedMotion } from 'framer-motion'
import { Server, BrainCircuit, Code2, Layout } from 'lucide-react'
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
    id: 'backend',
    title: 'Backend & Distributed',
    icon: Server,
    badge: 'Microservices & APIs',
    skills: [
      'Python',
      'FastAPI',
      'gRPC & Protobuf',
      'RabbitMQ (aio-pika)',
      'WebSockets',
      'REST APIs',
      'JWT & RBAC',
      'SQLAlchemy',
      'Node.js & Express',
      'MongoDB & Mongoose',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI, Machine Learning & RAG',
    icon: BrainCircuit,
    badge: 'Applied AI & Telematics',
    skills: [
      'LangChain',
      'ChromaDB Vector Store',
      'RAG Pipelines',
      'XGBoost & LightGBM',
      'Scikit-Learn',
      'TensorFlow',
      'LSTM & BiLSTM',
      'Transformers & NLP',
      'Pandas & NumPy',
      'Document OCR',
    ],
  },
  {
    id: 'languages-cs',
    title: 'Languages & Core CS',
    icon: Code2,
    badge: 'Engineering Fundamentals',
    skills: [
      'Python (Primary)',
      'C / C++',
      'JavaScript & TypeScript',
      'SQL',
      'Data Structures & Algorithms',
      'Database Management (DBMS)',
      'Operating Systems & Concurrency',
      'Object-Oriented Design (OOP)',
    ],
  },
  {
    id: 'frontend-tools',
    title: 'Frontend & Dev Tools',
    icon: Layout,
    badge: 'Web & Cloud Delivery',
    skills: [
      'React.js',
      'Tailwind CSS',
      'Figma & UI/UX',
      'Canva & Visual Design',
      'AWS Cloud Practitioner',
      'Git & GitHub',
      'Postman',
      'pytest & Asyncio',
      'Cursor & Copilot',
      'Agile / SDLC',
    ],
  },
]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="skills" className="min-h-[100dvh] flex flex-col justify-center py-8 sm:py-10 bg-white border-t border-slate-100">
      <motion.div
        variants={sectionContainerVariants(shouldReduceMotion)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px', amount: 0.15 }}
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
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900">
            Core Skills &amp; <span className="text-brand-500">Engineering Toolkit</span>
          </h2>
        </motion.div>

        {/* Compact 4-Column Grid of Skill Badges */}
        <motion.div
          variants={cardStaggerVariants(shouldReduceMotion)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.id}
                variants={fadeInUpVariants(shouldReduceMotion)}
                className="rounded-2xl bg-slate-50/70 border border-slate-200/80 p-4 sm:p-5 hover:border-brand-300 hover:shadow-md transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {group.title}
                    </h3>
                    <span className="text-[10px] font-medium text-slate-400 block">
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
