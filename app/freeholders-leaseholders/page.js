import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Freeholders and Leaseholders',
  description: 'Specialist reinstatement cost assessments for freeholders, RMC directors and leaseholders. Discharge your lease obligation with a defensible, RICS-aligned declared value.',
  alternates: { canonical: '/freeholders-leaseholders' },
}

const faqItems = [
  { question: 'What is the difference between the declared value and the sum insured?', answer: 'The declared value is the cost to rebuild the whole building from scratch - that is what you (or your managing agent) are responsible for setting correctly. The sum insured is a higher figure shown on your policy schedule: the insurer adds an inflation buffer on top, usually 20–50%. They are not the same number, and confusing them is one of the most common causes of underinsurance.' },
  { question: 'Who is responsible for making sure the insurance figure is correct?', answer: 'Your lease sets this out. In most blocks the freeholder, RMC, or RTM company holds the insuring obligation - but the practical job is often handled by a managing agent. Whoever is responsible for setting the figure carries the liability if it turns out to be wrong.' },
  { question: 'What happens if the building is underinsured and there is a big claim?', answer: 'The insurer applies what is known as the "average clause" and pays out only in proportion to how much of the true rebuild cost is covered. If a block is insured for £1m but the real rebuild cost is £1.5m, a £300,000 claim pays out just £200,000 - the other £100,000 has to come from somewhere else.' },
  { question: 'As a leaseholder, can I get my own independent assessment?', answer: 'Yes. You do not need the freeholder\'s permission to commission an independent assessment, and the report can be used as evidence in a formal concern or a service charge dispute at tribunal.' },
  { question: 'How often should the figure be reviewed?', answer: 'RICS guidance recommends a full reassessment every three years. Index-linking the figure annually between assessments is good practice, but it does not replace a physical survey - it only adjusts the number already there, without catching changes to the building or errors in the original figure.' },
  { question: 'What do you need from me to get started?', answer: 'Just the address, property type, approximate size, and any previous assessment report if you have one. We can work with limited information and will let you know if we need anything else.' },
]

export default function FreeholdersLeaseholdersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Freeholders & Leaseholders', item: 'https://reinstatementcostassessment.org/freeholders-leaseholders' },
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

      {/* 1. HERO */}
      <section className="hero-bg py-16 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              Defend the <span className="blue-keyword">insuring covenant</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              When the declared value is too low, the insurer pays out pro rata - the shortfall falls on everyone in the building. A RICS-regulated assessment protects freeholders from liability and gives leaseholders an independent basis to challenge.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Check My Declared Value</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Freeholder reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for freeholders, RMC directors and leaseholders across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION A - The insuring obligation (text left, card right) */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-blue mb-4">The Insuring Obligation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              What freeholders owe leaseholders - and what can <span className="blue-keyword">go wrong</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-4">
              Most leases place the insuring obligation squarely on the freeholder or the residents management company. That obligation is not simply to arrange insurance - it is to insure to the full reinstatement cost of the building.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed">
              Setting the figure without a professional assessment exposes the freeholder to personal liability if an underinsured claim arises. Leaseholders who suffer a shortfall can pursue the party responsible for the declared value, not the insurer.
            </p>
          </div>

          {/* Comparison card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 space-y-4" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-2">How the declared value is set</p>
            <div className="flex gap-4 items-start p-5 rounded-xl border border-[#e2e8f0]">
              <span className="text-[#d93025] shrink-0 mt-0.5"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg></span>
              <div>
                <p className="font-semibold text-[#0d1b3e] text-sm mb-1">No professional assessment</p>
                <p className="text-[#64748b] text-sm leading-relaxed">Figure taken from a previous schedule, an online calculator, or an estate agent's market valuation. Build-cost inflation, professional fees and demolition are routinely missed.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-xl border border-[#0057FF]" style={{background:'rgba(0,87,255,0.06)'}}>
              <span className="text-[#0057FF] shrink-0 mt-0.5"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg></span>
              <div>
                <p className="font-semibold text-[#0d1b3e] text-sm mb-1">RICS-regulated assessment</p>
                <p className="text-[#64748b] text-sm leading-relaxed">Independent, defensible figure prepared to RICS guidance. Covers structure, communal areas, professional fees, demolition, VAT and loss-of-rent provision - and satisfies the insuring obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION B - For leaseholders (card left, text right) */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Stat card */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 space-y-5" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <div className="rounded-xl p-5" style={{background:'rgba(0,87,255,0.08)'}}>
              <p className="text-5xl font-bold text-[#0057FF] leading-none mb-2">80%</p>
              <p className="text-sm text-[#64748b]">of UK residential blocks carry an inaccurate sum insured</p>
            </div>
            <div className="space-y-3">
              {[
                'Build costs have risen 30 %+ since 2020 (BCIS) - old figures are rarely adjusted',
                'Professional fees (architect, engineer, QS) are commonly omitted entirely',
                'Demolition and site clearance - often left out of the declared value',
                'Loss-of-rent and alternative accommodation provision frequently overlooked',
              ].map((risk) => (
                <div key={risk} className="flex gap-3 items-start step-reveal-item">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" className="shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L19 6V16L10 21L1 16V6L10 1Z" fill="#d93025"/>
                    <text x="10" y="15" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">!</text>
                  </svg>
                  <p className="text-[#64748b] text-sm leading-relaxed">{risk}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="badge badge-blue mb-4">For Leaseholders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              How to challenge an <span className="blue-keyword">inadequate sum insured</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-4">
              Leaseholders do not need the freeholder's permission to commission their own independent reinstatement cost assessment. The report provides a factual basis for raising a formal concern with the freeholder or managing agent.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-4">
              If the matter is not resolved, the assessment can be submitted as evidence in a service charge dispute at the First-tier Tribunal (Property Chamber). Tribunal panels give weight to RICS-regulated figures over unsubstantiated schedules.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed">
              Acting early - before a claim arises - is far stronger than trying to recover a shortfall after an event.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURE CARDS - 3-col */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="badge badge-blue mb-4">How We Help</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              <span className="blue-keyword">Protection</span> for every party in the building.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Freeholder Protection */}
            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col gap-4" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-6 h-6 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e]">Freeholder Protection</h3>
              <p className="text-[#64748b] text-sm leading-relaxed flex-1">A defensible, RICS-regulated figure discharges your insuring obligation and protects you from personal liability if leaseholders suffer a shortfall on a claim.</p>
              <Link href="/contact#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">Get a quote &rarr;</Link>
            </div>

            {/* Leaseholder Rights */}
            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col gap-4" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-6 h-6 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e]">Leaseholder Rights</h3>
              <p className="text-[#64748b] text-sm leading-relaxed flex-1">Commission your own independent assessment without the freeholder's permission. Use it to raise a formal concern or support a service charge challenge with credible, impartial evidence.</p>
              <Link href="/contact#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">Start a challenge &rarr;</Link>
            </div>

            {/* Tribunal Evidence */}
            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col gap-4" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-6 h-6 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e]">Tribunal Evidence</h3>
              <p className="text-[#64748b] text-sm leading-relaxed flex-1">Our reports are prepared to withstand scrutiny at the First-tier Tribunal (Property Chamber). RICS-regulated figures carry weight with panels reviewing service charge reasonableness.</p>
              <Link href="/contact#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">Find out more &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 md:py-20 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Find out if your building is covered for its true rebuild cost.
            </h2>
            <p className="text-white/85 text-base leading-relaxed mb-8">
              Whether you are a freeholder looking to discharge your insuring obligation or a leaseholder with concerns about the declared value, we can help. Reports delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0057FF] font-semibold text-sm hover:bg-white/90 transition-colors">Get Quote</Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/60 text-white font-semibold text-sm hover:border-white transition-colors">View Services</Link>
            </div>
          </div>
          <div className="bg-white/15 rounded-2xl p-7 space-y-3">
            {[
              'RICS-regulated and fully independent',
              'Defensible at the First-tier Tribunal',
              'Desktop reports delivered within 24 hours',
              'Covers all elements of reinstatement cost',
              'On-site surveys available across the UK',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center">
                <span className="text-white shrink-0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg></span>
                <p className="text-white/90 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Speak to a specialist about your declared value." />
      <FaqSection description="Common questions from freeholders, RMC directors and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}



















