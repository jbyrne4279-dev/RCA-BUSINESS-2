import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Property Investors | Blocks of Flats',
  description: 'Specialist reinstatement cost assessments for property investors and block owners. The number you\'re insured for is almost certainly wrong, and the average clause means the shortfall comes out of your pocket.',
  alternates: { canonical: '/blocks-of-flats' },
}

const faqItems = [
  { question: 'Why are blocks of flats the most commonly underinsured property type?', answer: 'Blocks carry costs that generic calculators miss entirely - communal areas, lifts, shared services, external fabric, professional fees and VAT on partial-damage repairs. When multiple leaseholders share the building under one insurance policy, a wrong declared value puts every one of them at risk simultaneously.' },
  { question: 'What is the average clause and how does it affect leaseholders?', answer: 'If the declared value is inadequate at claim time, the insurer reduces every payout in proportion to the shortfall. A block insured for 70% of its true rebuild cost has every claim paid at 70p in the pound - a partial escape-of-water claim as much as a total loss. Every leaseholder in the building carries that risk, not just the freeholder.' },
  { question: 'What is the VAT position for a block owner?', answer: 'Most freeholders and residential landlords are not VAT-registered and cannot recover VAT. Demolition, professional fees and partial-damage repairs all attract 20% VAT and must be included in the declared value - leave VAT out and the figure is roughly 20% short before a claim even starts. Mixed-use blocks are more complex: residential flats zero-rate on a full rebuild, but commercial units are standard-rated.' },
  { question: 'Could my block be over-insured rather than under-insured?', answer: 'Yes, particularly for central-London blocks where market value far exceeds rebuild cost. A block with a £4m rebuild can command £10m or more on the open market - owners insuring toward market value pay inflated premiums every year. A reinstatement cost assessment right-sizes the figure in both directions.' },
  { question: 'Can managing agents instruct an assessment on behalf of the freeholder?', answer: 'Yes. We regularly work with managing agents, RTM companies and resident management companies. If you manage multiple blocks, our portfolio service covers all properties under a single instruction - see our portfolio page for details.' },
  { question: 'How often should the insurance figure be reviewed?', answer: 'RICS guidance requires annual inflation adjustment and a formal reassessment at least every three years. Our 3-Year Protection plan covers both requirements under a single instruction, keeping the block compliant without the need to re-instruct each cycle.' },
]

