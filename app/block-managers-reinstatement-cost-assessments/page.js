import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | RCA Ltd',
  description: 'RICS-regulated reinstatement cost assessments for block managers. Consistent, compliant, accepted at renewal without question.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
}

const faqItems = [
  { question: 'Why do block managers need a RICS assessment rather than an insurer tool?', answer: 'Insurer rebuild calculators carry no professional accountability and no RICS regulation. In any dispute about underinsurance, they offer no defence. A RICS-regulated assessment provides a documented, professionally accountable figure.' },
  { question: 'How do we order assessments for multiple blocks?', answer: 'Contact us with your portfolio details. We will provide a consolidated quote covering all blocks, with individual reports for each property and a portfolio summary schedule.' },
  { question: 'What information do you need to get started?', answer: 'Property address, approximate gross internal floor area, construction type, number of storeys, and any specialist features (listed status, unusual specification). We provide a simple instruction form once you confirm.' },
  { question: 'Can leaseholders challenge the assessment?', answer: 'A RICS-regulated report is the standard of evidence accepted by UK courts, tribunals, and the Property Ombudsman. Our reports stand up to that level of scrutiny.' },
]

export default function BlockManagersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Block Managers</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Reinstatement assessments for block managers.
            </h1>
          </div>
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Consistent, RICS-compliant assessments across every block under your management, accepted at renewal without question.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>

      {/* OBLIGATION */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Your Obligation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The lease puts it on you.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Most residential long leases require the party responsible for buildings insurance to maintain it at full reinstatement cost. For block managers acting under a management agreement, that obligation transfers directly to them.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get Started</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: '80%+', label: 'of UK blocks carry an inaccurate reinstatement figure' },
              { n: '30%+', label: 'rise in UK build costs since 2020 (BCIS)' },
              { n: '3 yrs', label: 'maximum recommended interval between formal assessments' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-6 text-center">
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
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              Designed for block management firms.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Per-Block Assessment', desc: 'Individual RICS-regulated assessment for each block. Desktop in 48 hours. On-site available for listed or complex properties.', href: '/contact?service=desktop#contact-form' },
              { title: 'Portfolio Assessment', desc: 'Consolidated assessment across all blocks. Individual reports per property, portfolio summary schedule, single-invoice billing.', href: '/contact#contact-form' },
              { title: '3-Year Protection', desc: 'Base assessment plus three years of annual BCIS-indexed renewal reports, delivered before each renewal date.', href: '/contact?service=3year#contact-form' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-8 flex flex-col">
                <h3 className="text-xl font-bold text-[#202124] mb-4">{title}</h3>
                <p className="text-[#5f6368] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="link-amber text-sm">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERY REPORT */}
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#1a73e8]/20 text-[#7baaf7] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Every Report</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              The same standard. Every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'RICS-regulated', desc: 'Conducted by or under the supervision of a RICS-registered member.' },
              { title: 'Live BCIS data', desc: 'Reinstatement figures from current Building Cost Information Service indices.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct submission, no amendments required.' },
              { title: 'PI cover', desc: 'Comprehensive professional indemnity on every instruction.' },
              { title: 'Named surveyor', desc: 'One contact manages your instruction across your entire portfolio.' },
              { title: 'Full methodology', desc: 'Documented basis of assessment, defensible at tribunal.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/[0.06] rounded-xl p-6">
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
