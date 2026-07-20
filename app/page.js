import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import TiltCard from './components/TiltCard'
import TiltWrapper from './components/TiltWrapper'
import TrustStrip from './components/TrustStrip'

export const metadata = {
  title: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
  description: 'RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 24 hours. Trusted by managing agents, freeholders and portfolio landlords.',
  keywords: ['Reinstatement Cost Assessment', 'RICS Reinstatement Cost Assessment', 'rebuild cost assessment', 'Reinstatement Cost Assessment UK', 'rebuild cost assessment UK', 'RICS rebuild cost assessment', 'building insurance valuation UK', 'buildings insurance reinstatement cost', 'declared value buildings insurance'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | Stearling Reinstatement',
    description: '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment for managing agents, freeholders and leaseholders, delivered in 24 hours.',
    url: 'https://stearlingreinstatement.com',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'RICS Reinstatement Cost Assessment London' }],
  },
}

const faqItems = [
  { question: 'What is a Reinstatement Cost Assessment?', answer: 'A Reinstatement Cost Assessment (RCA) also called a rebuild cost assessment is a formal RICS-regulated calculation of the full cost to rebuild a property from scratch for buildings insurance purposes. It covers demolition and site clearance, structure, finishes, communal areas, professional fees, statutory fees, and VAT where applicable. It is not the same as market value, and only a current Reinstatement Cost Assessment produces a defensible declared value for your insurer.' },
  { question: 'What is the difference between a Reinstatement Cost Assessment and a rebuild cost assessment?', answer: 'The terms are used interchangeably throughout the UK insurance market. A Reinstatement Cost Assessment and a rebuild cost assessment both refer to the same RICS-regulated exercise: calculating the full cost to rebuild a property for buildings insurance purposes. At Stearling Reinstatement we use both terms the formal RICS standard is the same whichever name is used.' },
  { question: 'How is reinstatement cost different from market value?', answer: 'Market value is what a buyer would pay on the open market. Reinstatement cost or rebuild cost is what it costs to reconstruct the building from cleared ground. In many locations they diverge significantly: a central-London flat may be worth £800,000 on the market but cost £350,000 to rebuild. Insuring at market value causes over-insurance and inflated premiums; insuring below true reinstatement cost triggers the average clause on every claim.' },
  { question: 'How often should a Reinstatement Cost Assessment be updated?', answer: 'RICS guidance requires a formal rebuild cost assessment at least every three years, with annual BCIS-indexed inflation adjustment in the intervening years. Where a building has been extended, altered or significantly refurbished or where no formal Reinstatement Cost Assessment has been carried out since before 2020 a fresh assessment should be commissioned before the next renewal.' },
  { question: 'Why do managing agents and RTM companies need a Reinstatement Cost Assessment?', answer: 'Managing agents and RTM companies that arrange buildings insurance for blocks carry a direct legal obligation to insure to full reinstatement cost. Where the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout and the managing agent or RTM can face a professional negligence claim from leaseholders for the shortfall. A current RICS-regulated Reinstatement Cost Assessment is the documented evidence that the obligation was properly discharged.' },
  { question: 'What happens if a building is underinsured?', answer: 'The insurer applies the condition of average and reduces every claim payout proportionally. If a building\'s true rebuild cost is £2m but it is insured for £1.4m, a £200,000 claim pays out only £140,000. Leaseholders can pursue the party responsible for arranging insurance for any unrecovered loss. A current Reinstatement Cost Assessment is the primary protection against this outcome.' },
  { question: 'What areas does Stearling Reinstatement cover?', answer: 'We provide Reinstatement Cost Assessments and rebuild cost assessments across the whole of the UK. Desktop assessments are available for any property nationally, typically delivered within 24 hours. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
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
        description: 'RICS-regulated Reinstatement Cost Assessments for managing agents, freeholders, leaseholders and property professionals across the UK.',
        inLanguage: 'en-GB',
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO - hook + primary CTA */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              Specialist <span className="blue-keyword">Reinstatement Cost Assessments</span> for UK property.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Specialist Reinstatement Cost Assessments from RICS Certified Surveyors for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports in <span className="glow-24">24 hours</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
              <Link href="/services" className="btn-ghost">View Services</Link>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Image src="/rics-logo.png" alt="RICS Regulated" width={90} height={60} className="h-8 w-auto object-contain" />
              <p className="text-xs text-[#94a3b8]">RICS-regulated assessments you can rely on.</p>
            </div>
          </div>

          {/* Hero image */}
          <div className="hero-img-pulse hidden sm:block relative rounded-3xl overflow-hidden sm:h-64 md:h-96 lg:h-[520px]">
            <Image
              src="/AdobeStock_1956380728.jpeg"
              alt="Reinstatement Cost Assessment property"
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

      {/* 2. TRUST STRIP - immediate credibility */}
      <TrustStrip />

      {/* 3. WHY IT MATTERS - the problem/risk that creates urgency */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
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
              After a total loss, insurers pay to rebuild - not to match market value. Get the declared figure wrong, and the consequences land squarely on you:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'The insurer applies the average clause and cuts your payout in proportion to the shortfall.',
                'Managing agents and freeholders can be held personally liable for the gap.',
                'Market values and online calculators carry no RICS accountability if the figure is ever challenged.',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{background:'#0057FF'}} />
                  <span className="text-[#64748b] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#0d1b3e] text-base font-semibold leading-relaxed mb-8">
              A RICS-regulated Reinstatement Cost Assessment is the only defensible basis for the buildings sum insured.
            </p>
            <Link href="/services" className="link-arrow cta-flash">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO WE HELP - relevance to the visitor + how the process works */}
      <section className="py-16 md:py-28 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <span className="badge badge-blue mb-5">Who We Help</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-4">
              Who needs a <span className="blue-keyword">Reinstatement Cost Assessment</span>?
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed">
              One practice, one specialisation - every instruction delivered as a RICS-regulated Reinstatement Cost Assessment.
            </p>
          </div>

          {/* Audience cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 md:mb-24">
            {[
              {
                title: 'Managing Agents & RTM Companies',
                desc: 'Protect your PI file and discharge the lease obligation with a defensible valuation.',
                href: '/managing-agents-insurance-valuations',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                title: 'Freeholders & Leaseholders',
                desc: 'Establish or challenge the sum insured with independent RICS-regulated evidence.',
                href: '/freeholders-leaseholders',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
              },
              {
                title: 'Block Managers & Portfolio Landlords',
                desc: 'Consistent, compliant figures across every block, managed on a rolling cycle.',
                href: '/block-managers-reinstatement-cost-assessments',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="14"/><rect x="9" y="3" width="6" height="18"/><rect x="16" y="10" width="6" height="11"/></svg>,
              },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-[#0057FF]/30 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', textDecoration: 'none' }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-5"
                  style={{ background: 'linear-gradient(135deg,#0057FF,#0040CC)', boxShadow: '0 6px 18px rgba(0,87,255,0.3)' }}
                >
                  {icon}
                </span>
                <p className="text-base font-semibold text-[#0d1b3e] mb-2 group-hover:text-[#0057FF] transition-colors">{title}</p>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">{desc}</p>
                <span className="link-arrow !text-xs">Learn more</span>
              </Link>
            ))}
          </div>

          {/* Assessment process - horizontal timeline */}
          <TiltWrapper className="rounded-2xl border border-[#e2e8f0] p-8 md:p-12" style={{background:'#f0f4ff', boxShadow:'0 8px 32px rgba(0,87,255,0.06)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest text-center mb-10">Assessment Process</p>
            <div className="relative">
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[#e2e8f0]" />
              <div className="circuit-steps grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {[
                  { n: '01', title: 'Tell us about the building', desc: 'Address, type, approximate GIA and any previous valuation.' },
                  { n: '02', title: 'We confirm scope and fee', desc: 'Desktop or on-site - a fixed fee, agreed upfront.' },
                  { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services and fees - all captured.' },
                  { n: '04', title: 'You receive your report', desc: 'Broker-ready declared value, ready for renewal.' },
                ].map(({ n, title, desc }, i) => (
                  <div key={n} className={`step-light relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center ${i < 3 ? 'pb-6 mb-2 border-b border-[#e2e8f0] md:pb-0 md:mb-0 md:border-b-0 step-has-border' : ''}`}>
                    <span className="circuit-num text-xs font-bold text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{background:'linear-gradient(135deg,#0057FF,#0040CC)', boxShadow:'0 0 14px rgba(0,87,255,0.45)'}}>{n}</span>
                    <div>
                      <p className="step-title text-sm font-semibold text-[#0d1b3e]">{title}</p>
                      <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TiltWrapper>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link href="/contact#contact-form" className="btn-shine">Get Quote</Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES - the solution, once the problem and relevance are established */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">Reinstatement Cost Assessments for <span className="blue-keyword">Every Property Type</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Choose the service that matches your property and compliance deadline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                img: '/rcs-desktop-reinstatemenet-cost-assessment.png',
                imgAlt: 'Desktop Reinstatement Cost Assessment service',
                id: 'desktop-rca',
                badge: '01. Desktop',
                title: 'Desktop Reinstatement Cost Assessment',
                desc: 'BCIS-indexed rebuild cost modelling delivered within 24 hours. No site visit required. Ideal for standard residential and commercial properties.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'BCIS-indexed rebuild cost modelling',
                  'Delivered within 24 hours - no site visit',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment',
                note: 'Listed or non-standard property? An On-Site Survey may be required instead.',
              },
              {
                img: '/rca-onsite-inspection-surveyor.png',
                imgAlt: 'RICS surveyor conducting an on-site Reinstatement Cost Assessment',
                id: 'on-site-survey',
                badge: '02. On-Site',
                title: 'On-Site Rebuild Cost Assessment',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed buildings, heritage properties and complex structures.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'Surveyor attends in person, full measurement',
                  'Required for listed, heritage & complex buildings',
                  'The insurer-preferred option for high-value risk',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey',
                note: 'Managing more than one property? Ask about the 3-Year Protection Plan.',
              },
              {
                img: '/continual-reinstatement-cost-assessment-plan.png',
                imgAlt: '3-Year RICS Reinstatement Cost Assessment protection plan',
                id: 'three-year-protection',
                badge: '03. Recommended',
                title: '3-Year Reinstatement Cost Assessment Plan',
                desc: 'One instruction covers three years of RICS compliance. Full Reinstatement Cost Assessment in year one, annual BCIS-indexed renewal reports delivered before each renewal date.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'Full assessment year one, indexed updates years two & three',
                  'One instruction, one invoice - no re-instructing',
                  'The preferred choice for agents & portfolio landlords',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan',
                note: 'Saves the cost and admin of re-instructing every year.',
                highlight: true,
              },
            ].map(({ img, imgAlt, id, badge, title, desc, features, href, link, note, highlight }) => (
              <Link
                key={title}
                id={id}
                href={href}
                className={`relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform duration-300 ${highlight ? 'border-2 border-[#0057FF]' : 'border border-[#e2e8f0]'}`}
                style={{boxShadow: highlight ? '0 10px 32px rgba(0,87,255,0.20)' : '0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}
              >
                {highlight && (
                  <span
                    className="best-value-pill absolute top-3 right-3 z-10 text-xs font-bold uppercase tracking-wide text-white px-4 py-1.5 rounded-full"
                    style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}
                  >
                    Best Value
                  </span>
                )}
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
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide">{badge}</p>
                    <span className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-[9px] font-semibold text-[#0d1b3e]/60 uppercase tracking-wide whitespace-nowrap">RICS Regulated</span>
                      <Image src="/rics-logo.png" alt="RICS" width={36} height={24} className="object-contain" />
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg className="mt-0.5 shrink-0 text-[#0057FF]" width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                        <span className="text-[#64748b] text-xs leading-relaxed">
                          {f.startsWith('Accepted') ? (
                            <><span className="cta-flash font-semibold">Accepted</span>{f.slice(8)}</>
                          ) : f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="btn-shine text-center mt-auto">
                    {link}
                  </span>
                  {note && <p className="text-[11px] text-[#94a3b8] leading-relaxed mt-3 text-center">{note}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT FORM - the conversion goal */}
      <ContactSection heading="Instruct an assessment today." flip />

      {/* 7. FAQ - handle remaining objections, last thing before the footer */}
      <FaqSection
        description="Technical questions on Reinstatement Cost Assessments, underinsurance exposure, and our working process."
        items={faqItems}
        flip
      />
    </main>
  )
}
