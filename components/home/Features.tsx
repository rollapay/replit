import { ShieldCheck, Zap, Banknote, FileCheck2, Users, LineChart } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance built in',
    body: 'Localized contracts, statutory benefits and tax filings vetted by in-country experts. No misclassification or permanent-establishment risk.',
  },
  {
    icon: Zap,
    title: 'Onboard in minutes',
    body: 'Contractors start in minutes and employees in days. Send an offer, collect a signature, and your hire is ready to work.',
  },
  {
    icon: Banknote,
    title: 'Pay in any currency',
    body: 'Run global payroll and contractor payouts in 120+ currencies, on one invoice, with transparent FX and no hidden markups.',
  },
  {
    icon: FileCheck2,
    title: 'Local benefits & taxes',
    body: 'Offer competitive, compliant health, pension and leave packages tailored to each country — managed entirely by Rolla.',
  },
  {
    icon: Users,
    title: 'One dashboard for everyone',
    body: 'Employees, contractors and VAs across every country, managed from a single source of truth with role-based access.',
  },
  {
    icon: LineChart,
    title: 'Real-time cost visibility',
    body: 'See total cost of employment — salary, taxes, benefits and fees — before you hire, with live benchmarks per country.',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">Why Rolla</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Everything you need to hire globally, nothing you don’t
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Replace local entities, lawyers and spreadsheets with one platform
            built for lean, fast-moving teams.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-black/[0.06] bg-black/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-7 transition-colors hover:bg-brand-50/40">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
