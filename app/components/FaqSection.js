'use client'
import { useState } from 'react'

export default function FaqSection({ description, items }) {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-4">
            Common questions.
          </h2>
          {description && (
            <p className="text-[#5f6368] text-base leading-relaxed max-w-xl">{description}</p>
          )}
        </div>

        <div className="divide-y divide-[#dadce0] bg-white rounded-xl border border-[#dadce0] overflow-hidden">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group hover:bg-[#f8f9fa] transition-colors"
              >
                <span className="font-medium text-[#202124] text-sm leading-snug group-hover:text-[#1a73e8] transition-colors">
                  {item.question}
                </span>
                <span className="text-[#5f6368] text-xl leading-none shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="px-6 pb-5 text-[#5f6368] text-sm leading-relaxed border-t border-[#f8f9fa]">
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
