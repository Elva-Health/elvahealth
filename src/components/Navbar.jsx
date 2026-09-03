import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { brandName, navLinks } from '../data/content'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line/80 bg-white/95 backdrop-blur-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-elva flex h-[4.5rem] items-center justify-between gap-4 md:h-[5rem]">
        <Link
          to="/"
          className="font-display text-[1.05rem] font-extrabold tracking-[-0.03em] text-ink sm:text-[1.2rem]"
          aria-label={`${brandName} home`}
        >
          {brandName}
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[0.95rem] font-semibold transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contact" size="md">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line/70 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-elva flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold ${
                  isActive ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="px-4 pt-3 pb-2">
            <Button to="/contact" className="w-full" size="lg">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
