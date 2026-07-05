import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import TiltCard from './components/TiltCard'
import TiltWrapper from './components/TiltWrapper'
import TrustStrip from './components/TrustStrip'
import TestimonialsSection from './components/TestimonialsSection'
import CtaBanner from './components/CtaBanner'

export const metadata = {
  title: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
  description: 'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 24 hours. Trusted by managing agents, RTM companies, freeholders and portfolio landlords across England.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | Stearling Reinstatement',
    description: '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment for managing agents, freeholders and leaseholders, delivered in 24 hours.',
    url: 'https://reinstatementcostassessment.org',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'RICS Reinstatement Cost Assessment London' }],
  },
}

const faqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment (RCA) also called a rebuild cost assessment is a formal RICS-regulated calculation of the full cost to rebuild a property from scratch for buildings insurance purposes. It covers demolition and site clearance, structure, finishes, communal areas, professional fees, statutory fees, and VAT where applicable. It is not the same as market value, and only a current reinstatement cost assessment produces a defensible declared value for your insurer.' },
  { question: 'What is the difference between a reinstatement cost assessment and a rebuild cost assessment?', answer: 'The terms are used interchangeably throughout the UK insurance market. A reinstatement cost assessment and a rebuild cost assessment both refer to the same RICS-regulated exercise: calculating the full cost to rebuild a property for buildings insurance purposes. At Stearling Reinstatement we use both terms the formal RICS standard is the same whichever name is used.' },
  { question: 'How is reinstatement cost different from market value?', answer: 'Market value is what a buyer would pay on the open market. Reinstatement cost or rebuild cost is what it costs to reconstruct the building from cleared ground. In many locations they diverge significantly: a central-London flat may be worth £800,000 on the market but cost £350,000 to rebuild. Insuring at market value causes over-insurance and inflated premiums; insuring below true reinstatement cost triggers the average clause on every claim.' },
  { question: 'How often should a reinstatement cost assessment be updated?', answer: 'RICS guidance requires a formal rebuild cost assessment at least every three years, with annual BCIS-indexed inflation adjustment in the intervening years. Where a building has been extended, altered or significantly refurbished or where no formal reinstatement cost assessment has been carried out since before 2020 a fresh assessment should be commissioned before the next renewal.' },
  { question: 'Why do managing agents and RTM companies need a reinstatement cost assessment?', answer: 'Managing agents and RTM companies that arrange buildings insurance for blocks carry a direct legal obligation to insure to full reinstatement cost. Where the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout and the managing agent or RTM can face a professional negligence claim from leaseholders for the shortfall. A current RICS-regulated reinstatement cost assessment is the documented evidence that the obligation was properly discharged.' },
  { question: 'What happens if a building is underinsured?', answer: 'The insurer applies the condition of average and reduces every claim payout proportionally. If a building\'s true rebuild cost is £2m but it is insured for £1.4m, a £200,000 claim pays out only £140,000. Leaseholders can pursue the party responsible for arranging insurance for any unrecovered loss. A current reinstatement cost assessment is the primary protection against this outcome.' },
  { question: 'What areas does Stearling Reinstatement cover?', answer: 'We provide reinstatement cost assessments and rebuild cost assessments across the whole of the UK. Desktop assessments are available for any property nationally, typically delivered within 24 hours. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
]

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://reinstatementcostassessment.org/#webpage',
        url: 'https://reinstatementcostassessment.org/',
        name: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
        isPartOf: { '@id': 'https://reinstatementcostassessment.org/#website' },
        about: { '@id': 'https://reinstatementcostassessment.org/#organization' },
        description: 'RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and property professionals across the UK.',
        inLanguage: 'en-GB',
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              The <span className="blue-keyword">correct sum insured</span>, for every property.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Specialist reinstatement cost assessments for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports in <span className="glow-24">24 hours</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
              <Link href="/services" className="btn-ghost">View Services</Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[520px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
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
      <TrustStrip />

      {/* 3. SECTION A - Why It Matters (image left, text right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: tilt card */}
          <TiltCard />

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
            <Link href="/services" className="link-arrow cta-flash">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECTION B - Who We Help (text left, visual right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

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
                  <span className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-xs" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}>?</span>
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b3e] group-hover:text-[#0057FF] transition-colors">{title}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
          </div>

          {/* Right: process steps Ã¯Â¿Â½ staggered reveal */}
          <TiltWrapper className="bg-white rounded-2xl border border-[#e2e8f0] p-7" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-5">Assessment Process</p>
            <div className="circuit-steps">
              {[
                { n: '01', title: 'Tell us about the building', desc: 'Address, type, approximate GIA and any previous valuation.' },
                { n: '02', title: 'We confirm scope and fee', desc: 'Desktop or on-site - we advise and agree a fixed fee.' },
                { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services, professional fees - all captured.' },
                { n: '04', title: 'You receive your report', desc: 'Broker-ready declared value, ready to submit at renewal.' },
              ].map(({ n, title, desc }, i) => (
                <div key={n} className={`step-light flex gap-4 items-start ${i < 3 ? 'step-has-border pb-4 mb-4 border-b border-[#e2e8f0]' : ''}`}>
                  <span className="circuit-num text-xs font-bold text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)', boxShadow:'0 0 14px rgba(0,87,255,0.45)'}}>{n}</span>
                  <div>
                    <p className="step-title text-sm font-semibold text-[#0d1b3e]">{title}</p>
                    <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </TiltWrapper>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 6. SERVICES - 3 col */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">Our Assessments Cover <span className="blue-keyword">Every Property Type</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Choose the service that matches your property and compliance deadline.</p>
          </div>
          <div className="stagger-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4"/></svg>
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
                <Link href={href} className="link-arrow cta-flash">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner />

      <ContactSection heading="Instruct an assessment today." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process."
        items={faqItems}
      />
    </main>
  )
}




















