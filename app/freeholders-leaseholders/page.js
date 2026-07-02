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
              When the declared value is too low, the insurer pays out pro rata — the shortfall falls on everyone in the building, not just whoever holds the insuring obligation.
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
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Declared Value vs Sum Insured</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The number on your policy schedule is not the number you set — and the difference matters.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Assuming the higher sum insured figure means you are over-insured — and trimming your declared value accordingly — is one of the most common ways underinsurance happens.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Declared Value (DV)', desc: 'The day-one rebuild cost you are responsible for setting — the starting point for your policy.', ok: true },
              { label: 'Sum Insured (SI)', desc: "DV plus the insurer's inflation provision (typically 20–50% uplift) — set by the insurer, not by you.", ok: true },
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

      {/* UNDERINSURANCE RISK */}
      <section className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-blue">The Underinsurance Risk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              When the payout is cut, every flat owner in the building loses.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed">
              If the declared value is too low, the average clause kicks in and the insurer pays only the proportion the building is covered for — the rest comes out of the building's pocket.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { stat: '£500k → £1.5m', label: 'real-world DV gap at a residential block — a 3× shortfall that would have cut every claim payout by two thirds' },
              { stat: '15–20%', label: 'professional fees typically added on top of rebuild cost — architect, engineer and quantity surveyor — commonly omitted from declared values' },
              { stat: '12–24 Months', label: 'loss-of-rent and alternative accommodation cover that may be required for a significant loss — often left out of the declared value entirely' },
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
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="badge badge-blue">What Gets Valued</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-4">
              The rebuild cost covers far more than most people expect.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed max-w-2xl">
              A reinstatement cost assessment values the whole building from scratch — not the sum of individual flat values.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'The full building envelope',
              'Communal areas and stairwells',
              'Lifts and shared plant',
              'Communal M&E and heating systems',
              'Car parks and external works',
              'Boundary walls and bin stores',
              'Demolition and site clearance',
              'Professional fees (architect, engineer, QS)',
              'VAT where non-recoverable',
            ].map((item) => (
              <div key={item} className="ls-card p-5 flex gap-3 items-center">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <p className="font-medium text-[#202124] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Find out if your building is covered for its true rebuild cost." />
      <FaqSection description="Common questions from freeholders, RMC directors and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}
