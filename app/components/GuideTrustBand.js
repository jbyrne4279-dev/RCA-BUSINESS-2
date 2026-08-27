const POINTS = [
  {
    title: 'RICS Regulated',
    desc: 'Every assessment is carried out by or under the supervision of a RICS-registered member.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
  {
    title: 'Fully Insured',
    desc: 'Every instruction is covered by comprehensive professional indemnity insurance for your protection.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>,
  },
  {
    title: '24-Hour Response',
    desc: 'We respond to every enquiry within 24 hours and deliver on the timescales we agree.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>,
  },
  {
    title: 'Insurer-Ready Report',
    desc: 'A clear, defensible figure accepted by every UK insurer and broker, without amendment.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M9 12h6M9 16h6M9 8h2"/></svg>,
  },
]

export default function GuideTrustBand({ background = 'rgba(122,31,61,0.08)' }) {
  return (
    <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge badge-blue mb-4">Why Stearling Reinstatement</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight">
            The <span className="blue-keyword">trusted choice</span> for homeowners.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POINTS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="card-glow bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <span
                className="icon-shine w-11 h-11 rounded-full flex items-center justify-center text-white mb-5"
                style={{ background: 'linear-gradient(135deg,#7A1F3D,#5C1730)', animationDelay: `${i * 0.6}s` }}
              >
                {icon}
              </span>
              <h3 className="text-base font-semibold text-[#2b0b14] mb-2">{title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
