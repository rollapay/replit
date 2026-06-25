import { regions } from '@/data/rolla'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-brand-600">Global coverage</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
            Tap into the world’s best talent markets
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Deep, in-country expertise where the talent is — and full coverage
            everywhere else.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((r) => (
            <div
              key={r.name}
              className="card-hover rounded-2xl border border-black/[0.06] bg-white p-5 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-2xl ring-1 ring-black/5">
                  {r.flag}
                </span>
                <span className="font-display text-base font-bold text-ink">
                  {r.name}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-soft">{r.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <p className="text-sm text-ink-muted">
            + 180 more countries with full EOR & contractor coverage.
          </p>
          <Button href="/book-demo" variant="secondary" size="sm">
            Check your country <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
