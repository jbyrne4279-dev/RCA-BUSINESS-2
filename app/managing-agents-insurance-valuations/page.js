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
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="badge badge-blue">The Exposure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Five ways an inadequate valuation becomes your problem, not the freeholder's.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              You are the practical decision-maker on the declared value. That role carries the liability - regardless of where the insuring obligation sits in the lease.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { n: '01', title: 'Professional negligence.', desc: 'The agent carries a duty of care to leaseholders. Letting a valuation go stale, or relying on a desktop figure for a complex or altered building, is exactly the kind of oversight that becomes a negligence or E&O claim when a major loss hits and the average clause bites.' },
              { n: '02', title: 'The average clause.', desc: 'If the declared value is inadequate, the insurer pays pro rata. For larger claims the loss adjuster will scrutinise the DV and flag it if low. In the worst case the insurer can attempt to repudiate the claim entirely, and leaseholders look to the agent for the shortfall.' },
              { n: '03', title: 'Tribunal challenge.', desc: 'If insurance fails to meet lease requirements, leaseholders can take the matter to the First-tier Tribunal, which can compel proper cover or order reimbursement. A challenged service charge plus an underinsured block is a reputational and financial double-hit.' },
              { n: '04', title: 'FCA Consumer Duty.', desc: 'From January 2024, leaseholders are defined as customers and the agent must act in their best interests, ensure fair value and disclose commission. A commission-driven policy or an unjustified sum insured fails that test.' },
              { n: '05', title: 'LFRA commission ban.', desc: 'The Leasehold and Freehold Reform Act 2024 moves to ban insurance commissions charged to leaseholders altogether. Every cost recharged via service charge must now demonstrate real value. An independent reinstatement cost assessment does that; a commission clip does not.' },
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
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Where Agents Slip</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The four valuation approaches - and the one that actually protects you.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              The DV vs SI confusion is the most common agent error. A DV of £5,000,000 correctly becomes a Sum Insured of approximately £6,500,000 after a 30% insurer uplift - treating the higher SI as proof of over-insurance and under-declaring the DV creates the very shortfall that triggers the average clause.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Stale valuation', desc: 'RICS requires a full reassessment every three years. "We had one done a few years ago" is the failure-to-review that creates the negligence exposure.', ok: false },
              { label: 'Index-linking as a substitute', desc: 'Index-linking adjusts the figure but compounds any existing error and does not capture material works or altered specification. Not a substitute for a physical reassessment.', ok: false },
              { label: 'Online calculator or functional-unit rate', desc: 'No professional accountability, no RICS regulation, no PI backing. A loss adjuster on a large claim will challenge it immediately.', ok: false },
              { label: 'Specialist reinstatement cost assessment on the RICS cycle', desc: 'Full assessment every three years. Annual BCIS indexation between reassessments. Fresh instruction after material works. A defensible file at every stage.', ok: true },
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
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">What the Report Provides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A report that satisfies brokers, insurers, leaseholders, and your PI file - without extra admin.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              We handle the assessment end-to-end and deliver a broker-ready report with the declared value, methodology and review date already documented. You forward it directly - no reworking, no chasing, no exposure.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Protect Yourself and Your Clients</Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Documented declared value', desc: 'A specific, RICS-aligned reinstatement cost figure for direct use with your insurer or broker.' },
              { title: 'Methodology statement', desc: 'A clear explanation of how the figure was calculated, what assumptions apply, and what is included and excluded.' },
              { title: 'Review date and indexation guidance', desc: 'When the figure should next be formally reassessed, and how annual BCIS indexation should be applied between assessments.' },
              { title: 'Mixed-use itemisation', desc: 'Residential and commercial elements declared separately for correct VAT treatment and accurate service-charge recharging.' },
              { title: 'Professional indemnity', desc: 'PI insurance on every instruction. The figure is professionally backed if challenged by a loss adjuster or at tribunal.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct submission to insurers without amendment. Accepted across the UK market.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-5 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-[#1a73e8] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-dark">Portfolio Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Managing multiple blocks? One instruction covers your entire portfolio.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              We assess every block individually, phase renewals to smooth service-charge cost, and flag material works before your next renewal date - removing the compliance admin burden across your whole book. Managing agents with large portfolios can learn more on our <Link href="/portfolio-reinstatement-assessments" className="underline underline-offset-2 hover:text-white">portfolio assessments page</Link>.
            </p>
            <Link href="/portfolio-reinstatement-assessments" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Explore Portfolio Assessments</Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Individual block reports', desc: 'Each property assessed separately, with its own declared value, methodology statement and review date.' },
              { title: 'Portfolio summary schedule', desc: 'A consolidated record of every asset, its reinstatement figure, last assessment date and next review.' },
              { title: 'Annual BCIS indexation', desc: 'Under our 3-Year Protection plan, each figure is updated annually using live construction cost data before each renewal.' },
              { title: 'Staggered scheduling', desc: 'Assessments phased to smooth cost across service-charge years. No spike in one year\'s budget.' },
              { title: 'Single point of contact', desc: 'One surveyor manages the entire portfolio instruction from receipt through to delivery and annual update.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card-dark p-5 flex gap-4">
                <span className="text-white font-bold text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
                </div>
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
