import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, Download, FileText, Check, Copy, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'aiml' | 'fullstack'>('aiml')
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 font-bold">
              <FileText className="h-5 w-5 text-brand-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Sanika Tare — Verified Resume</h3>
              <p className="text-xs text-slate-500">Official CV Data · Pune, Maharashtra</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="flex rounded-full bg-slate-200/80 p-1 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('aiml')}
                className={`rounded-full px-3.5 py-1.5 transition-all ${
                  activeTab === 'aiml'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI/ML Engineer CV
              </button>
              <button
                onClick={() => setActiveTab('fullstack')}
                className={`rounded-full px-3.5 py-1.5 transition-all ${
                  activeTab === 'fullstack'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Backend & Full-Stack CV
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              title="Print / Save as PDF"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Print/PDF</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Area with opacity transition when switching CV tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed font-sans"
          >
          {/* Header Contact */}
          <div className="border-b border-slate-200 pb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              SANIKA TARE
            </h1>
            <p className="mt-1 text-base font-semibold text-brand-600">
              {activeTab === 'aiml'
                ? 'AI/ML Engineer · Applied Deep Learning & NLP'
                : 'AI Software Engineer — Backend (Python) | Frontend (React)'}
            </p>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
                Pune, Maharashtra, India
              </span>
              <span>·</span>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1 hover:text-brand-600">
                <Phone className="h-3.5 w-3.5 text-brand-500" />
                {profile.phone}
              </a>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-brand-600">
                <Mail className="h-3.5 w-3.5 text-brand-500" />
                {profile.email}
              </a>
              <span>·</span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-brand-600 hover:underline"
              >
                github.com/sanikatare
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>·</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-brand-600 hover:underline"
              >
                linkedin.com/in/sanikatare
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2">
              Summary
            </h4>
            <p className="text-slate-700 text-justify">
              {activeTab === 'aiml'
                ? 'Computer Engineering undergraduate with hands-on experience developing full-stack MERN applications, NLP systems, and AI-powered automation solutions. Strong foundation in Data Structures & Algorithms, Operating Systems, DBMS, Object-Oriented Programming, and Software Engineering. Skilled in building REST APIs, implementing CRUD operations, debugging applications, and developing scalable software systems using C++, Java, Python, SQL, and JavaScript.'
                : 'Computer Engineering undergraduate with hands-on experience building Python backend services (FastAPI), React front-end interfaces, and REST APIs across full-stack MERN and AI-driven projects. Comfortable across SQL/NoSQL data modelling, authentication and secure data handling, and modern AI-assisted development workflows using Cursor, Claude, ChatGPT, and Antigravity. Strong CS fundamentals (DSA, OS, DBMS, OOP, Software Engineering), an ownership mindset, and a track record of shipping production-oriented systems end-to-end.'}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2.5">
              Technical Skills
            </h4>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="font-semibold text-slate-900">Languages:</span> C, C++, Python, SQL, JavaScript
              </div>
              <div>
                <span className="font-semibold text-slate-900">Backend:</span> Python, FastAPI, Flask, REST APIs, JWT, bcrypt, RBAC, Node.js, Express.js
              </div>
              <div>
                <span className="font-semibold text-slate-900">Frontend:</span> React.js, JavaScript, Responsive UI, Figma-to-component, Tailwind CSS
              </div>
              <div>
                <span className="font-semibold text-slate-900">Databases:</span> MongoDB (NoSQL), SQL, Data Modelling, Mongoose, Query Optimization
              </div>
              <div>
                <span className="font-semibold text-slate-900">AI / ML:</span> Machine Learning, Deep Learning, NLP, Transformers, TensorFlow, Scikit-Learn, LangChain, ChromaDB, RAG, GenAI, Pandas, NumPy
              </div>
              <div>
                <span className="font-semibold text-slate-900">AI Dev Tools:</span> Cursor, Claude, ChatGPT, GitHub Copilot workflows, Antigravity, Qoder
              </div>
              <div>
                <span className="font-semibold text-slate-900">Core CS:</span> Data Structures & Algorithms, Operating Systems, DBMS, OOP, Software Engineering, Agile/SDLC
              </div>
              <div>
                <span className="font-semibold text-slate-900">Tools & Cloud:</span> Git, GitHub, Postman, VS Code, AWS Cloud Practitioner (certified)
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
              Work & Leadership Experience
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-slate-900">
                    Student Intern — Vehicle Intelligence & Digital Twin Systems
                  </h5>
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    Tata Technologies · June 2026 – August 2026
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mb-1.5">Pune, Maharashtra, India</p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                  <li>
                    <strong className="text-slate-900">Backend & API development:</strong> Built AI-driven services in Python and FastAPI, integrating predictive-maintenance and diagnostic models into a conversational, API-accessible Vehicle Health Digital Twin.
                  </li>
                  <li>
                    <strong className="text-slate-900">Data & database work:</strong> Engineered vehicle health scoring and fault-explanation logic over structured sensor/telemetry data, feeding decision-ready outputs to downstream services.
                  </li>
                  <li>
                    <strong className="text-slate-900">AI-assisted engineering:</strong> Used LangChain, ChromaDB, and LLM tooling to build a RAG-based Q&A system over vehicle manuals and OBD-II documentation for automated diagnostics.
                  </li>
                  <li>
                    <strong className="text-slate-900">Applied ML:</strong> Built XGBoost, Random Forest, and LightGBM models for failure prediction and remaining-useful-life (RUL) estimation in an Agile cross-functional environment.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-slate-900">
                    Design Executive
                  </h5>
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    Google Developer Groups On Campus (GDGC PCCOE) · 2024 – 2025
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mb-1.5">
                  PCCOE Pune · Tools: Canva, Figma, AI tools
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-700">
                  <li>Lead digital content creation, social media creatives, and visual branding across all GDGC PCCOE community programs and hackathons.</li>
                  <li>Develop UI/UX wireframes, interactive prototypes, and design systems for web portals using Figma and Canva.</li>
                  <li>Execute creative concepts, marketing &amp; promotional assets, presentation decks, and typography layouts with high visual fidelity.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h5 className="font-bold text-slate-900">
                    Marketing Executive
                  </h5>
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    PCCOE ACM Student Chapter · 2024 – 2025
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mb-1.5">
                  PCCOE Pune · Tool: Canva · Digital Marketing &amp; Campaign Strategy
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-700">
                  <li>Lead digital marketing campaigns, social media management, brand promotion, and event marketing for chapter symposiums.</li>
                  <li>Design promotional creatives in Canva; author targeted copywriting to drive community building and high event turnouts.</li>
                  <li>Track campaign analytics, audience engagement metrics, and cross-functional collaboration to expand ACM&apos;s campus reach.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
              Key Projects
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">
                    PawPrints — Full-Stack Pet Health Platform
                  </span>
                  <span className="text-slate-500 font-mono">MERN Stack (React, Node.js, Express.js, MongoDB)</span>
                </div>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-700">
                  <li>Developed a full-stack application across 6+ core modules (profiles, medical records, vaccination tracking, appointments, diagnosis history, community interactions).</li>
                  <li>Designed and implemented 15+ REST APIs and CRUD operations across 6 MongoDB collections.</li>
                  <li>Built secure authentication and authorization with JWT, bcrypt, protected routes, and role-based access control for 2 user roles.</li>
                  <li>Responsive React.js frontend integrated with backend services; validated with Postman and Mongoose.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">
                    AI-Based LiFi-WiFi Intelligent Handover System
                  </span>
                  <span className="text-brand-600 font-semibold">Patent Application Filed</span>
                </div>
                <p className="text-slate-500 font-mono text-[11px]">Deep Learning, LSTM, Transformers, Python</p>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-700">
                  <li>Predictive network-automation system using LSTM and Transformer models to optimize LiFi-WiFi handover decisions.</li>
                  <li>Achieved ~90% prediction accuracy through feature engineering, model tuning, and performance testing.</li>
                  <li>Patent application officially filed for the intelligent handover architecture.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">
                    JurisAI — Legal Document Intelligence Platform
                  </span>
                  <span className="text-slate-500 font-mono">Python, NLP, OCR, LLMs, RAG</span>
                </div>
                <p className="mt-1 text-slate-700">
                  AI-powered legal document analysis platform for clause extraction, semantic search, summarization, and interactive Q&A via a scalable Python processing pipeline.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">
                    D.A.V. Public School (DAV)
                  </span>
                  <span className="text-slate-500 font-mono">2010 – 2021</span>
                </div>
                <p className="text-slate-600">
                  Schooling &amp; Junior College (Class X &amp; Class XII) — Science Stream (PCM with Computer Science)
                </p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  High distinction in Mathematics, Physics &amp; Computer Science; foundation in C++ and Python
                </p>
                <p className="text-brand-700 text-[11px] mt-0.5 font-medium">
                  Activities: Leadership &amp; Teamwork, Active Participation in Competitions, Event Coordination, Strong Communication, Problem-Solving &amp; Adaptability
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-slate-900">
                    Pimpri Chinchwad College of Engineering (PCCOE), Pune
                  </span>
                  <span className="text-slate-500 font-mono">2023 – 2027</span>
                </div>
                <p className="text-slate-600">
                  Bachelor of Technology – Computer Engineering · Minor: Generative AI Tools &amp; Techniques
                </p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  Activities: GDGC PCCOE Design Executive, PCCOE ACM Marketing Executive, Patent Research Team
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-2">
              Certifications & Achievements
            </h4>
            <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>Patent Application Filed:</strong> LiFi-WiFi Intelligent Handover System</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>AWS Cloud Practitioner Essentials</strong> (Certified)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>Data Science & Machine Learning:</strong> IIT Guwahati</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>Mastering DSA using C & C++:</strong> Abdul Bari</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>Complete Web Development:</strong> Udemy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span><strong>Smart India Hackathon & Google GenAI Exchange</strong> Participant</span>
              </li>
            </ul>
          </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3.5">
          <div className="text-xs text-slate-500">
            Direct Email: <a href="mailto:sanikatare.work@gmail.com" className="font-semibold text-brand-600 hover:underline">sanikatare.work@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied URL!' : 'Share Portfolio'}</span>
            </button>
            <a
              href="mailto:sanikatare.work@gmail.com?subject=Interview%20/%20Opportunity%20Inquiry%20for%20Sanika%20Tare"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-brand-600"
            >
              <span>Get in Touch</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
