'use client'
import { useEffect, useState } from 'react'

export default function ElectricSequence({ items }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % items.length)
    }, 2800)
    return () => clearInterval(id)
  }, [items.length])

  return (
    <div className="space-y-4">
      {items.map(({ icon, title, desc }, i) => (
        <div
          key={title}
          className="flex gap-4 items-start p-5 rounded-xl border transition-all duration-500"
          style={{
            background: active === i ? 'rgba(122,31,61,0.08)' : '#fff',
            borderColor: active === i ? '#7A1F3D' : '#e2e8f0',
            boxShadow: active === i
              ? '0 0 18px 2px rgba(122,31,61,0.35), inset 0 0 8px rgba(122,31,61,0.12)'
              : 'none',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500"
            style={{ background: active === i ? 'rgba(122,31,61,0.18)' : 'rgba(122,31,61,0.08)' }}
          >
            {icon}
          </div>
          <div>
            <p className="font-semibold text-sm mb-1 transition-colors duration-500" style={{ color: active === i ? '#7A1F3D' : '#2b0b14' }}>{title}</p>
            <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
