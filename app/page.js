'use client'
import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import ReviewCarousel from './components/ReviewCarousel'

const faqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment establishes the cost of rebuilding a property from scratch for insurance purposes. It covers demolition, site clearance, structure, professional fees, statutory fees, and VAT where applicable. It is not the same as market value.' },
  { question: 'Is reinstatement cost the same as market value?', answer: 'No. Market value reflects what the property sells for on the open market. Reinstatement cost reflects what it costs to rebuild. The two figures frequently differ substantially, and only reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'How often should a reinstatement cost assessment be updated?', answer: 'RICS guidance requires annual inflation adjustment and a formal review at least every three years, or sooner where the building has been extended, altered or significantly refurbished.' },
  { question: 'Why do managing agents and RTM companies need one?', answer: 'Managing agents and RTM companies arranging buildings insurance for blocks carry a direct obligation to insure to full reinstatement cost. Where the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout. Leaseholders may then hold the managing agent liable for the shortfall.' },
  { question: 'What happens if the building is underinsured?', answer: 'The insurer applies the condition of average and reduces the payout in proportion to the degree of underinsurance. Leaseholders may pursue the party responsible for arranging insurance for any unrecovered loss.' },
  { question: 'Do you carry out a site inspection?', answer: 'Site-based assessment is carried out where appropriate. We inspect the property, assess materials, structure, services and external works, and deliver a documented, broker-ready report.' },
  { question: 'Can you assess listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist assessment: authentic materials, conservation requirements and period finishes all affect rebuild cost materially. We carry out site-based surveys for all listed property categories.' },
  { question: 'What areas do you cover?', answer: 'We cover the whole of the UK, including London, Liverpool and throughout the North West. Desktop assessments are available nationally. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
]

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">
              Reinstatement Cost Assessment Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              The correct sum insured, for every block.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get a Compliant Assessment</Link>
              <Link href="/services" className="btn-ghost">See Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(10,181,168,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_1477785304.jpeg"
              alt="Reinstatement cost assessment. London block of flats"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for residential and commercial properties across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="border-y border-[#e2e8f0] py-10 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '80%', label: 'of UK buildings carry an inaccurate sum insured' },
            { n: '30%+', label: 'rise in UK build costs vs pre-pandemic levels (BCIS)' },
            { n: '24 hrs', label: 'standard turnaround for a desktop assessment' },
            { n: '3 yrs', label: 'RICS recommended review period' },
          ].map(({ n, label }, i) => (
            <div key={n} className={`flex flex-col gap-1 ${i > 0 ? 'md:border-l md:border-[#e2e8f0] md:pl-8' : ''}`}>
              <p className="text-2xl md:text-3xl font-bold text-[#0ab5a8]">{n}</p>
              <p className="text-xs text-[#64748b] leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>


{/* REBUILD VS MARKET VALUE */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-reveal">
              <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
                Reinstatement cost is not the same as market value - and your insurer knows the difference.
              </h2>
              <p className="text-[#64748b] text-base leading-relaxed mb-6">
                After a total loss, insurers pay to rebuild - not to match market value. A RICS-regulated assessment is the only defensible basis for the buildings sum insured.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Link href="/contact#contact-form" className="btn-shine">Get a Compliant Assessment</Link>
                <Link href="/services" className="btn-ghost">See How It Works</Link>
              </div>
            </div>
            <div className="space-y-4 scroll-reveal">
              <div className="ls-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-red text-[#d93025]">✕</span>
                  <p className="font-semibold text-[#0d1b3e]">Market value</p>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed">What the property sells for on the open market. Irrelevant for insurance purposes.</p>
              </div>
              <div className="ls-card p-6" style={{borderColor:'#0ab5a8',borderWidth:'2px',background:'linear-gradient(135deg, rgba(10,181,168,0.15) 0%, rgba(8,127,122,0.1) 100%)'}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-blue text-[#1e8e3e]">✓</span>
                  <p className="font-semibold text-[#0d1b3e]">Reinstatement cost</p>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed">Demolition, clearance and full rebuild costs including professional and statutory fees. The correct basis for the buildings sum insured.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RISK */}
      <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0faf9'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>
              The Risk
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-4">
              One incorrect figure puts every leaseholder - and your PI cover - at risk.
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed max-w-2xl mx-auto">
              Underinsurance triggers the average clause - the insurer cuts the payout in proportion to the shortfall. Managing agents and freeholders can be held personally liable for the gap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Reduced claim payout', desc: 'The insurer applies the average clause and cuts the payout proportionally - leaving leaseholders to fund the shortfall themselves.', icon: '⚠', color: 'icon-circle-red' },
              { title: 'Personal liability', desc: 'Managing agents, RTM companies and freeholders face direct leaseholder claims for any unrecovered loss arising from underinsurance.', icon: '⚖', color: 'icon-circle-amber' },
              { title: 'Stale figures', desc: 'UK build costs are materially higher than pre-pandemic levels (BCIS). Any figure not reviewed since 2021 is almost certainly inadequate.', icon: '⏱', color: 'icon-circle-blue' },
            ].map(({ title, desc, icon, color }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <div className={`icon-circle ${color} mb-4 text-base`}>{icon}</div>
                <h3 className="font-semibold text-[#0d1b3e] mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact#contact-form" className="btn-shine">Protect Your PI File - Book an Assessment</Link>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0faf9'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>Who We Work With</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
                Serving the professionals who carry the obligation.
              </h2>
              <p className="text-[#64748b] text-base leading-relaxed mb-8">
                One specialisation. Every instruction is a RICS-regulated reinstatement cost assessment for the right audience.
              </p>
              <Link href="/contact#contact-form" className="btn-shine">Get a Free Quote</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Managing Agents', benefit: 'Protect your PI file and discharge the lease obligation', href: '/managing-agents-insurance-valuations' },
                { title: 'RTM Companies', benefit: 'Establish a compliant figure from day one of control', href: '/managing-agents-insurance-valuations' },
                { title: 'Freeholders', benefit: 'Defend the insuring covenant with a RICS-regulated figure', href: '/freeholders-leaseholders' },
                { title: 'Leaseholders', benefit: 'Challenge an inadequate sum insured with independent evidence', href: '/freeholders-leaseholders' },
                { title: 'Block Managers', benefit: 'Consistent, compliant figures across every block you manage', href: '/block-managers-reinstatement-cost-assessments' },
                { title: 'Portfolio Landlords', benefit: 'Right-size every declared value in a single instruction', href: '/blocks-of-flats' },
              ].map(({ title, benefit, href }) => (
                <Link key={title} href={href} className="ls-card px-5 py-4 flex flex-col gap-1 group hover:border-[#0ab5a8] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#0d1b3e]">{title}</span>
                    <span className="text-[#0ab5a8] group-hover:translate-x-1 transition-transform text-base">→</span>
                  </div>
                  <p className="text-[#64748b] text-xs leading-snug">{benefit}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0faf9'}}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              From instruction to broker-ready report in four steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Address, property type, approximate GIA and any previous valuation. Takes two minutes.' },
              { n: '02', title: 'We confirm scope and fee', desc: 'We confirm whether a desktop or on-site survey is appropriate and agree a fixed fee.' },
              { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services, external works, professional fees - all captured in full.' },
              { n: '04', title: 'You receive your report', desc: 'Broker-ready declared value, methodology, assumptions and next RICS review date - ready to submit.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="ls-card p-6 scroll-reveal">
                <div className="step-num mb-5">{n}</div>
                <p className="font-semibold text-[#0d1b3e] text-sm mb-2">{title}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact#contact-form" className="btn-shine">Start Your Assessment Today</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>
              Why Cavendish &amp; Rowe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-3">Why managing agents, freeholders and landlords trust Cavendish &amp; Rowe.</h2>
            <p className="text-[#64748b] text-base max-w-xl mx-auto">One practice. One focus. Every instruction carries the same RICS-regulated standard - no generalists, no shortcuts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Specialist only', desc: 'Reinstatement cost assessments only - no general surveying, no mortgage work, no distraction.' },
              { title: 'RICS regulated', desc: 'Every assessment supervised by a RICS-registered member and fully defensible at leasehold tribunal.' },
              { title: '24-hr turnaround', desc: 'Desktop assessments delivered within 24 hours of instruction - ideal for renewal deadlines.' },
              { title: 'PI insured', desc: 'Professional indemnity insurance on every instruction, giving you and your clients documented recourse.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <p className="font-semibold text-[#0d1b3e] text-sm mb-2">{title}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0faf9'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center text-[#0ab5a8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5" style={{background:'rgba(10,181,168,0.08)'}}>
              Our Assessments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-3">Three assessments. Every property type covered.</h2>
            <p className="text-[#64748b] text-base max-w-lg mx-auto">From a single block to an entire portfolio - choose the service that matches your property type and compliance deadline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Desktop Assessment */}
            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-[#64748b] uppercase tracking-wider font-semibold mb-2">24-hour turnaround</p>
              <h3 className="font-bold text-2xl text-[#0d1b3e] mb-6">Desktop Assessment</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['BCIS-indexed cost modelling', 'No site visit required', 'RICS-aligned methodology', 'Broker-ready report format', 'National coverage'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <svg className="w-4 h-4 shrink-0 text-[#0ab5a8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#64748b] mb-6 leading-snug">Managing a portfolio? <Link href="/block-managers-reinstatement-cost-assessments" className="text-[#0ab5a8] hover:underline">See our portfolio assessment service →</Link></p>
              <Link href="/services#desktop-rca" className="border border-[#e2e8f0] text-[#0d1b3e] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#0ab5a8] hover:text-[#0ab5a8] transition-colors block">
                Instruct a Desktop Assessment →
              </Link>
            </div>

            {/* On-Site Survey */}
            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-[#64748b] uppercase tracking-wider font-semibold mb-2">Full physical inspection</p>
              <h3 className="font-bold text-2xl text-[#0d1b3e] mb-6">On-Site Survey</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['RICS surveyor attends in person', 'Listed & heritage buildings', 'Non-standard construction', 'Full dimensional measurement', 'PI insured every instruction'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <svg className="w-4 h-4 shrink-0 text-[#0ab5a8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#64748b] mb-6 leading-snug">Own a listed or heritage property? <Link href="/freeholders-leaseholders" className="text-[#0ab5a8] hover:underline">See freeholder services →</Link></p>
              <Link href="/services#on-site-survey" className="border border-[#e2e8f0] text-[#0d1b3e] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#0ab5a8] hover:text-[#0ab5a8] transition-colors block">
                Request an On-Site Survey →
              </Link>
            </div>

            {/* 3-Year Protection - Popular */}
            <div className="rounded-2xl p-7 flex flex-col relative scroll-reveal border border-[#0ab5a8]" style={{background:'linear-gradient(135deg, rgba(10,181,168,0.15) 0%, rgba(8,127,122,0.1) 100%)'}}>
              <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full" style={{background:'rgba(10,181,168,0.2)', color:'#087f7a'}}>Recommended for Managing Agents</span>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2 text-[#0ab5a8]">Full compliance. Zero admin.</p>
              <h3 className="font-bold text-2xl text-[#0d1b3e] mb-6">3-Year Protection Plan</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['Full assessment in year one', 'Annual BCIS indexation updates', 'Renewal-ready reports each year', 'Three-year RICS compliance - guaranteed', 'Fully managed - no chasing renewals'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <svg className="w-4 h-4 shrink-0 text-[#0ab5a8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs mb-6 leading-snug text-[#64748b]">The default choice for managing agents with multiple blocks - one instruction covers three years of RICS compliance.</p>
              <Link href="/contact?service=3year#contact-form" className="font-semibold text-sm px-5 py-3 rounded-xl text-center transition-colors block text-white" style={{background:'linear-gradient(135deg, #0ab5a8 0%, #087f7a 100%)'}}>
                Get 3-Year Protection →
              </Link>
            </div>

          </div>
          <div className="mt-6 text-center">
            <Link href="/services" className="link-amber">Compare all assessment options in full →</Link>
          </div>
        </div>
      </section>

      {/* RICS TRUST */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="border-l-4 border-[#0ab5a8] pl-8">
            <p className="text-xs font-semibold text-[#0ab5a8] uppercase tracking-[0.15em] mb-5">RICS Guidance</p>
            <blockquote className="text-xl md:text-2xl font-semibold text-[#0d1b3e] leading-[1.5] mb-5">
              &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
            </blockquote>
            <cite className="text-[#64748b] text-sm not-italic font-medium">Royal Institution of Chartered Surveyors</cite>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      {/* CTA BANNER */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0ab5a8 0%, #087f7a 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Is your sum insured correct?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            80% of UK buildings carry the wrong figure. Commission a RICS-regulated assessment and know for certain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#contact-form" className="bg-white text-[#0ab5a8] font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-colors inline-block">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-block">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Instruct an assessment today." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process with managing agents, freeholders and leaseholders."
        items={faqItems}
      />
    </main>
  )
}
