import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Managing Agents and RTM Companies',
  description: 'Specialist reinstatement cost assessments for managing agents. Protect your PI cover, discharge the lease obligation and demonstrate fair value to leaseholders under FCA Consumer Duty.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
}

const faqItems = [
  { question: 'Can a managing agent be personally liable for underinsurance?', answer: 'Yes. Where a claim shortfall arises from a stale or inadequate valuation, the agent can face a professional negligence or E&O claim - independent of who holds the insuring obligation under the lease. A RICS-aligned assessment on the recommended three-year cycle is the defensible position that protects your PI cover.' },
  { question: 'Will insurers and brokers accept your report?', answer: 'Yes. Our reports are accepted across the UK market without amendment. Each report documents the declared value, methodology, assumptions, and review date in the format brokers and insurers expect - you forward it directly.' },
  { question: 'How quickly can we get a report?', answer: 'Most instructions are turned around within 10â€“15 working days of the survey. For portfolio instructions we agree a phased schedule at the outset so no renewal window is missed.' },
  { question: 'Is index-linking the sum insured each year sufficient?', answer: 'No. Index-linking adjusts the figure but compounds any existing error and does not capture material works or specification changes. RICS requires a full reassessment at least every three years.' },
  { question: 'What is the difference between Declared Value and Sum Insured?', answer: 'The Declared Value (DV) is the day-one rebuild cost the agent establishes. The Sum Insured is set by the insurer - DV plus an inflation provision, typically 20â€“50% uplift - so a DV of £5m typically becomes an SI of around £6.5m. Treating the higher SI as over-insurance and under-declaring the DV creates the shortfall that triggers the average clause.' },
  { question: 'Can you assess multiple blocks under one instruction?', answer: 'Yes - individual reports per property, residential and commercial split for mixed-use blocks, with a consolidated summary schedule and staggered scheduling to smooth service-charge cost across years.' },
]

