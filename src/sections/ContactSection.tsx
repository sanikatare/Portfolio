import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react'
import { profile } from '../data/portfolio'
import { sectionContainerVariants, fadeInUpVariants } from '../utils/motion'

export default function ContactSection() {
  const [emailInput, setEmailInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput.trim()) return

    // Trigger direct mailto client with pre-filled sender inquiry
    const mailto = `mailto:${profile.email}?subject=Project%20Idea%20/%20Opportunity%20from%20${encodeURIComponent(
      emailInput
    )}&body=Hi%20Sanika,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity/project.%20Please%20reach%20me%20at%20${encodeURIComponent(
      emailInput
    )}.`
    window.location.href = mailto

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text)
    if (type === 'phone') {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    } else {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  return (
    <section id="contact" className="lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-10 relative overflow-hidden">
      <div className="container-custom my-auto">
        {/* Main Clean Light Card */}
        <motion.div
          variants={sectionContainerVariants(shouldReduceMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px', amount: 0.15 }}
          className="rounded-3xl bg-white border border-slate-200/90 shadow-lg p-5 sm:p-7 md:p-8 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Subtle warm corner accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Heading */}
          <motion.div variants={fadeInUpVariants(shouldReduceMotion)} className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-50 border border-brand-200 text-[11px] font-bold text-brand-600 mb-2">
              <Sparkles className="h-3 w-3" />
              <span>Let&apos;s Build Together</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Have an Awesome Project Idea?{' '}
              <span className="text-brand-500">Let&apos;s Discuss</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Open for full-time AI/ML &amp; Software Engineering roles, collaborative research, and backend development.
            </p>
          </motion.div>

          {/* Email Subscribe / Inquiry Input Bar */}
          <motion.form
            variants={fadeInUpVariants(shouldReduceMotion)}
            onSubmit={handleSubmit}
            className="mt-5 sm:mt-6 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full border border-slate-300 bg-white shadow-sm focus-within:border-brand-500 transition-colors">
              <div className="relative flex items-center w-full px-3 py-1.5 sm:py-1">
                <Mail className="h-4 w-4 text-slate-400 shrink-0 mr-2" />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 shrink-0"
              >
                <span>Send</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            {submitted && (
              <div className="mt-2.5 text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>Opening your email client to connect directly with Sanika!</span>
              </div>
            )}
          </motion.form>

          {/* Quick Credential Badges beneath the input */}
          <motion.div
            variants={fadeInUpVariants(shouldReduceMotion)}
            className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span>AWS Cloud Practitioner</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span>Smart India Hackathon</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span>Patent Application Filed</span>
            </div>
          </motion.div>

          {/* Direct Contact Cards */}
          <motion.div
            variants={fadeInUpVariants(shouldReduceMotion)}
            className="mt-5 sm:mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
          >
            {/* Email */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-brand-50/50 hover:border-brand-200 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="text-slate-400 hover:text-brand-600 p-0.5"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-0.5 block text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-600 truncate"
              >
                {profile.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-brand-50/50 hover:border-brand-200 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone / WhatsApp</span>
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="text-slate-400 hover:text-brand-600 p-0.5"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
              <a
                href={`tel:${profile.phone}`}
                className="mt-0.5 block text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-600"
              >
                {profile.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</span>
                <MapPin className="h-3.5 w-3.5 text-brand-500" />
              </div>
              <div className="mt-0.5 text-xs sm:text-sm font-bold text-slate-800">
                {profile.location}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
