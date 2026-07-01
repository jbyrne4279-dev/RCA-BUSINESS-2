import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Freeholders and Leaseholders | RCA',
  description: 'Specialist reinstatement cost assessments for freeholders and leaseholders. Ensure your buildings insurance reflects the real rebuild cost, not the market value.',
  alternates: { canonical: '/freeholders-leaseholders' },
}

const faqItems = [
  { question: 'What is the difference between reinstatement cost and market value?', answer: 'Market value is what the property might sell for on the open market. Reinstatement cost is what it would cost to rebuild it from scratch after total loss. The two figures are often very different, and only the reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'Who is responsible for insuring to the correct reinstatement cost?', answer: 'It depends on the lease. Most long leases place the obligation to insure to full reinstatement cost on the freeholder or the managing agent acting on their behalf. Some leases require leaseholders to contribute or arrange separate cover for their demise. Reading the lease carefully is the starting point.' },
  { question: 'Can a leaseholder commission their own reinstatement cost assessment?', answer: 'Yes. Leaseholders who believe the sum insured arranged for their block is incorrect can instruct an independent reinstatement cost assessment. Our report can be used to raise a formal concern with the freeholder or managing agent, or to support a service charge dispute.' },
  { question: 'What if our building has not been valued for several years?', answer: 'Construction costs have risen substantially in recent years. A reinstatement cost figure that has not been formally reviewed, even with annual index-linking, may no longer reflect the actual cost to rebuild. A fresh assessment is the safest approach.' },
  { question: 'What information do you need to get started?', answer: 'Usually the address, property type, approximate size, any previous valuation or assessment, and details of any recent alterations or extensions. We can often begin with very little information and ask for more as needed.' },
]

export default function FreeholdersLeaseholdersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Freeholders &amp; Leaseholders</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The insurance figure should reflect rebuild cost, not market value.
            </h1>
          </div>
          <div>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Whether you hold the freehold or a leasehold interest in a block, the buildings sum insured must reflect the cost to rebuild, not the market value. Underinsurance creates a documented financial exposure that falls directly on those responsible for arranging cover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE DISTINCTION */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Distinction</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Market value and rebuild cost are not the same.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              A building's market value and its reinstatement cost are separate figures and frequently differ substantially. After fire, flood or total loss, the relevant question is the cost to demolish, clear and rebuild: structure, professional fees, statutory fees, and VAT where applicable.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Most leasehold arrangements place an obligation on someone to insure to full reinstatement cost. A specialist assessment provides the documented, professionally accountable figure that satisfies that obligation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-4">
            {[
              { label: 'Market value', desc: 'Reflects demand, location, comparable sales and market conditions. Not relevant for insurance purposes.' },
              { label: 'Reinstatement cost', desc: 'Reflects the actual cost to demolish, clear and rebuild. This is the correct basis for setting the buildings sum insured.' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{label}</p>
                <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR FREEHOLDERS AND LEASEHOLDERS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">For Freeholders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A clearer basis for insurance decisions.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Most long leases require the freeholder to insure the block to full reinstatement cost. A specialist assessment produces the documented, professionally accountable figure that satisfies the lease obligation and supports insurance decisions and renewal discussions with brokers.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Appropriate for individual blocks, portfolio reviews and buildings where the insurance figure has not been formally reviewed in three or more years.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Instruct an Assessment</Link>
          </div>
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">For Leaseholders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              More confidence in the cover arranged for your building.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Where the declared sum insured is adequate, leaseholders are properly protected at the point of a claim. Where it is not, the average clause reduces the payout and the gap falls on those whose property is affected. Leaseholders who have grounds to question the figure in use may commission an independent assessment.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Our report provides documented evidence that can be used to raise a formal concern with the freeholder or managing agent, or to support a service charge dispute where the insurance figure is in question.
            </p>
            <Link href="/contact#contact-form" className="link-amber">Get independent advice →</Link>
          </div>
        </div>
      </section>

      {/* WHEN TO INSTRUCT */}
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">When to Act</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              When should you review the figure?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'The insurance figure has not been formally reviewed in three or more years.',
              'The building has been extended, altered or refurbished since the last assessment.',
              'You have concerns that the current sum insured may not reflect actual rebuild cost.',
              'You are taking on new management responsibility for a block.',
              'An RTM company has taken over and the insurance is being renewed for the first time.',
              'A leaseholder or insurer has raised a question about the adequacy of cover.',
            ].map((point, i) => (
              <div key={i} className="bg-white/[0.06] rounded-xl border border-white/10 p-6 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <p className="text-white/60 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Commission a reinstatement cost assessment today." />
      <FaqSection description="Common questions from freeholders and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}
