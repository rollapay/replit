import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import CtaBanner from '@/components/home/CtaBanner'
import { stats } from '@/data/rolla'

export const metadata: Metadata = {
  title: 'Company — Why we built Rolla',
  description:
    'Rolla is on a mission to make hiring great people borderless. Learn what we believe and how we help startups and SMBs build world-class global teams.',
}

const values = [
  { title: 'Talent is everywhere', body: 'Opportunity isn’t. We exist to close that gap so a brilliant engineer in Lagos or São Paulo can work for any company on earth.' },
  { title: 'Compliance is non-negotiable', body: 'Speed means nothing if it puts you at risk. We obsess over getting contracts, payroll and benefits right in every country.' },
  { title: 'Built for lean teams', body: 'You shouldn’t need a legal department to hire abroad. We make global hiring as simple as adding a teammate.' },
  { title: 'Pay people fairly, fast', body: 'On-time, local-currency pay with transparent FX. Getting paid should never be the hard part of working remotely.' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={<>We’re making great hiring <span className="text-gradient">borderless</span></>}
        subtitle="Rolla is the global hiring platform for startups and SMBs. We help ambitious teams employ and pay the best people in 190+ countries — compliantly, and in minutes."
        secondaryCta={{ href: '/how-it-works', label: 'How it works' }}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-black/[0.06] bg-cream p-8 md:grid-cols-4 md:p-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-ink">{s.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-brand-600">What we believe</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Our values</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft">
                <h3 className="text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            ))}
          </div>

          <div id="privacy" className="scroll-mt-24" />
          <div id="terms" className="scroll-mt-24" />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
