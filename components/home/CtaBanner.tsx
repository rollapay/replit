import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Your next great hire is one click away
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Book a 20-minute demo and we’ll show you exactly how to hire,
              onboard and pay your global team with Rolla.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/book-demo" variant="white" size="lg">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/pricing"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 backdrop-blur"
              >
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
