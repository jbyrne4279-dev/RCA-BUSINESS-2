import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaBanner from '../components/CtaBanner'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Asset RICS Valuations',
  description: 'RICS-regulated reinstatement cost assessments for property portfolios. Consolidated reports with individual asset schedules. Annual indexation available.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://reinstatementcostassessment.org/portfolio-reinstatement-assessments',
    siteName: 'Stearling Reinstatement',
    title: 'Portfolio Reinstatement Cost Assessments | Multi-Asset RICS Valuations | Stearling Reinstatement',
    description: 'RICS-regulated reinstatement cost assessments for property portfolios. One instruction, consolidated reports, individual asset schedules. Annual BCIS indexation included.',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'Portfolio reinstatement cost assessments - Stearling Reinstatement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Reinstatement Cost Assessments | Multi-Asset RICS Valuations',
    description: 'RICS-regulated reinstatement cost assessments for property portfolios. One instruction covers every asset with consolidated reports and annual indexation.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
}

const faqItems = [
  { question: 'How many properties can be covered under a single portfolio reinstatement cost assessment instruction?', answer: 'There is no maximum. Portfolio reinstatement cost assessment instructions typically cover between 5 and 200 properties. We issue a consolidated quote and a single engagement letter one instruction, one named surveyor, one invoice covering every reinstatement cost assessment in the portfolio.' },
  { question: 'What does the portfolio reinstatement cost assessment summary schedule contain?', answer: 'The schedule sets out every asset, its RICS-regulated reinstatement cost figure (rebuild cost), the assessment date and the recommended reassessment date all in a single broker-ready document that sits alongside the individual reinstatement cost assessment reports for each property.' },
  { question: 'Is a portfolio reinstatement cost assessment just multiple desktop reports bundled together?', answer: 'No. The portfolio reinstatement cost assessment service includes a consolidated summary schedule, a named surveyor managing the full instruction, single-invoice billing, and under the 3-Year Protection Plan proactive annual BCIS-indexed rebuild cost updates delivered before each renewal date. It is a fully managed service, not a bulk order of individual assessments.' },
  { question: 'How does the 3-Year Protection Plan work for a portfolio reinstatement cost assessment?', answer: 'We carry out full RICS-regulated reinstatement cost assessments across the portfolio in year one, then manage annual BCIS indexation rebuild cost updates and deliver updated reports before each relevant renewal date. You do not need to re-instruct the ongoing compliance is handled for you.' },
  { question: 'Do you provide portfolio reinstatement cost assessments for institutional investors and fund managers?', answer: 'Yes. We provide portfolio reinstatement cost assessments and rebuild cost assessments for property funds, REITs, real estate investment managers and family offices with multi-asset UK portfolios, with individual RICS-regulated reports per property and a consolidated portfolio summary.' },
]

