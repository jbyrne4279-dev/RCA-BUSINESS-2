import Link from 'next/link'

export const metadata = {
  title: 'Index Linking vs Professional Valuation   What Managing Agents Need to Know',
  description: "Index linking adjusts your sum insured annually but cannot replace a professional RICS reinstatement cost assessment. Here's what managing agents need to understand.",
  alternates: { canonical: '/resources/index-linking-vs-professional-valuation' },
  openGraph: {
    title: 'Index Linking vs Professional Valuation   What Managing Agents Need to Know',
    description: "Index linking is not a substitute for a professional RICS reinstatement cost assessment. Here's why and what managing agents should do about it.",
    url: '/resources/index-linking-vs-professional-valuation',
  },
}

export default function ArticlePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8 text-center">
        <Link href="/resources" className="text-xs font-semibold text-[#c47c1e] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
      </div>
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Guidance</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-6 leading-tight">Index Linking vs Professional Valuation: What Managing Agents Need to Know.</h1>
        <p className="text-secondary text-lg leading-relaxed">Many managing agents assume that because their insurer applies annual index linking, their buildings are adequately insured. This assumption is one of the most common and most expensive misunderstandings in UK property management.</p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=500&fit=crop&auto=format&q=80"
          alt="Insurance documents and financial charts on a desk"
          className="w-full h-[320px] md:h-[420px] object-cover mb-10 sovereign-shadow"
        />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-3">What Is Index Linking?</h2>
      <p className="text-secondary leading-relaxed mb-6">Index linking is a mechanism used by insurers to automatically adjust the sum insured each year in line with a construction cost index, typically a variant of the BCIS All-in Tender Price Index or a proprietary equivalent. The intention is to prevent a building from drifting into underinsurance due to general cost inflation.</p>
      <p className="text-secondary leading-relaxed mb-8">In practice, the insurer applies a percentage uplift, say 5%, to the existing declared value. No surveyor visits the property. No detailed assessment is carried out. The insured figure simply grows by a fixed multiplier based on a broad market index.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">Why Index Linking Alone Isn&rsquo;t Sufficient.</h2>
      <p className="text-secondary leading-relaxed mb-4">Index linking has one fundamental limitation: it adjusts an existing figure. If that figure was wrong to begin with, index linking makes it slightly less wrong each year, but never correct.</p>
      <ul className="text-secondary space-y-2 mb-8 leading-relaxed list-disc pl-6">
        <li><strong className="text-primary">It doesn&rsquo;t account for building changes.</strong> Extensions, refurbishments, cladding replacement, new plant. None of these are captured by an index.</li>
        <li><strong className="text-primary">It uses broad national data.</strong> Regional labour costs can diverge significantly from a national index, particularly in London and the South East.</li>
        <li><strong className="text-primary">It ignores specialist construction.</strong> Listed buildings, non-standard construction, complex M&amp;E. All carry rebuild cost profiles that generic indices cannot model.</li>
        <li><strong className="text-primary">It compounds errors.</strong> A figure that was 15% too low in 2018 is still roughly 15% too low in 2024, regardless of how many times it has been uplifted.</li>
      </ul>

      <h2 className="text-2xl font-bold text-primary mb-3">BCIS vs Generic CPI.</h2>
      <p className="text-secondary leading-relaxed mb-8">It is worth noting that not all indices are equal. Some insurers use general CPI as their index-linking basis, which tracks consumer price inflation, not construction cost inflation. These two measures can diverge significantly. Between 2020 and 2023, construction cost inflation substantially outpaced CPI in the UK, meaning that any policy index-linked to CPI over this period is likely to have fallen materially behind actual rebuild cost increases.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">The RICS Position.</h2>
      <p className="text-secondary leading-relaxed mb-8">RICS is unambiguous: index linking is a maintenance tool, not an assessment. Their guidance recommends a full professional reinstatement cost assessment every three years as a minimum, with index linking used only as an interim adjustment between assessments. This position is shared by the ABI and most major brokers.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">The Practical Recommendation for Managing Agents.</h2>
      <ul className="text-secondary space-y-2 mb-10 leading-relaxed list-disc pl-6">
        <li>Commission a RICS-regulated reinstatement cost assessment at least every three years per block.</li>
        <li>Use index linking only as a bridge between assessments, never as a permanent substitute.</li>
        <li>Document the date and source of the last professional assessment in your management records.</li>
        <li>Treat any insurer query about the sum insured as an immediate trigger for professional reassessment.</li>
        <li>Where the last assessment used a generic online calculator rather than a RICS surveyor, treat the figure as unverified and arrange a proper assessment at the next opportunity.</li>
      </ul>

      <div className="bg-[#111318] rounded-2xl p-8 text-center flex flex-col items-center">
        <h3 className="text-xl font-bold text-white mb-2">Need a reinstatement assessment?</h3>
        <p className="text-white/60 mb-5 text-sm">RICS-regulated, BCIS-indexed, broker-ready. Delivered in 5 days.</p>
        <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3 font-bold inline-block">Get in Touch</Link>
      </div>
    </main>
  )
}
