import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'The 5 Risks of Underinsurance Every Managing Agent Must Understand | RCA Ltd',
  description: 'Underinsurance exposes managing agents to leaseholder claims, FCA scrutiny, PI claims, RICS and ARMA compliance failures, and lease covenant breach. One RICS-regulated RCA removes all five risks.',
  alternates: { canonical: '/resources/top-risks-of-underinsurance-for-managing-agents' },
  openGraph: {
    title: 'The 5 Risks of Underinsurance Every Managing Agent Must Understand',
    description: 'Underinsurance exposes managing agents to leaseholder claims, FCA scrutiny, PI claims, RICS and ARMA compliance failures, and lease covenant breach.',
    url: '/resources/top-risks-of-underinsurance-for-managing-agents',
  },
}

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Article Header */}
        <section className="bg-[#f4f5f7] border-b border-[#111318]/8 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-6">
              <Link href="/resources" className="text-xs font-semibold text-[#c47c1e] uppercase tracking-widest hover:underline font-body">
                &larr; All Resources
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Risk Guide</span>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-6">
              The 5 risks of underinsurance that every managing agent must understand.
            </h1>
            <p className="font-body text-[#111318]/70 text-lg leading-relaxed mb-8">
              Over 80% of UK residential blocks are underinsured. For managing agents, this is not merely an inconvenience for freeholders — it is a direct source of professional liability, regulatory exposure, and lease covenant breach. Each risk is distinct. All five are avoidable with a single RICS-regulated reinstatement cost assessment.
            </p>
            <div className="flex items-center gap-6 font-body text-sm text-[#111318]/50">
              <span>February 2024</span>
              <span>&middot;</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-3xl mx-auto px-6 pt-12">
          <img
            src="/rca-rics-surveyor.png"
            alt="RICS surveyor reviewing reinstatement cost assessment documents"
            className="w-full h-[320px] md:h-[420px] object-cover sovereign-shadow"
          />
        </div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-14">

          {/* Intro */}
          <p className="font-body text-[#111318]/80 text-lg leading-relaxed mb-12">
            Where a lease covenants insurance at full reinstatement cost — and the vast majority of residential leases do — someone is contractually obliged to insure to rebuild value. In most managed blocks, that obligation falls on the freeholder, administered by the managing agent. When the sum insured falls short and a loss occurs, the consequences cascade through every party in the chain. These are the five categories of risk that arise.
          </p>

          {/* Risk 1 */}
          <div className="mb-14">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111318] flex items-center justify-center">
                <span className="font-headline text-white text-lg font-bold">1</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-snug pt-1">
                Leaseholder claims after a major loss.
              </h2>
            </div>
            <div className="pl-15 ml-15 font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                The condition of average — standard in virtually every block insurance policy — operates as follows: where the insured sum falls short of the true reinstatement value, the insurer reduces any claim settlement in the same proportion as the shortfall. A block genuinely worth &pound;4 million to rebuild but insured for &pound;2.8 million carries a 30% underinsurance gap. A &pound;600,000 claim is settled at &pound;420,000. The remaining &pound;180,000 must be met from somewhere.
              </p>
              <p>
                In practice, it falls on the freeholder and, through service charge demands, on the leaseholders. Those leaseholders will ask who permitted the policy to remain inadequate. The managing agent, as the party administering the insurance arrangement, is the natural target. Leaseholder claims following underinsured losses are an established and growing area of litigation — and the defence that no professional assessment was ever commissioned is no defence at all.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#111318]/8 mb-14" />

          {/* Risk 2 */}
          <div className="mb-14">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111318] flex items-center justify-center">
                <span className="font-headline text-white text-lg font-bold">2</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-snug pt-1">
                FCA scrutiny of insurance arrangements.
              </h2>
            </div>
            <div className="font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                Managing agents who arrange block insurance on behalf of freeholders or RTM companies operate within an increasingly regulated framework. The FCA&apos;s Consumer Duty, which came into force in July 2023, requires firms to be able to demonstrate that the products they arrange deliver good outcomes for end customers — in this context, leaseholders. An insurance policy that is structurally inadequate because it has never been supported by a professional reinstatement valuation is difficult to characterise as delivering a good outcome.
              </p>
              <p>
                Beyond Consumer Duty, existing FCA rules on insurance distribution oblige arranging parties to take reasonable steps to ensure cover is appropriate. Where that standard has not been met — and where no RICS-regulated assessment exists to evidence due diligence — the regulatory exposure is real. The FCA has signalled its intention to scrutinise the leasehold insurance market. Managing agents who cannot demonstrate that the sums insured are professionally supported are exposed.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#111318]/8 mb-14" />

          {/* Risk 3 */}
          <div className="mb-14">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111318] flex items-center justify-center">
                <span className="font-headline text-white text-lg font-bold">3</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-snug pt-1">
                Professional indemnity claims.
              </h2>
            </div>
            <div className="font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                PI insurers, when presented with a claim arising from an underinsured loss, will examine the file. The question they ask is straightforward: what steps did the managing agent take to verify that the sum insured was adequate? If the answer is that no reinstatement cost assessment was ever commissioned, or that an assessment carried out eight years ago was allowed to run without review, the PI insurer will consider whether a defence is available.
              </p>
              <p>
                Failure to obtain a periodic professional assessment of reinstatement value is, in the current market, increasingly characterised as a failure of due diligence that falls below the standard expected of a competent managing agent. The result is a PI claim that the insurer may decline to defend, or defend only partially, on the basis that the negligence was clear. The cost — both financial and reputational — falls on the firm.
              </p>
              <p>
                Commissioning an RICS-regulated assessment creates a contemporaneous, documented record that due diligence was performed. It does not merely reduce risk at the property level — it closes the PI exposure.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#111318]/8 mb-14" />

          {/* Risk 4 */}
          <div className="mb-14">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111318] flex items-center justify-center">
                <span className="font-headline text-white text-lg font-bold">4</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-snug pt-1">
                RICS and ARMA compliance obligations.
              </h2>
            </div>
            <div className="font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                RICS regulations require members to take reasonable steps to ensure that properties under their management are insured to full rebuilding cost. That obligation is not discharged by accepting the figure provided by the incumbent insurer or a broker&apos;s desktop estimate. RICS guidance is explicit: periodic professional reinstatement cost assessments are the mechanism through which compliance is demonstrated.
              </p>
              <p>
                ARMA members carry additional, overlapping obligations. ARMA&apos;s Consumer Charter and associated standards require member firms to ensure that insurance is adequate and that clients are properly advised. Where a managing agent is an ARMA member and cannot produce an up-to-date professional assessment, the evidential position in any complaint or disciplinary proceeding is weak.
              </p>
              <p>
                In both cases, the compliance question is binary: is there an RICS-regulated assessment on file, carried out within the appropriate period? If not, the firm is not in a position to assert that it has met its obligations.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#111318]/8 mb-14" />

          {/* Risk 5 */}
          <div className="mb-14">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111318] flex items-center justify-center">
                <span className="font-headline text-white text-lg font-bold">5</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-snug pt-1">
                Lease covenant breach.
              </h2>
            </div>
            <div className="font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                Many residential leases contain an express covenant requiring the freeholder to insure the building to its full reinstatement cost. That covenant is a contractual term of the lease — not a general aspiration. Where the building is materially underinsured, the freeholder is in breach of that covenant. In the most serious cases, persistent breach can expose the freeholder to forfeiture action, though in practice the more immediate consequence is leaseholder challenge via the First-tier Tribunal (Property Chamber).
              </p>
              <p>
                The managing agent, as the party administering the insurance obligation on the freeholder&apos;s behalf, bears professional responsibility for ensuring the covenant is met. A leaseholder who identifies that the sum insured has not been supported by a professional assessment, and who brings tribunal proceedings on that basis, will name the managing agent in any related civil claim. The fact that the managing agent was following a brief from the freeholder provides limited protection where no professional advice was sought or given.
              </p>
              <p>
                An RICS-regulated assessment, repeated at appropriate intervals, is the practical mechanism for ensuring the lease covenant is continuously met and documented.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[#111318]/8 mb-14" />

          {/* Conclusion */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Conclusion</span>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-6 leading-snug">
              One assessment removes all five risks.
            </h2>
            <div className="font-body text-[#111318]/80 leading-relaxed space-y-4">
              <p>
                The five risk categories above — leaseholder claims, FCA scrutiny, PI exposure, RICS and ARMA compliance, and lease covenant breach — are distinct in their legal basis but share a common cause: the absence of a professionally produced, RICS-regulated reinstatement cost assessment. Each is also resolved by the same action.
              </p>
              <p>
                A single RCA, produced by an RICS-regulated firm, provides the documented professional opinion on rebuilding cost that closes each of these exposures simultaneously. It establishes the evidential record that due diligence was performed. It supports the sum insured at renewal. It satisfies the compliance obligation. It evidences that the lease covenant has been met.
              </p>
              <p>
                With construction cost inflation having driven estimated underinsurance across the UK block market to over &pound;425 billion, the risk of relying on an unvalidated sum insured has never been greater. An RICS-regulated assessment delivered in 48 hours eliminates the exposure.
              </p>
            </div>
          </div>

          {/* Key takeaways box */}
          <div className="bg-[#f4f5f7] border-l-4 border-[#c47c1e] p-8 mb-14">
            <h3 className="font-headline text-xl text-[#111318] mb-5">Key obligations at a glance.</h3>
            <ul className="font-body text-[#111318]/80 space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#c47c1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Commission a RICS-regulated reinstatement cost assessment at least every three years — more frequently following significant works or material construction cost increases.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#c47c1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Document your advice to clients in writing at each renewal. Retain that documentation against the possibility of a future claim.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#c47c1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use a firm producing BCIS-indexed assessments accepted by all major insurers and capable of delivery within 48 hours on a desktop basis.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#c47c1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ensure the assessment is produced by an RICS-regulated surveyor — broker estimates and index-linked figures from prior years do not satisfy the professional standard.</span>
              </li>
            </ul>
          </div>

          {/* Related articles */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Related Articles</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/resources/what-is-a-reinstatement-cost-assessment" className="block border border-[#111318]/8 p-5 hover-lift group">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Guidance</span>
                <p className="font-body text-[#111318] font-semibold mt-2 group-hover:text-[#c47c1e] transition-colors leading-snug">
                  What is a Reinstatement Cost Assessment?
                </p>
              </Link>
              <Link href="/resources/how-often-should-you-get-a-reinstatement-cost-assessment" className="block border border-[#111318]/8 p-5 hover-lift group">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Guidance</span>
                <p className="font-body text-[#111318] font-semibold mt-2 group-hover:text-[#c47c1e] transition-colors leading-snug">
                  How Often Should You Commission an RCA?
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#111318] p-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] font-body">Remove the Exposure</span>
              <div className="h-px w-8 bg-[#c47c1e]" />
            </div>
            <h3 className="font-headline text-2xl md:text-3xl text-white mb-3 leading-snug">
              Protect your portfolio with an RICS-regulated assessment.
            </h3>
            <p className="font-body text-white/60 mb-7 text-sm max-w-md leading-relaxed">
              RICS-regulated. BCIS-indexed. Accepted by all major insurers. Desktop assessment delivered within 48 hours.
            </p>
            <Link href="/contact" className="btn-shine text-white px-10 py-3 font-body font-bold inline-block uppercase tracking-widest text-sm">
              Commission an Assessment
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
