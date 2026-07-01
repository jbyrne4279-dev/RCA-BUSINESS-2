import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Asset RICS Valuations',
  description: 'RICS-regulated reinstatement cost assessments for property portfolios. Consolidated reports with individual asset schedules. Annual indexation available.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
}

const faqItems = [
  { question: 'How many properties can you assess under a single portfolio instruction?', answer: 'We have no maximum. Portfolio instructions typically cover between 5 and 200 properties. We provide a consolidated quote covering all assets under a single engagement letter.' },
  { question: 'What does a portfolio report include?', answer: 'Each property receives its own RICS-regulated assessment report. The portfolio summary schedule presents all assets, their reinstatement figures, assessment dates, and recommended reassessment dates in a single document.' },
  { question: 'Can you manage the annual update process across our portfolio?', answer: 'Yes. Under our 3-Year Protection plan, we manage annual BCIS indexation updates across your entire portfolio and deliver updated reports before each renewal date.' },
  { question: 'Do you work with fund managers and institutional investors?', answer: 'Yes. We provide portfolio assessments for institutional property funds, real estate investment managers, and family offices holding multi-asset UK property portfolios.' },
]

export default function PortfolioPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Portfolio Assessment</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Every asset.<br />One instruction.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Individual RICS-regulated reports per property, consolidated summary schedule, and managed annual indexation — under a single engagement.
          </p>
          <Link href="/contact#contact-form" className="btn-shine">Request Portfolio Quote</Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">The Problem</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              One wrong figure compounds across a portfolio.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed">
              For investors and fund managers holding multiple assets, underinsurance risk replicates across every property with an out-of-date reinstatement figure. A systematic portfolio assessment eliminates the exposure simultaneously, with a single documented compliance record.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Individual property reports', desc: 'Each asset assessed independently with its own RICS methodology statement and documented basis.' },
              { title: 'Consolidated portfolio schedule', desc: 'All assets, figures, assessment dates, and recommended review dates in a single broker-ready document.' },
              { title: 'Managed annual updates', desc: 'Annual BCIS indexation applied across all assets under our 3-Year Protection plan.' },
              { title: 'Single point of contact', desc: 'One dedicated surveyor manages your full portfolio from instruction through to annual updates.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f5f7] p-6">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[#1d1d1f] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Portfolio Clients</p>
            <h2 className="font-headline font-semibold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>Who we work with.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Managing Agents', desc: 'Portfolio assessments across all blocks under management — individual reports and consolidated schedule.' },
              { title: 'Institutional Investors', desc: 'Property funds and REITs requiring consistent RICS-regulated assessments across all UK assets.' },
              { title: 'Family Offices', desc: 'Private property portfolios requiring thorough, discreet, and professionally accountable assessments.' },
              { title: 'Freeholders', desc: 'Multiple freehold titles assessed under a single consolidated instruction with annual update service.' },
              { title: 'Asset Managers', desc: 'Third-party managed portfolios where the fund requires independent RICS-regulated reinstatement figures.' },
              { title: 'RTM Companies', desc: 'RTM companies who have taken over insurance responsibility and require initial assessments across multiple blocks.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/[0.04] p-6">
                <p className="font-semibold text-white text-sm mb-2">{title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
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
