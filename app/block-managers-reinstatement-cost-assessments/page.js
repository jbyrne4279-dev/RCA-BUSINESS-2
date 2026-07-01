import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | RCA Ltd',
  description: 'RICS-regulated reinstatement cost assessments for block managers and their clients. Protect your mandate, satisfy leaseholders, and stay compliant at every renewal.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
}

const faqItems = [
  { question: 'Why do block managers need a RICS assessment rather than an insurer tool?', answer: 'Insurer rebuild calculators and online tools carry no professional accountability and no RICS regulation. In any dispute about underinsurance, they offer no defence. A RICS-regulated reinstatement cost assessment provides a documented, professionally accountable figure that satisfies your lease obligation and protects your mandate.' },
  { question: 'How do we order assessments for multiple blocks?', answer: 'Contact us with your portfolio details. We will provide a consolidated quote covering all blocks, with individual reports for each property and a portfolio summary schedule. We can also manage renewal updates across all sites under our 3-Year Protection plan.' },
  { question: 'What information do you need to get started?', answer: 'Property address, approximate gross internal floor area, construction type (traditional brick, concrete frame, steel frame, etc.), number of storeys, and any specialist features (listed status, basement, unusual specification). We provide a simple instruction form once you confirm the instruction.' },
  { question: 'Can leaseholders challenge the assessment?', answer: 'A RICS-regulated report is the standard of evidence accepted by UK courts, tribunals, and the Property Ombudsman. A leaseholder who disputes the figure would need to obtain their own RICS-regulated counter-assessment — and the methodology of our report stands up to that level of scrutiny.' },
]

export default function BlockManagersPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Block Managers</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-headline text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
              Reinstatement assessments<br />for block managers.
            </h1>
            <div>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Block management firms carrying insurance obligations for multiple residential blocks need assessments they can rely on — consistent, RICS-compliant, and accepted at renewal without question.
              </p>
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] inline-block">
                Request an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">Your Obligation</p>
            <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight">
              The lease puts it on you.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[#374151] text-lg leading-relaxed mb-10">
              Most residential long leases require the party responsible for buildings insurance to maintain it at full reinstatement cost. For block managers acting under a management agreement, that obligation transfers directly to them. An inaccurate reinstatement figure — discovered when a claim is reduced under the condition of average — exposes the block manager to a claim by the leaseholders for the gap.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e7eb] border border-[#e5e7eb]">
              {[
                { n: '80%+', label: 'of UK blocks carry an inaccurate reinstatement figure' },
                { n: '30%+', label: 'rise in UK build costs since 2020 (BCIS)' },
                { n: '3 yrs', label: 'maximum recommended interval between formal assessments' },
              ].map(({ n, label }) => (
                <div key={n} className="p-8 text-center">
                  <p className="font-headline text-4xl font-semibold text-[#111318] mb-2 leading-none">{n}</p>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR BLOCK MANAGERS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">What We Offer</p>
          <h2 className="font-headline text-4xl font-semibold text-[#111318] mb-12">Designed for block management firms.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
            {[
              {
                n: '01',
                title: 'Per-Block Assessment',
                desc: 'Individual RICS-regulated reinstatement cost assessment for each block under your management. Desktop delivery in 48 hours. On-site available for listed or complex properties.',
                cta: 'Instruct single block',
                href: '/contact?service=desktop#contact-form',
              },
              {
                n: '02',
                title: 'Portfolio Assessment',
                desc: 'Consolidated assessment across all blocks under your management. Individual reports per property, portfolio summary schedule, and single-invoice billing for the whole instruction.',
                cta: 'Discuss your portfolio',
                href: '/contact#contact-form',
              },
              {
                n: '03',
                title: '3-Year Protection',
                desc: 'Single instruction covering base assessment plus three years of annual BCIS-indexed renewal reports — delivered before each renewal date, across your whole managed portfolio if required.',
                cta: 'Enquire about 3-year',
                href: '/contact?service=3year#contact-form',
              },
            ].map(({ n, title, desc, cta, href }) => (
              <div key={n} className="bg-white p-10 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-headline text-5xl font-semibold text-[#e5e7eb] leading-none">{n}</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#111318] mb-4">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed flex-1 mb-8">{desc}</p>
                <Link href={href} className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c47c1e] hover:text-[#111318] transition-colors border-b border-[#c47c1e]/40 pb-1 inline-block">
                  {cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Every Report Includes</p>
          <h2 className="font-headline text-4xl font-semibold text-white mb-12">The same standard. Every time.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {[
              { title: 'RICS-regulated assessment', desc: 'Conducted by or under the supervision of a RICS-registered member — the standard accepted by UK insurers and courts.' },
              { title: 'Live BCIS cost data', desc: 'Reinstatement figures calculated from current Building Cost Information Service construction cost indices.' },
              { title: 'Broker-ready format', desc: 'Formatted for direct submission to your insurer or broker — no amendments required.' },
              { title: 'Professional indemnity cover', desc: 'Comprehensive PI insurance on every instruction. Your leaseholders have a route to redress if we get it wrong. We never do.' },
              { title: 'Named surveyor', desc: 'One contact manages your instruction from receipt to delivery — across every block in your portfolio if required.' },
              { title: 'Full methodology statement', desc: 'Documented basis of assessment, floor area analysis, and construction cost breakdown — defensible at tribunal.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#111318] p-8">
                <p className="font-semibold text-white text-sm mb-3">{title}</p>
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
