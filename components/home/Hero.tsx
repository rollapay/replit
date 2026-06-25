import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'

const flags = ['🇨🇦', '🇳🇬', '🇵🇭', '🇧🇷', '🇮🇳', '🇰🇪', '🇲🇽', '🇦🇷']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-brand-700 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Now hiring in 190+ countries
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-ink">
            Hire anyone, anywhere.
            <br />
            <span className="text-gradient">Onboard in minutes.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Rolla is the global hiring platform for startups and SMBs. Employ and
            pay full-time talent and contractors in 190+ countries — with built-in
            Employer of Record, H-1B alternatives, and global mobility. No local
            entity required.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/book-demo" size="lg">
              Book a demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            {['No entity setup', 'Compliant in every country', 'Cancel anytime'].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-accent-600" /> {item}
                </span>
              )
            )}
          </div>

          <div className="mt-12 flex items-center justify-center">
            {flags.map((f, i) => (
              <span
                key={i}
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl shadow-soft ring-1 ring-black/5"
                style={{ marginLeft: i === 0 ? 0 : '-0.4rem' }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
