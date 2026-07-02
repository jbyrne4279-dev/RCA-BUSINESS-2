import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import CountUp from '../components/CountUp'

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
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Blocks of Flats</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              The most commonly underinsured property type in the UK.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              When a block is underinsured, the average clause reduces every claim - and every leaseholder shares the consequence. A specialist assessment establishes the correct declared value and protects all parties under the policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image src="/AdobeStock_208633670.jpeg" alt="London block of flats, reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Specialist reinstatement cost assessments for blocks of flats across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE AVERAGE CLAUSE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Average Clause</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A wrong declared value reduces every leaseholder's claim - not just the freeholder's.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              The average clause bites on partial losses as well as total ones. Escape of water and fire - the two most common block claims - are nearly always partial losses, and both are paid at a reduced rate if the declared value is inadequate.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Market value bears no relation to rebuild cost. A central-London block with a £4m rebuild can command £10m or more; the reverse is equally true for converted mills and regional stock. Insuring for the wrong figure in either direction carries a cost.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Market value', desc: 'Driven by location, demand and comparable sales. Bears no relation to what the block would cost to demolish, clear and rebuild. Frequently double or half the rebuild figure.', ok: false },
              { label: 'Aggregated flat values', desc: 'What the individual flats are worth. Not what the building costs to rebuild. One of the most common sources of a wrong declared value.', ok: false },
              { label: 'Specialist reinstatement cost assessment', desc: 'The actual cost to demolish, clear and rebuild: structure, communal areas, professional fees, VAT where applicable. The only correct basis for the declared value.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`ls-card p-6 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : ''}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{label}</p>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR COSTS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="badge badge-blue">What Gets Missed</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Four costs that put blocks in deficit before a claim is even made.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Each one independently creates underinsurance - and most blocks carry more than one. Managing agents: our <Link href="/managing-agents-insurance-valuations" className="text-[#1a73e8] hover:text-[#1254b5]">managing agents service</Link> is designed for your reporting and compliance requirements.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'VAT you cannot claim back.', desc: 'Most block owners are not VAT-registered and cannot recover VAT. Demolition, professional fees and partial-damage repairs all attract 20% VAT and must be built into the declared value. Leave VAT out and the figure is roughly 20% short before a claim even starts. For mixed-use blocks, the commercial units are standard-rated even when the residential flats zero-rate on a full rebuild.' },
              { title: 'Communal areas, lifts and shared services.', desc: 'Entrance halls, stairwells, lifts, plant rooms, shared M&E, communal heating and building-management networks all form part of the rebuild cost. Generic calculators and inherited estimates routinely miss or undervalue every one of them.' },
              { title: 'Professional fees and demolition.', desc: 'Architect (8–12%), structural engineer (2–4%) and quantity surveyor (2–3%) fees typically add 15–20% to the base rebuild cost, before demolition, site clearance and party-wall shoring. These are frequently omitted from desktop figures.' },
              { title: 'Loss of rent during reinstatement.', desc: 'A major loss on a block means 12–24 months of reinstatement and no rental income. Loss-of-rent and alternative-accommodation cover is calculated off the same figures the reinstatement cost assessment underpins An under-scoped valuation undercuts both the rebuild cover and the income protection.' },
            ].map(({ title, desc }) => (
              <div key={title} className="py-8 flex gap-6">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <div>
                  <h3 className="font-semibold text-[#202124] text-sm mb-2">{title}</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RISK - STATS */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-blue">You Might Also Be Overpaying</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              An accurate figure protects leaseholders and can reduce the freeholder's premium.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Block owners insuring toward market value may be paying inflated premiums on a figure that is too high. A specialist assessment right-sizes the declared value - if it comes in lower, the premium saving typically recovers the assessment cost within the first renewal.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { to: 3, suffix: '×', label: 'a typical gap between market value and rebuild cost on regional period blocks, where a £300,000 sale price can mask a £900,000 reinstatement cost' },
              { to: 3, suffix: ' yrs', label: 'RICS recommended maximum review period for a formal reassessment - our 3-Year Protection plan covers both the initial assessment and the annual index reviews under a single instruction' },
            ].map(({ to, suffix, label }) => (
              <div key={label} className="stat-card p-6 flex items-center gap-6">
                <p className="text-4xl font-bold text-[#202124] leading-none shrink-0 w-24">
                  <CountUp to={to} suffix={suffix} />
                </p>
                <p className="text-[#5f6368] text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Purpose-built apartment blocks', desc: 'Modern and traditional flat developments across the UK, assessed to current BCIS construction cost indices.', href: '/contact' },
              { title: 'Converted houses', desc: 'Victorian and Edwardian houses converted into flats. Shared areas, services and original fabric all require assessment.', href: '/contact' },
              { title: 'Mansion blocks', desc: 'Large-scale residential buildings with multiple units and extensive communal facilities.', href: '/contact' },
              { title: 'Mixed-use developments', desc: 'Buildings with residential flats above commercial or retail premises. Residential and commercial elements itemised separately for correct VAT treatment and service-charge recharging.', href: '/contact' },
              { title: 'Leasehold estates', desc: 'Multiple buildings on a single estate under common management or ownership, with a consolidated portfolio schedule.', href: '/portfolio-reinstatement-assessments' },
              { title: 'Portfolio instructions', desc: 'Multiple blocks assessed under a single instruction with individual reports and a consolidated schedule. Staggered scheduling keeps all blocks on a compliant review cycle simultaneously.', href: '/portfolio-reinstatement-assessments' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'#f1f3f9'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#9aa7bd" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed mb-3">{desc}</p>
                  <Link href={href} className="text-[#1a73e8] text-xs font-semibold hover:text-[#1254b5] transition-colors">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#5f6368] text-sm mt-8">Managing multiple blocks? Our <Link href="/portfolio-reinstatement-assessments" className="text-[#1a73e8] font-semibold hover:text-[#1254b5]">portfolio assessment service</Link> covers all properties under a single instruction with a consolidated compliance schedule.</p>
        </div>
      </section>

      {/* WHEN TO INSTRUCT */}
      <section className="bg-[#1a73e8] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-dark">When to Act</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              When should you commission an assessment?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Any of the following warrants a formal reassessment before the next renewal - acting early protects every leaseholder in the building.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'The declared value is based on market value, aggregated flat prices or an online calculator.',
              'The insurance figure has not been formally reviewed in three or more years.',
              'Construction costs have risen substantially since the last assessment.',
              'The building has been extended, altered or refurbished since the last assessment.',
              'You are acquiring a block or taking on the insuring obligation for the first time.',
              'You are refinancing or preparing the block for sale and need a clean valuation in the data room.',
            ].map((point, i) => (
              <div key={i} className="ls-card p-6 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 mt-0.5 tick-glow">✓</span>
                <p className="text-[#3c4043] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Book an Assessment</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate reinstatement cost for your block - and protect every leaseholder in it." />
      <FaqSection description="Common questions about reinstatement cost assessments for blocks of flats." items={faqItems} />
    </main>
  )
}
