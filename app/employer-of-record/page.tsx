import type { Metadata } from 'next'
import { Check, Globe2, ShieldCheck, Banknote, FileCheck2 } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import HowItWorks from '@/components/home/HowItWorks'
import Coverage from '@/components/home/Coverage'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Employer of Record (EOR) — Hire globally without an entity',
  description:
    'Hire full-time employees in 190+ countries with Rolla as your Employer of Record. We handle payroll, taxes, benefits and compliance so you can hire anywhere in days.',
}

const included = [
  { icon: ShieldCheck, title: 'Legal employment in-country', body: 'Rolla becomes the registered legal employer, eliminating the need to open and maintain local entities.' },
  { icon: Banknote, title: 'Payroll & tax', body: 'Accurate monthly payroll, withholdings and statutory filings in local currency — done for you.' },
  { icon: FileCheck2, title: 'Compliant contracts', body: 'Localized, lawyer-reviewed employment agreements that respect every country’s labor law.' },
  { icon: Globe2, title: 'Benefits & mobility', body: 'Competitive local benefits, plus visa and relocation support when you need to move people.' },
]

const compare = [
  ['Time to hire', 'Days', '4–6 months' ],
  ['Setup cost', '$0', '$15k–$50k+'],
  ['Compliance risk', 'Owned by Rolla', 'Owned by you'],
  ['Countries', '190+', 'One per entity'],
]

export default function EorPage() {
  return (
    <>
      <PageHero
        eyebrow="Employer of Record"
        title={<>Hire full-time talent in 190+ countries — <span className="text-gradient">no entity required</span></>}
        subtitle="When you don’t have a local entity, Rolla becomes the legal employer on your behalf. We run payroll, taxes, benefits and compliance, so your team can focus on the work."
        secondaryCta={{ href: '/pricing', label: 'See pricing' }}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">What’s included</h2>
            <p className="mt-4 text-lg text-ink-soft">Everything required to employ someone compliantly, bundled into one monthly fee.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {included.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mobility" className="scroll-mt-20 bg-cream py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-brand-600">EOR vs. opening an entity</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">The faster, cheaper way to go global</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft">
              <div className="grid grid-cols-3 bg-brand-gradient px-6 py-4 text-sm font-semibold text-white">
                <span></span>
                <span className="text-center">Rolla EOR</span>
                <span className="text-center">Own entity</span>
              </div>
              {compare.map((row, i) => (
                <div key={row[0]} className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 ? 'bg-cream' : 'bg-white'}`}>
                  <span className="font-medium text-ink">{row[0]}</span>
                  <span className="flex items-center justify-center gap-1.5 text-center font-semibold text-brand-700">
                    <Check className="h-4 w-4 text-accent-600" />{row[1]}
                  </span>
                  <span className="text-center text-ink-muted">{row[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Coverage />
      <CtaBanner />
    </>
  )
}
