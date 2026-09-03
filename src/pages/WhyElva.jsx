import { Check, HeartHandshake, Layers3, Sparkles, Timer } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { DoseBox, PouchStack } from '../components/ProductVisuals'
import usePageTitle from '../hooks/usePageTitle'
import { brandName, qualityPoints, withElva, withoutElva } from '../data/content'
import familyImg from '../assets/images/family.jpg'

const reasons = [
  {
    icon: Layers3,
    title: 'Organisation first',
    description:
      'ELVA Health starts with clarity — arranging medicines so your routine is easier to see and follow.',
  },
  {
    icon: Timer,
    title: 'Built around schedules',
    description:
      'Your prescribed timings guide how doses are organised, reducing daily guesswork.',
  },
  {
    icon: HeartHandshake,
    title: 'Support for families',
    description:
      'Designed for patients and caregivers who want less friction around everyday care.',
  },
  {
    icon: Sparkles,
    title: 'Convenience without clutter',
    description:
      'Delivery and reminders help keep routines consistent without adding more to manage.',
  },
]

export default function WhyElva() {
  usePageTitle(`Why ELVA Health — Healthcare should feel simpler`)

  return (
    <>
      <section className="bg-mist">
        <div className="container-elva grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Why ELVA Health</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,5.5vw,3.75rem)]">
              Healthcare should feel simpler.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Managing multiple medicines shouldn&apos;t fill your day with sorting, reminders,
              and repeated effort. {brandName} is built to make the routine clearer and lighter.
            </p>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Get Started
              </Button>
            </div>
          </div>
          <DoseBox />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-elva">
          <SectionHeading
            title="The difference is in the daily details."
            description={`Compare the friction of managing medicines alone with an organised ${brandName} routine.`}
            className="mb-12"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-line bg-surface p-6 md:p-9">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                Without ELVA Health
              </h2>
              <ul className="mt-6 space-y-4">
                {withoutElva.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-line/70 pb-4 text-ink-soft last:border-0 last:pb-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] bg-brand p-6 text-white md:p-9">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">With ELVA Health</h2>
              <ul className="mt-6 space-y-4">
                {withElva.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-white/15 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check size={12} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-peach/35">
        <div className="container-elva grid items-center gap-10 lg:grid-cols-2">
          <PouchStack />
          <div>
            <SectionHeading
              title="Why people choose a simpler approach."
              description={`${brandName} focuses on what makes medication routines sustainable in real homes.`}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <article key={reason.title} className="rounded-[1.25rem] bg-white p-5 shadow-[var(--shadow-card)]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{reason.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-elva grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={familyImg}
              alt="Family and caregiver support around everyday healthcare"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Thoughtful by design."
              description="We prioritise clarity, reliability, and convenience — without overcomplicating care."
            />
            <div className="mt-8 space-y-5">
              {qualityPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check size={14} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand text-center text-white">
        <div className="container-elva">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.85rem,4vw,2.75rem)] text-white">
            Make medication management feel more human.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/75">
            Get started with {brandName} and bring more clarity to the medicines that matter every day.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="light" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
