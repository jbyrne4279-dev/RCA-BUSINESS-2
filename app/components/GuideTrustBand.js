const POINTS = [
  { icon: 'verified_user', color: '#16a34a', bg: 'rgba(22,163,74,0.12)', title: 'RICS Regulated', desc: 'Every assessment is carried out by or under the supervision of a RICS-registered member.' },
  { icon: 'shield', color: '#0057FF', bg: 'rgba(0,87,255,0.12)', title: 'Fully Insured', desc: 'Every instruction is covered by comprehensive professional indemnity insurance for your protection.' },
  { icon: 'bolt', color: '#d97706', bg: 'rgba(217,119,6,0.14)', title: '24-Hour Response', desc: 'We respond to every enquiry within 24 hours and deliver on the timescales we agree.' },
  { icon: 'receipt_long', color: '#7c3aed', bg: 'rgba(124,58,237,0.12)', title: 'Insurer-Ready Report', desc: 'A clear, defensible figure accepted by every UK insurer and broker, without amendment.' },
]

export default function GuideTrustBand() {
  return (
    <section className="py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto bg-[#0d1b3e] rounded-3xl py-16 px-6 sm:px-10">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B9BD5] block mb-2">Why Stearling Reinstatement</span>
          <h2 className="text-3xl font-bold text-white">
            The <span className="text-[#5B9BD5]">trusted choice</span> for homeowners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POINTS.map(({ icon, color, bg, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color }}>{icon}</span>
                </div>
                <p className="font-bold text-[#0d1b3e] text-sm">{title}</p>
              </div>
              <p className="text-[#64748b] text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
