'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Logo from '@/components/layout/Logo'

export default function SignInPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-mesh px-6 py-32">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-lift">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="mt-6 text-center font-display text-2xl font-bold text-ink">
            Welcome back
          </h1>
          <p className="mt-2 text-center text-sm text-ink-soft">
            Sign in to manage your global team.
          </p>

          {submitted ? (
            <p className="mt-8 rounded-xl bg-accent-50 px-4 py-3 text-center text-sm text-accent-700">
              This is a demo sign-in. Connect your auth provider to go live.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="mt-8 space-y-4"
            >
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-ink">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-600 text-sm font-semibold text-white transition-all hover:bg-brand-700 shadow-soft hover:shadow-lift"
              >
                Sign in <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-ink-muted">
          New to Rolla?{' '}
          <Link href="/book-demo" className="font-semibold text-brand-700 hover:text-brand-800">
            Book a demo
          </Link>
        </p>
      </div>
    </section>
  )
}
