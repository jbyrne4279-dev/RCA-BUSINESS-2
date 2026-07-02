'use client'
import { useState } from 'react'

export default function FaqSection({ description, items }) {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]" style={{ background: '#0d0d1e' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="badge badge-blue">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Common questions.
          </h2>
          {description && (
            <p className="text-white/50 text-base leading-relaxed max-w-xl">{description}</p>
          )}
        </div>

        <div className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)' }}>
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group transition-colors"
                style={{ background: open === i ? 'rgba(124,58,237,0.06)' : 'transparent' }}
              >
                <span className="font-medium text-white/80 text-sm leading-snug group-hover:text-white transition-colors">
                  {item.question}
                </span>
                <span className="text-white/30 text-xl leading-none shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/[0.06]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
