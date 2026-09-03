import usePageTitle from '../hooks/usePageTitle'
import { brandName } from '../data/content'

export default function Terms() {
  usePageTitle(`Terms & Conditions — ${brandName}`)

  return (
    <section className="section-pad bg-white">
      <div className="container-elva max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-[clamp(2rem,4.5vw,3rem)]">Terms & Conditions</h1>
        <p className="mt-5 text-muted">
          This is a placeholder terms page for the {brandName} website. Replace this content with
          your organisation&apos;s official terms before launch.
        </p>
        <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-ink-soft">
          <p>
            The {brandName} website provides general information about medication organisation and
            related services. Content on this site is not a substitute for professional medical
            advice, diagnosis, or treatment.
          </p>
          <p>
            By using this website, you agree to use the information responsibly and to contact a
            qualified healthcare professional for medical decisions.
          </p>
          <p>
            Service availability, delivery areas, and fulfilment details may vary. Final service
            terms will be confirmed during onboarding.
          </p>
        </div>
      </div>
    </section>
  )
}
