'use client'
import { useState } from 'react'

export default function FaqSection({ description, items }) {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">FAQ</p>
          <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Common Questions.
          </h2>
          {description && (
            <p className="text-[#6e6e73] text-base leading-relaxed max-w-xl mx-auto">{description}</p>
          )}
        </div>

        <div className="divide-y divide-black/[0.08]">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              >
                <span className="font-medium text-[#1d1d1f] text-sm leading-snug group-hover:text-[#c47c1e] transition-colors">
                  {item.question}
                </span>
                <span className="text-[#6e6e73] text-lg leading-none shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-6 text-[#6e6e73] text-sm leading-relaxed">
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
