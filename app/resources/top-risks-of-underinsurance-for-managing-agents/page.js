import Link from 'next/link'

export const metadata = {
  title: 'Top Risks of Underinsurance for Managing Agents | RCA Ltd',
  description: 'Underinsurance exposes managing agents to liability, proportional claim settlements, and ARMA compliance failures. Understand the key risks and how to mitigate them.',
  alternates: { canonical: '/resources/top-risks-of-underinsurance-for-managing-agents' },
  openGraph: {
    title: 'Top Risks of Underinsurance for Managing Agents',
    description: 'Underinsurance exposes managing agents to liability, proportional claim settlements, and ARMA compliance failures.',
    url: '/resources/top-risks-of-underinsurance-for-managing-agents',
  },
}

export default function ArticlePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8 text-center">
        <Link href="/resources" className="text-xs font-semibold text-[#1A6B4A] uppercase tracking-widest hover:underline">&larr; All Resources</Link>
      </div>
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">Risk &amp; Compliance</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-6 leading-tight">Top Risks of Underinsurance for Managing Agents.</h1>
        <p className="text-secondary text-lg leading-relaxed">Research consistently shows that the majority of UK commercial and residential blocks carry insufficient reinstatement values on their insurance policies. For managing agents, this is not just a problem for property owners. It creates direct professional and financial risk.</p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop&auto=format&q=80"
          alt="Risk and compliance office documents"
          className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl mb-10 sovereign-shadow"
        />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-3">1. Proportional Settlement Under the Average Clause.</h2>
      <p className="text-secondary leading-relaxed mb-8">Most commercial building insurance policies include an average clause, which means that if a property is underinsured, the insurer will reduce any claim payout in proportion to the shortfall. If a block has a true reinstatement value of &pound;4 million but is insured for &pound;2.8 million, it is 30% underinsured. A &pound;600,000 claim would be settled at just &pound;420,000. The remaining &pound;180,000 falls on the freeholder and, ultimately, the leaseholders.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">2. Personal Liability for Managing Agents.</h2>
      <p className="text-secondary leading-relaxed mb-8">ARMA guidance and general professional duty of care obligations place a responsibility on managing agents to ensure that block insurance is adequate. Where a managing agent has been on notice that a valuation is outdated, or has simply allowed years to pass without recommending a reassessment, they may face claims from leaseholders following an underinsured loss. This is an increasingly litigated area.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">3. Insurer Challenges at Renewal.</h2>
      <p className="text-secondary leading-relaxed mb-8">Insurers are becoming more rigorous at renewal, particularly on blocks where the declared sum insured has not been supported by a professional assessment within the last three years. Queries, referrals, and potential policy voidance are real risks where no RICS-regulated assessment can be produced on request.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">4. The Hidden Compounding Problem.</h2>
      <p className="text-secondary leading-relaxed mb-4">Post-2020 construction cost inflation, driven by material shortages, labour cost increases, and supply chain disruption, has been significantly higher than general CPI. Many blocks that appeared adequately insured in 2019 are now materially underinsured, even if annual index linking has been applied. The index simply has not kept pace with actual rebuild cost increases for many property types.</p>
      <p className="text-secondary leading-relaxed mb-8">Studies from BCIS and the ABI have indicated that average underinsurance across UK blocks runs at between 20% and 40% of true reinstatement value. On a &pound;5 million block, that is a &pound;1 million to &pound;2 million exposure that leaseholders and managing agents may be unaware of.</p>

      <h2 className="text-2xl font-bold text-primary mb-3">How to Mitigate the Risk.</h2>
      <ul className="text-secondary space-y-2 mb-10 leading-relaxed list-disc pl-6">
        <li>Commission a RICS-regulated reinstatement cost assessment at least every three years.</li>
        <li>Trigger an earlier assessment after any significant works, change of use, or construction cost spike.</li>
        <li>Document your recommendation to clients in writing at each renewal.</li>
        <li>Use a firm that provides BCIS-indexed assessments accepted by all major insurers.</li>
      </ul>

      <div className="bg-[#0f3d28] rounded-2xl p-8 text-center flex flex-col items-center">
        <h3 className="text-xl font-bold text-white mb-2">Concerned about your managed portfolio?</h3>
        <p className="text-white/60 mb-5 text-sm">RICS-regulated, BCIS-indexed, broker-ready. Delivered in 5 days.</p>
        <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3 rounded-full font-bold inline-block">Get in Touch</Link>
      </div>
    </main>
  )
}
