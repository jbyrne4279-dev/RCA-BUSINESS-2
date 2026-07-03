const reviews = [
  { quote: 'Instructing Sterling Reinstatement has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.', name: 'Caroline F.', role: 'Managing Agent Director, London' },
  { quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Sterling Reinstatement had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.', name: 'Sarah L.', role: 'Block Manager, Bristol' },
  { quote: 'We manage over 40 blocks and Sterling Reinstatement handles all our reinstatement cost assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.', name: 'Priya N.', role: 'Portfolio Manager, Birmingham' },
]

const StarRow = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#0057FF" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function ReviewCarousel() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-blue">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">What our clients say.</h2>
          <p className="text-[#64748b] text-sm mt-2">Managing agents, freeholders and property professionals across the UK.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ quote, name, role }) => (
            <div key={name} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <StarRow />
              <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-[#0d1b3e] text-sm">{name}</p>
                <p className="text-[#64748b] text-xs mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



