import Link from 'next/link'

export const metadata = {
  title: 'When Should Block Insurance Valuations Be Updated? | RCA Ltd',
  description: 'RICS recommends formal reinstatement cost assessments at least every three years. Here is what that means in practice — and when to instruct earlier.',
  alternates: { canonical: '/resources/when-should-block-insurance-valuations-be-updated' },
}

export default function WhenUpdatePage() {
  return (
    <main>
      <section className="bg-[#f5f5f7] pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Guidance</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            When should block insurance valuations be updated?
          </h1>
          <p className="text-[#6e6e73] text-lg leading-relaxed">RICS guidance, good practice, and the circumstances that should trigger an early reassessment.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-10 text-[#374151] text-base leading-relaxed">

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">The RICS Position</p>
            <p>RICS guidance notes on building reinstatement cost assessments state that formal professional assessments should be carried out at least every three years. In the intervening years, annual index-linking based on BCIS construction cost indices may be applied — but only as an interim measure between formal assessments, not as a permanent replacement for them.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">When Three Years Is the Maximum, Not the Target</p>
            <p>The three-year interval is the maximum recommended gap between formal assessments under stable conditions. In practice, several circumstances should prompt a reassessment earlier.</p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Change of managing agent', desc: 'When a new managing agent takes on a block, they should establish the correct reinstatement figure independently — rather than inheriting a number they cannot vouch for.' },
              { title: 'Significant construction cost inflation', desc: 'UK build costs rose over 30% between 2020 and 2024. Any figure assessed before 2022 should be treated as a priority for reassessment.' },
              { title: 'RTM or change of control', desc: 'When leaseholders exercise the Right to Manage and the insurance obligation transfers, a fresh RICS assessment should be the first action before the next renewal.' },
              { title: 'Material building works', desc: 'Extensions, structural alterations, significant communal area refurbishments, or major roof replacements all change the reinstatement cost and should trigger a reassessment.' },
              { title: 'Post-claim', desc: 'After a significant insurance claim, the rebuilding specification may differ from the original. A reassessment confirms the post-reinstatement figure is correctly reflected in the sum insured.' },
              { title: 'At the point of sale or refinancing', desc: 'Lenders and buyers increasingly require evidence of a current RICS reinstatement cost assessment as part of due diligence.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f5f7] p-6">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">The Practical Solution</p>
            <p>Our 3-Year Protection plan provides the correct structure: a full RICS assessment as the base, with annual BCIS-indexed updates in years two and three, and a new base assessment at the start of each three-year cycle. For managing agents with multiple blocks, this can be managed as a single portfolio instruction with staggered renewal dates.</p>
          </div>

        </div>
      </section>

      <section className="bg-[#f5f5f7] py-16 px-6 md:px-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-[#1d1d1f] mb-1">Is your reinstatement figure current?</p>
            <p className="text-[#6e6e73] text-sm">We respond within 24 hours.</p>
          </div>
          <Link href="/contact#contact-form" className="btn-shine shrink-0">Get a Quote</Link>
        </div>
      </section>
    </main>
  )
}
