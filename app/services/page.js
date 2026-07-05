import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TiltWrapper from '../components/TiltWrapper'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaBanner from '../components/CtaBanner'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

const IcoDesktop = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const IcoSurvey = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M10 21v-4h4v4"/>
  </svg>
)
const IcoShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5.1 3.6 9.9 8 11 4.4-1.1 8-5.9 8-11V6L12 2z"/><polyline points="9 12 11 14 15 10"/>
  </svg>
)

export const metadata = {
  title: 'Reinstatement Cost Assessment Survey for Buildings Insurance',
  description: 'Specialist reinstatement cost assessments for blocks of flats, managing agents, freeholders and leaseholders. RICS-aligned rebuild valuations for buildings insurance.',
  alternates: { canonical: '/services' },
}

const faqItems = [
  { question: 'Which reinstatement cost assessment service is right for my property?', answer: 'A desktop reinstatement cost assessment covers most standard residential and commercial properties and is delivered within 24 hours. An on-site rebuild cost assessment is required for listed buildings, non-standard construction and high-value or complex assets. If you manage multiple properties or need ongoing RICS compliance, the 3-Year Protection Plan provides a full reinstatement cost assessment in year one, with annual BCIS-indexed renewal reports before each renewal date. Contact us and we will recommend the right service.' },
  { question: 'How quickly will I receive my reinstatement cost assessment report?', answer: 'Desktop reinstatement cost assessments are delivered within 24 hours of instruction for standard residential and commercial properties. On-site rebuild cost assessment programmes are confirmed and scheduled on instruction contact us to discuss your timeline.' },
  { question: 'Are your reinstatement cost assessment reports accepted by all UK insurers?', answer: 'Yes. Every reinstatement cost assessment and rebuild cost assessment we produce is RICS-aligned and broker-ready, accepted across the UK insurance market without amendment. Each report documents the declared value, methodology, assumptions and review date in the format brokers and loss adjusters expect.' },
  { question: 'Do you carry out reinstatement cost assessments for listed and heritage buildings?', answer: 'Yes. Our on-site reinstatement cost assessment service covers all listed building categories Grade I, Grade II* and Grade II. Listed properties cannot be assessed by desktop: they require physical inspection by a specialist surveyor to capture heritage materials, conservation consent costs, specialist trades and extended programme costs that generic rebuild cost tools cannot account for.' },
  { question: 'Can you provide reinstatement cost assessments for a portfolio of properties under one instruction?', answer: 'Yes. We produce individual RICS-regulated reinstatement cost assessment reports per property with a consolidated portfolio summary schedule, all under a single engagement letter. Under the 3-Year Protection Plan, annual BCIS-indexed rebuild cost updates are delivered across the entire portfolio before each renewal no re-instructing required.' },
  { question: 'What does a RICS reinstatement cost assessment include?', answer: 'A full reinstatement cost assessment covers demolition and site clearance, structure, external fabric, internal finishes, communal areas, lifts and services, professional fees, statutory fees (planning, Building Regulations, party wall), and VAT where applicable. The report documents the declared value, the methodology, all key assumptions, and the date a reassessment is due.' },
]

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://reinstatementcostassessment.org/services' },
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
      {
        '@type': 'Service',
        provider: { '@id': 'https://reinstatementcostassessment.org/#organization' },
        name: 'Reinstatement Cost Assessment',
        serviceType: 'RICS Reinstatement Cost Assessment',
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Assessment Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop Reinstatement Cost Assessment', description: 'BCIS-indexed rebuild cost modelling delivered within 24 hours.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Site Reinstatement Cost Survey', description: 'RICS surveyor attends in person. Required for listed and complex buildings.' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3-Year Protection Plan', description: 'Three years of RICS compliance under a single instruction.' } },
          ],
        },
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="hero-bg py-10 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Three service tiers. One <span className="blue-keyword">specialist firm</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              Desktop Assessment for standard properties, On-Site Survey for listed and complex buildings, and the 3-Year Protection Plan for ongoing RICS compliance. Every instruction is RICS-aligned and broker-ready.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#service-cards" className="btn-ghost">View Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="RICS reinstatement cost assessment building survey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Desktop, On-Site and 3-Year Protection - RICS-aligned assessments for every property type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A - WHY SPECIALIST */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Generic tools cannot replace a <span className="blue-keyword">RICS specialist</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              UK construction costs rose over 30% between 2020 and 2024 - any figure not formally reviewed in that period is materially inaccurate. Only a RICS-aligned assessment is defensible with your insurer.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-7 space-y-3" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            {[
              { label: 'Online calculators', sub: 'No accountability. Not defensible in a dispute.', ok: false },
              { label: 'Index-linking alone', sub: 'Adjusts the figure. Does not replace a review.', ok: false },
              { label: 'Old or inherited valuations', sub: 'Stale figures create underinsurance risk.', ok: false },
              { label: 'RICS-aligned reinstatement cost assessment', sub: 'Specialist, documented. Accepted by every UK insurer.', ok: true },
            ].map(({ label, sub, ok }) => (
              <div key={label} className={`flex gap-3 items-start p-4 rounded-xl border ${ok ? 'border-[#16a34a]' : 'border-[#f87171]'}`} style={ok ? {background:'rgba(22,163,74,0.07)'} : {background:'rgba(239,68,68,0.05)'}}>
                <span className={`shrink-0 mt-0.5 ${ok ? 'text-[#16a34a]' : 'text-[#d93025]'}`}>
                  {ok
                    ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
                  }
                </span>
                <div>
                  <p className="font-medium text-[#0d1b3e] text-sm">{label}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </TiltWrapper>
        </div>
      </section>

      {/* SECTION B - THREE TIERS OVERVIEW */}
      <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-7 space-y-5" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            <div className="circuit-steps space-y-5">{[
              { icon: <IcoDesktop />, num: '01', title: 'Desktop Assessment', desc: 'BCIS-indexed rebuild cost modelling. Delivered within 24 hours. Ideal for standard residential and commercial property.' },
              { icon: <IcoSurvey />, num: '02', title: 'On-Site Survey', desc: 'RICS surveyor attends in person. Full measurement and material assessment. Required for listed and complex buildings.' },
              { icon: <IcoShield />, num: '03', title: '3-Year Protection Plan', desc: 'One instruction. Three years of RICS compliance. Annual index-linked renewal reports before each renewal date.' },
            ].map(({ icon, num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start">
                <div className="circuit-num w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg" style={{background:'rgba(0,87,255,0.12)'}}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-0.5">{num}</p>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}</div>
          </TiltWrapper>
          <div>
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Three service tiers. One <span className="blue-keyword">specialist</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              Whether you need a fast desktop report, a full on-site inspection, or a managed three-year compliance programme, we have a service to match your property and your obligations.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Recommendation</Link>
          </div>
        </div>
      </section>

      {/* 3-COL SERVICE CARDS */}
      <section id="service-cards" className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3">
              Pick the assessment that <span className="blue-keyword">fits your property</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: '/desktop-assessment-office.jpeg',
                imgAlt: 'Property professional reviewing reinstatement cost assessment data at desk',
                imgPosition: 'center center',
                id: 'desktop-rca',
                badge: '01. Desktop',
                title: 'Desktop Assessment',
                desc: 'BCIS-indexed rebuild cost modelling without a site visit. Delivered within 24 hours of instruction. Accepted by all UK insurers.',
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment',
              },
              {
                img: '/AdobeStock_208633670.jpeg',
                imgAlt: 'RICS surveyor conducting an on-site reinstatement cost assessment of a residential block',
                imgPosition: 'center center',
                id: 'on-site-survey',
                badge: '02. On-Site',
                title: 'On-Site Survey',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed, heritage and complex buildings.',
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey',
              },
              {
                img: '/AdobeStock_1477785304.jpeg',
                imgAlt: 'Well-maintained London property block protected under a 3-year RICS reinstatement cost assessment plan',
                imgPosition: 'center center',
                id: 'three-year-protection',
                badge: '03. Recommended',
                title: '3-Year Protection Plan',
                desc: 'One instruction covers three years of RICS compliance full assessment in year one, annual BCIS-indexed renewal reports before each renewal date.',
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan',
              },
            ].map(({ img, imgAlt, imgPosition, id, badge, title, desc, href, link }) => (
              <div key={id} id={id} className="float-card bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                <div className="relative w-full overflow-hidden" style={{height:'200px'}}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{objectPosition: imgPosition}}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/30 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-1">{badge}</p>
                  <h3 className="text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <Link href={href} className="link-arrow cta-flash">
                    {link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RICS REPORT = LEGAL PROTECTION */}
      <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="badge badge-blue">Your Protection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3 mb-5">
              Your RICS report is your <span className="blue-keyword">legal shield</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-4">
              Every assessment we deliver is a formal RICS-compliant report the recognised standard accepted by all UK insurers, loss adjusters and courts. It documents the correct sum insured, the methodology used, and the review date, creating a defensible paper trail that protects you at every stage.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              Under UK insurance law, the obligation to insure at full reinstatement cost falls on the building owner or managing agent. A professionally prepared RICS report is the evidence that you discharged that duty it limits personal liability if a claim arises and prevents insurers from applying the average clause to reduce a payout.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get Your RICS Report</Link>
          </div>

          <div className="space-y-4 stagger-blur-list">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
                title: 'RICS-compliant documentation',
                desc: 'Prepared to Royal Institution of Chartered Surveyors guidance the standard recognised by every UK insurer, broker and court.',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 6v6c0 5.1 3.6 9.9 8 11 4.4-1.1 8-5.9 8-11V6L12 2z"/><polyline points="9 12 11 14 15 10"/></svg>,
                title: 'Professional indemnity backing',
                desc: 'Every report is covered by our PI insurance. If the figure is ever challenged, you have an independently insured professional standing behind it.',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                title: 'Limits your personal liability',
                desc: 'Demonstrates you took reasonable professional steps to set the declared value protecting directors, managing agents and freeholders from personal claims.',
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/></svg>,
                title: 'Prevents the average clause',
                desc: 'Insurers apply the average clause to reduce payouts when a property is underinsured. A current RICS report is the strongest defence against it.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-5 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#0057FF] hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:'rgba(0,87,255,0.08)'}}>{icon}</div>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                  <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />

      <ContactSection heading="Not sure which service you need? We'll advise." />
      <FaqSection description="Still deciding? Use these answers to narrow it down - or contact us and we'll recommend the right service for your property." items={faqItems} />

    </main>
  )
}



















