import Link from 'next/link'
import Image from 'next/image'
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
      <section className="hero-bg py-16 md:py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Portfolio Assessment</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-5">
              Every asset. One instruction.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Individual RICS-regulated reports per property, a consolidated summary schedule, and managed annual BCIS indexation, all under a single engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request Portfolio Quote</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image
              src="/AdobeStock_1477785304.jpeg"
              alt="Portfolio reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/90 text-sm font-medium">Individual RICS reports per asset. One consolidated instruction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Problem</span>
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
              { n: 'Most', label: 'UK blocks estimated to carry an inaccurate sum insured' },
              { n: 'Higher', label: 'UK construction costs than pre-pandemic levels, after significant rises 2020–2023 (BCIS)' },
              { n: '3 yrs', label: 'RICS recommended review period for a formal assessment' },
            ].map(({ n, label }) => (
              <div key={n} className="stat-card p-6 text-center">
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
            <span className="badge badge-dark">Portfolio Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Who we work with.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Managing Agents', desc: 'Portfolio assessments across all managed blocks. Individual reports and consolidated schedule.', href: '/managing-agents-insurance-valuations' },
              { title: 'Institutional Investors', desc: 'Property funds and REITs requiring consistent RICS-regulated assessments across all UK assets.', href: '/contact' },
              { title: 'Family Offices', desc: 'Private portfolios requiring thorough, discreet and professionally accountable assessments.', href: '/contact' },
              { title: 'Freeholders', desc: 'Multiple freehold titles assessed under a single consolidated instruction with annual update service.', href: '/freeholders-leaseholders' },
              { title: 'Asset Managers', desc: 'Third-party managed portfolios where the fund requires independent RICS-regulated reinstatement figures.', href: '/contact' },
              { title: 'RTM Companies', desc: 'RTM companies assuming insurance responsibility and requiring initial assessments across multiple blocks.', href: '/managing-agents-insurance-valuations' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'#f1f3f9'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#9aa7bd" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed mb-3">{desc}</p>
                  <Link href={href} className="text-[#1a73e8] text-xs font-semibold hover:text-[#1254b5] transition-colors">Learn more →</Link>
                </div>
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
