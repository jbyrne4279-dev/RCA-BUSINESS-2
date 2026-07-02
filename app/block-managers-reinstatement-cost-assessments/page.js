import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | Cavendish & Rowe',
  description: 'RICS-regulated reinstatement cost assessments for block managers. Consistent, compliant, accepted at renewal without question.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
}

const faqItems = [
  { question: 'Why do block managers need a RICS assessment rather than an insurer tool?', answer: 'Insurer rebuild calculators carry no professional accountability and no RICS regulation. In any underinsurance dispute, they provide no documented methodology and no defence. A RICS-regulated assessment delivers a professionally accountable figure that stands up to challenge.' },
  { question: 'How do we order assessments for multiple blocks?', answer: 'Contact us with your portfolio details. We provide a consolidated quote covering all blocks, with individual reports per property and a portfolio summary schedule under a single engagement.' },
  { question: 'What information do you need to get started?', answer: 'Property address, approximate gross internal floor area, construction type, number of storeys, and any specialist features such as listed status or unusual specification. We issue a simple instruction form on confirmation.' },
  { question: 'Can leaseholders challenge the assessment?', answer: 'A RICS-regulated report is the standard of evidence accepted by UK courts, tribunals and the Property Ombudsman. Our reports are produced to that standard and are defensible to that level of scrutiny.' },
]

export default function BlockManagersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Block Managers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] leading-[1.1] mb-5">
              Reinstatement assessments for block managers.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              RICS-regulated assessments across every block under your management. Consistent, documented, and accepted at renewal without challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image
              src="/AdobeStock_208633670.jpeg"
              alt="Block manager reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/90 text-sm font-medium">RICS-regulated figures across your entire managed portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBLIGATION */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">Your Obligation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The lease puts it on you.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Most residential long leases require the party responsible for buildings insurance to maintain cover at full reinstatement cost. Where a block manager acts under a management agreement, that obligation transfers directly. Failure to comply exposes the manager to personal liability.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get Started</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: 'Most', label: 'UK blocks carry an inaccurate reinstatement figure' },
              { n: 'Higher', label: 'UK build costs than pre-pandemic levels, after significant rises 2020–2023 (BCIS)' },
              { n: '3 yrs', label: 'maximum recommended interval between formal assessments' },
            ].map(({ n, label }) => (
              <div key={n} className="stat-card p-6 text-center">
                <p className="text-3xl font-bold text-[#202124] leading-none mb-3">{n}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              Designed for block management firms.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col">
              <p className="text-xs text-[#5f6368] uppercase tracking-wider font-semibold mb-2">24-hour turnaround</p>
              <h3 className="font-bold text-2xl text-[#202124] mb-6">Per-Block Assessment</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Individual RICS-regulated report', 'Desktop delivered in 24 hours', 'On-site available for complex properties', 'Broker-ready format', 'PI insured'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3c4043]">
                    <svg className="w-4 h-4 shrink-0 text-[#1a73e8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=desktop#contact-form" className="border border-[#dadce0] text-[#202124] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors block">
                Instruct Per-Block Assessment →
              </Link>
            </div>

            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col">
              <p className="text-xs text-[#5f6368] uppercase tracking-wider font-semibold mb-2">Single instruction</p>
              <h3 className="font-bold text-2xl text-[#202124] mb-6">Portfolio Assessment</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Consolidated portfolio instruction', 'Individual report per property', 'Portfolio summary schedule', 'Single-invoice billing', 'Named surveyor throughout'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3c4043]">
                    <svg className="w-4 h-4 shrink-0 text-[#1a73e8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact#contact-form" className="border border-[#dadce0] text-[#202124] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors block">
                Request Portfolio Quote →
              </Link>
            </div>

            <div className="rounded-2xl p-7 flex flex-col relative" style={{background:'#4a5568'}}>
              <span className="absolute top-5 right-5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{color:'rgba(255,255,255,0.55)'}}>Best value</p>
              <h3 className="font-bold text-2xl text-white mb-6">3-Year Protection</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Full base assessment year one', 'Annual BCIS-indexed updates', 'Renewal-ready reports', 'Three-year RICS compliance', 'Fully managed service'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{color:'rgba(255,255,255,0.85)'}}>
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=3year#contact-form" className="bg-white font-semibold text-sm px-5 py-3 rounded-xl text-center hover:bg-white/90 transition-colors block" style={{color:'#4a5568'}}>
                Enquire About 3-Year Plan →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* EVERY REPORT */}
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-dark">Every Report</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              The same standard. Every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'RICS-regulated', desc: 'Conducted by or under the direct supervision of a RICS-registered member.' },
              { title: 'Live BCIS data', desc: 'Reinstatement figures derived from current Building Cost Information Service indices.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct broker submission. No amendments required.' },
              { title: 'PI cover', desc: 'Comprehensive professional indemnity cover on every instruction.' },
              { title: 'Named surveyor', desc: 'A single named contact manages your instruction across your full portfolio.' },
              { title: 'Full methodology', desc: 'Fully documented basis of assessment. Defensible at tribunal.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card-dark p-6">
                <p className="font-semibold text-white text-sm mb-2">{title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Instruct us for your portfolio." />
      <FaqSection description="Questions from block management firms about reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
