import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { href: '/book-demo', label: 'Book a demo' },
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-600">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-[1.08] text-ink">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
