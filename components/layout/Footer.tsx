import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  Solutions: [
    { label: 'Employer of Record', href: '/employer-of-record' },
    { label: 'Contractor Payments', href: '/contractors' },
    { label: 'H-1B Alternative', href: '/h1b-alternative' },
    { label: 'Global Mobility', href: '/employer-of-record#mobility' },
  ],
  Product: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Country coverage', href: '/#coverage' },
    { label: 'Book a demo', href: '/book-demo' },
  ],
  Company: [
    { label: 'About Rolla', href: '/company' },
    { label: 'Contact', href: '/book-demo' },
    { label: 'Privacy Policy', href: '/company#privacy' },
    { label: 'Terms of Service', href: '/company#terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-cream">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
              The global hiring platform for startups and SMBs. Hire and pay
              anyone, anywhere — fully compliant, onboarded in minutes.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-ink-muted hover:text-brand-700 hover:border-brand-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-ink-muted hover:text-brand-700 hover:border-brand-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@getrolla.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-ink-muted hover:text-brand-700 hover:border-brand-300 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-ink mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted hover:text-brand-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Rolla. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Rolla is not a law or accounting firm and does not provide legal or tax advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
