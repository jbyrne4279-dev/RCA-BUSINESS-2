'use client'
import { useEffect, useRef } from 'react'

const GHOST = 'rgba(13, 27, 62, 0.18)'
const ELECTRIC = '#0057FF'
const GLOW = '0 0 26px rgba(0, 87, 255, 0.45)'

export default function GuideProcess({ steps }) {
  const containerRef = useRef(null)
  const numRefs = useRef([])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nums = () => numRefs.current.filter(Boolean)
    const light = (node) => { node.style.color = ELECTRIC; node.style.borderColor = ELECTRIC; node.style.boxShadow = GLOW }
    const dim = (node) => { node.style.color = GHOST; node.style.borderColor = GHOST; node.style.boxShadow = 'none' }

    if (reduce) {
      nums().forEach(light)
      return
    }

    const STAGGER = 650
    const HOLD = 1200
    let timers = []
    let running = false

    const clearTimers = () => { timers.forEach(clearTimeout); timers = [] }

    const runCycle = () => {
      const list = nums()
      if (list.length === 0) return
      list.forEach(dim)
      list.forEach((node, i) => timers.push(setTimeout(() => light(node), 250 + i * STAGGER)))
      const total = 250 + (list.length - 1) * STAGGER + HOLD
      timers.push(setTimeout(runCycle, total))
    }

    const start = () => { if (running) return; running = true; runCycle() }
    const stop = () => { running = false; clearTimers() }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.isIntersecting ? start() : stop()
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => { io.disconnect(); stop() }
  }, [])

  return (
    <div ref={containerRef}>
      {steps.map(({ step, title, desc }, i) => (
        <div
          key={step}
          className={`grid grid-cols-[auto_1fr] gap-5 sm:gap-8 items-center py-8 ${i > 0 ? 'border-t border-[#e2e8f0]' : ''}`}
        >
          <div
            ref={(node) => { numRefs.current[i] = node }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center shrink-0 text-xl sm:text-2xl font-semibold tabular-nums leading-none select-none"
            style={{ color: GHOST, borderColor: GHOST, transition: 'color 900ms ease, border-color 900ms ease, box-shadow 900ms ease', willChange: 'color, border-color, box-shadow' }}
          >
            {step}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0d1b3e] tracking-tight mb-2">{title}</h3>
            <p className="text-[#64748b] text-base sm:text-lg leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
