import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, Download, FileText, Check, Copy, ExternalLink, Printer, Sparkles, Eye } from 'lucide-react'
import { profile } from '../data/portfolio'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('sheet')
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/Sanika_Tare_Resume.pdf`)
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
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 sm:py-6 overflow-y-auto bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl sm:rounded-3xl bg-slate-100 shadow-2xl border border-slate-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 sm:px-6 py-3.5 print:hidden">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 font-bold">
                  <FileText className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-none">
                      Sanika Tare — Official Resume
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>Latest 2026/2027</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    AI Software Engineer · PCCOE Pune · Tata Technologies Intern
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold border border-slate-200">
                  <button
                    onClick={() => setViewMode('sheet')}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 transition-all ${
                      viewMode === 'sheet'
                        ? 'bg-white text-brand-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Interactive formatted sheet"
                  >
                    <FileText className="h-3 w-3" />
                    <span>Formatted</span>
                  </button>
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 transition-all ${
                      viewMode === 'pdf'
                        ? 'bg-white text-brand-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Direct PDF file preview"
                  >
                    <Eye className="h-3 w-3" />
                    <span>PDF Viewer</span>
                  </button>
                </div>

                {/* Direct Download Button */}
                <a
                  href="/Sanika_Tare_Resume.pdf"
                  download="Sanika_Tare_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-3.5 py-1.5 text-xs font-bold shadow-sm transition-all hover:scale-105"
                  title="Download Sanika Tare Resume PDF"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Print Button */}
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  title="Print / Save as PDF"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Resume Canvas */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-200/80">
              {viewMode === 'pdf' ? (
                <div className="w-full h-[78vh] rounded-xl overflow-hidden bg-white shadow-xl border border-slate-300 flex flex-col">
                  <div className="bg-slate-800 text-white px-4 py-2 text-xs flex items-center justify-between">
                    <span className="font-mono text-slate-300">Sanika_Tare_Resume.pdf (Latest Version)</span>
                    <a
                      href="/Sanika_Tare_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-300 hover:text-white"
                    >
                      <span>Open in new tab</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <iframe
                    src="/Sanika_Tare_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    title="Sanika Tare Resume PDF"
                    className="w-full flex-1 border-0"
                  />
                </div>
              ) : (
                /* Authentic 1-Page Resume Layout matching the provided PDF exact text and styling */
                <div className="resume-sheet mx-auto max-w-3xl bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200/80 p-6 sm:p-8 md:p-10 text-[12.5px] leading-snug font-sans print:shadow-none print:border-none print:p-0">
                  {/* HEADER */}
                  <header className="text-center pb-2 border-b border-slate-900">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      SANIKA TARE
                    </h1>
                    <p className="text-xs sm:text-sm font-bold tracking-wider text-slate-800 mt-0.5">
                      AI SOFTWARE ENGINEER
                    </p>
                    <div className="mt-1 text-[11px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                      <span>Pune, Maharashtra, India</span>
                      <span>|</span>
                      <a href={`tel:${profile.phone}`} className="hover:text-brand-600 font-medium">
                        +91-7249255572
                      </a>
                      <span>|</span>
                      <a href={`mailto:${profile.email}`} className="text-brand-600 hover:underline font-medium">
                        sanikatare.work@gmail.com
                      </a>
                    </div>
                    <div className="mt-0.5 text-[11px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                      <a
                        href="https://github.com/sanikatare"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-600 hover:underline"
                      >
                        github.com/sanikatare
                      </a>
                      <span>|</span>
                      <a
                        href="https://linkedin.com/in/sanikatare"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-600 hover:underline"
                      >
                        linkedin.com/in/sanikatare
                      </a>
                      <span>|</span>
                      <a
                        href="https://portfolio-three-bay-okimzvh4sn.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-600 hover:underline"
                      >
                        portfolio-three-bay-okimzvh4sn.vercel.app
                      </a>
                    </div>
                  </header>

                  {/* PROFESSIONAL SUMMARY */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-[11.5px] text-slate-800 text-justify leading-relaxed">
                      Results-driven Software Engineer and Computer Engineering student (B.E., 2027) who builds sustainable, efficient web applications with exceptional user interfaces. Strong in full-stack development, system design, and data-driven problem solving, with measurable results across an industry internship and two benchmarked projects. Collaborative leader who takes ownership and delivers reliable, user-focused solutions.
                    </p>
                  </section>

                  {/* TECHNICAL SKILLS */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      TECHNICAL SKILLS
                    </h2>
                    <div className="space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                      <div>
                        <strong className="font-bold text-slate-900">Languages:</strong> Python, JavaScript, TypeScript, Java, C, C++, SQL
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">AI/ML:</strong> Machine Learning, Deep Learning, NLP, Transformers, XGBoost, Predictive Analytics, Feature Engineering, SHAP, Prompt Engineering
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">GenAI &amp; RAG:</strong> LLMs, RAG, AI Agents, Multi-Agent Systems, LangChain, FAISS, BM25, ChromaDB, Embeddings, Hybrid Search, Reranking, Gemini
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">Backend:</strong> FastAPI, Node.js, Express.js, REST APIs, Microservices, JWT, RBAC, SQLAlchemy, Pydantic
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">Frontend &amp; UI:</strong> React.js, React 19, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, Recharts, Responsive Design
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">Databases &amp; Cloud:</strong> PostgreSQL, MongoDB, pgvector, AWS, Docker, Docker Compose, Nginx
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">CS Fundamentals:</strong> DSA, OOP, DBMS, Operating Systems, Computer Networks, Distributed Systems, System Design
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">Leadership &amp; Soft Skills:</strong> Team Leadership, Collaboration, Technical Communication, Ownership, Problem Solving
                      </div>
                    </div>
                  </section>

                  {/* EXPERIENCE */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      EXPERIENCE
                    </h2>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-1 text-[12px]">
                        <div>
                          <strong className="font-bold text-slate-900">Tata Technologies</strong>
                          <span className="text-slate-800"> — AI/ML Engineering Intern, Vehicle IQ Digital Twin | Pune, India</span>
                        </div>
                        <span className="font-bold text-slate-900 text-[11.5px]">June 2026 – August 2026</span>
                      </div>
                      <p className="text-[11px] text-slate-600 italic font-mono mt-0.5">
                        Python | XGBoost | SHAP | FastAPI | React 19 | LangChain | ChromaDB | Gemini | RAG | Docker | Nginx
                      </p>
                      <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                        <li>Developed an AI Vehicle Digital Twin for health monitoring, predictive maintenance, OBD-II diagnostics, and trip intelligence.</li>
                        <li>Unified 8 automotive data sources into a 70,000-row, 209-feature dataset for health analysis and failure prediction.</li>
                        <li>Built an XGBoost failure classifier (0.998 ROC-AUC, 99.4% recall) and Remaining Useful Life (RUL) estimation.</li>
                        <li>Applied SHAP to identify torque, rotational speed, and tool wear as key failure drivers.</li>
                        <li>Designed 8 independent FastAPI services with a React 19 dashboard, containerized with Docker Compose and Nginx.</li>
                        <li>Implemented a LangChain, ChromaDB, and Gemini RAG pipeline for document-grounded diagnostic guidance.</li>
                        <li>Delivered trip intelligence combining vehicle health, route, weather, and fuel data into travel advisories.</li>
                      </ul>
                    </div>
                  </section>

                  {/* PROJECTS */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      PROJECTS
                    </h2>
                    <div className="space-y-2.5">
                      {/* Project 1 */}
                      <div>
                        <div className="text-[12px]">
                          <strong className="font-bold text-slate-900">HomeIQ</strong>
                          <span className="text-slate-800"> — Multi-Agent AI Home Intelligence Platform</span>
                        </div>
                        <p className="text-[11px] text-slate-600 italic font-mono mt-0.5">
                          Python | FastAPI | PostgreSQL | pgvector | LangChain | Gemini | BioBERT | RAG | Docker
                        </p>
                        <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                          <li>Built a multi-agent platform with 8 domain agents (Kitchen, Laundry, Maintenance, Finance, Vehicles, Documents, Health, Travel) and tool-based workflows.</li>
                          <li>Delivered document intelligence: 100% classification and extraction F1 on a 12-document benchmark.</li>
                          <li>Designed grounded RAG with 100% citation correctness and 0% hallucination across 8 domain queries.</li>
                          <li>Developed biomedical NLP reaching 99.7% biomarker F1, 98.9% PubMedQA accuracy, and 99.4% interaction F1.</li>
                          <li>Verified 100% agent routing, 100% Human-in-the-Loop policy enforcement, zero cross-tenant leakage, 20/20 tables.</li>
                        </ul>
                      </div>

                      {/* Project 2 */}
                      <div>
                        <div className="text-[12px]">
                          <strong className="font-bold text-slate-900">VedaWise</strong>
                          <span className="text-slate-800"> — Explainable RAG &amp; Knowledge Retrieval System</span>
                        </div>
                        <p className="text-[11px] text-slate-600 italic font-mono mt-0.5">
                          Python | FAISS | BM25 | RRF | Transformers | Reranking | RAG | LLMs
                        </p>
                        <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                          <li>Architected an explainable RAG system over 10,546 verses using BM25, 384-dim embeddings, FAISS, RRF, reranking, and evidence filtering.</li>
                          <li>Improved retrieval on a 92-question benchmark to 90% Recall@10, 0.7838 MRR, and 0.7120 nDCG@5.</li>
                          <li>Implemented citation verification and abstention: 100% citation precision and abstention accuracy.</li>
                          <li>Reached 93.75% answer correctness at 115.7 ms average query latency while enforcing evidence boundaries.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* ACHIEVEMENTS */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      ACHIEVEMENTS
                    </h2>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                      <li>Filed a patent for an ML-based predictive Li-Fi/Wi-Fi handover system using smartphone motion sensors.</li>
                      <li>Presented AI/ML predictive-systems research at KSHITIJ 2026.</li>
                    </ul>
                  </section>

                  {/* EDUCATION */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      EDUCATION
                    </h2>
                    <div className="text-[11.5px] leading-relaxed">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <strong className="font-bold text-slate-900">
                          Pimpri Chinchwad College of Engineering | Pune, Maharashtra
                        </strong>
                        <span className="font-bold text-slate-900 text-[11px]">2023 – 2027 (Expected)</span>
                      </div>
                      <div className="text-slate-800">
                        Bachelor of Engineering in Computer Engineering | Coursework: AI, ML, DSA, DBMS, Networks, Distributed Systems
                      </div>
                    </div>
                  </section>

                  {/* CERTIFICATIONS */}
                  <section className="mt-3">
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-800 pb-0.5 mb-1.5">
                      CERTIFICATIONS
                    </h2>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11.5px] leading-relaxed text-slate-800">
                      <li>Databricks — Generative AI Fundamentals</li>
                      <li>AWS — Cloud Practitioner Essentials</li>
                      <li>The AI Engineer Course — Bootcamp</li>
                      <li>AICTE — Generative AI Virtual Internship</li>
                      <li>Data Structures using C and C++</li>
                      <li>IIT Guwahati — Summer Analytics</li>
                    </ul>
                  </section>
                </div>
              )}
            </div>

            {/* Bottom Modal Actions */}
            <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-white px-4 sm:px-6 py-3 print:hidden">
              <div className="text-xs text-slate-500">
                Direct Contact: <a href={`mailto:${profile.email}`} className="font-semibold text-brand-600 hover:underline">{profile.email}</a>
                <span className="mx-1.5 text-slate-300">·</span>
                <span className="font-medium text-slate-600">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  title="Copy direct download link"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
                <a
                  href="/Sanika_Tare_Resume.pdf"
                  download="Sanika_Tare_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-1.5 text-xs font-bold shadow-md transition-all hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Latest Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
