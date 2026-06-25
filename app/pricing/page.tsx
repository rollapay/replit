import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import Faq from '@/components/home/Faq'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Pricing — Simple, transparent global hiring',
  description:
    'Transparent per-seat pricing for contractors and Employer of Record. No setup fees, no hidden FX markups. Pay only for who you hire.',
}

const plans = [
  {
    name: 'Contractors',
    price: '$29',
    unit: '/ contractor / mo',
    blurb: 'Onboard and pay freelancers, VAs and agencies worldwide.',
    features: [
      'Compliant contractor agreements',
      'Automated invoicing & approvals',
      'Payouts in 120+ currencies',
      'Tax document collection',
      'Unlimited projects',
    ],
    cta: 'Start with contractors',
    featured: false,
  },
  {
    name: 'Employer of Record',
    price: '$299',
    unit: '/ employee / mo',
    blurb: 'Hire full-time employees in 190+ countries, fully compliant.',
    features: [
      'Rolla as legal employer in-country',
      'Localized payroll, tax & filings',
      'Lawyer-reviewed contracts',
      'Competitive local benefits',
      'Dedicated onboarding specialist',
      'Visa & global mobility support',
    ],
    cta: 'Book a demo',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    unit: 'volume pricing',
    blurb: 'For teams hiring across many countries at scale.',
    features: [
      'Everything in EOR',
      'Discounted per-seat rates',
      'Multi-entity consolidation',
      'SSO & advanced permissions',
      'Priority support & SLA',
    ],
    cta: 'Talk to sales',
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple pricing that <span className="text-gradient">scales with your team</span></>}
        subtitle="No setup fees. No hidden FX markups. Pay a flat monthly rate for each person you hire — and cancel anytime."
        secondaryCta={{ href: '/how-it-works', label: 'How it works' }}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? 'border-brand-300 bg-white shadow-lift ring-1 ring-brand-200'
                    : 'border-black/[0.06] bg-white shadow-soft'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-ink">{plan.price}</span>
                  <span className="text-sm text-ink-muted">{plan.unit}</span>
                </div>
                <p className="mt-3 text-sm text-ink-soft">{plan.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-demo"
                  className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all ${
                    plan.featured
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-lift'
                      : 'border border-black/10 text-ink hover:border-brand-300 hover:text-brand-700'
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-muted">
            Prices shown are illustrative starting points; final EOR cost depends on country and salary. Get an exact quote in your demo.
          </p>
        </div>
      </section>

      <Faq />
      <CtaBanner />
    </>
  )
}
