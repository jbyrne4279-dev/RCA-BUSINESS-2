import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TiltWrapper from '../components/TiltWrapper'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import FlashList from '../components/FlashList'

export const metadata = {
  title: 'Reinstatement Cost Assessment for Blocks of Flats | RICS Regulated',
  description: 'Specialist RICS reinstatement cost assessments for blocks of flats. Accurate rebuild cost assessment for buildings insurance — protect every leaseholder from the average clause.',
  alternates: { canonical: '/blocks-of-flats' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/blocks-of-flats',
    siteName: 'Stearling Reinstatement',
    title: 'Reinstatement Cost Assessments for Blocks of Flats | Stearling Reinstatement',
    description: 'Specialist RICS-regulated reinstatement cost assessments for blocks of flats. Protect every leaseholder from the average clause with an accurate declared value.',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'Reinstatement cost assessment for blocks of flats - Stearling Reinstatement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinstatement Cost Assessments for Blocks of Flats | Stearling Reinstatement',
    description: 'Specialist RICS-regulated reinstatement cost assessments for blocks of flats. Protect every leaseholder from the average clause.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
}

const faqItems = [
  { question: 'Why do blocks of flats need a specialist reinstatement cost assessment?', answer: 'Blocks of flats carry rebuild costs that generic online calculators miss entirely — communal areas, lifts, shared services, external fabric, professional fees, and VAT on partial-damage repairs. A RICS-regulated reinstatement cost assessment captures every cost layer specific to your block. When multiple leaseholders share one insurance policy, a wrong declared value puts every one of them at risk simultaneously.' },
  { question: 'What is the average clause and how does it affect leaseholders in a block?', answer: 'If the declared value in a buildings insurance policy is inadequate at claim time, the insurer applies the average clause and reduces every payout proportionally. A block insured for 70% of its true reinstatement cost has every claim — escape of water, fire, subsidence — paid at 70p in the pound. An up-to-date reinstatement cost assessment (rebuild cost assessment) is the primary protection against this.' },
  { question: 'What does a reinstatement cost assessment for a block of flats include?', answer: 'A RICS-regulated reinstatement cost assessment for a block covers demolition and site clearance, structure, external envelope, communal areas, lifts, building services, professional fees, statutory fees, and VAT where applicable. It produces a single declared value covering the full cost of rebuilding the block from cleared ground — the figure your insurer needs at renewal.' },
  { question: 'Could my block be over-insured rather than underinsured?', answer: 'Yes, particularly for central-London blocks where market value substantially exceeds reinstatement cost. Owners insuring toward market value pay inflated premiums every year for unnecessary cover. A professional reinstatement cost assessment right-sizes the declared value in both directions, removing overpayment as well as underinsurance risk.' },
  { question: 'Can a managing agent commission a reinstatement cost assessment on behalf of the freeholder?', answer: 'Yes. We regularly work with managing agents, RTM companies and resident management companies commissioning reinstatement cost assessments on behalf of freeholders. If you manage multiple blocks, our portfolio reinstatement cost assessment service covers every property under a single instruction with a consolidated summary schedule.' },
  { question: 'How often should the rebuild cost assessment for a block of flats be updated?', answer: 'RICS guidance requires a formal reinstatement cost assessment at least every three years, with annual BCIS-indexed inflation adjustment in between. Our 3-Year Protection Plan covers both requirements under one instruction — full reinstatement cost assessment in year one, indexed rebuild cost updates before each renewal, no re-instructing required.' },
]

export default function BlocksOfFlatsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blocks of Flats', item: 'https://stearlingreinstatement.com/blocks-of-flats' },
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              <span className="blue-keyword">Specialist assessments</span> for every block type.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              When a block is underinsured, the average clause reduces every claim – and every leaseholder shares the consequence. A specialist assessment establishes the correct declared value and protects all parties under the policy.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image src="/AdobeStock_208633670.jpeg" alt="London block of flats, reinstatement cost assessment" fill className="object-cover" priority />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Specialist reinstatement cost assessments for blocks of flats across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A - Why block assessments are complex */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="badge badge-blue">Blocks of Flats</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Why block assessments are <span className="blue-keyword">complex</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              Blocks of flats involve cost elements that generic calculators and market-value approaches overlook entirely. Shared structures, communal services and leaseholder obligations create a unique risk profile that requires specialist assessment.
            </p>
            <ul className="space-y-5 text-[#64748b] text-sm leading-relaxed">
              {[
                { num: '01', label: 'Shared structures', desc: 'External fabric, roof, foundations and structural elements shared between all leaseholders must be valued at full rebuild cost, not apportioned.' },
                { num: '02', label: 'Communal services', desc: 'Lifts, boiler plant, communal lighting, entry systems and shared M&E infrastructure all carry reinstatement costs that generic tools miss.' },
                { num: '03', label: 'Leaseholder obligations', desc: "A wrong declared value triggers the average clause and reduces every leaseholder's claim, not just the freeholder's. The legal exposure falls on whoever arranged the insurance." },
              ].map(({ num, label, desc }) => (
                <li key={num} className="flex gap-4 items-start step-reveal-item">
                  <span className="text-xs font-bold text-[#0057FF] shrink-0 mt-0.5 w-6 text-right">{num}</span>
                  <span><strong className="text-[#0d1b3e]">{label}</strong>: {desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <TiltWrapper className="bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 4px 24px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-6">What's Included in a Block Assessment</p>
            <FlashList items={[
              'Full structural reinstatement cost - walls, roof, foundations, external fabric',
              'Communal areas and shared circulation space',
              'Lifts, plant rooms and shared M&E services',
              'Professional fees - architects, engineers, project managers',
              'Demolition and site clearance costs',
              'VAT correctly applied to each element',
              'BCIS-indexed figure with annual uplift schedule',
              'Broker-ready report in 24 hours',
            ]} />
            <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
              <Link href="/contact#contact-form" className="btn-shine w-full text-center block">Request a Block Assessment</Link>
            </div>
          </TiltWrapper>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0f4ff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Blocks of Flats</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              What we <span className="blue-keyword">assess</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Purpose-built apartment blocks', desc: 'Modern and traditional flat developments across the UK, assessed to current BCIS construction cost indices.', href: '/contact', img: '/AdobeStock_258095379.jpeg' },
              { title: 'Converted houses', desc: 'Victorian and Edwardian houses converted into flats. Shared areas, services and original fabric all require assessment.', href: '/contact', img: '/AdobeStock_763906298.jpeg' },
              { title: 'Mansion blocks', desc: 'Large-scale residential buildings with multiple units and extensive communal facilities.', href: '/contact', img: '/AdobeStock_208633670.jpeg' },
              { title: 'Mixed-use developments', desc: 'Buildings with residential flats above commercial or retail premises. Residential and commercial elements itemised separately for correct VAT treatment and service-charge recharging.', href: '/contact', img: '/AdobeStock_270155966.jpeg' },
              { title: 'Leasehold estates', desc: 'Multiple buildings on a single estate under common management or ownership, with a consolidated portfolio schedule.', href: '/portfolio-reinstatement-assessments', img: '/AdobeStock_1477785304.jpeg' },
              { title: 'Portfolio instructions', desc: 'Multiple blocks assessed under a single instruction with individual reports and a consolidated schedule. Staggered scheduling keeps all blocks on a compliant review cycle simultaneously.', href: '/portfolio-reinstatement-assessments', img: '/AdobeStock_1064771096.jpeg' },
            ].map(({ title, desc, href, img }) => (
              <Link key={title} href={href} className="brix-card card-hover" style={{textDecoration:'none', display:'block'}}>
                <div className="relative h-40 overflow-hidden">
                  <Image src={img} alt={title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-2">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mb-3">{desc}</p>
                  <span className="link-arrow cta-flash !text-xs">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-[#64748b] text-sm mt-8">Managing multiple blocks? Our <Link href="/portfolio-reinstatement-assessments" className="text-[#0057FF] font-semibold hover:text-[#0040CC]">portfolio assessment service</Link> covers all properties under a single instruction with a consolidated compliance schedule.</p>
        </div>
      </section>



      {/* SERVICES */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">Reinstatement Cost Assessments for <span className="blue-keyword">Every Property Type</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Choose the service that matches your property and compliance deadline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: '/rcs-desktop-reinstatemenet-cost-assessment.png',
                imgAlt: 'Desktop reinstatement cost assessment service',
                badge: '01. Desktop',
                title: 'Desktop Reinstatement Cost Assessment',
                desc: 'BCIS-indexed rebuild cost modelling delivered within 24 hours. No site visit required. Ideal for standard residential and commercial properties.',
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment',
              },
              {
                img: '/rca-onsite-inspection-surveyor.png',
                imgAlt: 'RICS surveyor conducting an on-site reinstatement cost assessment',
                badge: '02. On-Site',
                title: 'On-Site Rebuild Cost Assessment',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed buildings, heritage properties and complex structures.',
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey',
              },
              {
                img: '/continual-reinstatement-cost-assessment-plan.png',
                imgAlt: '3-Year RICS reinstatement cost assessment protection plan',
                badge: '03. Recommended',
                title: '3-Year Reinstatement Cost Assessment Plan',
                desc: 'One instruction covers three years of RICS compliance. Full reinstatement cost assessment in year one, annual BCIS-indexed renewal reports delivered before each renewal date.',
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan',
              },
            ].map(({ img, imgAlt, badge, title, desc, href, link }) => (
              <Link key={title} href={href} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform duration-300" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}>
                <div className="relative w-full overflow-hidden" style={{height:'200px'}}>
                  <Image src={img} alt={imgAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/30 to-transparent" />
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-1">{badge}</p>
                  <h3 className="text-lg md:text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                  <span className="btn-shine text-center">{link}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate reinstatement cost for your block and protect every leaseholder in it." />
      <FaqSection description="Common questions about reinstatement cost assessments for blocks of flats." items={faqItems} />
    </main>
  )
}



















