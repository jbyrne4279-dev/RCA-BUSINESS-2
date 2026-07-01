import Link from 'next/link'

export const metadata = {
  title: 'Top 5 Underinsurance Risks for Managing Agents | Cavendish & Rowe',
  description: 'The five most common underinsurance risks managing agents face, and the assessment type that eliminates each one.',
  alternates: { canonical: '/resources/top-risks-of-underinsurance-for-managing-agents' },
}

export default function TopRisksPage() {
  return (
    <main>
      <section className="bg-[#f8f9fa] pt-16 pb-12 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
            Top five underinsurance risks for managing agents.
          </h1>
          <p className="text-[#5f6368] text-lg leading-relaxed">And how to eliminate each one before it becomes a claim.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              n: '01',
              title: 'Using the developer’s original build cost figure',
              body: 'Many blocks are insured using the rebuild figure provided by the developer at the time of construction. This figure typically excludes demolition costs, debris removal, and professional fees, and is immediately out of date from the point of completion. After several years of index-linking, it can be substantially wrong. A RICS desktop assessment establishes the correct current figure from scratch.',
            },
            {
              n: '02',
              title: 'Relying on index-linking as a substitute for reassessment',
              body: 'Annual index-linking adjusts an existing figure. It does not validate it. If the underlying sum insured is wrong, index-linking perpetuates and compounds the error. RICS guidance requires a formal professional assessment at least every three years. Our 3-Year Protection plan provides the correct combination of base assessment and annual indexation.',
            },
            {
              n: '03',
              title: 'Using an insurer or online rebuild calculator',
              body: 'Insurer rebuild calculators are not RICS-regulated. They carry no professional accountability and provide no documented methodology. In any dispute about underinsurance, they offer no defence. Only a RICS-regulated reinstatement cost assessment creates the documented, professionally accountable basis that satisfies your lease obligation.',
            },
            {
              n: '04',
              title: 'Failing to account for building improvements',
              body: 'Where leaseholders have carried out significant improvements to their flats (high-specification kitchens, bathrooms, structural alterations), the reinstatement cost of the building increases. A figure calculated from the original specification will not capture this. Our assessments can include an allowance for internal improvements based on your records or a physical inspection.',
            },
            {
              n: '05',
              title: 'Not reassessing after significant construction cost inflation',
              body: 'UK construction costs rose by over 30% between 2020 and 2024, the sharpest sustained increase in decades. A RICS assessment from 2019 or earlier will be materially inadequate. Managing agents who have not instructed a reassessment since before 2020 should treat this as a priority at the next renewal.',
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-6">
              <span className="text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.2em] mt-1 shrink-0 w-8">{n}</span>
              <div>
                <h2 className="text-xl font-bold text-[#202124] leading-tight mb-3">{title}</h2>
                <p className="text-[#5f6368] text-base leading-relaxed">{body}</p>
              </div>
            </div>
          ))}

          <div className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-8">
            <p className="font-semibold text-[#202124] text-sm mb-3">Eliminate all five risks in one instruction.</p>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-6">A RICS-regulated reinstatement cost assessment from Cavendish &amp; Rowe establishes the correct figure from scratch, using live BCIS data and a documented professional methodology, and our 3-Year Protection plan keeps you compliant without having to re-instruct annually.</p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