export default function PortfolioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio Assessments', item: 'https://reinstatementcostassessment.org/portfolio-reinstatement-assessments' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              Right-size every <span className="blue-keyword">declared value</span> across your portfolio.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              A managed RICS assessment service for property portfolios - individual reports per asset, a consolidated summary schedule, and annual BCIS indexation handled for you, all under a single engagement.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request Portfolio Quote</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_1477785304.jpeg"
              alt="Portfolio reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Individual RICS reports per asset. One consolidated instruction.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* 2. SECTION A - text left, stat card right */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text left */}
          <div>
            <span className="badge badge-blue">Portfolio Assessments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-4 mb-6">
              <span className="blue-keyword">Inconsistent figures</span> across a portfolio amplify every risk.
            </h2>
            <ul className="tick-list space-y-4 mb-8">
              {[
                { title: 'Inconsistent declared figures', desc: 'Different assets instructed at different times produce figures assessed against different cost benchmarks - leaving gaps that only become visible at claim.' },
                { title: 'Missed renewal cycles', desc: 'Managing renewal dates across a multi-asset portfolio without a system means assessments go stale. RICS recommends a formal review at least every three years.' },
                { title: 'PI exposure at scale', desc: 'Managing agents and asset managers who arrange insurance for multiple assets carry a compounding professional indemnity exposure if any declared value is materially incorrect.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="tick-icon mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{background:'rgba(0,87,255,0.12)'}}>
                    <svg className="w-3 h-3" fill="none" stroke="#0057FF" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-0.5">{title}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/contact#contact-form" className="btn-shine">Get a Portfolio Quote</Link>
          </div>

          {/* Stat card right */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-6">Portfolio by the numbers</p>
            <div className="space-y-6">
              {[
                { n: '1', label: 'Single instruction', desc: 'One engagement letter. One named surveyor. One invoice covering every asset.' },
                { n: '1', label: 'One schedule', desc: 'A consolidated broker-ready summary listing every property, figure and review date.' },
                { n: '8', label: 'Rolling cycle', desc: 'Annual BCIS indexation managed proactively - no re-instructing, no missed renewals.' },
              ].map(({ n, label, desc }) => (
                <div key={label} className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white" style={{background:'linear-gradient(135deg, #0057FF, #0040CC)'}}>
                    {n}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{label}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION B - card left, text right */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Deliverables card left */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-6">What a portfolio instruction delivers</p>
            <ul className="tick-list space-y-5">
              {[
                { title: 'Individual RICS report per property', desc: 'Each asset receives its own full reinstatement cost assessment report, signed off by a RICS-regulated surveyor.' },
                { title: 'Consolidated portfolio schedule', desc: 'A single broker-ready document listing every property, its assessed reinstatement cost, assessment date and recommended review date.' },
                { title: 'Managed renewal cycle', desc: 'Under the 3-Year Protection plan we track every renewal date across the portfolio and deliver updated figures proactively - before each renewal, not after.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-4 items-start">
                  <span className="tick-icon shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center" style={{background:'rgba(0,87,255,0.12)'}}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#0057FF" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* How it works text right */}
          <div>
            <span className="badge badge-blue">Portfolio Assessments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-4 mb-6">
              One instruction. <span className="blue-keyword">Managed</span> from start to every renewal.
            </h2>
            <ol className="circuit-steps space-y-5 mb-8">
              {[
                { step: '01', title: 'Submit your asset list', desc: 'Send us a schedule of properties - address, type, approximate floor area. We provide a consolidated quote within one business day.' },
                { step: '02', title: 'Single engagement letter', desc: 'One agreement covers every asset. We allocate a named surveyor as your single point of contact for the entire portfolio.' },
                { step: '03', title: 'RICS assessments carried out', desc: 'Desktop or on-site assessments are completed for each property. Individual reports are issued as they complete, not held until the last one is done.' },
                { step: '04', title: 'Consolidated schedule issued', desc: 'A broker-ready portfolio schedule is delivered alongside the final individual report - ready to pass straight to your insurer or broker.' },
              ].map(({ step, title, desc }) => (
                <li key={step} className="flex gap-4 items-start step-reveal-item">
                  <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{background:'linear-gradient(135deg, #0057FF, #0040CC)'}}>
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm mb-0.5">{title}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/contact#contact-form" className="btn-shine">Start Your Portfolio Instruction</Link>
          </div>

        </div>
      </section>

      {/* 4. 3-COL FEATURE CARDS */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Portfolio Assessments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-4">
              Everything managed <span className="blue-keyword">under one roof</span>.
            </h2>
            <p className="text-[#64748b] text-base mt-4 max-w-xl mx-auto">
              A portfolio instruction is not a bulk order - it is a managed service with a single point of contact, consolidated reporting and a proactive renewal cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Single Instruction',
                desc: 'One engagement letter and one named surveyor cover every asset in your portfolio. No need to place separate instructions for each property.',
                href: '/contact#contact-form',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                ),
              },
              {
                title: 'Consolidated Schedule',
                desc: 'A single broker-ready portfolio schedule lists every property, its RICS-regulated reinstatement cost, the assessment date and the next recommended review date.',
                href: '/contact#contact-form',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
                  </svg>
                ),
              },
              {
                title: 'Managed Cycle',
                desc: 'Under the 3-Year Protection plan we manage annual BCIS indexation across the whole portfolio and deliver updated figures ahead of every renewal date - no re-instructing required.',
                href: '/contact#contact-form',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                  </svg>
                ),
              },
            ].map(({ title, desc, href, icon }) => (
              <div key={title} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7" style={{boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,87,255,0.10)'}}>
                  {icon}
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="link-arrow cta-flash">
                  Find out more ?
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />

      <ContactSection heading="Consolidate your portfolio. One instruction." />
      <FaqSection description="Common questions about portfolio reinstatement cost assessments." items={faqItems} />
    </main>
  )
}




















