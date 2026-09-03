import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import HorizontalStory, { HorizontalStoryMobile } from '../components/HorizontalStory'
import {
  DeliveryVisual,
  DoseBox,
  PouchStack,
} from '../components/ProductVisuals'
import usePageTitle from '../hooks/usePageTitle'
import { brandName, processSteps, storyPanels } from '../data/content'
import medsImg from '../assets/images/meds.jpg'
import careImg from '../assets/images/care.jpg'
import pillsImg from '../assets/images/pills.jpg'
import familyImg from '../assets/images/family.jpg'
import pharmacyImg from '../assets/images/pharmacy.jpg'

const images = [medsImg, careImg, pillsImg, familyImg]

const horizontalPanels = [
  { ...storyPanels[0], visual: <DoseBox /> },
  { ...storyPanels[1], visual: <PouchStack /> },
  { ...storyPanels[2], visual: <DeliveryVisual /> },
]

export default function HowItWorks() {
  usePageTitle(`How It Works — ${brandName}`)

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-mist">
        <div className="container-elva grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">How it works</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,5.5vw,3.75rem)]">
              A clear path from prescription to doorstep.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {brandName} turns a complicated medicine routine into a process you can follow —
              organised, delivered, and easier to maintain day after day.
            </p>
            <div className="mt-8">
              <Button to="/contact" size="lg">
                Get Started
              </Button>
            </div>
          </div>
          <PouchStack />
        </div>
      </section>

      <div className="border-y border-line bg-white">
        <div className="py-12 text-center md:py-16">
          <h2 className="display mx-auto max-w-3xl px-4 text-[clamp(1.9rem,4vw,3rem)]">
            Scroll through the journey.
          </h2>
        </div>
        <HorizontalStory panels={horizontalPanels} ctaTo="/contact" ctaLabel="Get Started" />
        <HorizontalStoryMobile panels={horizontalPanels} ctaTo="/contact" ctaLabel="Get Started" />
      </div>

      <section className="section-pad bg-white">
        <div className="container-elva">
          <SectionHeading
            title="Four steps to a simpler routine."
            description="Each step is designed to reduce friction — from understanding your prescription to staying consistent at home."
            className="mb-14"
          />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, i) => (
              <article
                key={step.number}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <p className="font-display text-[clamp(4rem,10vw,6.5rem)] font-bold leading-none tracking-tight text-brand/20">
                    {step.number}
                  </p>
                  <h2 className="mt-2 font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[1.08rem] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.5rem] bg-surface">
                  <img
                    src={images[i]}
                    alt=""
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={pharmacyImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-brand-deep/78" aria-hidden />
        </div>
        <div className="container-elva relative section-pad text-center">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.85rem,4vw,2.75rem)] text-white">
            Ready to organise your medicines around your life?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Begin with your prescription details. We&apos;ll help shape a routine that feels
            clearer and easier to follow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light" size="lg">
              Get Started
            </Button>
            <Button to="/faq" variant="ghost" size="lg" className="border border-white/30 text-white">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
