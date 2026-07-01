import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Asset RICS Valuations',
  description: 'RICS-regulated reinstatement cost assessments for property portfolios. Consolidated reports with individual asset schedules. Annual indexation available.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
}

const faqItems = [
  { question: 'How many properties can you assess under a single portfolio instruction?', answer: 'There is no maximum. Portfolio instructions typically cover between 5 and 200 properties. We issue a consolidated quote covering all assets under a single engagement letter.' },
  { question: 'What does a portfolio report include?', answer: 'Each property receives its own RICS-regulated assessment report. The portfolio summary schedule sets out all assets, their reinstatement figures, assessment dates and recommended reassessment dates in a single broker-ready document.' },
  { question: 'Can you manage the annual update process across our portfolio?', answer: 'Yes. Under our 3-Year Protection plan, we manage annual BCIS indexation updates across the entire portfolio and deliver updated reports before each relevant renewal date.' },
  { question: 'Do you work with fund managers and institutional investors?', answer: 'Yes. We provide portfolio assessments for institutional property funds, real estate investment managers and family offices with multi-asset UK property portfolios.' },
]

export default function PortfolioPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Portfolio Assessment</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight mb-5">
              Every asset. One instruction.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Individual RICS-regulated reports per property, a consolidated summary schedule, and managed annual BCIS indexation, all under a single engagement.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request Portfolio Quote</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Individual property reports', desc: 'Each asset assessed individually, with its own RICS methodology statement and documented basis.' },
              { title: 'Consolidated portfolio schedule', desc: 'All assets, figures, assessment dates and recommended review dates consolidated in a single broker-ready document.' },
              { title: 'Managed annual updates', desc: 'Annual BCIS indexation applied across all assets under our 3-Year Protection plan.' },
              { title: 'Single point of contact', desc: 'A single dedicated surveyor manages the full portfolio from instruction to annual update.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-5 flex gap-3">
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

      {/* PROBLEM */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              One wrong figure compounds across a portfolio.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              For investors and fund managers holding multiple assets, underinsurance risk replicates across every property carrying an out-of-date reinstatement figure. A systematic portfolio assessment eliminates the exposure in a single instruction, producing a consolidated compliance record for the entire portfolio.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Portfolio Quote</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: '80%+', label: 'of UK blocks estimated to carry an inaccurate sum insured' },
              { n: '30%+', label: 'rise in UK construction costs 2020–2024' },
              { n: '3 yrs', label: 'RICS recommended review period for a formal assessment' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-white rounded-xl border border-[#dadce0] p-6 text-center">
                <p className="text-3xl font-bold text-[#202124] leading-none mb-3">{n}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#1a73e8]/20 text-[#7baaf7] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Portfolio Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Who we work with.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Managing Agents', desc: 'Portfolio assessments across all managed blocks. Individual reports and consolidated schedule.' },
              { title: 'Institutional Investors', desc: 'Property funds and REITs requiring consistent RICS-regulated assessments across all UK assets.' },
              { title: 'Family Offices', desc: 'Private portfolios requiring thorough, discreet and professionally accountable assessments.' },
              { title: 'Freeholders', desc: 'Multiple freehold titles assessed under a single consolidated instruction with annual update service.' },
              { title: 'Asset Managers', desc: 'Third-party managed portfolios where the fund requires independent RICS-regulated reinstatement figures.' },
              { title: 'RTM Companies', desc: 'RTM companies assuming insurance responsibility and requiring initial assessments across multiple blocks.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/[0.06] rounded-xl p-6">
                <p className="font-semibold text-white text-sm mb-2">{title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Request your portfolio quote." />
      <FaqSection description="Common questions about portfolio reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
