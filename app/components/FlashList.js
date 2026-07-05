'use client'
import { useEffect, useRef, useState } from 'react'

export default function FlashList({ items }) {
  const [visible, setVisible] = useState(0)
  const [flashing, setFlashing] = useState(null)
  const doneRef = useRef(false)

  useEffect(() => {
    if (doneRef.current) return
    let i = 0
    const next = () => {
      if (i >= items.length) { doneRef.current = true; return }
      const idx = i++
      setFlashing(idx)
      setTimeout(() => {
        setVisible(v => Math.max(v, idx + 1))
        setFlashing(null)
        setTimeout(next, 180)
      }, 320)
    }
    const t = setTimeout(next, 400)
    return () => clearTimeout(t)
  }, [items.length])

  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex gap-3 items-start transition-all duration-300"
          style={{
            opacity: i < visible ? 1 : 0,
            transform: i < visible ? 'translateX(0)' : 'translateX(-12px)',
          }}
        >
          <span
            className="shrink-0 mt-0.5 transition-all duration-150"
            style={{
              color: flashing === i ? '#00ff64' : '#0057FF',
              filter: flashing === i ? 'drop-shadow(0 0 6px #00ff64)' : 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1.5,7 5,10.5 12.5,3"/>
            </svg>
          </span>
          <span className="text-[#475569] text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
