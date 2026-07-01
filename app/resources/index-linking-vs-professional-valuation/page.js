import Link from 'next/link'

export const metadata = {
  title: 'Index-Linking vs Professional Revaluation | RCA Ltd',
  description: 'Annual index-linking adjusts your sum insured but does not replace a RICS assessment. Here is what the difference means for managing agents and freeholders.',
  alternates: { canonical: '/resources/index-linking-vs-professional-valuation' },
}

export default function IndexLinkingPage() {
  return (
    <main>
      <section className="bg-[#f5f5f7] pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Guide</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Index-linking vs professional revaluation.
          </h1>
          <p className="text-[#6e6e73] text-lg leading-relaxed">What the difference means for your liability as a managing agent or freeholder.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-10 text-[#374151] text-base leading-relaxed">

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">What Is Index-Linking?</p>
            <p>Index-linking is the practice of adjusting a building's sum insured each year by a percentage factor — usually derived from the insurer's own construction cost index or the BCIS All-In Tender Price Index. The intention is to ensure the sum insured keeps pace with build cost inflation between formal assessments.</p>
            <p className="mt-4">Most block buildings insurance policies apply index-linking automatically at renewal. It is a useful safeguard — but it is not a substitute for a RICS reinstatement cost assessment, and conflating the two creates a specific and significant liability for managing agents and freeholders.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">What Index-Linking Cannot Do</p>
            <p>Index-linking adjusts the existing sum insured by a percentage. It does not re-examine whether the underlying figure was correct to begin with. If the original reinstatement figure was based on a developer's estimate, an insurer calculator, or a RICS assessment carried out before significant construction cost inflation, index-linking will perpetuate the error — and compound it slightly each year.</p>
            <p className="mt-4">Index factors are also generic. They reflect average national or regional build cost movements. They do not account for the specific construction type, specification, location, or specialist features of your building. A timber-framed block in central London and a concrete-frame block in the East Midlands will receive the same index factor — even though their actual reinstatement cost movements may be entirely different.</p>
            <p className="mt-4">Finally, index-linking carries no professional accountability. In the event of an underinsurance dispute, an insurer or court will ask for the documented basis of the sum insured. An automatically applied index factor is not an answer to that question. A RICS-regulated assessment is.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">The RICS Position</p>
            <p>RICS guidance notes on building reinstatement cost assessments are clear: a formal professional assessment should be carried out at least every three years. Annual index-linking may be applied in the intervening years — but as an interim measure between assessments, not as a permanent substitute for them.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">What This Means for You</p>
            <p>If you are a managing agent or freeholder responsible for arranging block buildings insurance, your obligation under most leases is to insure to 'full reinstatement cost.' Relying on index-linking alone — without a periodic RICS assessment — leaves you exposed to the argument that you did not take reasonable steps to establish what full reinstatement cost actually is.</p>
            <p className="mt-4">Our 3-Year Protection plan provides the correct combination: a full RICS assessment as the base, with annual BCIS-indexed updates in years two and three, and a new base assessment at the start of each three-year cycle.</p>
          </div>

          <div className="bg-[#f5f5f7] p-8">
            <p className="font-semibold text-[#1d1d1f] text-sm mb-3">In Summary</p>
            <ul className="space-y-2 text-[#6e6e73] text-sm">
              <li>Index-linking adjusts a figure. It does not validate one.</li>
              <li>A RICS assessment establishes the correct base. Index-linking maintains it between assessments.</li>
              <li>Using index-linking without a RICS base assessment is not compliant with RICS guidance and creates a liability exposure.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[#1d1d1f] mb-1">Commission a RICS reinstatement cost assessment.</p>
            <p className="text-[#6e6e73] text-sm">48-hour desktop turnaround. Broker-ready report.</p>
          </div>
          <Link href="/contact#contact-form" className="btn-shine shrink-0">Get a Quote</Link>
        </div>
      </section>
    </main>
  )
}
