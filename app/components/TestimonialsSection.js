'use client'
import { useState, useEffect } from 'react'

const Star = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#0057FF">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const reviews = [
  {
    name: 'Caroline F.',
    role: 'Managing Agent Director, London',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Instructing Stearling Reinstatement has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.',
  },
  {
    name: 'Sarah L.',
    role: 'Block Manager, Bristol',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Stearling Reinstatement had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.',
  },
  {
    name: 'Priya N.',
    role: 'Portfolio Manager, Birmingham',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    quote: 'We manage over 40 blocks and Stearling Reinstatement handles all our assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.',
  },
]

function ReviewCard({ name, role, photo, quote, visible }) {
  return (
    <div
      className="bg-white border border-[#e2e8f0] rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-700"
      style={{
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.98)',
        pointerEvents: visible ? 'auto' : 'none',
        position: visible ? 'relative' : 'absolute',
        inset: visible ? 'auto' : 0,
        width: '100%',
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <img src={photo} alt={name} className="w-11 h-11 rounded-full object-cover" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center" style={{boxShadow:'0 1px 4px rgba(0,0,0,0.2)'}}>
              <GoogleIcon />
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm text-[#0d1b3e] truncate">{name}</p>
            <p className="text-xs text-[#64748b] leading-snug">{role}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5 shrink-0">
          <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
          <span className="text-[10px] text-[#64748b]">Google review</span>
        </div>
      </div>
      <p className="text-[#64748b] text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % reviews.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-blue mb-4">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">What Our <span className="blue-keyword">Customers</span> Say</h2>
          <p className="text-[#64748b] text-sm mt-3">Managing agents, freeholders and property professionals across the UK.</p>
        </div>

        {/* Carousel — height adapts to active card; hidden cards sit absolute so they don't affect flow */}
        <div className="relative max-w-2xl mx-auto">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} {...r} visible={i === active} />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                background: i === active ? '#0057FF' : '#cbd5e1',
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
