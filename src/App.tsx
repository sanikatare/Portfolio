import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Portfolio from './sections/Portfolio'
import Education from './sections/Education'
import ContactSection from './sections/ContactSection'
import Certifications from './sections/Certifications'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-surface-light text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Skip to content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Main Content Flow with on-page landing navigation */}
      <main>
        {/* Landing Page with All Navigation & Actions right on the hero */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Dedicated Skills Section */}
        <Skills />

        {/* "My Work & Leadership Experience" with Timeline & Official Logos */}
        <Experience />

        {/* "Lets have a look at my Portfolio" with Filter Tabs & Browser Mockups */}
        <Portfolio />

        {/* Dedicated "My Education" section with PCCOE and DAV Logos */}
        <Education />

        {/* "Have an Awesome Project Idea? Let's Discuss" Contact Card */}
        <ContactSection />

        {/* "From my Certifications & Insights" */}
        <Certifications />
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl hover:shadow-2xl border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 animate-fade-in"
          aria-label="Back to top"
          title="Back to landing page"
        >
          <ArrowUp className="h-5 w-5 text-brand-400" />
        </button>
      )}

      {/* Dark Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Comprehensive Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  )
}
