import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Get Started. <span style={{color:'rgba(255,255,255,0.75)'}}>No Obligation</span> Required.
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-md">
            80% of UK buildings carry the wrong sum insured. Commission a RICS-regulated assessment and know for certain — broker-ready report in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact#contact-form" className="bg-white text-[#0057FF] font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-colors inline-block text-center">
              Get a Quote
            </Link>
            <Link href="/services" className="border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-block text-center">
              View Services
            </Link>
          </div>
        </div>
        <div className="bg-white/10 border rounded-2xl p-7 backdrop-blur-sm border-spin-glow">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">Why Stearling Reinstatement</p>
          <div className="circuit-steps">
          {[
            { label: 'Specialist only', desc: 'Reinstatement cost assessments — no general surveying, no distractions.' },
            { label: 'RICS regulated', desc: 'Every assessment supervised by a RICS-registered member.' },
            { label: '24-hr turnaround', desc: 'Desktop assessments delivered within 24 hours of instruction.' },
            { label: 'PI insured', desc: 'Professional indemnity cover on every instruction.' },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-3 mb-4 last:mb-0">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-white/65 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}</div>
        </div>
      </div>
    </section>
  )
}
