import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Sticky horizontal storytelling — vertical scroll drives horizontal panel travel.
 * Pattern inspired by premium healthcare landing storytelling (not copied assets).
 */
export default function HorizontalStory({ panels, ctaTo = '/how-it-works', ctaLabel = 'See how it works' }) {
  const outerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const count = panels.length

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const onScroll = () => {
      const el = outerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      if (total <= 0) {
        setProgress(0)
        return
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(scrolled / total)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const translate = progress * (count - 1) * 100

  return (
    <section
      ref={outerRef}
      className="relative hidden md:block"
      style={{ height: `${count * 180}vh` }}
      aria-label="How ELVA Health works"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="flex h-full will-change-transform"
          style={{
            width: `${count * 100}vw`,
            transform: `translate3d(-${translate}vw, 0, 0)`,
          }}
        >
          {panels.map((panel, index) => (
            <article
              key={panel.number}
              className="flex h-screen w-screen shrink-0 items-stretch"
              aria-hidden={Math.round(progress * (count - 1)) !== index}
            >
              <div
                className="relative flex w-[55%] items-center justify-center overflow-hidden px-8"
                style={{ backgroundColor: panel.tone }}
              >
                <div className="relative w-[min(78%,34rem)]">{panel.visual}</div>
              </div>
              <div className="flex w-[45%] flex-col justify-center gap-6 bg-white px-10 lg:px-16 xl:px-20">
                <p className="text-2xl font-bold text-ink">{panel.number}</p>
                <h2 className="display max-w-md text-[clamp(1.75rem,2.6vw,2.6rem)] leading-[1.25]">
                  {panel.title}
                </h2>
                <p className="max-w-md text-[1.15rem] leading-[1.75] text-ink-soft">
                  {panel.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <Link
                    to={ctaTo}
                    className="inline-flex items-center gap-2 text-[1.05rem] font-bold underline underline-offset-4"
                  >
                    {ctaLabel}
                  </Link>
                  {index < count - 1 ? (
                    <span className="inline-flex items-center gap-2 text-[1.05rem] font-bold text-muted">
                      Scroll
                      <ArrowRight size={18} aria-hidden className="translate-y-px" />
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {panels.map((panel, index) => {
            const active = Math.round(progress * (count - 1)) === index
            return (
              <span
                key={panel.number}
                className={`h-2.5 rounded-full transition-all ${
                  active ? 'w-8 bg-ink' : 'w-2.5 bg-ink/25'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Mobile fallback: stacked pastel chapters (no sticky horizontal). */
export function HorizontalStoryMobile({ panels, ctaTo = '/how-it-works', ctaLabel = 'See how it works' }) {
  return (
    <section className="md:hidden" aria-label="How ELVA Health works">
      {panels.map((panel) => (
        <article key={panel.number} className="border-b border-line">
          <div className="flex min-h-[48vh] items-center justify-center px-6 py-10" style={{ backgroundColor: panel.tone }}>
            <div className="w-full max-w-sm">{panel.visual}</div>
          </div>
          <div className="bg-white px-6 py-10">
            <p className="text-lg font-bold text-ink">{panel.number}</p>
            <h2 className="display mt-3 text-[1.65rem] leading-snug">{panel.title}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{panel.description}</p>
            <Link
              to={ctaTo}
              className="mt-6 inline-flex items-center gap-2 font-bold underline underline-offset-4"
            >
              {ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
