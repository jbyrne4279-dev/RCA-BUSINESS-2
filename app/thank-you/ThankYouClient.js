'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function ThankYouClient() {
  const canvasRef = useRef(null)

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    gtag('event', 'conversion', {
      send_to: 'AW-16853906784/dC7ICInWv80cEODqyOQ-',
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#0057FF','#38bdf8','#7dd3fc','#a5f3fc','#fbbf24','#34d399','#f472b6']
    const particles = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      w: 8 + Math.random() * 8,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 2.5,
      vy: 2.5 + Math.random() * 3.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      opacity: 1,
    }))

    let frame
    let startTime = null

    function draw(ts) {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let alive = false
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.angle += p.spin
        p.vy += 0.04
        if (elapsed > 1800) p.opacity = Math.max(0, p.opacity - 0.012)
        if (p.y < canvas.height + 20 && p.opacity > 0) alive = true

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      }

      if (alive) frame = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9999 }}
      />

      <style>{`
        @keyframes tick-flash {
          0%   { transform: scale(0.4); opacity: 0; filter: drop-shadow(0 0 0px transparent); }
          40%  { transform: scale(1.3); opacity: 1; filter: drop-shadow(0 0 14px rgba(56,189,248,1)); }
          60%  { transform: scale(0.95); filter: drop-shadow(0 0 8px rgba(56,189,248,0.7)); }
          80%  { transform: scale(1.08); filter: drop-shadow(0 0 12px rgba(56,189,248,0.9)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(56,189,248,0.5)); }
        }
        @keyframes tick-pulse {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(56,189,248,0.4)); }
          50%       { filter: drop-shadow(0 0 14px rgba(56,189,248,0.9)); }
        }
        .tick-icon-anim {
          animation: tick-flash 0.7s cubic-bezier(0.22,1,0.36,1) forwards,
                     tick-pulse 2s ease-in-out 0.7s infinite;
        }
      `}</style>

      <section className="min-h-[80vh] bg-[#f8f9fa] flex items-center py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#e0f2fe] flex items-center justify-center mx-auto mb-6 text-[#0057FF]">
            <svg className="tick-icon-anim" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="5,16 12,23 27,9"/>
            </svg>
          </div>
          <span className="inline-flex items-center bg-[#e0f2fe] text-[#0057FF] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
            Enquiry Received
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight mb-5">
            We have your enquiry.
          </h1>
          <p className="text-[#5f6368] text-lg leading-relaxed mb-10">
            A RICS-regulated surveyor will be in touch within 24 hours on business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-shine">Return Home</Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
