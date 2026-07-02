import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

const faqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment establishes the cost of rebuilding a property from scratch for insurance purposes. It covers demolition, site clearance, structure, professional fees, statutory fees, and VAT where applicable. It is not the same as market value.' },
  { question: 'Is reinstatement cost the same as market value?', answer: 'No. Market value reflects what the property sells for on the open market. Reinstatement cost reflects what it costs to rebuild. The two figures frequently differ substantially, and only reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'How often should a reinstatement cost assessment be updated?', answer: 'RICS guidance requires annual inflation adjustment and a formal review at least every three years, or sooner where the building has been extended, altered or significantly refurbished.' },
  { question: 'Why do managing agents and RTM companies need one?', answer: 'Managing agents and RTM companies arranging buildings insurance for blocks carry a direct obligation to insure to full reinstatement cost. Where the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout.' },
  { question: 'What happens if the building is underinsured?', answer: 'The insurer applies the condition of average and reduces the payout in proportion to the degree of underinsurance. Leaseholders may pursue the party responsible for arranging insurance for any unrecovered loss.' },
  { question: 'What areas do you cover?', answer: 'We cover the whole of the UK. Desktop assessments are available nationally. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
]

const Star = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#0057FF">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function HomePage() {
  return (
    <main>

      {/* 1. HERO */}
      <section className="hero-bg py-16 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Image src="/rics-logo.png" alt="RICS Regulated" width={80} height={40} className="object-contain mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              The <span className="blue-keyword">correct sum insured</span>, for every property.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Specialist reinstatement cost assessments for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
              <Link href="/services" className="btn-ghost">View Services</Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[520px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_1956380728.jpeg"
              alt="Reinstatement cost assessment property"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/55 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Accurate rebuild valuations for properties across the UK, carried out by chartered surveyors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <div className="border-b border-[#e2e8f0] py-5 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
          {['Managing Agents', 'RTM Companies', 'Freeholders', 'Block Managers', 'Portfolio Landlords'].map(l => (
            <span key={l} className="text-sm font-semibold text-[#94a3b8]">{l}</span>
          ))}
        </div>
      </div>

      {/* 3. SECTION A - Why It Matters (image left, text right) */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <div className="relative h-52 md:h-64">
              <Image src="/AdobeStock_1477785304.jpeg" alt="Block of flats reinstatement cost assessment" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/60 to-transparent" />
            </div>
            <div className="p-6 flex flex-col gap-3">
              {[
                { label: 'Reinstatement Cost', val: 'Correct basis for sum insured', ok: true },
                { label: 'Market Value', val: 'Irrelevant for insurance purposes', ok: false },
                { label: 'Online Calculator', val: 'No RICS accountability', ok: false },
              ].map(({ label, val, ok }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`text-sm font-bold shrink-0 ${ok ? 'text-[#0057FF]' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                  <div>
                    <p className="text-xs font-semibold text-[#0d1b3e]">{label}</p>
                    <p className="text-xs text-[#64748b]">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="badge badge-blue mb-5">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Reinstatement cost is not the same as <span className="blue-keyword">market value</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              After a total loss, insurers pay to rebuild - not to match market value. If the declared figure is wrong, the insurer applies the average clause and reduces the payout in proportion to the shortfall. Managing agents and freeholders can be held personally liable for the gap.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              A RICS-regulated reinstatement cost assessment is the only defensible basis for the buildings sum insured.
            </p>
            <Link href="/services" className="text-[#0057FF] font-semibold text-sm hover:text-[#0040CC] transition-colors">
              Explore our services →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION B - Who We Help (text left, visual right) */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <span className="badge badge-blue mb-5">Who We Help</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              We help the professionals who carry the <span className="blue-keyword">compliance obligation</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              One practice. One specialisation. Every instruction is a RICS-regulated reinstatement cost assessment delivered to the right audience.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: 'Managing Agents & RTM Companies', desc: 'Protect your PI file and discharge the lease obligation with a documented, defensible valuation.', href: '/managing-agents-insurance-valuations' },
                { title: 'Freeholders & Leaseholders', desc: 'Establish or challenge the sum insured with independent RICS-regulated evidence.', href: '/freeholders-leaseholders' },
                { title: 'Block Managers & Portfolio Landlords', desc: 'Consistent, compliant figures across every block - managed on a rolling cycle.', href: '/block-managers-reinstatement-cost-assessments' },
              ].map(({ title, desc, href }) => (
                <Link key={title} href={href} className="flex items-start gap-3 group">
                  <span className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-xs" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}>→</span>
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b3e] group-hover:text-[#0057FF] transition-colors">{title}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
          </div>

          {/* Right: visual card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-7" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-5">Assessment Process</p>
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Address, type, approximate GIA and any previous valuation.' },
              { n: '02', title: 'We confirm scope and fee', desc: 'Desktop or on-site - we advise and agree a fixed fee.' },
              { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services, professional fees - all captured.' },
              { n: '04', title: 'You receive your report', desc: 'Broker-ready declared value, ready to submit at renewal.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className={`flex gap-4 items-start ${i < 3 ? 'pb-4 mb-4 border-b border-[#e2e8f0]' : ''}`}>
                <span className="text-xs font-bold text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}>{n}</span>
                <div>
                  <p className="text-sm font-semibold text-[#0d1b3e]">{title}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">What Our <span className="blue-keyword">Customers</span> Say</h2>
            <p className="text-[#64748b] text-sm mt-3">Managing agents, freeholders and property professionals across the UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: 'CF', name: 'Caroline F.', role: 'Managing Agent Director, London', quote: 'Instructing Cavendish & Rowe has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.' },
              { initials: 'SL', name: 'Sarah L.', role: 'Block Manager, Bristol', quote: 'We inherited a block where the sum insured had not been reviewed in eight years. Cavendish & Rowe had a RICS report back to us in 24 hours. The shortfall was significant and the broker corrected it before renewal.' },
              { initials: 'PN', name: 'Priya N.', role: 'Portfolio Manager, Birmingham', quote: 'We manage over 40 blocks and Cavendish & Rowe handles all our assessments on a rolling three-year cycle. Takes the compliance burden completely off our desk.' },
            ].map(({ initials, name, role, quote }) => (
              <div key={name} className="bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
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

      {/* 6. SERVICES - 3 col */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">Our Assessments Cover <span className="blue-keyword">Every Property Type</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Choose the service that matches your property and compliance deadline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                ),
                title: 'Desktop Assessment',
                desc: 'BCIS-indexed rebuild cost modelling delivered within 24 hours. No site visit required. Ideal for standard residential and commercial properties.',
                href: '/services#desktop-rca',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                ),
                title: 'On-Site Survey',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed buildings, heritage properties and complex structures.',
                href: '/services#on-site-survey',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
                title: '3-Year Protection Plan',
                desc: 'One instruction covers three years of RICS compliance. Full assessment in year one, annual BCIS-indexed renewal reports delivered before each renewal date.',
                href: '/services#three-year-protection',
              },
            ].map(({ icon, title, desc, href }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#e2e8f0] p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,87,255,0.08)'}}>
                  {icon}
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-lg mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <Link href={href} className="text-[#0057FF] text-sm font-semibold hover:text-[#0040CC] transition-colors">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="py-14 md:py-20 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Get Started. <span style={{color:"rgba(255,255,255,0.75)"}}>No Obligation</span> Required.
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-md">
              80% of UK buildings carry the wrong sum insured. Commission a RICS-regulated assessment and know for certain - broker-ready report in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="bg-white text-[#0057FF] font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-colors inline-block text-center">
                Get Quote
              </Link>
              <Link href="/services" className="border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-block text-center">
                View Services
              </Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-7 backdrop-blur-sm">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">Why Cavendish &amp; Rowe</p>
            {[
              { label: 'Specialist only', desc: 'Reinstatement cost assessments - no general surveying, no distractions.' },
              { label: 'RICS regulated', desc: 'Every assessment supervised by a RICS-registered member.' },
              { label: '24-hr turnaround', desc: 'Desktop assessments delivered within 24 hours of instruction.' },
              { label: 'PI insured', desc: 'Professional indemnity cover on every instruction.' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3 mb-4 last:mb-0">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-white/65 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Instruct an assessment today." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process."
        items={faqItems}
      />
    </main>
  )
}













