'use client'

import { useState } from 'react'
import { Check, CalendarCheck } from 'lucide-react'

const reasons = [
  'Hire full-time employees (EOR)',
  'Pay contractors / VAs',
  'H-1B alternative (hire in Canada)',
  'Just exploring',
]

const bullets = [
  'A walkthrough tailored to the countries you’re hiring in',
  'Live cost estimates for your specific roles',
  'Answers on compliance, benefits and timelines',
  'No pressure — most demos take 20 minutes',
]

export default function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [reason, setReason] = useState(reasons[0])

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative grid gap-12 pt-32 pb-20 md:pt-40 md:pb-28 lg:grid-cols-2 lg:gap-16">
        <div className="lg:pt-6">
          <p className="text-sm font-semibold text-brand-600">Book a demo</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-[1.08] text-ink">
            See how Rolla hires your global team
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Tell us a little about who you’re hiring and we’ll show you exactly
            how Rolla works for your situation.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-ink-soft">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-lift">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-100 text-accent-700">
                <CalendarCheck className="h-8 w-8" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">You’re all set!</h2>
              <p className="mt-3 max-w-xs text-sm text-ink-soft">
                Thanks for reaching out. A Rolla specialist will email you within
                one business day to schedule your demo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="first" placeholder="Ada" />
                <Field label="Last name" name="last" placeholder="Okafor" />
              </div>
              <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Company" name="company" placeholder="Acme Inc." />

              <div>
                <label className="mb-2 block text-sm font-medium text-ink">What brings you to Rolla?</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {reasons.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setReason(r)}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                        reason === r
                          ? 'border-brand-400 bg-brand-50 text-brand-700 font-medium'
                          : 'border-black/10 text-ink-soft hover:border-brand-200'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white transition-all hover:bg-brand-700 shadow-soft hover:shadow-lift"
              >
                Request my demo
              </button>
              <p className="text-center text-xs text-ink-muted">
                By submitting, you agree to be contacted by Rolla about your demo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  )
}
