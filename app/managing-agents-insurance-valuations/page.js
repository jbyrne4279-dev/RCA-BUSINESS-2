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
  { question: 'Can managing agents be held liable for underinsurance?', answer: 'Yes. The managing agent carries a duty of care to leaseholders, and where a shortfall in cover arises from negligence or failure to review the valuation, the agent, not just the freeholder, may face a professional negligence or E&O claim. An underinsured block at claim stage is a textbook PI trigger. Commissioning a proper, RICS-aligned reinstatement cost assessment on the recommended cycle is the defensible position.' },
  { question: 'Is index-linking the sum insured each year sufficient?', answer: 'No. Index-linking adjusts the figure but does not replace a formal assessment, and it compounds any existing error if the base figure was wrong. It does not capture material works, changes in construction specification, or non-standard elements. RICS guidance requires a full physical reassessment at least every three years. A loss adjuster on a large claim knows the difference between an index-linked figure and a surveyed one.' },
  { question: 'What is the difference between Declared Value and Sum Insured?', answer: 'The Declared Value (DV) is the full reinstatement figure the reinstatement cost assessment produces: the day-one rebuild cost the agent is responsible for establishing. The Sum Insured (SI) is set by the insurer and equals the DV plus an inflation provision, typically 20–50% uplift. A DV of £5m typically becomes an SI of around £6.5m. Agents who misread the higher SI as "over-insurance" push freeholders to under-declare, creating a real underinsurance gap at claim stage.' },
  { question: 'How does the FCA Consumer Duty affect managing agents?', answer: 'From January 2024, leaseholders are defined as customers and firms must act in their best interests, ensure fair value and disclose commission. The Leasehold and Freehold Reform Act 2024 moves to ban insurance commissions charged to leaseholders altogether. Every cost recharged via service charge must now be demonstrably justified. An independent reinstatement cost assessment from a qualified surveyor is exactly that kind of transparent, value-adding work.' },
  { question: 'Can you assess multiple blocks under one instruction?', answer: 'Yes. Portfolio assessments for managing agents are a standard instruction for us: individual RICS-aligned reports per property, itemised by building and use (residential and commercial split for mixed-use blocks), with a consolidated summary schedule and staggered scheduling to smooth cost across service-charge years.' },
  { question: 'What do RTM companies need to know?', answer: 'When leaseholders exercise the Right to Manage, the obligation to arrange buildings insurance transfers with it. RTM companies should establish the correct declared value before the first renewal. A proper reinstatement cost assessment from the outset creates a defensible file from day one and demonstrates compliance to leaseholders, who are now defined as customers under FCA rules.' },
]

export default function ManagingAgentsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/uk-rca-rics-surveyor.png" alt="RICS surveyor for managing agents" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Managing Agents &amp; RTM Companies</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              An underinsured block is not the freeholder's problem. It's your PI claim.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Managing agents carry a duty of care to leaseholders. Where an underinsured block produces a shortfall at claim stage, the agent who advised on or placed the insurance is exposed to a professional negligence claim, regardless of who technically holds the insuring obligation. A specialist reinstatement cost assessment is the cheapest PI risk reduction you will buy all year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-xl">
            <Image src="/surveyor-reinstatement-cost-assessment-rics.png" alt="RICS surveyor carrying out reinstatement cost assessment" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* THE EXPOSURE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Exposure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Five ways an inadequate reinstatement cost assessment lands on the agent's file.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              The managing agent is the practical decision-maker on the declared value, specifying, chasing renewals, managing the figure across a portfolio. That role carries the liability.
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
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Where Agents Slip</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The four inputs that move the declared value, and the errors that follow.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Managing agents own the inputs and the cadence. These are the points where errors accumulate, and where a standing relationship with a specialist surveyor adds the most value.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              The DV vs SI confusion matters most. Agents who misread the Sum Insured (DV plus insurer's inflation provision, typically 20–50%) as "over-insurance" push freeholders to under-declare. A DV of £5,000,000 correctly becomes a Sum Insured of approximately £6,500,000 after a 30% uplift. They are not the same figure and should not be treated as such.
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
              <div key={label} className={`rounded-xl border p-5 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : 'border-[#dadce0] bg-white'}`}>
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

      {/* WHAT YOU NEED */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">What the Report Provides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A report that works for brokers, insurers, leaseholders, and your PI file.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              The reinstatement cost assessment must state the declared value, the assumptions applied, the review date and the scope of assessment in terms that brokers, insurers and leaseholders can rely on. For mixed-use blocks, the residential and commercial elements are itemised separately so each can be insured and recharged to the correct leaseholders.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              A specialist surveyor will ask for the fire risk assessment and asbestos survey up front, as asbestos-bearing debris materially increases disposal costs and must be accounted for in the DV.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Instruct an Assessment</Link>
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
              <div key={title} className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-5 flex gap-4">
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
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Portfolio Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              One relationship. Your entire portfolio.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Managing agents place block policies across portfolios. The same logic applies to reinstatement cost assessments. We handle volume, itemise DVs building by building, phase assessments to smooth cost across service-charge years, and deliver standing three-year cycles with desktop reviews between. One instruction covering your whole book. No re-instructing annually. No administration overhead.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              We diarise the re-instruction triggers with you: an extension to a ground-floor flat nudges the DV upward; a new storey on top forces both a new reinstatement cost assessment and a service-charge re-apportionment. We flag both before the renewal date.
            </p>
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Discuss Your Portfolio</Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Individual block reports', desc: 'Each property assessed separately, with its own declared value, methodology statement and review date.' },
              { title: 'Portfolio summary schedule', desc: 'A consolidated record of every asset, its reinstatement figure, last assessment date and next review.' },
              { title: 'Annual BCIS indexation', desc: 'Under our 3-Year Protection plan, each figure is updated annually using live construction cost data before each renewal.' },
              { title: 'Staggered scheduling', desc: 'Assessments phased to smooth cost across service-charge years. No spike in one year\'s budget.' },
              { title: 'Single point of contact', desc: 'One surveyor manages the entire portfolio instruction from receipt through to delivery and annual update.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/10 rounded-xl border border-white/20 p-5 flex gap-4">
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

      <ContactSection heading="Protect your agency. Instruct us today." />
      <FaqSection description="Common questions from managing agents and RTM companies about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
