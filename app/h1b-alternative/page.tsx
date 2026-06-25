import type { Metadata } from 'next'
import { Check, X, Clock, MapPin, TrendingUp } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'H-1B Alternative — Hire top tech talent in Canada',
  description:
    'Skip the H-1B lottery. Hire and retain the engineers you’d otherwise lose by employing them compliantly in Canada — same timezone, start in days, with Rolla as your Employer of Record.',
}

const problems = [
  'Lottery odds below 30% — talent you’ve already vetted may never get picked.',
  'Months of legal fees and uncertainty before anyone can start.',
  'Lose candidates to competitors while you wait on USCIS.',
]

const solution = [
  { icon: MapPin, title: 'Same timezone, next door', body: 'Canada keeps your team in overlapping hours and an easy flight away — no offshoring tradeoffs.' },
  { icon: Clock, title: 'Start in days', body: 'Rolla employs your hire in Canada as Employer of Record, so they can begin almost immediately.' },
  { icon: TrendingUp, title: 'Keep the option open', body: 'Build tenure in Canada now and pursue US relocation later (L-1, TN, O-1) from a position of strength.' },
]

const rows: [string, boolean, boolean][] = [
  ['Guaranteed to proceed (no lottery)', true, false],
  ['Onboard in days', true, false],
  ['Same / overlapping timezone', true, true],
  ['No cap or annual filing window', true, false],
  ['Path to future US relocation', true, true],
]

export default function H1bPage() {
  return (
    <>
      <PageHero
        eyebrow="H-1B Alternative"
        title={<>Don’t gamble on the lottery. <span className="text-gradient">Hire in Canada.</span></>}
        subtitle="When the H-1B doesn’t come through, you don’t have to lose the candidate. Rolla employs top tech talent in Canada on your behalf — compliant, in your timezone, and ready to start in days."
        secondaryCta={{ href: '/employer-of-record', label: 'How EOR works' }}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600">The problem</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">The H-1B is broken for fast-moving teams</h2>
            <ul className="mt-6 space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                    <X className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/[0.06] bg-cream p-8 shadow-soft">
            <p className="text-sm font-semibold text-brand-600">The Rolla way</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">Onshore the talent to Canada</h2>
            <div className="mt-6 space-y-5">
              {solution.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-page mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Canada (via Rolla) vs. H-1B</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-brand-gradient px-6 py-4 text-sm font-semibold text-white">
              <span></span>
              <span className="w-24 text-center">Rolla / Canada</span>
              <span className="w-24 text-center">H-1B</span>
            </div>
            {rows.map((row, i) => (
              <div key={row[0] as string} className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 text-sm ${i % 2 ? 'bg-cream' : 'bg-white'}`}>
                <span className="font-medium text-ink">{row[0]}</span>
                <span className="grid w-24 place-items-center">
                  {row[1] ? <Check className="h-5 w-5 text-accent-600" /> : <X className="h-5 w-5 text-ink-muted/40" />}
                </span>
                <span className="grid w-24 place-items-center">
                  {row[2] ? <Check className="h-5 w-5 text-accent-600" /> : <X className="h-5 w-5 text-ink-muted/40" />}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted">
            Rolla is not a law firm and does not provide immigration advice. Visa strategy should be confirmed with qualified counsel.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
