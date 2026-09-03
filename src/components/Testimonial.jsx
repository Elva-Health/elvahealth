import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { stories } from '../data/content'

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const story = stories[index]

  const prev = () => setIndex((i) => (i === 0 ? stories.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === stories.length - 1 ? 0 : i + 1))

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-surface-2 p-6 md:p-10 lg:p-12">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/10 blur-2xl" aria-hidden />
      <blockquote className="relative">
        <p className="display text-[clamp(1.35rem,3.2vw,2.15rem)] leading-[1.25] text-ink">
          “{story.quote}”
        </p>
        <footer className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-semibold text-ink">{story.name}</p>
            <p className="text-sm text-muted">{story.role}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-brand/40"
              aria-label="Previous story"
            >
              <ArrowLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-brand/40"
              aria-label="Next story"
            >
              <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        </footer>
        <div className="mt-6 flex gap-2" aria-hidden>
          {stories.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-brand' : 'w-1.5 bg-brand/25'
              }`}
            />
          ))}
        </div>
      </blockquote>
    </div>
  )
}