export default function ManagingAgentsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Managing Agents', item: 'https://reinstatementcostassessment.org/managing-agents-insurance-valuations' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Discharge your <span className="blue-keyword">compliance obligation</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              As the agent responsible for placing cover, you carry a duty of care to every leaseholder in the building. A specialist RICS assessment is the defensible position that protects you, your PI cover, and your clients.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Protect Yourself and Your Clients</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image src="/surveyor-reinstatement-cost-assessment-rics.png" alt="RICS surveyor carrying out reinstatement cost assessment for managing agents" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for managing agents and RTM companies across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A - The risk of getting it wrong (text left, card right) */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="badge badge-blue">Managing Agents</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              <span className="blue-keyword">Underinsurance</span> is your risk, not the freeholder&apos;s.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              The average clause means insurers pay only a proportionate share of any claim when the declared value falls short. As the practical decision-maker on the declared value, the shortfall - and the leaseholder complaints - land with you.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              A stale or inadequate valuation is the oversight that becomes a professional negligence claim. Under FCA Consumer Duty, leaseholders are now defined as customers - an unjustified sum insured fails that test too.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>

          {/* ? / ? comparison card */}
          <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-5">Approach comparison</p>
            <div className="space-y-4">
              {[
                { label: 'Stale valuation (3+ years old)', desc: 'Creates PI exposure; average clause triggered on a claim.', ok: false },
                { label: 'Index-linking only', desc: 'Compounds existing errors; no physical reinspection.', ok: false },
                { label: 'Online calculator or functional-unit rate', desc: 'No professional indemnity backing; challenged by loss adjusters.', ok: false },
                { label: 'RICS reinstatement cost assessment', desc: 'Defensible at every stage - PI-backed, broker-ready, compliant.', ok: true },
              ].map(({ label, desc, ok }) => (
                <div key={label} className={`flex gap-4 items-start rounded-xl p-4 border ${ok ? 'border-[#0057FF] bg-[rgba(0,87,255,0.06)]' : 'border-[#e2e8f0] bg-[#f8fafc]'}`}>
                  <span className={`shrink-0 mt-0.5 ${ok ? 'text-[#0057FF]' : 'text-[#d93025]'}`}>
                    {ok
                      ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                      : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
                    }
                  </span>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{label}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B - What We Deliver (visual left, text right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: What We Deliver checklist card */}
          <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0057FF] mb-5">What We Deliver</p>
            <div className="space-y-3">
              {[
                'Documented declared value - defensible at claim stage',
                'Clear methodology statement for insurers and brokers',
                'Review date and indexation guidance',
                'Mixed-use itemisation for residential and commercial blocks',
                'Professional indemnity backed assessment',
                'Broker-ready format - forward directly, no rework',
                'Phased portfolio scheduling to smooth service-charge cost',
              ].map((item, i) => (
                <div key={item} className="flex gap-3 items-start step-reveal-item">
                  <span className="text-xs font-bold text-[#0057FF] shrink-0 mt-0.5 w-6 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[#0d1b3e] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What managing agents get from us */}
          <div>
            <span className="badge badge-blue">Managing Agents</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              A broker-ready report that <span className="blue-keyword">protects you</span>, your PI file, and your clients.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              We handle the technical assessment so you can demonstrate due diligence with confidence - to leaseholders, insurers, and regulators.
            </p>
            <div className="space-y-6">
              {[
                { title: 'PI protection', desc: 'A RICS-aligned assessment on the recommended three-year cycle is the defensible position that keeps a claim shortfall off your E&O file.' },
                { title: 'Full lease compliance', desc: 'Discharge the insuring obligation under the lease and demonstrate fair value to leaseholders under FCA Consumer Duty.' },
                { title: 'Portfolio efficiency', desc: 'Single instruction for multiple blocks; phased scheduling and a consolidated summary schedule included at no extra charge.' },
              ].map(({ title, desc }, i) => (
                <div key={title} className="flex gap-4 items-start step-reveal-item">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-bold" style={{background:'#0057FF'}}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-COL FEATURE CARDS */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Managing Agents</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3">
              Built around your <span className="blue-keyword">renewal cycle</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L13.5 7.5H19L14.5 11L16.5 17L11 13.5L5.5 17L7.5 11L3 7.5H8.5L11 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                ),
                title: 'PI Protection',
                desc: 'Every report is backed by professional indemnity insurance and produced to RICS guidance - the documented defence you need if a claim shortfall is ever questioned.',
                href: '/services',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#fff" strokeWidth="1.6"/><path d="M11 7v4l3 2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
                ),
                title: '24-hr Turnaround on Quotes',
                desc: 'Instruction confirmed to quote within one working day. Survey and report delivery within 10â€“15 working days - no renewal window missed.',
                href: '/contact#contact-form',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="14" rx="2" stroke="#fff" strokeWidth="1.6"/><path d="M7 5V3M15 5V3M3 9h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/></svg>
                ),
                title: '3-Year Compliance',
                desc: 'We flag the next recommended assessment date in every report and offer portfolio scheduling so your entire managed estate stays on cycle without admin overhead.',
                href: '/services',
              },
            ].map(({ icon, title, desc, href }) => (
              <div key={title} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'#0057FF'}}>
                  {icon}
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1">{desc}</p>
                <Link href={href} className="link-arrow mt-5">Read More ?</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAL CTA BANNER */}
      <section className="py-12 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Ready to protect your PI and your clients?
            </h2>
            <p className="text-white/85 text-base leading-relaxed mb-8">
              Instruct us today and we will have a quote back within one working day. Most assessments are delivered within 10â€“15 working days of survey - in time for your next renewal window.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="inline-block bg-white text-[#0057FF] font-semibold rounded-full px-7 py-3 text-sm hover:bg-[#f0f4ff] transition-colors">Instruct Us Today</Link>
              <Link href="/services" className="inline-block border border-white/60 text-white font-semibold rounded-full px-7 py-3 text-sm hover:bg-white/10 transition-colors">See All Services</Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">What you get</p>
            <div className="space-y-3">
              {[
                'Quote within one working day',
                'Survey and report in 10â€“15 working days',
                'Broker-ready format - forward directly',
                'PI-backed, RICS-aligned methodology',
                'Review date flagged for 3-year compliance',
                'Portfolio scheduling for multiple blocks',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <span className="text-white shrink-0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg></span>
                  <p className="text-white/90 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection heading="Protect yourself and your clients. Instruct us today." />
      <FaqSection description="Common questions from managing agents and RTM companies about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}


















