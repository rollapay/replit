import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import HowItWorks from '@/components/home/HowItWorks'
import Features from '@/components/home/Features'
import Faq from '@/components/home/Faq'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'How it works — From offer to onboarded',
  description:
    'See how Rolla replaces entity setup, legal review and payroll wrangling with one guided workflow to hire, onboard and pay your global team.',
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={<>Global hiring, <span className="text-gradient">distilled to four steps</span></>}
        subtitle="No entities, no local lawyers, no spreadsheets. Rolla guides you from picking a hire to running compliant payroll across 190+ countries."
        secondaryCta={{ href: '/pricing', label: 'See pricing' }}
      />
      <HowItWorks />
      <Features />
      <Faq />
      <CtaBanner />
    </>
  )
}
