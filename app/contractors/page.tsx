import type { Metadata } from 'next'
import { FileText, Zap, Globe2, Repeat, ShieldCheck, Receipt } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CtaBanner from '@/components/home/CtaBanner'
import Faq from '@/components/home/Faq'

export const metadata: Metadata = {
  title: 'Contractor Payments — Pay freelancers & VAs worldwide',
  description:
    'Onboard and pay contractors, virtual assistants and freelancers in 190+ countries. Compliant agreements, automated invoices and local-currency payouts — including your Upwork and Fiverr talent.',
}

const features = [
  { icon: Zap, title: 'Onboard in minutes', body: 'Send a compliant contractor agreement, collect a signature, and start working the same day.' },
  { icon: FileText, title: 'Compliant agreements', body: 'Localized contracts that protect your IP and reduce misclassification risk in every country.' },
  { icon: Receipt, title: 'Automated invoicing', body: 'Contractors submit invoices in the app; you approve once and we handle the rest.' },
  { icon: Globe2, title: 'Pay in 120+ currencies', body: 'Local-currency payouts with transparent FX, so your contractors get paid fairly and on time.' },
  { icon: Repeat, title: 'Recurring & one-off', body: 'Set up monthly retainers or pay per project — including your existing Upwork and Fiverr talent.' },
  { icon: ShieldCheck, title: 'Tax docs handled', body: 'Collect the right tax forms automatically and keep clean records for every contractor.' },
]

export default function ContractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contractor Payments"
        title={<>Pay your global contractors <span className="text-gradient">in minutes, not weeks</span></>}
        subtitle="Bring every freelancer, virtual assistant and agency onto one platform. Compliant contracts, automated invoices and fast local-currency payouts — anywhere in the world."
        secondaryCta={{ href: '/pricing', label: 'See pricing' }}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-black/[0.06] bg-black/[0.06] md:grid-cols-2 lg:grid-cols-3">
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

      <Faq />
      <CtaBanner />
    </>
  )
}
