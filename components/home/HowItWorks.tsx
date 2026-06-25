import { steps } from '@/data/rolla'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold text-brand-600">How it works</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              From offer to onboarded in four steps
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Rolla replaces months of entity setup, legal review and payroll
              wrangling with a single, guided workflow.
            </p>
            <Button href="/how-it-works" className="mt-7">
              Walk through the flow <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <ol className="relative space-y-8 border-l border-brand-100 pl-8">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-soft">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
