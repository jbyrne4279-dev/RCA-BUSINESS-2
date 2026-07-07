import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import TiltCard from './components/TiltCard'
import TiltWrapper from './components/TiltWrapper'
import TrustStrip from './components/TrustStrip'
import TestimonialsSection from './components/TestimonialsSection'

export const metadata = {
  title: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
  description: 'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 24 hours. Trusted by managing agents, RTM companies, freeholders and portfolio landlords across England.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | Stearling Reinstatement',
    description: '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment for managing agents, freeholders and leaseholders, delivered in 24 hours.',
    url: 'https://stearlingreinstatement.com',
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
        '@id': 'https://stearlingreinstatement.com/#webpage',
        url: 'https://stearlingreinstatement.com/',
        name: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
        isPartOf: { '@id': 'https://stearlingreinstatement.com/#website' },
        about: { '@id': 'https://stearlingreinstatement.com/#organization' },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              The <span className="blue-keyword">correct sum insured</span>, for every property.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Specialist reinstatement cost assessments from RICS Certified Surveyors for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports in <span className="glow-24">24 hours</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
              <Link href="/services" className="btn-ghost">View Services</Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hero-img-pulse hidden sm:block relative rounded-3xl overflow-hidden sm:h-64 md:h-96 lg:h-[520px]">
            <Image
              src="/AdobeStock_1956380728.jpeg"
              alt="Reinstatement cost assessment property"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/55 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
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
                {
                  title: 'Managing Agents & RTM Companies',
                  desc: 'Protect your PI file and discharge the lease obligation with a documented, defensible valuation.',
                  href: '/managing-agents-insurance-valuations',
                  icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                },
                {
                  title: 'Freeholders & Leaseholders',
                  desc: 'Establish or challenge the sum insured with independent RICS-regulated evidence.',
                  href: '/freeholders-leaseholders',
                  icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                },
                {
                  title: 'Block Managers & Portfolio Landlords',
                  desc: 'Consistent, compliant figures across every block - managed on a rolling cycle.',
                  href: '/block-managers-reinstatement-cost-assessments',
                  icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="14"/><rect x="9" y="3" width="6" height="18"/><rect x="16" y="10" width="6" height="11"/></svg>,
                },
              ].map(({ title, desc, href, icon }) => (
                <Link key={title} href={href} className="flex items-start gap-3 group">
                  <span className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}>{icon}</span>
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
          <TiltWrapper className="bg-white rounded-2xl border border-[#e2e8f0] p-5 md:p-7" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
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
                img: '/rcs-desktop-reinstatemenet-cost-assessment.png',
                imgAlt: 'Desktop reinstatement cost assessment service',
                badge: '01. Desktop',
                title: 'Desktop Assessment',
                desc: 'BCIS-indexed rebuild cost modelling delivered within 24 hours. No site visit required. Ideal for standard residential and commercial properties.',
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment',
              },
              {
                img: '/rca-onsite-inspection-surveyor.png',
                imgAlt: 'RICS surveyor conducting an on-site reinstatement cost assessment',
                badge: '02. On-Site',
                title: 'On-Site Survey',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed buildings, heritage properties and complex structures.',
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey',
              },
              {
                img: '/continual-reinstatement-cost-assessment-plan.png',
                imgAlt: '3-Year RICS reinstatement cost assessment protection plan',
                badge: '03. Recommended',
                title: '3-Year Protection Plan',
                desc: 'One instruction covers three years of RICS compliance. Full assessment in year one, annual BCIS-indexed renewal reports delivered before each renewal date.',
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan',
              },
            ].map(({ img, imgAlt, badge, title, desc, href, link }) => (
              <Link key={title} href={href} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform duration-300" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}>
                <div className="relative w-full overflow-hidden" style={{height:'200px'}}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/30 to-transparent" />
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-1">{badge}</p>
                  <h3 className="text-lg md:text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <span className="btn-shine text-center">
                    {link}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}


      <ContactSection heading="Instruct an assessment today." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process."
        items={faqItems}
      />
    </main>
  )
}




















