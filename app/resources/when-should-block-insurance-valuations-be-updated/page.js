import Link from 'next/link'

export const metadata = {
  title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
  description: "RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn't enough and when earlier reassessment is needed.",
  alternates: { canonical: '/resources/when-should-block-insurance-valuations-be-updated' },
  openGraph: {
    title: 'When Should Block Insurance Valuations Be Updated? (RICS Guidance)',
    description: "RICS recommends block insurance valuations are updated every 3 years. Find out why annual index linking alone isn't enough.",
    url: '/resources/when-should-block-insurance-valuations-be-updated',
  },
}

export default function ArticlePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8 text-center">
        <Link href="/resources" className="text-xs font-semibold text-[#1A6B4A] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
      </div>
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">RICS Guidance</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-6 leading-tight">When Should Block Insurance Valuations Be Updated?</h1>
        <p className="text-secondary text-lg leading-relaxed">For managing agents and freeholders, keeping reinstatement cost figures current is both a compliance requirement and a critical financial protection. Yet the majority of UK blocks are operating with valuations that are years out of date.</p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=500&fit=crop&auto=format&q=80"
          alt="UK residential buildings and property"
          className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl mb-10 sovereign-shadow"
        />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-3">The RICS Recommendation: Every Three Years.</h2>
      <p className="text-secondary leading-relaxed mb-6">The Royal Institution of Chartered Surveyors (RICS) recommends that a full professional reinstatement cost assessment is carried out at least once every three years. In between, annual index-linked adjustments are acceptable as a bridging measure, but they are not a substitute for a professional assessment.</p>
      <p className="text-secondary leading-relaxed mb-8">Many block managers assume that because their insurer applies annual indexation, they are covered. This is a dangerous misconception. Index linking adjusts the existing sum insured by a general construction cost index. It does not account for site-specific factors, changes to the building, or localised cost inflation.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">Why Annual Index Linking Isn&apos;t Enough.</h2>
      <p className="text-secondary leading-relaxed mb-4">General construction indices like the BCIS All-in Tender Price Index track broad market movements. They cannot account for:</p>
      <ul className="text-secondary space-y-2 mb-8 leading-relaxed list-disc pl-6">
        <li>Changes to the building since the last assessment (extensions, refurbishments, cladding replacement)</li>
        <li>Regional labour and material cost variations</li>
        <li>Specialist construction requirements (curtilage structures, listed features, complex M&amp;E)</li>
        <li>The compounding effect of index-linking an already inaccurate base figure</li>
      </ul>
      <p className="text-secondary leading-relaxed mb-8">If the original sum insured was wrong, and in our experience a significant proportion are, index linking simply perpetuates and compounds that error year on year.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">Triggers for Earlier Reassessment.</h2>
      <p className="text-secondary leading-relaxed mb-4">Even within a three-year cycle, certain events should prompt an immediate reassessment:</p>
      <ul className="text-secondary space-y-2 mb-8 leading-relaxed list-disc pl-6">
        <li>Major works or refurbishment to the block</li>
        <li>Change of use of any part of the building</li>
        <li>Significant market shifts (as seen post-2020 with labour and material inflation)</li>
        <li>Acquisition of the freehold or change of managing agent</li>
        <li>Any insurer query or challenge at renewal</li>
      </ul>

      <h2 className="text-2xl font-bold text-primary mb-3">The Consequences of an Outdated Valuation.</h2>
      <p className="text-secondary leading-relaxed mb-6">If a block is underinsured at the point of a claim, most policies apply what is known as the average clause, meaning the insurer will only pay out in proportion to the degree of underinsurance. On a &pound;5 million block insured for &pound;3.5 million, a &pound;500,000 claim could result in a settlement of just &pound;350,000. The leaseholders bear the shortfall.</p>
      <p className="text-secondary leading-relaxed mb-10">For managing agents, allowing a known outdated valuation to persist can also create personal liability exposure under ARMA guidance and general professional duty of care obligations.</p>

      <div className="bg-[#0f3d28] rounded-2xl p-8 text-center flex flex-col items-center">
        <h3 className="text-xl font-bold text-white mb-2">Is your block overdue for reassessment?</h3>
        <p className="text-white/60 mb-5 text-sm">We carry out RICS-regulated reinstatement cost assessments, delivered in 5 days.</p>
        <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Get in Touch</Link>
      </div>
    </main>
  )
}
