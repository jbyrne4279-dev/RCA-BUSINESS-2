import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TiltWrapper from '../components/TiltWrapper'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaBanner from '../components/CtaBanner'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings',
  description: 'Specialist reinstatement cost assessments for listed buildings. Listed properties carry 20-50% higher rebuild costs than standard construction. Accurate, site-based valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings need a specialist reinstatement cost assessment?', answer: 'Under the Planning (Listed Buildings and Conservation Areas) Act 1990, reinstatement of a listed building must be carried out in original style and materials. Lime mortar, handmade brick, heritage contractors and conservation consents all carry significant premiums over standard construction costs. A standard reinstatement cost assessment or generic rebuild cost tool cannot capture these a specialist on-site assessment by a heritage-qualified surveyor is the only method that produces a defensible declared value.' },
  { question: 'Is a desktop reinstatement cost assessment appropriate for a listed building?', answer: 'No. A desktop reinstatement cost assessment applies standard BCIS construction rates and cannot account for specialist materials, heritage labour, conservation authority consent costs or the extended programme timescales that characterise a listed building reinstatement. On-site inspection by a specialist surveyor is the only approach that produces a defensible rebuild cost assessment for a listed property.' },
  { question: 'Can Stearling Reinstatement assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site reinstatement cost assessments for all listed building categories Grade I, Grade II* and Grade II. Grade I and Grade II* buildings require physical inspection and specialist heritage knowledge that no desktop rebuild cost assessment can replicate. We confirm the programme and fee on receipt of your enquiry.' },
  { question: 'What is the VAT position on a listed building reinstatement cost assessment?', answer: 'A full rebuild after total loss is zero-rated for VAT purposes. However, demolition, professional fees and partial-damage repairs all attract 20% VAT. Since most real insurance claims are partial rather than total-loss, VAT at 20% applies to the majority of listed building insurance reinstatement work and it is routinely excluded from desktop or non-specialist rebuild cost assessments.' },
  { question: 'How often should a listed building reinstatement cost assessment be updated?', answer: 'A full specialist reinstatement cost assessment is required at least every three years, with annual BCIS-indexed inflation reviews in between. Where material works have been carried out or where the building has not had a formal rebuild cost assessment since before 2020 a fresh site-based assessment should be commissioned before the next renewal date.' },
]

export default function ListedBuildingsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://reinstatementcostassessment.org/services' },
          { '@type': 'ListItem', position: 3, name: 'Listed Buildings', item: 'https://reinstatementcostassessment.org/listed-buildings' },
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
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              Listed buildings demand <span className="blue-keyword">specialist assessment</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Authentic materials, heritage contractors and conservation requirements drive rebuild costs far above standard construction. A desktop assessment will miss the gap entirely.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#on-site-survey" className="btn-ghost">On-Site Survey</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image src="/AdobeStock_1064771096.jpeg" alt="Listed building specialist assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Site-based specialist assessments for listed and heritage buildings across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* 2. SECTION A - Why listed buildings are different (text left, card right) */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-8 electric-pulse" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-6">Listed Building Categories</p>
            <div className="space-y-5">
              <div className="grade-card flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">I</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade I</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">Highest significance - only 2% of listed buildings. Reinstatement requires the most exacting materials match and Heritage England involvement.</p>
                </div>
              </div>
              <div className="grade-card flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">II*</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade II*</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">Particularly important buildings - 6% of the list. Often require specialist heritage contractors and conservation officer input on every element of reinstatement.</p>
                </div>
              </div>
              <div className="grade-card flex gap-4 items-start p-4 rounded-xl" style={{background:'rgba(0,87,255,0.06)'}}>
                <span className="font-bold text-[#0057FF] text-sm shrink-0 mt-0.5">II</span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">Grade II</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">The most common category - 92% of listed buildings. Still subject to listed building consent and material-authenticity obligations that standard assessors routinely overlook.</p>
                </div>
              </div>
            </div>
          </TiltWrapper>
        </div>
      </section>

      {/* 3. SECTION B - On-site survey process (card left, text right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Checklist card left */}
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
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
              ].map((item, i) => (
                <li key={item} className="flex gap-3 items-start step-reveal-item">
                  <span className="text-xs font-bold text-[#0057FF] shrink-0 mt-0.5 w-6 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[#0d1b3e] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </TiltWrapper>
          {/* Text right */}
          <div>
            <span className="badge badge-blue mb-4">Our On-Site Survey Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              The only <span className="blue-keyword">defensible method</span> for a listed property.
            </h2>
            <div className="space-y-5 mb-8">
              {[
                { title: 'Booking and pre-survey research', body: 'We review planning history, listing description and any available drawings before attending. Pre-survey research means inspection time is spent on the building, not administration.', icon: <span className="text-xs font-bold text-white flex items-center justify-center w-full h-full">01</span> },
                { title: 'Physical site inspection', body: 'A RICS-regulated surveyor attends the property and records construction type, materials, condition and specialist features that inform the cost build-up.', icon: <span className="text-xs font-bold text-white flex items-center justify-center w-full h-full">02</span> },
                { title: 'Heritage-calibrated cost build-up', body: 'Costs are built from elemental rates calibrated for heritage construction - not standard BCIS tables. Professional fees, consents, VAT and programme premiums are each priced separately.', icon: <span className="text-xs font-bold text-white flex items-center justify-center w-full h-full">03</span> },
                { title: 'Broker-ready report', body: 'The final report sets out the declared reinstatement cost with a full methodology note, ready for submission to your insurer at renewal.', icon: <span className="text-xs font-bold text-white flex items-center justify-center w-full h-full">04</span> },
              ].map(({ title, body, icon }) => (
                <div key={title} className="flex gap-4 items-start step-reveal-item">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{background:'#0057FF'}}>
                    {icon}
                  </div>
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
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Why Choose Stearling Reinstatement</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: 'Heritage Materials',
                desc: 'We price lime mortar, handmade brick, natural stone, historic timber and specialist period finishes - each at rates that reflect the actual cost of authentic reinstatement.',
                href: '/contact#contact-form',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
              <div key={title} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                <div className="mb-4">{icon}</div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="link-arrow cta-flash">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />

      <ContactSection heading="Get a specialist on-site assessment for your listed building." />
      <FaqSection description="Common questions about reinstatement cost assessments for listed and heritage buildings." items={faqItems} />
    </main>
  )
}




















