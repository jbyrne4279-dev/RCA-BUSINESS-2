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
      <section className="bg-[#1d1d1f] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">Block Managers</p>
            <h1 className="font-headline font-semibold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Reinstatement assessments<br />for block managers.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Consistent, RICS-compliant assessments across every block under your management — accepted at renewal without question.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>

      {/* OBLIGATION */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Your Obligation</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              The lease puts it on you.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
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
              <div key={n} className="bg-[#f5f5f7] p-6 text-center">
                <p className="font-headline font-semibold text-[#1d1d1f] leading-none mb-3"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{n}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">What We Offer</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Designed for block management firms.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Per-Block Assessment', desc: 'Individual RICS-regulated assessment for each block. Desktop in 48 hours. On-site available for listed or complex properties.', href: '/contact?service=desktop#contact-form' },
              { title: 'Portfolio Assessment', desc: 'Consolidated assessment across all blocks. Individual reports per property, portfolio summary schedule, single-invoice billing.', href: '/contact#contact-form' },
              { title: '3-Year Protection', desc: 'Base assessment plus three years of annual BCIS-indexed renewal reports — delivered before each renewal date.', href: '/contact?service=3year#contact-form' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white p-8 flex flex-col">
                <h3 className="font-headline text-2xl font-semibold text-[#1d1d1f] mb-4">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="link-amber">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERY REPORT */}
      <section className="bg-[#1d1d1f] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Every Report</p>
            <h2 className="font-headline font-semibold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              The same standard. Every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'RICS-regulated', desc: 'Conducted by or under the supervision of a RICS-registered member.' },
              { title: 'Live BCIS data', desc: 'Reinstatement figures from current Building Cost Information Service indices.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct submission — no amendments required.' },
              { title: 'PI cover', desc: 'Comprehensive professional indemnity on every instruction.' },
              { title: 'Named surveyor', desc: 'One contact manages your instruction across your entire portfolio.' },
              { title: 'Full methodology', desc: 'Documented basis of assessment — defensible at tribunal.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/[0.04] p-6">
                <p className="font-semibold text-white text-sm mb-2">{title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
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
