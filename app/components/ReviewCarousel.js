'use client'
import { useState, useEffect } from 'react'

const reviews = [
  {
    quote: 'Instructing Stearling Reinstatement has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.',
    name: 'Caroline F.',
    role: 'Managing Agent Director, London',
    reviewCount: '12 reviews',
    avatar: 'https://i.pravatar.cc/80?img=47',
    fallback: 'CF',
    fallbackBg: '#1A73E8',
  },
  {
    quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Stearling Reinstatement had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.',
    name: 'Sarah L.',
    role: 'Block Manager, Bristol',
    reviewCount: '8 reviews',
    avatar: 'https://i.pravatar.cc/80?img=16',
    fallback: 'SL',
    fallbackBg: '#E37400',
  },
  {
    quote: 'We manage over 40 blocks and Stearling Reinstatement handles all our Reinstatement Cost Assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.',
    name: 'Priya N.',
    role: 'Portfolio Manager, Birmingham',
    reviewCount: '5 reviews',
    avatar: 'https://i.pravatar.cc/80?img=45',
    fallback: 'PN',
    fallbackBg: '#C5221F',
  },
]

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FBBC05" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

function ReviewCard({ review, visible }) {
  const { quote, name, role, reviewCount, avatar, fallback, fallbackBg } = review
  return (
    <div
      className="bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col gap-4 absolute inset-0 transition-all duration-700"
      style={{
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.98)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src={avatar}
              alt={name}
              width={44}
              height={44}
              className="w-11 h-11 rounded-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
            />
            <div
              className="w-11 h-11 rounded-full items-center justify-center text-white font-bold text-xs hidden"
              style={{ background: fallbackBg }}
            >
              {fallback}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
          </div>
          <div>
            <p className="font-semibold text-[13px] text-[#0d1b3e] leading-tight">{name}</p>
            <p className="text-[11px] text-[#64748b] leading-tight">{role}</p>
            <p className="text-[10px] text-[#94a3b8] leading-tight mt-0.5">Google Account · {reviewCount}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="flex items-center gap-2">
        <StarRow />
        <span className="text-[#94a3b8] text-xs">· 2 months ago</span>
      </div>
      <p className="text-[#64748b] text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}

export default function ReviewCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % reviews.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-blue">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3">What Our Customers Say</h2>
          <p className="text-[#64748b] text-sm mt-2">Managing agents, freeholders and property professionals across the UK.</p>
          <div className="inline-flex items-center gap-2 mt-5 bg-white border border-[#e2e8f0] rounded-xl px-5 py-2.5 shadow-sm">
            <GoogleIcon />
            <span className="text-yellow-500 text-sm leading-none">★★★★★</span>
            <span className="font-bold text-[#0d1b3e] text-sm ml-0.5">4.9</span>
            <span className="text-[#64748b] text-xs">· 47 Google reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative" style={{ height: '260px' }}>
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} visible={i === active} />
          ))}
        </div>

        {/* Dot indicators */}
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
