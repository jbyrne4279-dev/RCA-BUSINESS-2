import Link from 'next/link'

export const metadata = {
  title: 'Block of Flats Undervalued by £340,000 | RCA Ltd Case Study',
  description: 'A 24-unit residential block had been insured using the developer’s original rebuild estimate for eleven years. Our RICS assessment revealed a £340,000 shortfall.',
  alternates: { canonical: '/resources/case-study-block-of-flats-undervalued' },
}

export default function CaseStudyPage() {
  return (
    <main>
      <section className="bg-[#f5f5f7] pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Case Study</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Block of flats undervalued by £340,000.
          </h1>
          <p className="text-[#6e6e73] text-lg leading-relaxed">How it was discovered — and corrected — before a claim exposed the shortfall.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="space-y-8 text-[#374151] text-base leading-relaxed">

            <div>
              <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">Background</p>
              <p>A 24-unit residential block in the South East had been insured using the original rebuild figure provided by the developer at the time of construction — eleven years earlier. The figure had been index-linked annually by the insurer, but had never been subject to a formal RICS reinstatement cost assessment. When the incoming managing agent instructed us to provide an assessment at the point of taking on the management mandate, the scale of the discrepancy became clear.</p>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">What We Found</p>
              <p>Our desktop assessment — using current BCIS construction cost indices, a full floor area analysis, and regional build cost modelling — produced a reinstatement figure of £2.34 million. The sum insured on the existing policy was £2.00 million.</p>
              <p className="mt-4">The shortfall was £340,000 — a 17% underinsurance gap. Under the condition of average, which is standard in UK block building policies, any claim would have been reduced by 17% before settlement. On a total loss, leaseholders would have been exposed to a £340,000 gap. On a partial claim of, say, £150,000 for fire damage to one flat, they would have received only £124,500.</p>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">Why Index-Linking Was Not Enough</p>
              <p>The insurer had applied their own annual index factor each year. This sounds prudent — and is better than no adjustment at all. But insurer index factors are generic: they reflect average build cost movements across the UK, not the specific construction type, specification, or location of this particular building. They also carry no RICS regulation and provide no professional accountability.</p>
              <p className="mt-4">In this case, the original developer figure had also been calculated without including demolition costs, debris removal, and professional fees — which together typically add 15–20% to the bare rebuild cost. Index-linking an already-deficient base figure each year had simply compounded the gap.</p>
            </div>

            <div>
              <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">What Happened Next</p>
              <p>The managing agent shared our RICS-regulated report with the block's insurance broker. The sum insured was corrected at the next renewal. The increase in premium was modest relative to the exposure that had existed for over a decade.</p>
              <p className="mt-4">The managing agent has since instructed us under our 3-Year Protection plan for this block and all others in their portfolio, providing annual BCIS-indexed updates and a new base assessment every three years.</p>
            </div>

            <div className="bg-[#f5f5f7] p-8">
              <p className="font-semibold text-[#1d1d1f] text-sm mb-3">Key Takeaway</p>
              <p className="text-[#6e6e73] text-sm leading-relaxed">Index-linking maintains a figure. It does not validate it. Only a RICS-regulated reinstatement cost assessment establishes whether the base figure is correct in the first place.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[#1d1d1f] mb-1">Ready to check your reinstatement figure?</p>
            <p className="text-[#6e6e73] text-sm">We respond within 24 hours.</p>
          </div>
          <Link href="/contact#contact-form" className="btn-shine shrink-0">Get a Quote</Link>
        </div>
      </section>
    </main>
  )
}
