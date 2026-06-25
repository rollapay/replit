'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/rolla'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-brand-600">FAQ</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">
              Questions, answered
            </h2>
          </div>

          <div className="mt-10 divide-y divide-black/[0.07] rounded-3xl border border-black/[0.06] bg-white px-6 shadow-soft">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-ink">{item.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 -mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
