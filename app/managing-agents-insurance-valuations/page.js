import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TiltWrapper from '../components/TiltWrapper'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Assessments for Managing Agents',
  description: 'Specialist Reinstatement Cost Assessments for managing agents and RTM companies. Protect your PI cover and discharge the lease obligation.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/managing-agents-insurance-valuations',
    siteName: 'Stearling Reinstatement',
    title: 'Reinstatement Cost Assessments for Managing Agents | Stearling Reinstatement',
    description: 'Specialist RICS-regulated Reinstatement Cost Assessments for managing agents and RTM companies. Discharge lease obligations, protect PI cover and meet FCA Consumer Duty requirements.',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'Reinstatement Cost Assessments for managing agents - Stearling Reinstatement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinstatement Cost Assessments for Managing Agents | Stearling Reinstatement',
    description: 'RICS-regulated Reinstatement Cost Assessments for managing agents. Discharge lease obligations, protect PI cover, meet FCA Consumer Duty.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
}

const faqItems = [
  { question: 'Can a managing agent be personally liable for underinsurance on a block?', answer: 'Yes. Where a claim shortfall arises from a stale or inadequate Reinstatement Cost Assessment, the managing agent can face a professional negligence or E&O claim independent of who holds the insuring obligation under the lease. A current RICS-regulated Reinstatement Cost Assessment on the recommended three-year cycle is the defensible evidence that you discharged the duty correctly.' },
  { question: 'Will insurers and brokers accept a Reinstatement Cost Assessment from Stearling Reinstatement?', answer: 'Yes. Every Reinstatement Cost Assessment (rebuild cost assessment) we produce is accepted across the UK market without amendment. Each report documents the declared value, methodology, assumptions and review date in the format brokers and loss adjusters expect. Forward it directly at renewal.' },
  { question: 'How quickly can a managing agent receive a Reinstatement Cost Assessment report?', answer: 'Desktop Reinstatement Cost Assessments are delivered within 24 hours of instruction for standard residential blocks. For on-site rebuild cost assessment instructions we confirm the survey programme at the outset. For portfolio instructions we agree a phased schedule so no renewal window is missed.' },
  { question: 'Is index-linking the sum insured each year a substitute for a Reinstatement Cost Assessment?', answer: 'No. Index-linking adjusts the declared value figure but compounds any existing error in the original Reinstatement Cost Assessment and does not capture material works, specification changes or structural alterations. RICS requires a full formal Reinstatement Cost Assessment at least every three years index-linking alone does not satisfy that requirement.' },
  { question: 'What is the difference between Declared Value and Sum Insured in a buildings insurance policy?', answer: 'The Declared Value (DV) is the reinstatement cost figure established by the managing agent the rebuild cost assessment output. The Sum Insured is set by the insurer: the DV plus an inflation provision, typically a 20–50% uplift. Confusing the two and under-declaring the DV creates the shortfall that triggers the average clause. A formal Reinstatement Cost Assessment produces the correct DV as its primary output.' },
  { question: 'Can Stearling Reinstatement assess multiple blocks under one portfolio instruction?', answer: 'Yes. We produce individual RICS-regulated Reinstatement Cost Assessment reports per property, with residential and commercial elements split for mixed-use blocks, a consolidated portfolio summary schedule, and staggered scheduling to smooth service-charge cost across renewal years.' },
]

export default function ManagingAgentsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'Managing Agents', item: 'https://stearlingreinstatement.com/managing-agents-insurance-valuations' },
        ],
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
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
          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image src="/surveyor-reinstatement-cost-assessment-rics.png" alt="RICS surveyor carrying out Reinstatement Cost Assessment for managing agents" fill className="object-cover" priority />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for managing agents and RTM companies across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A - The risk of getting it wrong (text left, card right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
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
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-5">Approach comparison</p>
            <div className="space-y-4">
              {[
                { label: 'Stale valuation (3+ years old)', desc: 'Creates PI exposure; average clause triggered on a claim.', ok: false },
                { label: 'Index-linking only', desc: 'Compounds existing errors; no physical reinspection.', ok: false },
                { label: 'Online calculator or functional-unit rate', desc: 'No professional indemnity backing; challenged by loss adjusters.', ok: false },
                { label: 'RICS Reinstatement Cost Assessment', desc: 'Defensible at every stage - PI-backed, broker-ready, compliant.', ok: true },
              ].map(({ label, desc, ok }) => (
                <div key={label} className={`flex gap-4 items-start rounded-xl p-4 border ${ok ? 'border-[#16a34a] bg-[rgba(22,163,74,0.06)]' : 'border-[#f87171] bg-[rgba(239,68,68,0.05)]'}`}>
                  <span className={`shrink-0 mt-0.5 ${ok ? 'text-[#16a34a]' : 'text-[#d93025]'}`}>
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
          </TiltWrapper>
        </div>
      </section>

      {/* SECTION B - What We Deliver (visual left, text right) */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: What We Deliver checklist card */}
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0057FF] mb-5">What We Deliver</p>
            <div className="circuit-steps space-y-3">
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
          </TiltWrapper>

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
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
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
                desc: 'Instruction confirmed to quote within one working day. Survey and report delivery within 10–15 working days - no renewal window missed.',
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
              <Link key={title} href={href} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'#0057FF'}}>
                  {icon}
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1">{desc}</p>
                <span className="link-arrow cta-flash mt-5">Read More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>



      <ContactSection heading="Protect yourself and your clients. Instruct us today." flip />
      <FaqSection description="Common questions from managing agents and RTM companies about Reinstatement Cost Assessments." items={faqItems} flip />
    </main>
  )
}




















