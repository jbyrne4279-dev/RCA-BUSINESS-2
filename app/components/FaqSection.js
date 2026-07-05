'use client'
import { useState } from 'react'

export default function FaqSection({ description, items }) {
  const [open, setOpen] = useState(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="badge badge-blue">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3 mb-4">
            Common questions.
          </h2>
          {description && (
            <p className="text-[#64748b] text-base leading-relaxed max-w-xl mt-3">{description}</p>
          )}
        </div>

        <div className="divide-y divide-[#e2e8f0] bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                boxShadow: open === i ? '0 0 0 2px #0057FF, 0 0 18px 3px rgba(0,87,255,0.35)' : 'none',
                position: 'relative',
                zIndex: open === i ? 1 : 0,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group transition-colors"
                style={open === i ? { background: 'rgba(0,87,255,0.06)' } : {}}
              >
                <span className="font-medium text-sm leading-snug transition-colors duration-200" style={{ color: open === i ? '#0057FF' : '#0d1b3e' }}>
                  {item.question}
                </span>
                <span
                  className="text-xl leading-none shrink-0 transition-all duration-300"
                  style={{
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    color: open === i ? '#0057FF' : '#0057FF',
                    textShadow: open === i ? '0 0 10px rgba(0,87,255,0.8)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: open === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.28s cubic-bezier(0.22,1,0.36,1)',
                  filter: open === i ? 'blur(0px)' : 'blur(2px)',
                  opacity: open === i ? 1 : 0,
                  transitionProperty: 'grid-template-rows, opacity, filter',
                  transitionDuration: '0.28s',
                  transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                <div style={{overflow:'hidden'}}>
                  <p className="px-6 pb-5 pt-4 text-[#64748b] text-sm leading-relaxed border-t border-[#e2e8f0]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


