const Star = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#0057FF">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const reviews = [
  { initials: 'CF', name: 'Caroline F.', role: 'Managing Agent Director, London', quote: 'Instructing Sterling Reinstatement has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.' },
  { initials: 'SL', name: 'Sarah L.', role: 'Block Manager, Bristol', quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Sterling Reinstatement had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.' },
  { initials: 'PN', name: 'Priya N.', role: 'Portfolio Manager, Birmingham', quote: 'We manage over 40 blocks and Sterling Reinstatement handles all our assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-blue mb-4">Client Feedback</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">What Our <span className="blue-keyword">Clients</span> Say</h2>
          <p className="text-[#64748b] text-sm mt-3">Managing agents, freeholders and property professionals across the UK.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ initials, name, role, quote }) => (
            <div key={name} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}>
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0d1b3e]">{name}</p>
                  <p className="text-xs text-[#64748b]">{role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
