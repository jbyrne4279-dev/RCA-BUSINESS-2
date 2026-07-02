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
  { question: 'How many properties can you cover under a single portfolio instruction?', answer: 'There is no maximum. Portfolio instructions typically cover between 5 and 200 properties. We issue a consolidated quote and a single engagement letter - one instruction covers the entire portfolio.' },
  { question: 'What exactly does the portfolio summary schedule contain?', answer: 'The schedule sets out every asset, its RICS-regulated reinstatement figure, the assessment date and the recommended reassessment date - all in a single broker-ready document that sits alongside the individual property reports.' },
  { question: 'Is this just multiple desktop assessments bundled together?', answer: 'No. The portfolio service includes a consolidated summary schedule, a named surveyor managing the full instruction, single-invoice billing, and - under the 3-Year Protection plan - proactive annual indexation updates delivered before each renewal. It is a managed service, not a bulk order.' },
  { question: 'How does the 3-Year Protection plan work for a portfolio?', answer: 'We carry out the full RICS base assessment in year one, then manage annual BCIS indexation updates across the entire portfolio and deliver updated reports before each relevant renewal date. You do not need to re-instruct.' },
  { question: 'Do you work with institutional investors and fund managers?', answer: 'Yes. We provide portfolio assessments for property funds, REITs, real estate investment managers and family offices with multi-asset UK portfolios.' },
]

export default function PortfolioPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Portfolio Assessment</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Every asset. One instruction. Zero repeat admin.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              A managed RICS assessment service for property portfolios - individual reports per asset, a consolidated summary schedule, and annual BCIS indexation handled for you, all under a single engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request Portfolio Quote</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(10,181,168,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_1477785304.jpeg"
              alt="Portfolio reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Individual RICS reports per asset. One consolidated instruction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0faf9' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-8">
              Managing multiple assets separately costs more than money.
            </h2>
            <Link href="/contact#contact-form" className="btn-shine">Get a Portfolio Quote</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: 'Most', label: 'UK blocks carry an inaccurate sum insured' },
              { n: '~40%', label: 'rise in UK construction costs since 2020 (BCIS)' },
              { n: '3 yrs', label: 'RICS-recommended maximum between formal assessments' },
            ].map(({ n, label }) => (
              <div key={n} className="stat-card p-6 text-center">
                <p className="text-3xl font-bold text-[#0d1b3e] leading-none mb-3">{n}</p>
                <p className="text-[#64748b] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ background: '#0d1b3e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-dark">Portfolio Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Built for clients who manage at scale.</h2>
            <p className="text-white/60 text-base mt-4">One consolidated instruction covers every client type below.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Managing Agents', href: '/managing-agents-insurance-valuations' },
              { title: 'Institutional Investors', href: '/contact' },
              { title: 'Family Offices', href: '/contact' },
              { title: 'Freeholders', href: '/freeholders-leaseholders' },
              { title: 'Asset Managers', href: '/contact' },
              { title: 'RTM Companies', href: '/managing-agents-insurance-valuations' },
            ].map(({ title, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'#e8f5f4'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#94a3b8" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-2">{title}</p>
                  <Link href={href} className="text-[#0ab5a8] text-xs font-semibold hover:text-[#087f7a] transition-colors">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Consolidate your portfolio. One instruction." />
      <FaqSection description="Common questions about portfolio reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
