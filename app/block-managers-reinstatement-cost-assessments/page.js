import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | Cavendish & Rowe',
  description: 'RICS-regulated reinstatement cost assessments for block managers. Consistent, compliant, accepted at renewal without question.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
}

const faqItems = [
  { question: 'As a block manager, am I personally liable for underinsurance?', answer: 'Yes. Where your management agreement requires you to arrange buildings insurance at full reinstatement cost, failure to do so exposes you to a personal liability claim from leaseholders. A RICS-regulated assessment is the documented evidence that you have discharged that duty.' },
  { question: 'Why does an insurer calculator not protect me?', answer: 'Insurer rebuild tools carry no professional accountability and no RICS regulation. In any underinsurance dispute they provide no documented methodology and no defence. Only a RICS-regulated assessment gives you a professionally defensible figure.' },
  { question: 'How do we instruct assessments for multiple blocks at once?', answer: 'Contact us with your portfolio details. We issue a consolidated quote covering all blocks, with individual reports per property and a portfolio summary schedule under a single engagement - no repeat admin.' },
  { question: 'Can leaseholders or a tribunal challenge the figure?', answer: 'A RICS-regulated report is the standard of evidence accepted by UK courts, the First-tier Tribunal and the Property Ombudsman. Our reports are produced to that standard and are defensible to that level of scrutiny.' },
  { question: 'What information do you need to get started?', answer: 'Property address, approximate gross internal floor area, construction type, number of storeys, and any specialist features such as listed status. We issue a simple instruction form on confirmation - the process takes minutes.' },
]

export default function BlockManagersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Block Managers</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Underinsurance is your liability. Not your client&rsquo;s.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              As block manager, the obligation to insure at full reinstatement cost sits with you. RICS-regulated assessments across every block you manage - documented, defensible, and accepted at renewal without challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(10,181,168,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_208633670.jpeg"
              alt="Block manager reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated figures across your entire managed portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBLIGATION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Your Obligation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              The lease obligation transfers directly to you.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Under a standard management agreement, the duty to insure at full reinstatement cost passes to you — and any shortfall in the sum insured becomes your liability.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get Started</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: 'Most', label: 'UK blocks carry an inaccurate sum insured' },
              { n: '~40%', label: 'rise in UK construction costs since 2020 (BCIS)' },
              { n: '3 yrs', label: 'RICS-recommended maximum interval between assessments' },
            ].map(({ n, label }) => (
              <div key={n} className="stat-card p-6 text-center">
                <p className="text-3xl font-bold text-[#0d1b3e] leading-none mb-3">{n}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0faf9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              One instruction. Zero recurring admin.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col">
              <p className="text-xs text-[#64748b] uppercase tracking-wider font-semibold mb-2">24-hour turnaround</p>
              <h3 className="font-bold text-2xl text-[#0d1b3e] mb-6">Single-Block Assessment</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Individual RICS-regulated report', 'Desktop delivered in 24 hours', 'On-site survey for complex blocks', 'Broker-ready format', 'PI insured'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <svg className="w-4 h-4 shrink-0 text-[#0ab5a8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=desktop#contact-form" className="border border-[#e2e8f0] text-[#0d1b3e] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#0ab5a8] hover:text-[#0ab5a8] transition-colors block">
                Instruct Per-Block Assessment →
              </Link>
            </div>

            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col">
              <p className="text-xs text-[#64748b] uppercase tracking-wider font-semibold mb-2">Single instruction</p>
              <h3 className="font-bold text-2xl text-[#0d1b3e] mb-6">Portfolio Assessment</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Consolidated portfolio instruction', 'Individual report per property', 'Portfolio summary schedule', 'Single-invoice billing', 'Named surveyor throughout'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <svg className="w-4 h-4 shrink-0 text-[#0ab5a8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact#contact-form" className="border border-[#e2e8f0] text-[#0d1b3e] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#0ab5a8] hover:text-[#0ab5a8] transition-colors block">
                Request Portfolio Quote →
              </Link>
            </div>

            <div className="rounded-2xl p-7 flex flex-col relative" style={{ background: 'linear-gradient(135deg, #0ab5a8 0%, #087f7a 100%)' }}>
              <span className="absolute top-5 right-5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{color:'rgba(255,255,255,0.55)'}}>Best value</p>
              <h3 className="font-bold text-2xl text-white mb-6">3-Year Protection</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Full RICS base assessment in year one', 'Annual BCIS-indexed updates', 'Renewal-ready reports before each renewal', 'Three-year RICS compliance covered', 'Fully managed — no re-instruction required'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{color:'rgba(255,255,255,0.85)'}}>
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=3year#contact-form" className="bg-white font-semibold text-sm px-5 py-3 rounded-xl text-center hover:bg-white/90 transition-colors block" style={{color:'#087f7a'}}>
                Enquire About 3-Year Plan →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <ContactSection heading="Remove the liability. Instruct today." />
      <FaqSection description="Questions from block management firms about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
