import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
import usePageTitle from '../hooks/usePageTitle'
import { brandName, contactInfo } from '../data/content'

const initial = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  usePageTitle(`Contact — ${brandName}`)
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-mist/35">
        <div className="container-elva py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-4 text-[clamp(2.2rem,5.5vw,3.5rem)]">
              Let&apos;s make healthcare simpler.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Share a few details and we&apos;ll help you get started with an organised medication
              routine with {brandName}.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-elva grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <aside className="space-y-6">
            <div className="rounded-[1.5rem] border border-line bg-surface p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Reach us
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <Mail size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-semibold text-ink hover:text-brand"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <Phone size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="font-semibold text-ink hover:text-brand"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <MapPin size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted">Address</p>
                    <p className="font-semibold text-ink">{contactInfo.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] bg-brand p-6 text-white md:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Prefer a quick start?
              </h2>
              <p className="mt-3 text-white/75">
                Have your prescription details ready. We&apos;ll guide you through organising
                your routine.
              </p>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-line bg-surface/50 p-5 md:p-8">
            {submitted ? (
              <div className="flex min-h-[22rem] flex-col items-start justify-center">
                <p className="eyebrow">Message received</p>
                <h2 className="display mt-3 text-[clamp(1.6rem,3vw,2.2rem)]">
                  Thank you for reaching out.
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  This form is currently a static demo. In production, your message would be
                  reviewed by the {brandName} team.
                </p>
                <div className="mt-8">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false)
                      setForm(initial)
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={onChange}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-brand"
                    placeholder="Tell us about your medication routine or questions."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