export default function BlocksOfFlatsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-16 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="badge badge-blue">Blocks of Flats</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              Specialist assessments for every block type.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              When a block is underinsured, the average clause reduces every claim — and every leaseholder shares the consequence. A specialist assessment establishes the correct declared value and protects all parties under the policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(10,181,168,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image src="/AdobeStock_208633670.jpeg" alt="London block of flats, reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Specialist reinstatement cost assessments for blocks of flats across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A — Why block assessments are complex */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Why block assessments are complex.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              Blocks of flats involve cost elements that generic calculators and market-value approaches overlook entirely. Shared structures, communal services and leaseholder obligations create a unique risk profile that requires specialist assessment.
            </p>
            <ul className="space-y-3 text-[#64748b] text-sm leading-relaxed">
              <li className="flex gap-3 items-start">
                <span className="text-[#0ab5a8] font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-[#0d1b3e]">Shared structures</strong> — external fabric, roof, foundations and structural elements shared between all leaseholders must be valued at full rebuild cost, not apportioned.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#0ab5a8] font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-[#0d1b3e]">Communal services</strong> — lifts, boiler plant, communal lighting, entry systems and shared M&amp;E infrastructure all carry reinstatement costs that generic tools miss.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[#0ab5a8] font-bold shrink-0 mt-0.5">✓</span>
                <span><strong className="text-[#0d1b3e]">Leaseholder obligations</strong> — a wrong declared value triggers the average clause and reduces every leaseholder's claim, not just the freeholder's. The legal exposure falls on whoever arranged the insurance.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 4px 24px rgba(10,181,168,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-6">What's Included in a Block Assessment</p>
            <ul className="space-y-4">
              {[
                'Full structural reinstatement cost — walls, roof, foundations, external fabric',
                'Communal areas and shared circulation space',
                'Lifts, plant rooms and shared M&E services',
                'Professional fees — architects, engineers, project managers',
                'Demolition and site clearance costs',
                'VAT correctly applied to each element',
                'BCIS-indexed figure with annual uplift schedule',
                'Broker-ready report in 24 hours',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[#0ab5a8] font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-[#475569] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
              <Link href="/contact#contact-form" className="btn-shine w-full text-center block">Request a Block Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0faf9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Purpose-built apartment blocks', desc: 'Modern and traditional flat developments across the UK, assessed to current BCIS construction cost indices.', href: '/contact', img: '/AdobeStock_208633670.jpeg' },
              { title: 'Converted houses', desc: 'Victorian and Edwardian houses converted into flats. Shared areas, services and original fabric all require assessment.', href: '/contact', img: '/AdobeStock_258095379.jpeg' },
              { title: 'Mansion blocks', desc: 'Large-scale residential buildings with multiple units and extensive communal facilities.', href: '/contact', img: '/AdobeStock_1477785304.jpeg' },
              { title: 'Mixed-use developments', desc: 'Buildings with residential flats above commercial or retail premises. Residential and commercial elements itemised separately for correct VAT treatment and service-charge recharging.', href: '/contact', img: '/AdobeStock_1956380728.jpeg' },
              { title: 'Leasehold estates', desc: 'Multiple buildings on a single estate under common management or ownership, with a consolidated portfolio schedule.', href: '/portfolio-reinstatement-assessments', img: '/AdobeStock_544083541.jpeg' },
              { title: 'Portfolio instructions', desc: 'Multiple blocks assessed under a single instruction with individual reports and a consolidated schedule. Staggered scheduling keeps all blocks on a compliant review cycle simultaneously.', href: '/portfolio-reinstatement-assessments', img: '/rebuild-cost-assessment-london.jpeg' },
            ].map(({ title, desc, href, img }) => (
              <div key={title} className="brix-card card-hover">
                <div className="relative h-40 overflow-hidden">
                  <Image src={img} alt={title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-2">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mb-3">{desc}</p>
                  <Link href={href} className="text-[#0ab5a8] text-xs font-semibold hover:text-[#087f7a] transition-colors">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#64748b] text-sm mt-8">Managing multiple blocks? Our <Link href="/portfolio-reinstatement-assessments" className="text-[#0ab5a8] font-semibold hover:text-[#087f7a]">portfolio assessment service</Link> covers all properties under a single instruction with a consolidated compliance schedule.</p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0ab5a8 0%, #087f7a 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-dark mb-4">Protect Every Leaseholder</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Get the right declared value before the next renewal.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              A specialist block assessment takes the guesswork out of the declared value — protecting every leaseholder from an average-clause reduction at claim time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="bg-white text-[#0ab5a8] font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors inline-block text-center">Request an Assessment</Link>
              <Link href="/services" className="border border-white/50 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors inline-block text-center">View All Services</Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <p className="text-white font-semibold text-sm mb-5">When to commission an assessment:</p>
            <ul className="space-y-3">
              {[
                'Declared value based on market value or flat prices',
                'Insurance figure not formally reviewed in 3+ years',
                'Building extended, altered or refurbished since last assessment',
                'Acquiring a block or taking on the insuring obligation',
                'Refinancing or preparing the block for sale',
                'Construction costs have risen since the last review',
              ].map((point) => (
                <li key={point} className="flex gap-3 items-start">
                  <span className="text-white font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-white/85 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate reinstatement cost for your block — and protect every leaseholder in it." />
      <FaqSection description="Common questions about reinstatement cost assessments for blocks of flats." items={faqItems} />
    </main>
  )
}
