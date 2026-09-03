import usePageTitle from '../hooks/usePageTitle'
import { brandName } from '../data/content'

export default function Privacy() {
  usePageTitle(`Privacy Policy — ${brandName}`)

  return (
    <section className="section-pad bg-white">
      <div className="container-elva max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-4 text-[clamp(2rem,4.5vw,3rem)]">Privacy Policy</h1>
        <p className="mt-5 text-muted">
          This is a placeholder privacy policy for the {brandName} website. Replace this content
          with your organisation&apos;s official privacy terms before launch.
        </p>
        <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-ink-soft">
          <p>
            {brandName} respects your privacy. Information you share through this website — such
            as contact details submitted via forms — is intended only for responding to your
            enquiry and supporting medication management services.
          </p>
          <p>
            We do not sell personal information. Access to enquiry details should be limited to
            authorised team members who need it to assist you.
          </p>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:hello@elva.health" className="font-semibold text-brand hover:underline">
              hello@elva.health
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
