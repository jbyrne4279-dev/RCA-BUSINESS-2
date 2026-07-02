import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings',
  description: 'Specialist reinstatement cost assessments for listed buildings. Listed properties carry 20–50% higher rebuild costs than standard construction. Accurate, site-based valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings cost so much more to reinstate than standard properties?', answer: 'Legal obligation drives the cost: under the Planning (Listed Buildings and Conservation Areas) Act 1990, reinstatement must be carried out in original style and materials. Lime mortar, handmade brick, heritage contractors and conservation consents all carry significant premiums over standard construction - and most assessors who are not heritage specialists underestimate every one of them.' },
  { question: 'Is a desktop assessment appropriate for a listed building?', answer: 'No. A desktop assessment applies standard construction rates and cannot account for specialist materials, heritage labour, conservation consent requirements or the extended programme costs that come with a listed reinstatement. On-site inspection by a specialist surveyor is the only method that produces a defensible declared value for a listed property.' },
  { question: 'Can you assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site surveys for all listed building categories. Grade I and Grade II* buildings in particular cannot be assessed by desktop - they require physical inspection and specialist knowledge. We confirm the programme and fee on receipt of your enquiry.' },
  { question: 'What is the VAT position on listed building reinstatement?', answer: 'A full rebuild after total loss is zero-rated. But demolition, professional fees and partial-damage repairs attract 20% VAT. Since most real claims are partial rather than total-loss, VAT at 20% applies to the majority of listed building insurance work - and it is frequently excluded from desktop figures.' },
  { question: 'How often should a listed building be reassessed?', answer: 'A full specialist reassessment is required at least every three years, with annual BCIS-indexed inflation reviews in intervening years. Where material works have been carried out, or where the building has not been assessed since before 2020, a fresh site-based assessment should be commissioned before the next renewal.' },
]

