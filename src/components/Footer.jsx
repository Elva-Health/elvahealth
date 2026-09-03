import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { brandName, contactInfo, navLinks } from '../data/content'

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.98h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.67c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.51V23h-4V8.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="text-white">
      <div
        className="section-pad !pb-10"
        style={{ background: 'linear-gradient(97.92deg, #012e2e 16.37%, #082323)' }}
      >
        <div className="container-elva grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="inline-flex rounded-lg bg-white px-4 py-3">
              <p className="font-display text-lg font-extrabold tracking-[-0.03em] text-brand-deep">
                {brandName}
              </p>
            </div>
            <p className="mt-5 max-w-xs text-[1.05rem] leading-relaxed text-white/70">
              Your online care partner that organises, packs, and supports your medication
              routine — with reminders and convenient delivery.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 transition hover:bg-white/15 hover:text-white"
                aria-label={`${brandName} on LinkedIn`}
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/85 transition hover:bg-white/15 hover:text-white"
                aria-label={`${brandName} on Instagram`}
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white/90">Explore</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-white/70 transition hover:text-white">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/70 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white/90">Legal</p>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/70 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white/90">Contact</p>
            <ul className="mt-4 space-y-3 text-white/70">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail size={16} aria-hidden />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone size={16} aria-hidden />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="pt-1">{contactInfo.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-brand-mid py-4 text-center text-sm text-white/85">
        © 2026 {brandName}. All rights reserved.
      </div>
    </footer>
  )
}
