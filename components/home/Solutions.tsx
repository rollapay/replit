import Link from 'next/link'
import { ArrowRight, Globe2, Wallet, Plane } from 'lucide-react'

const cards = [
  {
    icon: Globe2,
    tag: 'Employer of Record',
    title: 'Hire full-time employees in 190+ countries',
    body: 'We become the legal employer in-country and handle payroll, taxes, benefits and compliance. You manage the work — we handle the rest.',
    href: '/employer-of-record',
    accent: 'from-brand-600 to-brand-400',
  },
  {
    icon: Wallet,
    tag: 'Contractor Payments',
    title: 'Pay freelancers & VAs worldwide',
    body: 'Onboard contractors in minutes with compliant agreements, automated invoices and local-currency payouts — including your Upwork and Fiverr talent.',
    href: '/contractors',
    accent: 'from-accent-500 to-accent-300',
  },
  {
    icon: Plane,
    tag: 'H-1B Alternative',
    title: 'Skip the lottery — hire in Canada',
    body: 'Onshore top engineers next door, in your timezone, in days. A compliant, lottery-free path to the talent you’d otherwise lose.',
    href: '/h1b-alternative',
    accent: 'from-brand-700 to-brand-500',
  },
]

export default function Solutions() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-600">One platform</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Every way to build a global team
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Whether you’re hiring a senior engineer in Lagos, a designer in São
            Paulo, or onshoring talent to Canada — Rolla makes it compliant and fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.tag}
              href={c.href}
              className="card-hover group flex flex-col rounded-3xl border border-black/[0.06] bg-white p-7 shadow-soft"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white`}
              >
                <c.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-600">
                {c.tag}
              </p>
              <h3 className="mt-2 text-xl font-bold text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
