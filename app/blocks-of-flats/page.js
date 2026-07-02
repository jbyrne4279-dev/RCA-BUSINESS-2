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
  { question: 'Why do blocks of flats need a specialist assessment?', answer: 'Blocks of flats contain elements that generic calculators miss entirely: communal areas, lifts, shared services, external fabric, curtilage structures and VAT on partial-damage repairs. A specialist reinstatement cost assessment accounts for all of them in a documented, RICS-aligned output.' },
  { question: 'What is the average clause and how does it affect a claim?', answer: 'If the declared value is inadequate at the point of a claim, the insurer applies the average clause and reduces the payout in proportion to the shortfall. A block insured for 70% of its true rebuild cost has every claim reduced by 30%, on a partial loss as much as a total one. The shortfall comes out of the owner\'s pocket. Escape of water and fire are the two most common block claims, and both are typically partial losses where the average clause bites hardest.' },
  { question: 'What is the VAT position for a block owner?', answer: 'Most freeholders and residential landlords are not VAT-registered and cannot recover VAT. Demolition, professional fees and partial-damage repairs all attract 20% VAT and must be included in the declared value. Leave VAT out and the declared value is roughly 20% short before the claim even starts. Mixed-use blocks are more complex: residential flats zero-rate on a full rebuild, but commercial units are standard-rated.' },
  { question: 'Could my block be over-insured rather than under-insured?', answer: 'Yes, particularly for central-London blocks or high-value properties where market value far exceeds rebuild cost. A block with a £4,000,000 rebuild can command £10,000,000 or more on the open market. Owners who insure toward the market value pay inflated premiums every year. A reinstatement cost assessment right-sizes the figure in both directions.' },
  { question: 'Can you assess converted houses and mansion blocks?', answer: 'Yes. We assess all residential block types: purpose-built flats, converted houses, mansion blocks, mixed-use developments and large residential portfolios.' },
  { question: 'How often should the insurance figure be reviewed?', answer: 'RICS guidance requires annual inflation adjustment and a formal reassessment at least every three years. Our 3-Year Protection plan covers both requirements under a single instruction.' },
]

export default function BlocksOfFlatsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/AdobeStock_258095379.jpeg" alt="Block of flats reinstatement cost assessment" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Blocks of Flats</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-5">
              Insured for the market value? Then you're insured for the wrong number.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Rebuild cost for a block of flats bears no relation to market value. One can be double the other in either direction. The average clause means that when the figure is wrong, every claim is reduced pro rata. The shortfall comes out of your pocket. A specialist assessment establishes the correct declared value, in both directions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-xl">
            <Image src="/AdobeStock_208633670.jpeg" alt="London block of flats, reinstatement cost assessment" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* THE AVERAGE CLAUSE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Average Clause</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The average clause is a tax on guessing your rebuild cost.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              If the declared value is too low, every claim is reduced in proportion to the shortfall, on a partial loss as much as a total one. A block insured for 70% of its true rebuild cost has every claim paid at 70 pence in the pound. Escape of water and fire are the two most common block claims. Both are typically partial losses. That is exactly where the average clause bites hardest.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              For regional period blocks in particular, the gap between market value and rebuild cost can be dramatic — a sale price that looks modest can mask a reinstatement cost two or three times higher, once local stone, period specification and heritage contractor rates are properly accounted for.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Market value of a block bears no relation to rebuild cost. A central-London block with a £4,000,000 rebuild cost can command £10,000,000 or more on the open market. The reverse is equally true for converted mills, warehouses and regional stock.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Market value', desc: 'Driven by location, demand and comparable sales. Bears no relation to what the block would cost to demolish, clear and rebuild. Frequently double or half the rebuild figure.', ok: false },
              { label: 'Aggregated flat values', desc: 'What the individual flats are worth. Not what the building costs to rebuild. One of the most common sources of a wrong declared value.', ok: false },
              { label: 'Specialist reinstatement cost assessment', desc: 'The actual cost to demolish, clear and rebuild: structure, communal areas, professional fees, VAT where applicable. The only correct basis for the declared value.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`ls-card p-6 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : ''}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#dadce0]'}`}>{ok ? '✓' : '✕'}</span>
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
              Four costs that most block owners don't know they're missing.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Each one independently creates underinsurance. Together they explain why the majority of UK blocks are estimated to carry an inaccurate declared value.
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

      {/* THE RISK — STATS */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-blue">You Might Also Be Overpaying</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The reinstatement cost assessment works in both directions.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Underinsurance is the more common problem, but block owners who have rolled forward a high sum insured based on market value, or who own a central-London block where market value far exceeds rebuild cost, may be paying inflated premiums every year on a figure that is too high.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              A specialist assessment right-sizes the declared value. If the correct figure is lower than what you're currently insured for, the annual premium saving typically recovers the cost of the assessment within the first renewal cycle.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { to: 3, suffix: '×', label: 'a typical gap between market value and rebuild cost on regional period blocks, where a £300,000 sale price can mask a £900,000 reinstatement cost' },
              { to: 3, suffix: ' yrs', label: 'RICS recommended maximum review period for a formal reassessment' },
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
              { title: 'Purpose-built apartment blocks', desc: 'Modern and traditional flat developments across the UK, assessed to current BCIS construction cost indices.' },
              { title: 'Converted houses', desc: 'Victorian and Edwardian houses converted into flats. Shared areas, services and original fabric all require assessment.' },
              { title: 'Mansion blocks', desc: 'Large-scale residential buildings with multiple units and extensive communal facilities.' },
              { title: 'Mixed-use developments', desc: 'Buildings with residential flats above commercial or retail premises. Residential and commercial elements itemised separately for correct VAT treatment and service-charge recharging.' },
              { title: 'Leasehold estates', desc: 'Multiple buildings on a single estate under common management or ownership, with a consolidated portfolio schedule.' },
              { title: 'Portfolio instructions', desc: 'Multiple blocks assessed under a single instruction. Individual reports per property with a portfolio summary schedule and staggered scheduling.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
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
              Any of the following creates a material risk that the current declared value is wrong, in either direction. Each one warrants a formal reassessment before the next renewal.
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

      <ContactSection heading="Get an accurate reinstatement cost for your block." />
      <FaqSection description="Common questions about reinstatement cost assessments for blocks of flats." items={faqItems} />
    </main>
  )
}
