import Button from '../components/Button'
import FAQItem from '../components/FAQItem'
import SectionHeading from '../components/SectionHeading'
import usePageTitle from '../hooks/usePageTitle'
import { brandName, faqs } from '../data/content'

export default function FAQ() {
  usePageTitle(`FAQ — ${brandName}`)

  return (
    <>
      <section className="bg-mist/40">
        <div className="container-elva py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">FAQ</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,5.5vw,3.5rem)]">
              Answers to common questions.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Learn how {brandName} organises medicines, supports routines, and helps families
              manage care with less everyday friction.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-elva">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Everything you need to know."
              description="Clear answers about getting started, organisation, reminders, and delivery."
              className="mb-8"
            />
            <div className="rounded-[1.5rem] border border-line bg-surface/60 px-4 md:px-8">
              {faqs.map((item, i) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-deep">
        <div className="container-elva text-center">
          <h2 className="display mx-auto max-w-xl text-[clamp(1.75rem,4vw,2.5rem)] text-white">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Reach out and we&apos;ll help you understand how {brandName} can fit your medication
            routine.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Contact ELVA Health
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
