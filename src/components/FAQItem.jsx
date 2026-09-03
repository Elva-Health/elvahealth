import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-[1.05rem] font-semibold text-ink md:text-lg">{question}</span>
          <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-brand transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden
          >
            <ChevronDown size={18} />
          </span>
        </button>
      </h3>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-2 text-[0.98rem] leading-relaxed text-muted md:pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
