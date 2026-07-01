import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Case Study: Block of Flats Undervalued by £800,000 | RCA Ltd',
  description: 'A 24-unit residential block in South London was index-linked since 2018 and found to be underinsured by £800,000. A real-world case study in reinstatement cost assessment and managing agent liability.',
  alternates: { canonical: '/resources/case-study-block-of-flats-undervalued' },
  openGraph: {
    title: 'Case Study: Block of Flats Undervalued by £800,000',
    description: 'A 24-unit residential block was index-linked since 2018 and found to be underinsured by £800,000. See how a professional RCA eliminated the managing agent\'s exposure.',
    url: '/resources/case-study-block-of-flats-undervalued',
  },
}

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Article Header */}
        <section className="bg-[#f4f5f7] border-b border-[#111318]/8 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources" className="inline-flex items-center gap-2 text-xs font-semibold text-[#c47c1e] uppercase tracking-widest hover:underline mb-8 block">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L4 7l5 5" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              All Resources
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Case Study</span>
            </div>

            <h1 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-6">
              Block of flats undervalued by &pound;800,000 &mdash; what the managing agent did next.
            </h1>

            <p className="font-body text-lg text-[#111318]/70 leading-relaxed mb-8 max-w-2xl">
              A South London managing agent had relied on annual index-linking for five years. At renewal, the insurer requested a current reinstatement cost assessment. What followed exposed a six-figure underinsurance gap &mdash; and a material liability that had been building, undetected, since 2018.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-body text-[#111318]/50">
              <span>March 2024</span>
              <span className="w-1 h-1 rounded-full bg-[#111318]/30 inline-block" />
              <span>5 min read</span>
              <span className="w-1 h-1 rounded-full bg-[#111318]/30 inline-block" />
              <span className="text-[#c47c1e] font-semibold">Underinsurance</span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6 -mt-0">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&h=600&fit=crop&auto=format&q=80"
            alt="Residential block of flats in South London"
            className="w-full h-[300px] md:h-[460px] object-cover sovereign-shadow"
          />
        </div>

        {/* Key Figures Bar */}
        <div className="border-y border-[#111318]/8 bg-white py-8 px-6 mt-0">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Residential units', value: '24' },
              { label: 'Last professional RCA', value: '2018' },
              { label: 'Sum insured at renewal', value: '£2.4m' },
              { label: 'True reinstatement value', value: '£3.2m' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <p className="font-headline text-3xl text-[#111318]">{value}</p>
                <div className="h-px w-6 bg-[#c47c1e] my-1" />
                <p className="font-body text-xs text-[#111318]/55 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body + Sidebar */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

            {/* Article Body */}
            <article className="font-body text-[#111318]/80 leading-relaxed space-y-10">

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">The Situation</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-4">A managing agent relying on index-linking since 2018.</h2>
                <p className="mb-4">
                  The block in question is a purpose-built residential development comprising 24 flats across four storeys in South London. The freeholder&rsquo;s lease obligated the managing agent to insure the building at full reinstatement cost &mdash; a standard covenant in residential long leases.
                </p>
                <p className="mb-4">
                  The managing agent had last commissioned a professional reinstatement cost assessment in 2018. Since then, they had relied entirely on the insurer&rsquo;s annual index-linking adjustment to maintain the declared sum insured. On paper, this appeared reasonable: the sum insured had risen from &pound;2.1 million in 2018 to &pound;2.4 million by the 2023 renewal, an increase of approximately 14%.
                </p>
                <p>
                  At the 2023 renewal, the insurer exercised their right to request a current, independently produced reinstatement cost assessment before agreeing terms. The managing agent instructed us to carry out a 48-hour desktop RCA. What emerged was a gap that, had it remained undiscovered, would have left them personally exposed to leaseholder claims.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">The Finding</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-4">Rebuild cost of &pound;3.2 million against a declared sum of &pound;2.4 million.</h2>
                <p className="mb-4">
                  Our desktop assessment, produced in accordance with RICS guidance and applying current BCIS tender price and resource cost indices, established a reinstatement cost of &pound;3.2 million. This figure incorporated demolition and site clearance, the cost of rebuilding to current Building Regulations standard, professional fees, and statutory costs.
                </p>
                <p className="mb-4">
                  The gap between the assessed figure and the declared sum insured was &pound;800,000 &mdash; a shortfall of 25%. The block was underinsured by one quarter.
                </p>
                <div className="bg-[#f4f5f7] border-l-4 border-[#c47c1e] p-6 my-6">
                  <p className="text-[#111318] font-semibold text-base mb-1">Why did index-linking fail so badly here?</p>
                  <p className="text-sm text-[#111318]/70">
                    The insurer&rsquo;s index is a general construction cost index. Post-2020 inflation in labour, structural materials, and specialist sub-contractor rates in Greater London ran substantially above that index. A block in inner South London carries materially higher reinstatement costs per square metre than a national average implies &mdash; and those costs diverged sharply between 2020 and 2023. Generic index-linking cannot capture regional or specification-specific divergence of this kind.
                  </p>
                </div>
                <p>
                  There was a second compounding factor: the 2018 base figure itself had been produced using a proprietary insurer tool rather than a RICS-regulated assessment. Index-linking had therefore been applied, for five years, to a figure that was already understated at the point it was set. The gap had been widening every year.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">The Risk</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-4">The condition of average and what it means in practice.</h2>
                <p className="mb-4">
                  Most block insurance policies contain an average clause &mdash; sometimes referred to as the condition of average or the underinsurance clause. Where a building is underinsured, the insurer will reduce any claim settlement pro rata to the extent of the underinsurance.
                </p>
                <p className="mb-4">
                  In this case, with the block insured at 75% of its true reinstatement cost, the insurer would have been entitled to pay only 75 pence for every pound of any valid claim. The remaining 25 pence in every pound would have been unrecoverable under the policy.
                </p>
                <p className="mb-4">
                  To illustrate the practical exposure: a serious fire causing &pound;200,000 of damage would have generated a policy settlement of &pound;150,000. The &pound;50,000 shortfall would have needed to come from somewhere. The leaseholders &mdash; who had paid service charge contributions on the understanding that the building was correctly insured &mdash; would have had a clear cause of action against the managing agent for failing in their duty to maintain adequate cover.
                </p>
                <p>
                  Where a lease covenant obligates the landlord or managing agent to insure to full reinstatement value, a shortfall is not merely an inconvenience. It is a breach of covenant. The managing agent carries that liability personally if they have not taken reasonable professional steps to establish the correct figure.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">What Happened</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-4">48-hour desktop assessment. Problem eliminated at renewal.</h2>
                <p className="mb-4">
                  The managing agent instructed us on a Tuesday afternoon. We completed the desktop assessment and issued the RICS-regulated report by Thursday morning &mdash; within 48 hours of instruction, as agreed. The report included the assessed reinstatement cost, the methodology, the indices applied, and the surveyor&rsquo;s professional indemnity-backed sign-off.
                </p>
                <p className="mb-4">
                  The managing agent forwarded the report directly to their broker the same morning. The broker submitted it to the insurer that afternoon. The insurer accepted the new sum insured without challenge and updated the policy at renewal.
                </p>
                <p className="mb-4">
                  The sum insured moved from &pound;2.4 million to &pound;3.2 million. The premium uplift was modest relative to the risk that had been eliminated. The managing agent&rsquo;s liability exposure &mdash; which had been building silently since 2018 &mdash; was removed.
                </p>
                <p>
                  The freeholder was notified, leaseholders were protected, and the managing agent had a defensible, RICS-backed paper trail demonstrating that they had taken professional advice. That paper trail is not a formality: it is the difference between a defensible position and an indefensible one if a claim ever arises.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Key Lesson</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] mb-4">Index-linking is not a substitute for professional valuation.</h2>
                <p className="mb-4">
                  This case is not exceptional. It is representative. Construction costs across the United Kingdom diverged sharply from general inflation in 2020 and have not fully corrected. Blocks that were accurately assessed in 2017 or 2018 and have relied on index-linking since are, in many cases, materially underinsured today &mdash; regardless of the index applied.
                </p>
                <p className="mb-4">
                  The RICS recommends that a professional reinstatement cost assessment be carried out at least every three years, or following any material change to the building. Annual index-linking between assessments is appropriate practice. Annual index-linking instead of assessment is not.
                </p>
                <ul className="space-y-3 my-6">
                  {[
                    'An index tracks average national cost movements. It cannot account for regional labour markets, specification-specific materials, or site-specific constraints.',
                    'If the base figure is wrong, index-linking compounds the error every year. A 25% underinsurance in 2018 does not become 0% underinsurance by 2023 because the insurer applied an index.',
                    'RICS regulation provides a professional indemnity-backed audit trail. An insurer tool or online calculator provides neither.',
                    'The cost of a professional RCA is immaterial relative to the liability it eliminates. For a block of this size, the fee is a rounding error against a potential six-figure leaseholder claim.',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 border border-[#c47c1e] flex items-center justify-center text-xs font-bold text-[#c47c1e] mt-0.5">{i + 1}</span>
                      <span className="text-[#111318]/75">{point}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Managing agents and RTM companies carry a statutory and contractual obligation to maintain adequate building insurance. Discharging that obligation professionally requires a current, independent, RICS-regulated reinstatement cost assessment &mdash; not an index applied to a figure that was last verified before the pandemic.
                </p>
              </section>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">

              {/* CTA Card */}
              <div className="bg-[#111318] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Instruct Us</span>
                </div>
                <h3 className="font-headline text-2xl text-white mb-3 leading-tight">Is your block correctly insured?</h3>
                <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
                  RICS-regulated desktop RCA. BCIS-indexed. Broker-ready report. Delivered within 48 hours of instruction.
                </p>
                <Link href="/contact" className="btn-shine text-white px-6 py-3 font-body font-bold text-sm inline-block w-full text-center">
                  Get in Touch
                </Link>
              </div>

              {/* Key Facts */}
              <div className="border border-[#111318]/8 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Key Facts</span>
                </div>
                <ul className="font-body space-y-4">
                  {[
                    { stat: '80%+', desc: 'of UK residential blocks are estimated to be underinsured' },
                    { stat: '£425bn', desc: 'estimated total underinsurance gap across UK commercial and residential property' },
                    { stat: '48 hrs', desc: 'our standard desktop RCA turnaround from instruction to report' },
                    { stat: 'RICS', desc: 'regulated assessment — professionally indemnified and broker-accepted' },
                  ].map(({ stat, desc }) => (
                    <li key={stat} className="flex items-start gap-4">
                      <span className="font-headline text-xl text-[#c47c1e] flex-shrink-0 leading-tight">{stat}</span>
                      <span className="text-xs text-[#111318]/60 leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Articles */}
              <div className="border border-[#111318]/8 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6 bg-[#c47c1e]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Related Reading</span>
                </div>
                <ul className="font-body space-y-4">
                  {[
                    { href: '/resources/what-is-a-reinstatement-cost-assessment', label: 'What is a Reinstatement Cost Assessment?' },
                    { href: '/resources/index-linking-not-enough', label: 'Why Index-Linking Is Not Enough' },
                    { href: '/resources/managing-agent-liability-underinsurance', label: 'Managing Agent Liability and Underinsurance' },
                    { href: '/resources', label: 'View All Resources' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-[#111318] hover:text-[#c47c1e] transition-colors leading-relaxed flex items-start gap-2 group">
                        <svg className="flex-shrink-0 mt-0.5 text-[#c47c1e]" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <section className="bg-[#f4f5f7] border-t border-[#111318]/8 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">Next Steps</span>
              <div className="h-px w-8 bg-[#c47c1e]" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] mb-4">Do not let index-linking become a liability.</h2>
            <p className="font-body text-[#111318]/65 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              If your block has not had a professional RICS-regulated reinstatement cost assessment in the past three years, instruct us today. 48-hour turnaround. Fixed fee. No site visit required.
            </p>
            <Link href="/contact" className="btn-shine text-white px-10 py-4 font-body font-bold text-sm inline-block">
              Instruct an Assessment
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
