import { stats } from '@/data/rolla'

const logos = ['Northbeam', 'Quanta', 'Loop', 'Beacon AI', 'Hatch', 'Vellum']

export default function TrustBar() {
  return (
    <section className="border-y border-black/[0.06] bg-white">
      <div className="container-page py-10">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-ink-muted">
          Trusted by fast-growing teams hiring globally
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-lg font-semibold text-ink-muted/70"
            >
              {logo}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-ink">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
