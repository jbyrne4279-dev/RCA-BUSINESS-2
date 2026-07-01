import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Cost Assessment',
  description: 'RICS-regulated reinstatement cost assessments for managing agents. Protect against liability when the sum insured is wrong. Broker-ready reports in 48 hours.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
}

const faqItems = [
  { question: 'Can managing agents be held personally liable for underinsurance?', answer: 'Yes. Where the lease obliges insurance at full reinstatement cost and the managing agent arranges the insurance, they may be exposed to a claim by leaseholders for any shortfall at the point of claim. A RICS-regulated assessment is the standard way to discharge that obligation.' },
  { question: 'How often should we instruct a reinstatement cost assessment?', answer: 'RICS guidance recommends a formal assessment at least every three years, with annual index-linking in between. Our 3-Year Protection plan handles both requirements under a single instruction.' },
  { question: `We rely on the insurer's rebuild calculator. Is that sufficient?`, answer: 'Online calculators carry no RICS regulation and provide no formal documentation of methodology. In a dispute, they offer no professional accountability. A RICS assessment does.' },
  { question: 'Can you assess multiple blocks under a single instruction?', answer: 'Yes. We specialise in portfolio assessments for managing agents with multiple mandates, providing individual reports for each block and a consolidated summary.' },
  { question: 'How quickly do you turn around a desktop assessment?', answer: 'Standard desktop assessments are delivered within 48 hours of instruction.' },
]

export default function ManagingAgentsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1d1d1f] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">Managing Agents</p>
            <h1 className="font-headline font-semibold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Insurance valuations<br />for managing agents.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Where a lease covenants insurance at full reinstatement cost, the managing agent who arranges that cover carries the liability when the figure is wrong.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>

      {/* THE EXPOSURE */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Your Exposure</p>
              <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                What happens when you get it wrong.
              </h2>
              <p className="text-[#6e6e73] text-base leading-relaxed">
                Underinsurance discovered at the point of claim exposes managing agents to leaseholder claims for the shortfall. The condition of average applies to most UK policies — reducing the insurer payout in direct proportion to the degree of underinsurance.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {[
                { title: 'Condition of average applies', desc: 'If the building is 20% underinsured, the insurer can reduce the payout by 20% — even on a partial claim. Standard in UK policies. Routinely enforced.' },
                { title: 'Leaseholders can pursue you', desc: 'If leaseholders suffer a loss arising from inadequate cover you arranged, they may bring a claim against the managing agent for the shortfall.' },
                { title: 'Build costs move fast', desc: 'UK construction costs rose over 30% between 2020 and 2024. A valuation from three years ago is almost certainly out of date.' },
                { title: 'Calculators offer no protection', desc: 'Insurer rebuild tools carry no professional accountability. In a dispute, only a RICS-regulated report is accepted as evidence.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-[#f5f5f7] p-6">
                  <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                  <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-8">The Solution</p>
          <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            One instruction. Full compliance.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed mb-12">
            Our RICS-regulated assessment gives you a documented, professional figure that satisfies your lease obligation, your insurer, and your leaseholders. Delivered in 48 hours. Accepted without challenge.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              { n: '48 hrs', label: 'standard desktop turnaround' },
              { n: '100%', label: 'reports accepted by UK insurers' },
              { n: '3 yrs', label: 'compliance from a single 3-Year instruction' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-white p-8">
                <p className="font-headline font-semibold text-[#1d1d1f] leading-none mb-3"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{n}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact#contact-form" className="btn-shine">Instruct Us</Link>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Portfolio Service</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Managing multiple blocks?
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              We provide consolidated portfolio assessments for managing agents with multiple mandates — individual reports for each block, a portfolio summary, and a managed annual update service under our 3-Year Protection plan.
            </p>
            <Link href="/contact#contact-form" className="link-amber">Discuss your portfolio →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Individual block reports', desc: 'Each property gets its own RICS-regulated assessment with a methodology statement.' },
              { title: 'Portfolio summary', desc: 'A consolidated schedule showing every asset, figure, and assessment date.' },
              { title: 'Annual indexation', desc: 'Each figure updated annually using live BCIS data under the 3-Year plan.' },
              { title: 'Single contact', desc: 'One dedicated surveyor manages your entire portfolio instruction.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f5f7] p-6">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Protect your agency. Instruct us today." />
      <FaqSection description="Common questions from managing agents about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
