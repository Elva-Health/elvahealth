import { ArrowRight, Check } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import Testimonial from '../components/Testimonial'
import HorizontalStory, { HorizontalStoryMobile } from '../components/HorizontalStory'
import {
  DeliveryVisual,
  DoseBox,
  PouchStack,
  ReminderCard,
} from '../components/ProductVisuals'
import usePageTitle from '../hooks/usePageTitle'
import {
  benefits,
  brandName,
  insights,
  qualityPoints,
  storyPanels,
  withElva,
  withoutElva,
} from '../data/content'
import heroLife from '../assets/images/hero-life.jpg'
import boxImg from '../assets/images/box.jpg'
import pharmacyImg from '../assets/images/pharmacy.jpg'
import careImg from '../assets/images/care.jpg'
import insight1 from '../assets/images/insight1.jpg'
import insight2 from '../assets/images/insight2.jpg'
import insight3 from '../assets/images/insight3.jpg'

const insightImages = { insight1, insight2, insight3 }

const horizontalPanels = [
  {
    ...storyPanels[0],
    visual: <DoseBox />,
  },
  {
    ...storyPanels[1],
    visual: <PouchStack />,
  },
  {
    ...storyPanels[2],
    visual: <DeliveryVisual />,
  },
]

export default function Home() {
  usePageTitle(`${brandName} — Medicines organised around your life`)

  return (
    <>
      {/* HERO — full-viewport centered like reference */}
      <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden md:min-h-[calc(100dvh-5rem)]">
        <div className="absolute inset-0">
          <img
            src={heroLife}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-white/78" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90" aria-hidden />
        </div>

        <div className="container-elva relative py-16 text-center md:py-24">
          <p className="eyebrow mx-auto justify-center">Switch to the care you deserve</p>
          <h1 className="display mx-auto mt-5 max-w-4xl text-[clamp(2.4rem,7vw,5rem)]">
            Your medicines, organised around your life.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1.15rem,2.5vw,1.65rem)] font-semibold leading-snug text-ink-soft">
            {brandName} sorts, packs, and supports your medication routine with dose-wise
            organisation, reminders, and convenient delivery.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/contact" size="lg">
              Get Started
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURE — soft mist full-bleed with product storytelling */}
      <section className="relative overflow-hidden bg-mist">
        <div className="container-elva grid items-center gap-10 py-16 md:py-0 md:min-h-screen lg:grid-cols-2 lg:gap-8">
          <div className="max-w-xl">
            <h2 className="display text-[clamp(1.85rem,3.5vw,2.6rem)] leading-[1.3]">
              Instead of juggling strips and schedules, get medicines organised by time —
              ready for everyday life.
            </h2>
            <p className="mt-6 text-[clamp(1.1rem,2vw,1.4rem)] font-semibold text-ink">
              Personalised. Pre-sorted. Delivered.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <PouchStack />
          </div>
        </div>
      </section>

      {/* WITH THIS YOU GET */}
      <section className="section-pad bg-white">
        <div className="container-elva">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mx-auto justify-center">With this you get</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4vw,3rem)]">
              Dose-wise pouches, medicine reminders, delivery.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((item, i) => (
              <article
                key={item.number}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-surface"
              >
                <div
                  className="flex h-48 items-center justify-center px-6"
                  style={{
                    backgroundColor: i === 0 ? '#ffb0b0' : i === 1 ? '#c9e4c5' : '#ffd6a1',
                  }}
                >
                  {i === 0 ? (
                    <div className="scale-90">
                      <PouchStack className="!max-w-[14rem]" />
                    </div>
                  ) : i === 1 ? (
                    <ReminderCard className="!max-w-[15rem] scale-90" />
                  ) : (
                    <DeliveryVisual className="!max-w-[14rem] scale-90" />
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-sm font-bold text-brand">{item.number}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZONTAL STORYTELLING */}
      <div className="border-y border-line">
        <div className="bg-white py-12 text-center md:py-16">
          <p className="eyebrow mx-auto justify-center">How it works</p>
          <h2 className="display mx-auto mt-4 max-w-3xl px-4 text-[clamp(1.9rem,4vw,3rem)]">
            From prescription to an organised routine.
          </h2>
        </div>
        <HorizontalStory panels={horizontalPanels} />
        <HorizontalStoryMobile panels={horizontalPanels} />
      </div>

      {/* LARGE TEAL CTA PANEL */}
      <section className="flex min-h-[70vh] items-center justify-center bg-brand px-6 py-20 text-center text-white md:min-h-[80vh]">
        <div className="mx-auto max-w-3xl">
          <h2 className="display text-[clamp(2rem,5vw,3.2rem)] text-white">
            Ready to make your medication routine simpler?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80 md:text-xl">
            Start with your prescription. {brandName} helps organise the rest around your life.
          </p>
          <div className="mt-10">
            <Button to="/contact" variant="light" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* VISUAL TRUST BAND */}
      <section className="section-pad bg-white">
        <div className="container-elva grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={boxImg}
              alt="Organised medication packaging ready for everyday routines"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Built for everyday care"
              title="Clarity you can rely on."
              description={`${brandName} focuses on organisation, reminders, and delivery — so medication management feels lighter for patients and families.`}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="font-bold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ELVA COMPARISON */}
      <section className="section-pad bg-surface">
        <div className="container-elva">
          <SectionHeading
            align="center"
            eyebrow="Why ELVA Health"
            title="Healthcare should feel simpler."
            description="See the difference between juggling medicines alone and having an organised routine."
            className="mb-12"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-line bg-white p-6 md:p-9">
              <p className="text-sm font-bold uppercase tracking-wider text-muted">Without ELVA Health</p>
              <ul className="mt-6 space-y-4">
                {withoutElva.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-muted/50" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] bg-brand p-6 text-white md:p-9">
              <p className="text-sm font-bold uppercase tracking-wider text-white/75">With ELVA Health</p>
              <ul className="mt-6 space-y-4">
                {withElva.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check size={12} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button to="/why-elva" variant="secondary">
              Why choose ELVA Health
              <ArrowRight size={16} aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      {/* LIFESTYLE + REMINDERS */}
      <section className="section-pad bg-white">
        <div className="container-elva grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Stay consistent"
              title="Reminders that fit real life."
              description="Clear dose information and timely reminders help reduce the mental load of managing multiple medicines."
            />
            <div className="mt-8">
              <Button to="/how-it-works" variant="secondary">
                Explore the process
                <ArrowRight size={16} aria-hidden />
              </Button>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-[1.75rem] lg:order-2">
            <img
              src={careImg}
              alt="Calm care moment representing supportive medication routines"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="section-pad bg-surface">
        <div className="container-elva">
          <SectionHeading
            align="center"
            eyebrow="Stories"
            title="What calmer routines can feel like."
            description="Illustrative stories showing how organised medication management can support everyday life."
            className="mb-10"
          />
          <Testimonial />
        </div>
      </section>

      {/* BLOG — lavender like reference */}
      <section className="section-pad bg-lavender">
        <div className="container-elva">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">Latest insights</h2>
            <span className="font-bold text-ink/70">Helpful reads on everyday care</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col overflow-hidden rounded-[1.35rem] bg-white shadow-[var(--shadow-card)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={insightImages[post.image]}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">
                    Read insight
                    <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA with visual */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={pharmacyImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-brand-deep/75" aria-hidden />
        </div>
        <div className="container-elva relative section-pad text-center">
          <h2 className="display mx-auto max-w-3xl text-[clamp(1.9rem,4.5vw,3rem)] text-white">
            Start organising your medication routine today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Share your prescription details and take the first step toward a clearer daily routine
            with {brandName}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light" size="lg">
              Get Started
            </Button>
            <Button to="/faq" variant="ghost" size="lg" className="text-white border border-white/30">
              Read FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
