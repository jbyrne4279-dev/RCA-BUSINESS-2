import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment for Blocks of Flats | RCA Survey',
  description: 'Specialist reinstatement cost assessments for blocks of flats, apartment buildings and mixed-use developments. Accurate rebuild valuations for buildings insurance.',
  alternates: { canonical: '/blocks-of-flats' },
}

const faqItems = [
  { question: 'Why do blocks of flats need a specialist assessment?', answer: 'Blocks of flats contain elements, communal areas, shared services, external fabric, car parks and landscaping, that generic calculators miss or undervalue. A specialist reinstatement cost assessment accounts for all of them in a documented, RICS-regulated output.' },
  { question: 'Who should commission the reinstatement cost assessment for a block of flats?', answer: 'The managing agent, RTM company or freeholder responsible for arranging buildings insurance. Leaseholders may also commission an independent assessment where they have grounds to question the declared value in use.' },
  { question: 'What happens if our block is underinsured?', answer: 'Where the declared value is inadequate and a major claim arises, the insurer applies the average clause and reduces the payout in proportion to the shortfall. Leaseholders may then pursue the party responsible for arranging the insurance.' },
  { question: 'Can you assess converted houses and mansion blocks?', answer: 'Yes. We assess all residential block types: purpose-built flats, converted houses, mansion blocks, mixed-use developments and large residential portfolios.' },
  { question: 'How often should the insurance figure be reviewed?', answer: 'RICS guidance requires annual inflation adjustment and a formal reassessment at least every three years. Our 3-Year Protection plan covers both requirements under a single instruction.' },
]

export default function BlocksOfFlatsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/rca-for-my-property.png" alt="Block of flats reinstatement cost assessment" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Blocks of Flats</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Reinstatement cost assessments for blocks of flats.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Blocks of flats require a rigorous approach. One incorrect insurance figure exposes every leaseholder in the building. Our assessments establish a documented, RICS-aligned sum insured for apartment buildings, mixed-use blocks and developments with shared areas.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-xl">
            <Image src="/rca-for-my-property-london-rebuild.png" alt="London block of flats, reinstatement cost assessment" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* WHY BLOCKS NEED SPECIALIST WORK */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Blocks are more complex than they look.
            </h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'Communal areas matter.', desc: 'Entrance halls, stairwells, lifts, plant rooms and shared lobbies form part of the rebuild cost. Generic estimates routinely miss or undervalue these elements.' },
              { title: 'Shared services add up.', desc: 'Heating systems, drainage, telecommunications infrastructure and electrical installations serving the whole block must be included in the declared value.' },
              { title: 'External works count.', desc: 'Car parks, landscaping, bin stores, boundary walls and paths all contribute to the reinstatement cost and must be assessed as part of the building.' },
              { title: 'One figure, many people.', desc: 'Every leaseholder in a block depends on the same insurance figure. An incorrect declared value exposes all of them simultaneously.' },
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

      {/* PROPERTY TYPES */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Purpose-built apartment blocks', desc: 'Modern and traditional flat developments across the UK, assessed to current BCIS construction cost indices.' },
              { title: 'Converted houses', desc: 'Victorian and Edwardian houses converted into flats. Shared areas, services and original fabric all require assessment.' },
              { title: 'Mansion blocks', desc: 'Large-scale residential buildings with multiple units and extensive communal facilities.' },
              { title: 'Mixed-use developments', desc: 'Buildings with residential flats above commercial or retail premises, assessed as a single instruction.' },
              { title: 'Leasehold estates', desc: 'Multiple buildings on a single estate under common management or ownership, with a consolidated portfolio schedule.' },
              { title: 'Portfolio instructions', desc: 'Multiple blocks assessed under a single instruction. Individual reports per property with a portfolio summary schedule.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RISK */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Risk of Underinsurance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              What happens when the figure is wrong.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Where the building is underinsured at the point of a major claim, the insurer applies the average clause and reduces the payout in proportion to the degree of underinsurance. In a block of flats, that shortfall falls across every leaseholder covered by the policy.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Managing agents, RTM companies and freeholders responsible for arranging cover face direct liability exposure to leaseholders for any unrecovered loss. A specialist reinstatement cost assessment provides the documented, professionally accountable basis that satisfies the lease obligation.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { n: '80%', label: 'of UK blocks estimated to carry an inaccurate sum insured' },
              { n: '30%', label: 'rise in UK construction costs between 2020 and 2024' },
              { n: '3 yrs', label: 'RICS recommended review period for a formal assessment' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-white rounded-xl border border-[#dadce0] p-6 flex items-center gap-6">
                <p className="text-4xl font-bold text-[#202124] leading-none shrink-0 w-24">{n}</p>
                <p className="text-[#5f6368] text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD INSTRUCT */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Who Should Instruct</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-6">
            Suitable for managing agents, RTM companies, freeholders and leaseholders.
          </h2>
          <p className="text-[#5f6368] text-lg leading-relaxed mb-10">
            Appropriate for routine portfolio reviews, new management instructions, refinancing support and buildings insurance renewals. Where the current insurance figure is based on an inherited estimate, an online calculator or has not been formally reviewed in three or more years, the exposure is material and should be addressed at the next opportunity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#contact-form" className="btn-shine">Book an Assessment</Link>
            <Link href="/managing-agents-insurance-valuations" className="btn-ghost">Managing Agents</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate reinstatement cost for your block." />
      <FaqSection description="Common questions about reinstatement cost assessments for blocks of flats." items={faqItems} />
    </main>
  )
}
