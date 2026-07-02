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
  { question: 'What is the difference between the declared value and the sum insured?', answer: 'The declared value is the cost to rebuild the whole building from scratch - that is what you (or your managing agent) are responsible for setting correctly. The sum insured is a higher figure shown on your policy schedule: the insurer adds an inflation buffer on top, usually 20–50%. They are not the same number, and confusing them is one of the most common causes of underinsurance.' },
  { question: 'Who is responsible for making sure the insurance figure is correct?', answer: 'Your lease sets this out. In most blocks the freeholder, RMC, or RTM company holds the insuring obligation - but the practical job is often handled by a managing agent. Whoever is responsible for setting the figure carries the liability if it turns out to be wrong.' },
  { question: 'What happens if the building is underinsured and there is a big claim?', answer: 'The insurer applies what is known as the "average clause" and pays out only in proportion to how much of the true rebuild cost is covered. If a block is insured for £1m but the real rebuild cost is £1.5m, a £300,000 claim pays out just £200,000 - the other £100,000 has to come from somewhere else.' },
  { question: 'As a leaseholder, can I get my own independent assessment?', answer: 'Yes. You do not need the freeholder\'s permission to commission an independent assessment, and the report can be used as evidence in a formal concern or a service charge dispute at tribunal.' },
  { question: 'How often should the figure be reviewed?', answer: 'RICS guidance recommends a full reassessment every three years. Index-linking the figure annually between assessments is good practice, but it does not replace a physical survey - it only adjusts the number already there, without catching changes to the building or errors in the original figure.' },
  { question: 'What do you need from me to get started?', answer: 'Just the address, property type, approximate size, and any previous assessment report if you have one. We can work with limited information and will let you know if we need anything else.' },
]

export default function FreeholdersLeaseholdersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Freeholders &amp; Leaseholders</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              Underinsurance is a shared risk for every flat owner.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              When the declared value is too low, the insurer pays out pro rata - the shortfall falls on everyone in the building, not just whoever holds the insuring obligation. Check whether your current sum insured reflects the true rebuild cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Check My Declared Value</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Freeholder reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for freeholders, RMC directors and leaseholders across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DV VS SI */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Declared Value vs Sum Insured</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The number on your policy schedule is not the number you set - and the difference matters.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              The Declared Value is the day-one rebuild cost your assessment establishes - that is the figure you are responsible for. The insurer then adds an inflation provision (typically 20–50%) to reach the Sum Insured shown on your schedule. Assuming the higher figure means you are over-insured and trimming your declared value accordingly is how underinsurance happens.
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
              Set the declared value correctly and protect yourself from negligence claims.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8 flex-1">
              The insuring obligation falls on whoever holds it in the lease: freeholder, RMC, or RTM company. A RICS-aligned assessment satisfies insurer requirements, discharges the lease covenant, and creates a defensible file if the figure is ever challenged. If you own multiple properties, our <Link href="/portfolio-reinstatement-assessments" className="text-[#1a73e8] underline underline-offset-2">portfolio service</Link> covers your whole book under one instruction.
            </p>
            <Link href="/contact#contact-form" className="btn-shine w-fit">Check My Declared Value</Link>
          </div>
          <div className="ls-card bg-[#e8f0fe] border-[#c8d8f8] p-8 flex flex-col rounded-2xl">
            <span className="inline-flex items-center bg-white/60 text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 w-fit">For Leaseholders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] leading-tight mb-4">
              Know whether the insurance arranged on your building actually covers a full rebuild.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8 flex-1">
              If the declared value is too low and a serious claim hits, the average clause reduces every payout - and the shortfall falls on you and your neighbours, not the insurer. Our independent report gives you the documented evidence to raise a formal concern or challenge the service charge if the figure looks wrong. If the insurance is managed by a professional agent, they can find out more on our <Link href="/managing-agents-insurance-valuations" className="text-[#1a73e8] underline underline-offset-2">managing agents page</Link>.
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
              Underinsurance is a shared risk - when the payout is cut, every flat owner in the building loses.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              If the declared value is inadequate, the average clause kicks in and the insurer pays only the proportion the building is covered for - the rest comes out of the building's pocket. One RMC director declared £500,000 based on flat market values; the actual rebuild cost was £1,500,000, a 3× shortfall that would have reduced every claim payout by two thirds.
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
              The rebuild cost is not what you paid for the flat - it covers far more than most people expect.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              A reinstatement cost assessment values the whole building to rebuild from scratch - not the sum of individual flat values. Every element below is typically included and commonly under-declared.
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
              Recent reforms give leaseholders new rights to challenge - and freeholders new obligations to meet.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              From January 2024, FCA rules define leaseholders as customers - every cost recharged via service charge must demonstrate fair value, and commissions must be disclosed. The Leasehold and Freehold Reform Act 2024 moves to ban insurance commissions charged to leaseholders entirely.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              An independent RICS-aligned assessment is the transparent, defensible evidence that shows the insurance cost is justified - and makes a tribunal challenge fail before it starts.
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
              Is your current declared value still accurate?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Any of the following is a signal to get the figure checked before your next renewal.
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
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Check My Declared Value Now</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Find out if your building is covered for its true rebuild cost." />
      <FaqSection description="Common questions from freeholders, RMC directors and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}
