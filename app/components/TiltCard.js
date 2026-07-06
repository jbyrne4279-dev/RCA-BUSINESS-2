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
      <style>{`
        @keyframes row-light-green {
          0%,100%{ background:transparent; box-shadow:none; }
          15%    { background:rgba(22,163,74,0.07); box-shadow:0 0 0 1px rgba(22,163,74,0.18); }
          40%    { background:rgba(22,163,74,0.07); box-shadow:0 0 0 1px rgba(22,163,74,0.18); }
          60%    { background:transparent; box-shadow:none; }
        }
        @keyframes row-light-red {
          0%,100%{ background:transparent; box-shadow:none; }
          15%    { background:rgba(217,48,37,0.05); box-shadow:0 0 0 1px rgba(217,48,37,0.16); }
          40%    { background:rgba(217,48,37,0.05); box-shadow:0 0 0 1px rgba(217,48,37,0.16); }
          60%    { background:transparent; box-shadow:none; }
        }
        @keyframes icon-pop-green {
          0%,100%{ filter:drop-shadow(0 0 0px transparent); transform:scale(1); }
          20%    { filter:drop-shadow(0 0 3px rgba(22,163,74,0.6)); transform:scale(1.12); }
          40%    { filter:drop-shadow(0 0 2px rgba(22,163,74,0.35)); transform:scale(1.06); }
          60%    { filter:drop-shadow(0 0 0px transparent); transform:scale(1); }
        }
        @keyframes icon-pop-red {
          0%,100%{ filter:drop-shadow(0 0 0px transparent); transform:scale(1); }
          20%    { filter:drop-shadow(0 0 3px rgba(217,48,37,0.6)); transform:scale(1.12); }
          40%    { filter:drop-shadow(0 0 2px rgba(217,48,37,0.35)); transform:scale(1.06); }
          60%    { filter:drop-shadow(0 0 0px transparent); transform:scale(1); }
        }
        .tilt-row { border-radius:8px; padding:6px 8px; transition:background 1.2s ease, box-shadow 1.2s ease; }
        .tilt-row-1 { animation: row-light-green 12s ease-in-out infinite; animation-delay:0s; }
        .tilt-row-2 { animation: row-light-red   12s ease-in-out infinite; animation-delay:4s; }
        .tilt-row-3 { animation: row-light-red   12s ease-in-out infinite; animation-delay:8s; }
        .tilt-icon-1 { animation: icon-pop-green 12s ease-in-out infinite; animation-delay:0s; }
        .tilt-icon-2 { animation: icon-pop-red   12s ease-in-out infinite; animation-delay:4s; }
        .tilt-icon-3 { animation: icon-pop-red   12s ease-in-out infinite; animation-delay:8s; }
      `}</style>
      <div className="p-6 flex flex-col gap-1">
        {[
          { label: 'Reinstatement Cost', val: 'Correct basis for sum insured', ok: true, n: 1 },
          { label: 'Market Value', val: 'Irrelevant for insurance purposes', ok: false, n: 2 },
          { label: 'Online Calculator', val: 'No RICS accountability', ok: false, n: 3 },
        ].map(({ label, val, ok, n }) => (
          <div key={label} className={`tilt-row tilt-row-${n} flex items-center gap-3`}>
            <span className={`tilt-icon-${n} shrink-0 ${ok ? 'text-[#16a34a]' : 'text-[#d93025]'}`}>
              {ok
                ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
              }
            </span>
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

