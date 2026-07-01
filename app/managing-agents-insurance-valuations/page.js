import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Managing Agents and RTM Companies',
  description: 'Specialist reinstatement cost assessment surveys for managing agents and RTM companies. Protect yourself and your leaseholders with accurate, RICS-aligned rebuild valuations for buildings insurance.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
}

const faqItems = [
  { question: 'Can managing agents be held responsible for underinsurance?', answer: 'Where the lease requires insurance at full reinstatement cost and the managing agent arranges that cover, they may be exposed to a claim by leaseholders for any shortfall not covered at the point of claim. A specialist reinstatement cost assessment is the standard way to discharge that obligation with a documented, defensible figure.' },
  { question: 'How often should we commission a reinstatement cost assessment?', answer: 'RICS guidance recommends annual inflation adjustment and a more detailed review at least every three years. Our 3-Year Protection plan covers both requirements under a single instruction.' },
  { question: `We rely on the insurer's rebuild calculator. Is that sufficient?`, answer: 'Online calculators and insurer-provided tools carry no professional accountability. In a dispute, they offer no documented methodology or professional responsibility. A specialist RCA does.' },
  { question: 'Can you assess multiple blocks for us under one instruction?', answer: 'Yes. We specialise in portfolio assessments for managing agents with multiple blocks, providing individual reports for each property and a consolidated summary for your records.' },
  { question: 'How quickly do you turn around a desktop assessment?', answer: 'Standard desktop assessments are delivered within 24 hours of instruction. On-site surveys are scheduled promptly and we confirm a timeline on instruction.' },
  { question: 'What do RTM companies need to know about reinstatement cost assessments?', answer: 'When leaseholders exercise the Right to Manage, the responsibility for arranging buildings insurance typically transfers with it. RTM companies should establish the correct reinstatement figure before the first renewal to evidence their compliance from the outset.' },
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
              Insurance valuations for managing agents and RTM companies.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Managing agents and RTM companies need a reliable reinstatement cost assessment to support the insurance process and protect themselves from getting the figure wrong.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
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
              What happens when you get it wrong.
            </h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { n: '01', title: 'The average clause applies.', desc: 'If the building is underinsured at the point of a major claim, the insurer can reduce the payout in proportion to the degree of underinsurance. Standard UK policies routinely include this clause and insurers enforce it.' },
              { n: '02', title: 'Leaseholders can pursue you.', desc: 'Where a lease requires insurance at full reinstatement cost and the managing agent arranges inadequate cover, leaseholders may bring a claim for the shortfall. The lease creates the obligation. You accept it when you take on the management.' },
              { n: '03', title: 'Build costs have moved significantly.', desc: 'BCIS data shows UK construction costs rose over 30% between 2020 and 2024. A valuation not reviewed in that period is almost certainly inaccurate. Annual index-linking without a formal assessment is not a substitute.' },
              { n: '04', title: 'Calculators offer no protection.', desc: 'Online calculators and insurer rebuild tools carry no professional accountability. In a dispute, they provide no documented methodology and no professional indemnity. A specialist RCA report does.' },
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

      {/* WHAT YOU NEED */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">What You Need</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A report that works for brokers, insurers and leaseholders.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              You need a report that is clear, practical and easy to use with brokers, insurers and leaseholders. It should explain the declared value, the key assumptions, the review date and the scope of the assessment.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              RICS-aligned guidance stresses the importance of professional diligence because an understated insurance value can lead to proportionate settlement issues under the average clause. That is exactly why many managing agents prefer a specialist reinstatement cost assessment instead of relying on outdated figures or online tools.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Clear declared value', desc: 'A specific, documented reinstatement cost figure for use with your insurer or broker.' },
              { title: 'Methodology statement', desc: 'Explains how the figure was calculated and what assumptions were made.' },
              { title: 'Review date and guidance', desc: 'When the figure should next be reviewed and how to apply annual indexation.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct submission to insurers without challenge.' },
              { title: 'Professional indemnity', desc: 'PI insurance on every instruction, you are protected if the figure is challenged.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6 flex gap-4">
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
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Portfolio Service</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Managing multiple blocks?
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              We provide consolidated portfolio assessments for managing agents with multiple blocks, individual reports for each property, a portfolio summary schedule, and a managed annual update service.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Suitable for routine portfolio reviews, new management instructions, refinancing support and buildings insurance renewals where multiple properties need a consistent, professional approach.
            </p>
            <Link href="/contact#contact-form" className="link-amber">Discuss your portfolio →</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Individual block reports', desc: 'Each property receives a separate assessment with its own declared value and methodology statement.' },
              { title: 'Portfolio summary', desc: 'A consolidated schedule showing every asset, its reinstatement figure, and its next review date.' },
              { title: 'Annual indexation', desc: 'Under our 3-Year Protection plan, each figure is updated annually using live BCIS data.' },
              { title: 'Single point of contact', desc: 'One surveyor manages your entire portfolio instruction from receipt to delivery.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
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
