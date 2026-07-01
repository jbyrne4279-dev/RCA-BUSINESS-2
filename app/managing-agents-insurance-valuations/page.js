import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Cost Assessment',
  description: 'RICS-regulated reinstatement cost assessments for managing agents. Protect yourself from liability when the sum insured is wrong. Broker-ready reports in 48 hours.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
}

const faqItems = [
  { question: 'Can managing agents be held personally liable for underinsurance?', answer: 'Yes. Where the lease obliges insurance at full reinstatement cost and the managing agent arranges the insurance, they may be exposed to a claim by leaseholders for any shortfall not covered at the point of claim. A RICS-regulated assessment is the standard way to discharge that obligation.' },
  { question: 'How often should we instruct a reinstatement cost assessment?', answer: 'RICS guidance recommends a formal assessment at least every three years, with annual index-linking in between. Our 3-Year Protection plan handles both requirements under a single instruction.' },
  { question: 'We currently rely on the insurer’s rebuild calculator. Is that sufficient?', answer: 'Online calculators and insurer-provided tools are not RICS-regulated and provide no formal documentation of the methodology. In the event of a dispute, they offer no professional accountability. A RICS assessment does.' },
  { question: 'Can you assess multiple blocks under a single instruction?', answer: 'Yes. We specialise in portfolio assessments for managing agents with multiple mandates, providing individual reports for each block and a consolidated summary for your records.' },
  { question: 'How quickly do you turn around a desktop assessment?', answer: 'Standard desktop assessments are delivered within 48 hours of instruction.' },
]

export default function ManagingAgentsPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Managing Agents</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-headline text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
              Insurance valuations<br />for managing agents.
            </h1>
            <div>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Where a lease covenants insurance at full reinstatement cost, the managing agent who arranges that cover carries the liability when the figure is wrong. One RICS-regulated assessment removes that exposure.
              </p>
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] inline-block">
                Request an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">The Exposure</p>
            <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight">
              What happens when you get it wrong.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-0 divide-y divide-[#e5e7eb]">
            {[
              { n: '01', title: 'The condition of average applies.', desc: 'If the building is underinsured at the point of claim, the insurer can reduce the payout in proportion to the degree of underinsurance. Standard UK policies routinely include this clause — and insurers enforce it.' },
              { n: '02', title: 'Leaseholders can pursue you.', desc: 'If leaseholders suffer a loss as a result of underinsurance that arose from an inadequate reinstatement figure you arranged, they may bring a claim against the managing agent for the shortfall. The lease creates the obligation. The agent accepts it.' },
              { n: '03', title: 'Build costs move — your figure does not.', desc: 'BCIS data shows UK construction costs rose over 30% between 2020 and 2024. A valuation not updated in that period is almost certainly inaccurate. Annual index-linking without a formal assessment is not a substitute.' },
              { n: '04', title: 'Online calculators offer no protection.', desc: 'Insurer rebuild calculators and online tools carry no professional accountability. In a dispute, they are worthless as evidence. A RICS-regulated report is documented, defensible, and accepted by every UK insurer.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="py-8 flex gap-6">
                <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.25em] mt-1 w-8 shrink-0">{n}</span>
                <div>
                  <h3 className="font-semibold text-[#111318] text-sm mb-2">{title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">The Solution</p>
              <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white leading-tight mb-8">
                One instruction.<br />Full compliance.
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-10">
                Our RICS-regulated reinstatement cost assessment gives you a documented, professional figure that satisfies your lease obligation, your insurer, and your leaseholders. Delivered within 48 hours. Accepted without challenge.
              </p>
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] inline-block">
                Instruct Us
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/8">
              {[
                { n: '48 hrs', label: 'standard turnaround for desktop assessments' },
                { n: '100%', label: 'of our reports accepted by UK insurers without challenge' },
                { n: '3 yrs', label: 'of compliance from a single 3-Year Protection instruction' },
              ].map(({ n, label }) => (
                <div key={n} className="bg-[#111318] p-8 flex items-center gap-8">
                  <p className="font-headline text-4xl font-semibold text-[#c47c1e] leading-none shrink-0 w-24">{n}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">Portfolio Service</p>
            <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight mb-6">
              Managing multiple blocks?
            </h2>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
              We provide consolidated portfolio assessments for managing agents with multiple mandates — individual reports for each block, a portfolio summary, and a managed annual update service.
            </p>
            <Link href="/contact#contact-form" className="text-[#c47c1e] text-xs font-semibold uppercase tracking-widest hover:text-[#111318] transition-colors border-b border-[#c47c1e]/40 pb-1 inline-block">
              Discuss your portfolio →
            </Link>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:grid-rows-2 sm:gap-px bg-[#f4f5f7]">
            {[
              { title: 'Individual block reports', desc: 'Each property receives a separate RICS-regulated assessment with its own methodology statement.' },
              { title: 'Portfolio summary', desc: 'A consolidated schedule showing every asset, its reinstatement figure, and its assessment date.' },
              { title: 'Annual indexation', desc: 'Under our 3-Year Protection plan, each figure is updated annually using live BCIS data.' },
              { title: 'Single point of contact', desc: 'One dedicated surveyor manages your entire portfolio instruction from receipt to delivery.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-8">
                <p className="font-semibold text-[#111318] text-sm mb-2">{title}</p>
                <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Protect your agency. Instruct us today." />
      <FaqSection description="Common questions from managing agents about reinstatement cost assessments and compliance." items={faqItems} />
    </main>
  )
}