export default function ListedBuildingsPage() {
  return (
    <main>

      {/* 1. HERO */}
      <section className="hero-bg py-16 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Image src="/rics-logo.png" alt="RICS Regulated" width={80} height={40} className="object-contain mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              Listed buildings demand <span className="blue-keyword">specialist assessment</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Authentic materials, heritage contractors and conservation requirements drive rebuild costs far above standard construction. A desktop assessment will miss the gap entirely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#on-site-survey" className="btn-ghost">On-Site Survey</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Listed building specialist assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Site-based specialist assessments for listed and heritage buildings across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION A - Why listed buildings are different (text left, card right) */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text left */}
          <div>
            <span className="badge badge-blue mb-4">Why Listed Buildings Are Different</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Authentic materials, conservation requirements and period finishes all affect <span className="blue-keyword">rebuild cost</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              Under the Planning (Listed Buildings and Conservation Areas) Act 1990, reinstatement must replicate original style and materials. That legal obligation transforms the cost picture: lime mortar, handmade brick, heritage contractors, conservation consents and extended timescales all carry significant premiums over standard construction rates.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              Generic desktop calculators apply standard BCIS rates and systematically miss every one of these uplifts. For complex Grade I properties the gap between a desktop figure and a defensible declared value can exceed 100%.
            </p>
            <Link href="/contact#contact-form" className="btn-shine inline-block">Get a Specialist Assessment</Link>
          </div>
          {/* Card right - listing grades */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-6">Listed Building Categories</p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">I</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade I</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">Highest significance - only 2% of listed buildings. Reinstatement requires the most exacting materials match and Heritage England involvement.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">II*</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade II*</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">Particularly important buildings - 6% of the list. Often require specialist heritage contractors and conservation officer input on every element of reinstatement.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">II</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade II</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">The most common category - 92% of listed buildings. Still subject to listed building consent and material-authenticity obligations that standard assessors routinely overlook.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION B - On-site survey process (card left, text right) */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Checklist card left */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-6">What Our On-Site Survey Covers</p>
            <ul className="space-y-4">
              {[
                'Full physical inspection of structure, fabric and finishes',
                'Identification of original and heritage materials - lime, stone, handmade brick, timber frame',
                'Assessment of specialist trades required for authentic reinstatement',
                'Conservation consent and professional fee allowances',
                'VAT treatment - zero-rated total loss vs 20% partial damage',
                'Extended programme costs and temporary accommodation where applicable',
                'Curtilage structures, outbuildings and boundary features',
                'BCIS-benchmarked cost build-up with full methodology note',
              ].map(item => (
                <li key={item} className="flex gap-3 items-start">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="#0057FF" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#0d1b3e] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Text right */}
          <div>
            <span className="badge badge-blue mb-4">Our On-Site Survey Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              The only <span className="blue-keyword">defensible method</span> for a listed property.
            </h2>
            <div className="space-y-5 mb-8">
              {[
                { title: 'Booking and pre-survey research', body: 'We review planning history, listing description and any available drawings before attending. Pre-survey research means inspection time is spent on the building, not administration.' },
                { title: 'Physical site inspection', body: 'A RICS-regulated surveyor attends the property and records construction type, materials, condition and specialist features that inform the cost build-up.' },
                { title: 'Heritage-calibrated cost build-up', body: 'Costs are built from elemental rates calibrated for heritage construction - not standard BCIS tables. Professional fees, consents, VAT and programme premiums are each priced separately.' },
                { title: 'Broker-ready report', body: 'The final report sets out the declared reinstatement cost with a full methodology note, ready for submission to your insurer at renewal.' },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4 items-start">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#0057FF" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact#contact-form" className="btn-shine inline-block">Book a Survey</Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURE CARDS - 3-col */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Why Choose RCA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              Built for <span className="blue-keyword">listed buildings</span>, not adapted from standard practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'On-Site Inspection',
                desc: 'Every listed building assessment is carried out on site. Desktop methods cannot account for heritage materials, specialist trades or the physical condition of the fabric.',
                href: '/services#on-site-survey',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
              },
              {
                title: 'Heritage Materials',
                desc: 'We price lime mortar, handmade brick, natural stone, historic timber and specialist period finishes - each at rates that reflect the actual cost of authentic reinstatement.',
                href: '/contact#contact-form',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                title: 'RICS Regulated',
                desc: 'All assessments are prepared by RICS-regulated surveyors and carry the methodology transparency your insurer requires. Broker-ready reports issued within agreed timescales.',
                href: '/services',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map(({ title, desc, href, icon }) => (
              <div key={title} className="bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                <div className="mb-4">{icon}</div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="text-[#0057FF] text-sm font-semibold hover:text-[#0040CC] transition-colors">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text + buttons left */}
          <div>
            <span className="inline-block text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Ready to get the <span className="blue-keyword">right figure</span> for your listed building?
            </h2>
            <p className="text-white/85 text-base leading-relaxed mb-8">
              Request a specialist on-site assessment. We cover all grades across the UK and confirm your fee on receipt of the enquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-white text-[#0d1b3e] hover:bg-white/90 transition-colors">
                Request an Assessment
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold border border-white/50 text-white hover:bg-white/10 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
          {/* Checklist card right */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
            <p className="text-white font-semibold text-sm mb-5">Every assessment includes:</p>
            <ul className="space-y-3">
              {[
                'Physical on-site inspection by a RICS surveyor',
                'Heritage materials and specialist trade cost build-up',
                'Conservation consent and professional fee allowances',
                'VAT treatment - zero-rated and 20% scenarios',
                'Broker-ready report with full methodology note',
                'Annual BCIS inflation index reviews available',
              ].map(item => (
                <li key={item} className="flex gap-3 items-start">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection heading="Get a specialist on-site assessment for your listed building." />
      <FaqSection description="Common questions about reinstatement cost assessments for listed and heritage buildings." items={faqItems} />
    </main>
  )
}









