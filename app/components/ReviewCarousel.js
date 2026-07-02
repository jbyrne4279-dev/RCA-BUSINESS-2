'use client'
import { useState } from 'react'

const reviews = [
  { title: '"Standard practice at renewal"', quote: 'Instructing Cavendish & Rowe has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.', name: 'Caroline F.', role: 'Managing Agent Director, London' },
  { title: '"Confidence going into our first renewal"', quote: 'After our RTM we needed to establish the correct reinstatement figure from scratch. The team came back quickly with a robust RICS report and real confidence going into our first renewal.', name: 'Michael T.', role: 'RTM Company Director, Surrey' },
  { title: '"Short by nearly £200k — sorted within the week"', quote: 'Our insurer flagged we were underinsured at renewal. Turned out we were short by nearly £200k. The assessment was sorted within the week. Straightforward process, no drama.', name: 'James H.', role: 'Landlord, Manchester' },
  { title: '"RICS report back in 24 hours"', quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Cavendish & Rowe had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.', name: 'Sarah L.', role: 'Block Manager, Bristol' },
  { title: '"Accepted first time, no queries"', quote: 'Clear, professional report that our broker accepted first time. No back and forth, no queries. Exactly what we needed ahead of a tight renewal deadline.', name: 'David R.', role: 'Freeholder, Edinburgh' },
  { title: '"Takes the compliance burden off our desk"', quote: 'We manage over 40 blocks and Cavendish & Rowe now handles all our reinstatement cost assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.', name: 'Priya N.', role: 'Portfolio Manager, Birmingham' },
  { title: '"Our previous figure was nowhere near adequate"', quote: 'The listed building assessment was thorough and genuinely reflected the complexity of the property. Our previous figure was nowhere near adequate. This is now our default provider.', name: 'Tom W.', role: 'Historic Property Owner, Bath' },
  { title: '"Fast turnaround, excellent report"', quote: 'After a fire claim on one of our blocks, we needed to reassess the reinstatement value before the next renewal. Fast turnaround, excellent report, insurer satisfied.', name: 'Angela M.', role: 'RTM Director, Leeds' },
]

const StarRow = () => (
  <div className="flex gap-1 mb-5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function ReviewCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setIdx(i => (i + 1) % reviews.length)
  const r = reviews[idx]

  return (
    <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
      <div className="max-w-6xl mx-auto">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-2">What our clients have to say.</h2>
            <p className="text-[#5f6368] text-sm max-w-sm">Managing agents, freeholders and property professionals across the UK.</p>
          </div>
          <div className="flex gap-2 sm:mt-9 shrink-0">
            <button onClick={prev} aria-label="Previous review"
              className="w-10 h-10 rounded-lg border border-[#dadce0] flex items-center justify-center text-[#5f6368] hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} aria-label="Next review"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors" style={{background:'#4a5568'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#e8eaed] rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{boxShadow:'0 4px 20px rgba(60,64,67,0.08)'}}>
          {/* Left image placeholder */}
          <div className="w-full md:w-64 h-48 md:h-auto flex items-center justify-center shrink-0" style={{background:'#f1f3f9'}}>
            <svg className="w-14 h-14" fill="none" stroke="#c0c8d8" strokeWidth="1.25" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Right content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <StarRow />
            <h3 className="text-xl md:text-2xl font-bold text-[#202124] mb-4 leading-snug">{r.title}</h3>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-6">{r.quote}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-[#202124]">{r.name}</span>
              <span className="text-[#dadce0]">|</span>
              <span className="text-[#5f6368]">{r.role}</span>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5 justify-center mt-6">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? 'bg-[#1a73e8] w-5' : 'bg-[#dadce0] w-1.5'}`} />
          ))}
        </div>

      </div>
    </section>
  )
}
