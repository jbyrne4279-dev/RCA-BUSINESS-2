'use client'
import { useRef } from 'react'
import Image from 'next/image'

export default function TiltCard() {
  const cardRef = useRef(null)

  function onMouseMove(e) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -12
    const rotateY = ((x - cx) / cx) * 12
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`
  }

  function onMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden"
      style={{
        boxShadow: '0 8px 32px rgba(0,87,255,0.10)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        cursor: 'default',
      }}
    >
      <div className="relative h-52 md:h-64">
        <Image
          src="/AdobeStock_1477785304.jpeg"
          alt="Block of flats reinstatement cost assessment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/60 to-transparent" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        {[
          { label: 'Reinstatement Cost', val: 'Correct basis for sum insured', ok: true },
          { label: 'Market Value', val: 'Irrelevant for insurance purposes', ok: false },
          { label: 'Online Calculator', val: 'No RICS accountability', ok: false },
        ].map(({ label, val, ok }) => (
          <div key={label} className="flex items-center gap-3">
            <span className={`text-sm font-bold shrink-0 ${ok ? 'text-[#0057FF]' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
            <div>
              <p className="text-xs font-semibold text-[#0d1b3e]">{label}</p>
              <p className="text-xs text-[#64748b]">{val}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
