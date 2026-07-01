import Link from 'next/link'

export const metadata = {
  title: 'Block of Flats Undervalued by £340,000 | Cavendish & Rowe Case Study',
  description: 'A 24-unit residential block had been insured using the developer’s original rebuild estimate for eleven years. Our RICS assessment revealed a £340,000 shortfall.',
  alternates: { canonical: '/resources/case-study-block-of-flats-undervalued' },
}

export default function CaseStudyPage() {
  return (
    <main>
      <section className="bg-[#f8f9fa] pt-16 pb-12 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Case Study</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
            Block of flats undervalued by &pound;340,000.
          </h1>
          <p className="text-[#5f6368] text-lg leading-relaxed">How it was discovered, and corrected, before a claim exposed the shortfall.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-10 text-[#3c4043] text-base leading-relaxed">

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">Background</p>
            <p>A 24-unit residential block in the South East had been insured using the original rebuild figure provided by the developer at the time of construction, eleven years earlier. The figure had been index-linked annually by the insurer, but had never been subject to a formal RICS reinstatement cost assessment. When the incoming managing agent instructed us to provide an assessment at the point of taking on the management mandate, the scale of the discrepancy became clear.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">What We Found</p>
            <p>Our desktop assessment, using current BCIS construction cost indices, a full floor area analysis, and regional build cost modelling, produced a reinstatement figure of &pound;2.34 million. The sum insured on the existing policy was &pound;2.00 million.</p>
            <p className="mt-4">The shortfall was &pound;340,000, a 17% underinsurance gap. Under the condition of average, which is standard in UK block building policies, any claim would have been reduced by 17% before settlement. On a total loss, leaseholders would have been exposed to a &pound;340,000 gap. On a partial claim of, say, &pound;150,000 for fire damage to one flat, they would have received only &pound;124,500.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">Why Index-Linking Was Not Enough</p>
            <p>The insurer had applied their own annual index factor each year. This sounds prudent, and is better than no adjustment at all. But insurer index factors are generic: they reflect average build cost movements across the UK, not the specific construction type, specification, or location of this particular building. They also carry no RICS regulation and provide no professional accountability.</p>
            <p className="mt-4">In this case, the original developer figure had also been calculated without including demolition costs, debris removal, and professional fees, which together typically add 15&ndash;20% to the bare rebuild cost. Index-linking an already-deficient base figure each year had simply compounded the gap.</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#5f6368] uppercase tracking-[0.15em] mb-4">What Happened Next</p>
            <p>The managing agent shared our RICS-regulated report with the block&rsquo;s insurance broker. The sum insured was corrected at the next renewal. The increase in premium was modest relative to the exposure that had existed for over a decade.</p>
            <p className="mt-4">The managing agent has since instructed us under our 3-Year Protection plan for this block and all others in their portfolio, providing annual BCIS-indexed updates and a new base assessment every three years.</p>
          </div>

          <div className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-8">
            <p className="font-semibold text-[#202124] text-sm mb-3">Key Takeaway</p>
            <p className="text-[#5f6368] text-sm leading-relaxed">Index-linking maintains a figure. It does not validate it. Only a RICS-regulated reinstatement cost assessment establishes whether the base figure is correct in the first place.</p>
          </div>

        </div>
      </section>

      <section className="bg-[#f8f9fa] py-16 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[#202124] mb-1">Ready to check your reinstatement figure?</p>
            <p className="text-[#5f6368] text-sm">We respond within 24 hours.</p>
          </div>
          <Link href="/contact#contact-form" className="btn-shine shrink-0">Get a Quote</Link>
        </div>
      </section>
    </main>
  )
}
