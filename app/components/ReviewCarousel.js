'use client'

const reviews = [
  { quote: 'Instructing Cavendish & Rowe has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.', name: 'Caroline F.', role: 'Managing Agent Director, London' },
  { quote: 'After our RTM we needed to establish the correct reinstatement figure from scratch. The team came back quickly with a robust RICS report and real confidence going into our first renewal.', name: 'Michael T.', role: 'RTM Company Director, Surrey' },
  { quote: 'Our insurer flagged we were underinsured at renewal. Turned out we were short by nearly £200k. The assessment was sorted within the week. Straightforward process, no drama.', name: 'James H.', role: 'Landlord, Manchester' },
  { quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Cavendish & Rowe had a RICS report back to us in 48 hours. The shortfall was significant and the broker corrected it before renewal.', name: 'Sarah L.', role: 'Block Manager, Bristol' },
  { quote: 'Clear, professional report that our broker accepted first time. No back and forth, no queries. Exactly what we needed ahead of a tight renewal deadline.', name: 'David R.', role: 'Freeholder, Edinburgh' },
  { quote: 'We manage over 40 blocks and Cavendish & Rowe now handles all our reinstatement cost assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.', name: 'Priya N.', role: 'Portfolio Manager, Birmingham' },
  { quote: 'The listed building assessment was thorough and genuinely reflected the complexity of the property. Our previous figure was nowhere near adequate. This is now our default provider.', name: 'Tom W.', role: 'Historic Property Owner, Bath' },
  { quote: 'After a fire claim on one of our blocks, we needed to reassess the reinstatement value before the next renewal. Fast turnaround, excellent report, insurer satisfied.', name: 'Angela M.', role: 'RTM Director, Leeds' },
]

const StarRow = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Card = ({ quote, name, role }) => (
  <div className="w-80 shrink-0 bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-6 flex flex-col">
    <StarRow />
    <p className="text-[#3c4043] text-sm leading-relaxed flex-1 mb-5">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="font-semibold text-[#202124] text-sm">{name}</p>
      <p className="text-[#5f6368] text-xs mt-0.5">{role}</p>
    </div>
  </div>
)

export default function ReviewCarousel() {
  const doubled = [...reviews, ...reviews]
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((r, i) => (
          <Card key={i} {...r} />
        ))}
      </div>
    </div>
  )
}
