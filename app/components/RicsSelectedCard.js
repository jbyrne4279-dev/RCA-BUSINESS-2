'use client'
import { useEffect, useRef } from 'react'

export default function RicsSelectedCard() {
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      const el = ref.current
      if (!el) return
      el.classList.add('rics-select-flash')
    }, 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      ref={ref}
      className="flex gap-4 items-start p-5 rounded-xl border border-[#16a34a] rics-card-base"
      style={{background:'rgba(22,163,74,0.06)'}}
    >
      <span className="text-[#16a34a] shrink-0 mt-0.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1.5,7 5,10.5 12.5,3"/>
        </svg>
      </span>
      <div>
        <p className="font-semibold text-[#0d1b3e] text-sm mb-1">RICS-regulated assessment</p>
        <p className="text-[#64748b] text-sm leading-relaxed">Independent, defensible figure prepared to RICS guidance. Covers structure, communal areas, professional fees, demolition, VAT, and loss-of-rent provision – and satisfies the insuring obligation.</p>
      </div>
    </div>
  )
}
