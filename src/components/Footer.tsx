import { ArrowUpRight, Mail, Phone, MapPin, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, MediumIcon } from './BrandIcons'
import { profile } from '../data/portfolio'

interface FooterProps {
  onOpenResume?: () => void
}

export default function Footer({ onOpenResume }: FooterProps) {
  return (
    <footer className="bg-dark-900 text-white border-t border-white/10 py-6 sm:py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Brand & Bio Column */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                SANIKA TARE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Working on AI/ML tools and using creative engineering skills to build, design, and ship high-impact products from concept to production.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={profile.mediumUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
                aria-label="Medium profile"
              >
                <MediumIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
                aria-label="Email Sanika"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
                aria-label="Call Sanika"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Details & Resume */}
          <div className="md:col-span-5 space-y-4 md:pl-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400">
              Contact &amp; Location
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0" />
                <span>{profile.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
                  {profile.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                  {profile.phone}
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-semibold transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-brand-400" />
                  <span>Verified Resume</span>
                </button>
              )}
              <a
                href={`mailto:${profile.email}?subject=Opportunity%20/%20Project%20Discussion`}
                className="inline-flex items-center gap-1 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 text-xs font-semibold shadow-glow-blue transition-all"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
