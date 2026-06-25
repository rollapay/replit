'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from './Logo'

const solutions = [
  { href: '/employer-of-record', label: 'Employer of Record', desc: 'Hire full-time employees in 190+ countries' },
  { href: '/contractors', label: 'Contractor Payments', desc: 'Pay freelancers & VAs worldwide' },
  { href: '/h1b-alternative', label: 'H-1B Alternative', desc: 'Hire top talent in Canada, no lottery' },
]

const navLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-black/[0.06]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="rounded-2xl bg-white border border-black/[0.06] shadow-lift p-2">
                    {solutions.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block rounded-xl px-3 py-2.5 hover:bg-brand-50 transition-colors"
                      >
                        <p className="text-sm font-semibold text-ink">{s.label}</p>
                        <p className="text-xs text-ink-muted mt-0.5">{s.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/sign-in"
              className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700 shadow-soft hover:shadow-lift transition-all"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink-soft hover:text-ink transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.06]">
          <div className="container-page py-4 space-y-1">
            {[...solutions, ...navLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-black/[0.06] flex flex-col gap-3">
              <Link
                href="/sign-in"
                className="text-center text-sm font-medium text-ink-soft py-2"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/book-demo"
                className="text-center h-11 inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
