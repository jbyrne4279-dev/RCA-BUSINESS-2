import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Managing Agents and RTM Companies',
  description: 'Specialist reinstatement cost assessments for managing agents. Protect your PI cover, discharge the lease obligation and demonstrate fair value to leaseholders under FCA Consumer Duty.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
}

const faqItems = [
  { question: 'Can a managing agent be personally liable for underinsurance?', answer: 'Yes. Where a claim shortfall arises from a stale or inadequate valuation, the agent can face a professional negligence or E&O claim - independent of who holds the insuring obligation under the lease. A RICS-aligned assessment on the recommended three-year cycle is the defensible position that protects your PI cover.' },
  { question: 'Will insurers and brokers accept your report?', answer: 'Yes. Our reports are accepted across the UK market without amendment. Each report documents the declared value, methodology, assumptions, and review date in the format brokers and insurers expect - you forward it directly.' },
  { question: 'How quickly can we get a report?', answer: 'Most instructions are turned around within 10–15 working days of the survey. For portfolio instructions we agree a phased schedule at the outset so no renewal window is missed.' },
  { question: 'Is index-linking the sum insured each year sufficient?', answer: 'No. Index-linking adjusts the figure but compounds any existing error and does not capture material works or specification changes. RICS requires a full reassessment at least every three years.' },
  { question: 'What is the difference between Declared Value and Sum Insured?', answer: 'The Declared Value (DV) is the day-one rebuild cost the agent establishes. The Sum Insured is set by the insurer - DV plus an inflation provision, typically 20–50% uplift - so a DV of £5m typically becomes an SI of around £6.5m. Treating the higher SI as over-insurance and under-declaring the DV creates the shortfall that triggers the average clause.' },
  { question: 'Can you assess multiple blocks under one instruction?', answer: 'Yes - individual reports per property, residential and commercial split for mixed-use blocks, with a consolidated summary schedule and staggered scheduling to smooth service-charge cost across years.' },
]

export default function ManagingAgentsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Managing Agents &amp; RTM Companies</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              Underinsurance is your risk, not the freeholder's.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              As the agent responsible for placing cover, you carry a duty of care to every leaseholder in the building. A specialist RICS assessment is the defensible position that protects you, your PI cover, and your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Protect Yourself and Your Clients</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image src="/surveyor-reinstatement-cost-assessment-rics.png" alt="RICS surveyor carrying out reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for managing agents and RTM companies across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPOSURE */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="badge badge-blue">The Exposure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Three ways an inadequate valuation becomes your problem, not the freeholder's.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              You are the practical decision-maker on the declared value, and that role carries the liability.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { n: '01', title: 'Professional negligence.', desc: 'A stale or inadequate valuation is the oversight that becomes an E&O claim when the average clause bites.' },
              { n: '02', title: 'The average clause.', desc: 'An under-declared value means the insurer pays pro rata — and leaseholders look to the agent for the shortfall.' },
              { n: '03', title: 'FCA Consumer Duty.', desc: 'Leaseholders are now defined as customers; an unjustified sum insured or commission-driven policy fails that test.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="py-8 flex gap-6">
                <span className="text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.2em] mt-1 w-8 shrink-0">{n}</span>
                <div>
                  <h3 className="font-semibold text-[#202124] text-sm mb-2">{title}</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AGENTS GET WRONG */}
      <section className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Where Agents Slip</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The four valuation approaches — and the one that actually protects you.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Treating the insurer's Sum Insured as proof of adequate cover — rather than the Declared Value you set — is the single most common error that triggers the average clause.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Stale valuation', desc: 'Stale figures create the negligence exposure.', ok: false },
              { label: 'Index-linking as a substitute', desc: 'Compounds existing errors; no physical check.', ok: false },
              { label: 'Online calculator or functional-unit rate', desc: 'No PI backing; challenged by loss adjusters immediately.', ok: false },
              { label: 'Specialist reinstatement cost assessment on the RICS cycle', desc: 'Defensible at every stage. The only safe option.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`ls-card p-5 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : ''}`}>
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

      {/* WHAT YOU NEED */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">What the Report Provides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A broker-ready report that satisfies insurers, leaseholders, and your PI file.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              We deliver the declared value, methodology, and review date already documented — forward it directly, no reworking required.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Protect Yourself and Your Clients</Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              'Documented declared value',
              'Methodology statement',
              'Review date and indexation guidance',
              'Mixed-use itemisation',
              'Professional indemnity backing',
              'Broker-ready format',
            ].map((title) => (
              <div key={title} className="ls-card p-5 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <p className="font-semibold text-[#202124] text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Protect yourself and your clients. Instruct us today." />
      <FaqSection description="Common questions from managing agents and RTM companies about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
