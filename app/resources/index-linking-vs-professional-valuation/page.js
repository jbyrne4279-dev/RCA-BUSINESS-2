import Link from 'next/link'

export const metadata = {
  title: 'Index-Linking vs Professional Revaluation | Cavendish & Rowe',
  description: 'Annual index-linking adjusts your sum insured but does not replace a RICS assessment. Here is what the difference means for managing agents and freeholders.',
  alternates: { canonical: '/resources/index-linking-vs-professional-valuation' },
}

export default function IndexLinkingPage() {
  return (
    <main>
      <section className="bg-[#f8f9fa] pt-16 pb-12 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Guide</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
            Index-linking vs professional revaluation.
          </h1>
          <p className="text-[#5f6368] text-lg leading-relaxed">What the distinction means for liability as a managing agent or freeholder.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-10 text-[#3c4043] text-base leading-relaxed">

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">What Is Index-Linking?</p>
            <p>Index-linking adjusts a building&rsquo;s sum insured each year by a percentage factor, typically derived from the insurer&rsquo;s own construction cost index or the BCIS All-In Tender Price Index. The purpose is to ensure the sum insured tracks build cost inflation between formal assessments.</p>
            <p className="mt-4">Most block buildings insurance policies apply index-linking automatically at renewal. It is a useful interim measure, but it is not a substitute for a RICS reinstatement cost assessment. Treating the two as equivalent creates a specific and material liability for managing agents and freeholders.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">What Index-Linking Cannot Do</p>
            <p>Index-linking adjusts the existing sum insured by a percentage. It does not re-examine whether the underlying figure was correct. If the original reinstatement figure derived from a developer&rsquo;s estimate, an insurer calculator, or a RICS assessment completed before the construction cost inflation of recent years, index-linking perpetuates the error and compounds it annually.</p>
            <p className="mt-4">Index factors are generic. They reflect average national or regional build cost movements and take no account of the specific construction type, specification, location or specialist features of your building. A timber-framed block in central London and a concrete-frame block in the East Midlands receive the same index factor, despite having entirely different reinstatement cost profiles.</p>
            <p className="mt-4">Index-linking also carries no professional accountability. In an underinsurance dispute, an insurer or court will require the documented basis of the sum insured. An automatically applied index factor does not satisfy that requirement. A RICS-regulated assessment does.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">The RICS Position</p>
            <p>RICS guidance on building reinstatement cost assessments is explicit: a formal professional assessment must be carried out at least every three years. Annual index-linking in the intervening years is an interim measure between assessments, not a permanent alternative to them.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">What This Means for You</p>
            <p>Managing agents and freeholders responsible for arranging block buildings insurance are typically required by the lease to insure to &ldquo;full reinstatement cost.&rdquo; Relying on index-linking alone, without a periodic RICS assessment, is exposure to the argument that reasonable steps were not taken to establish what full reinstatement cost actually means for that building.</p>
            <p className="mt-4">Our 3-Year Protection plan provides the correct structure: a full RICS assessment as the base, annual BCIS-indexed updates in years two and three, and a new base assessment at the start of each three-year cycle.</p>
          </div>

          <div className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-8">
            <p className="font-semibold text-[#202124] text-sm mb-3">In Summary</p>
            <ul className="space-y-2 text-[#5f6368] text-sm">
              <li>Index-linking adjusts a figure. It does not validate one.</li>
              <li>A RICS assessment establishes the correct base. Index-linking maintains it between assessments.</li>
              <li>Index-linking without a RICS base assessment does not comply with RICS guidance and leaves a liability exposure.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-16 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[#202124] mb-1">Commission a RICS reinstatement cost assessment.</p>
            <p className="text-[#5f6368] text-sm">Desktop turnaround within 24 hours. Broker-ready report.</p>
          </div>
          <Link href="/contact#contact-form" className="btn-shine shrink-0">Get a Quote</Link>
        </div>
      </section>
    </main>
  )
}
