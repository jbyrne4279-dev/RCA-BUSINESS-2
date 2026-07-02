import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Freeholders and Leaseholders',
  description: 'Specialist reinstatement cost assessments for freeholders, RMC directors and leaseholders. Discharge your lease obligation with a defensible, RICS-aligned declared value.',
  alternates: { canonical: '/freeholders-leaseholders' },
}

const faqItems = [
  { question: 'What is the difference between Declared Value and Sum Insured?', answer: 'The Declared Value (DV) is the full reinstatement figure your reinstatement cost assessment produces: the day-one rebuild cost. The Sum Insured (SI) is set by the insurer and equals the DV plus an inflation provision, typically a 20–50% uplift. A DV of £5m typically produces an SI of around £6.5m after a 30% uplift. Freeholders only need to establish the correct DV. The inflation provision is the insurer\'s job. Misreading the higher SI as "over-insurance" and under-declaring the DV is a common and costly error.' },
  { question: 'Who is legally responsible for insuring to the correct reinstatement cost?', answer: 'The lease governs this. Most long leases place the obligation to insure to full reinstatement cost on the freeholder, RMC or RTM company, or the managing agent acting on their behalf. Many insurers also require a professional reinstatement cost assessment for buildings with a declared value above £600,000. The person or company that holds the insuring obligation carries the underinsurance liability.' },
  { question: 'How does the average clause affect a freeholder\'s position?', answer: 'If the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout in proportion to the shortfall. A block insured for £1m against a true rebuild cost of £1.5m is covered for 67%, so a £300,000 claim is paid at £200,000. In larger cases the loss adjuster will scrutinise the DV, and the freeholder or RMC director may face a negligence claim from leaseholders for the unrecovered loss.' },
  { question: 'What is the VAT position for a freeholder?', answer: 'Most freeholders and residential landlords are not VAT-registered and cannot recover VAT, so it must be built into the declared value wherever it applies. Demolition, professional fees and partial-damage repairs all attract 20% VAT. Mixed-use blocks carry a further complication: residential flats zero-rate on a full rebuild, but commercial units are standard-rated. A correct reinstatement cost assessment for a mixed-use block itemises the DV by use so each element is insured and recharged to leaseholders correctly.' },
  { question: 'Can a leaseholder commission their own reinstatement cost assessment?', answer: 'Yes. Leaseholders with grounds to question the declared value arranged for their block may instruct an independent assessment. Under FCA rules in force from January 2024, leaseholders are defined as customers and firms must act in their best interests. Our report provides documented evidence to raise a formal concern with the freeholder or managing agent, or to support a service charge dispute.' },
  { question: 'What information do you need to get started?', answer: 'Address, property type, approximate gross internal floor area, any previous assessment or valuation, details of recent alterations or extensions, the asbestos survey and fire risk assessment where available, and confirmation of VAT-registered status. We can begin with limited information and request further detail as needed.' },
]

export default function FreeholdersLeaseholdersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/rca-for-my-property.png" alt="Reinstatement cost assessment for freeholders and leaseholders" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Freeholders &amp; Leaseholders</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Getting the declared value right is a legal obligation, not a choice.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Most long leases compel the freeholder to insure to full reinstatement cost. Underinsurance is a breach of that covenant, and where a claim falls short, leaseholders can pursue the party responsible for arranging cover. A specialist assessment is the mechanism for discharging that duty correctly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[480px]" style={{boxShadow:'0 24px 64px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.2)'}}>
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Freeholder reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* DV VS SI */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Declared Value vs Sum Insured</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The most common source of freeholder confusion, and underinsurance.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Two figures appear on the policy schedule and freeholders routinely conflate them. The Declared Value is the full reinstatement cost at day one, the figure your reinstatement cost assessment produces. The Sum Insured is set by the insurer: it equals the DV plus an inflation provision, typically a 20–50% uplift.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              A DV of £5,000,000 becomes a Sum Insured of approximately £6,500,000 after a 30% uplift. Seeing the higher Sum Insured and concluding the building is "over-insured" is a classic error. It leads freeholders to under-declare the DV at renewal, creating a real gap when a claim arises.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Your reinstatement cost assessment establishes the correct Declared Value. The inflation provision above it is the insurer's job. Those are two separate things.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Market value', desc: 'What the building achieves on the open market. Bears no relation to rebuild cost: often far higher for a central-London block, sometimes far lower for a converted mill or warehouse.', ok: false },
              { label: 'Declared Value (DV)', desc: 'The day-one reinstatement cost established by your reinstatement cost assessment. The figure you are responsible for. The starting point for the policy.', ok: true },
              { label: 'Sum Insured (SI)', desc: 'DV plus the insurer\'s inflation provision (typically 20–50% uplift). Appears on the schedule. Set by the insurer, not by you.', ok: true },
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

      {/* FOR FREEHOLDERS / LEASEHOLDERS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="ls-card p-8 flex flex-col rounded-2xl">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 w-fit">For Freeholders, RMCs &amp; RTM Companies</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] leading-tight mb-4">
              Discharge the lease obligation with a defensible figure.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-4 flex-1">
              The lease covenant to insure to full reinstatement cost falls on whoever holds the insuring obligation: the freeholder, RMC or RTM company, or the managing agent acting on their behalf. Many insurers now require a professional reinstatement cost assessment for buildings with a declared value above £600,000. A specialist assessment provides the documented, professionally accountable figure that satisfies both requirements and protects whoever holds the obligation from a negligence claim.
            </p>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-8 text-[#9aa0a6]">
              Appropriate for individual blocks, portfolio reviews, RTM companies renewing insurance for the first time, and any building where the insurance figure has not been formally reviewed in three or more years.
            </p>
            <Link href="/contact#contact-form" className="btn-shine w-fit">Instruct an Assessment</Link>
          </div>
          <div className="ls-card bg-[#e8f0fe] border-[#c8d8f8] p-8 flex flex-col rounded-2xl">
            <span className="inline-flex items-center bg-white/60 text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 w-fit">For Leaseholders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] leading-tight mb-4">
              Confidence in the cover arranged for your building.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-4 flex-1">
              Where the declared sum insured is adequate, leaseholders are properly protected at the point of a claim. Where it is not, the average clause reduces the payout and the gap falls on leaseholders, not the freeholder who set the figure. Leaseholders who have grounds to question the declared value in use may commission an independent assessment.
            </p>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-8 text-[#9aa0a6]">
              Under FCA rules in force from January 2024, leaseholders are defined as customers with rights to fair treatment. Our report provides documented evidence to raise a formal concern or support a service charge dispute.
            </p>
            <Link href="/contact#contact-form" className="btn-shine w-fit">Get Independent Advice</Link>
          </div>
        </div>
      </section>

      {/* UNDERINSURANCE RISK */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-blue">The Underinsurance Risk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              When the figure is wrong, leaseholders bear the loss, and freeholders bear the liability.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              If the declared value is inadequate at the point of a claim, the insurer applies the average clause and pays pro rata. For larger claims the loss adjuster will scrutinise the DV, and if it looks low, flag it. In the worst case the insurer can attempt to repudiate the claim entirely.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              One RMC director declared approximately £500,000 based on aggregated flat market values. A builder then estimated £1,500,000 to rebuild in local stone, a three-times gap that would have gutted any claim. Market value of a block bears no relation to rebuild cost: a central-London block with a £4,000,000 declared value can command £10,000,000 or more on the open market. The reverse is equally true for converted mills, warehouses and regional stock.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              The freeholder or RMC director who set the figure may face a negligence claim from leaseholders for any unrecovered loss. A specialist reinstatement cost assessment is the only defensible basis for the declared value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { stat: '£500k → £1.5m', label: 'real-world DV gap at a residential block: a 3× shortfall that would have reduced every claim payout by two thirds' },
              { stat: '15–20%', label: 'professional fees typically added on top of rebuild cost for a block: architect, structural engineer, quantity surveyor and consultants' },
              { stat: '12–24 Months', label: 'loss-of-rent and alternative-accommodation cover that may be required for a significant loss given block reinstatement timescales, commonly omitted from the declared value' },
            ].map(({ stat, label }) => (
              <div key={label} className="stat-card p-6">
                <p className="text-2xl font-bold text-[#202124] leading-none mb-3">{stat}</p>
                <p className="text-[#5f6368] text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GETS VALUED */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="badge badge-blue">What Gets Valued</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A reinstatement cost assessment covers more than most freeholders expect.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              A block assessment values the whole building, not the sum of individual flat market values. The surveyor measures floor-by-floor using IPMS methodology and accounts for every cost element that a desktop or inherited figure will miss.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'The full building envelope.', desc: 'External fabric, roof, structure, communal areas, stairwells, entrance halls, plant rooms and shared lobbies, measured floor-by-floor. The footprint varies per floor and must be taken individually.' },
              { title: 'Shared services and plant.', desc: 'Lifts and specialist engineering plant, communal M&E, heating systems, building-management networks and drainage infrastructure serving the whole block. These are routinely missed in inherited or desktop figures.' },
              { title: 'External works and curtilage.', desc: 'Car parks, boundary walls, bin stores, paths and ancillary structures within the curtilage, frequently omitted from inherited estimates and enough to move the DV materially.' },
              { title: 'Demolition, clearance and professional fees.', desc: 'Site clearance, party-wall shoring, architect (8–12%), structural engineer (2–4%) and quantity surveyor (2–3%) fees. Asbestos-bearing debris adds sharply to disposal costs, and surveyors ask for the asbestos survey and fire risk assessment up front.' },
              { title: 'VAT where non-recoverable.', desc: 'Most freeholders cannot recover VAT. Demolition, professional fees and partial-damage repairs attract 20% VAT and must be in the DV. Mixed-use blocks are itemised, with residential and commercial elements declared separately so each can be insured and recharged to leaseholders correctly.' },
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

      {/* REGULATORY BACKDROP */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Regulatory Backdrop</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Post-2024 reforms make a defensible reinstatement cost assessment more important, not less.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Post-Grenfell, leasehold buildings insurance premiums rose significantly. The FCA's 2022 leasehold buildings insurance market study found that average per-policy broker commission had risen 46%, with brokers paying over £80,000,000 to third parties, usually the freeholder or managing agent, with little evidence of value to leaseholders.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              From 1 January 2024 the FCA reforms took effect: leaseholders are now defined as customers, firms must act in their best interests, policies must provide fair value, and commission must be disclosed. The Leasehold and Freehold Reform Act 2024 goes further: it moves to ban commissions charged to leaseholders altogether, replacing them with a transparent permitted fee reflective of work actually done.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              The read-through: with commission income being dismantled, every cost recharged to leaseholders must now be demonstrably justified. An independent, RICS-aligned reinstatement cost assessment is exactly that: transparent, value-adding, and defensible at tribunal. It survives scrutiny in a way that an opaque commission arrangement no longer does.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { title: 'FCA Consumer Duty (Jan 2024)', desc: 'Leaseholders are now defined as customers. Firms must act in their best interests, ensure fair value and disclose commission. Applies to every policy recharged via service charge.' },
              { title: 'Leasehold and Freehold Reform Act 2024', desc: 'Moves to ban insurance commissions charged to leaseholders. Costs must be replaced by a fair, transparent permitted fee reflective of real work done.' },
              { title: 'Tribunal exposure', desc: 'If insurance fails to meet lease requirements, leaseholders can take the matter to the First-tier Tribunal, which can compel proper cover or order reimbursement. An accurate reinstatement cost assessment is the paper trail that makes a challenge fail before it starts.' },
              { title: 'The compliance tailwind', desc: 'A commissioned reinstatement cost assessment from a qualified, independent surveyor is the kind of demonstrable, fair-value service that survives the new scrutiny, and positions the freeholder or agent as acting correctly.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-5 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 mt-0.5 tick-glow">✓</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
                </div>
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
              When should you review the figure?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Any of the following circumstances creates a material risk that the current declared value is inadequate. Each one warrants a formal reassessment before the next renewal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'The insurance figure has not been formally reviewed in three or more years.',
              'The declared value is based on an inherited estimate, market value or online calculator.',
              'The building has been extended, altered or refurbished since the last assessment.',
              'You are a freeholder, RMC or RTM company taking on or renewing the insuring obligation.',
              'A managing agent has changed and the basis of the current figure is unclear.',
              'A leaseholder, insurer or tribunal has questioned the adequacy of cover.',
            ].map((point, i) => (
              <div key={i} className="ls-card p-6 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 mt-0.5 tick-glow">✓</span>
                <p className="text-[#3c4043] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Check Your Declared Value</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Commission a reinstatement cost assessment today." />
      <FaqSection description="Common questions from freeholders, RMC directors and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}
