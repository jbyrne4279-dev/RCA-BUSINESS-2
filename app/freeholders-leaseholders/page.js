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
  { question: 'Can a leaseholder commission their own RCA?', answer: 'Yes. Leaseholders who believe the sum insured arranged for their block is incorrect can instruct an independent reinstatement cost assessment. Our report can be used to raise a formal concern with the freeholder or managing agent, or to support a service charge dispute.' },
  { question: 'What if our building has not been valued for several years?', answer: 'Construction costs have risen substantially in recent years. A reinstatement cost figure that has not been formally reviewed — even with annual index-linking — may no longer reflect the actual cost to rebuild. A fresh assessment is the safest approach.' },
  { question: 'What information do you need to get started?', answer: 'Usually the address, property type, approximate size, any previous valuation or assessment, and details of any recent alterations or extensions. We can often begin with very little information and ask for more as needed.' },
]

export default function FreeholdersLeaseholdersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-8">Freeholders & Leaseholders</p>
            <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              The insurance figure<br />should reflect rebuild cost,<br />not market value.
            </h1>
          </div>
          <div>
            <p className="text-[#6e6e73] text-lg leading-relaxed mb-8">
              If you own a leasehold interest or hold the freehold of a block, the insurance figure should be based on the cost to rebuild the building — not the value you might sell it for. That difference matters because underinsurance can become expensive very quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE DISTINCTION */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">The Distinction</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Market value and rebuild cost are not the same.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              A building may be worth one figure on the open market but cost something very different to rebuild from scratch after fire, flood or other major damage. The sum insured on a buildings policy should reflect what it costs to rebuild — including demolition, site clearance, structure, professional fees, statutory fees, and VAT where applicable.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              Leasehold arrangements often place a clear responsibility on someone to insure the building to the correct level. A specialist reinstatement cost assessment helps make sure that obligation is supported by a proper, documented rebuild-cost figure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#f5f5f7] mt-4">
            {[
              { label: 'Market value', desc: 'Reflects demand, location, comparable sales and market conditions. Not relevant for insurance purposes.' },
              { label: 'Reinstatement cost', desc: 'Reflects the actual cost to demolish, clear and rebuild. This is the correct basis for setting the buildings sum insured.' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-white p-8">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{label}</p>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR FREEHOLDERS */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">For Freeholders</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              A clearer basis for insurance decisions.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              Most long leases require the freeholder to insure the block to full reinstatement cost. A specialist reinstatement cost assessment provides a documented, defensible figure that satisfies that lease obligation and gives you a clearer basis for insurance decisions and renewal discussions.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              Best for individual blocks, portfolio reviews and buildings where the insurance figure has not been updated for several years.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Instruct an Assessment</Link>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">For Leaseholders</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              More confidence in the cover arranged for your building.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              For leaseholders, a more accurate sum insured can mean less chance of disputes after a claim and more confidence that the policy reflects the real rebuild cost. If you believe the figure being used is incorrect, you can commission an independent reinstatement cost assessment.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              Our report can be used to raise a formal concern with your freeholder or managing agent, or to support a service charge dispute where the insurance figure is in question.
            </p>
            <Link href="/contact#contact-form" className="link-amber">Get independent advice →</Link>
          </div>
        </div>
      </section>

      {/* WHEN TO INSTRUCT */}
      <section className="bg-[#1d1d1f] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">When to Act</p>
            <h2 className="font-headline font-semibold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              When should you review the figure?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
            {[
              'The insurance figure has not been formally reviewed in three or more years.',
              'The building has been extended, altered or refurbished since the last assessment.',
              'You have concerns that the current sum insured may not reflect actual rebuild cost.',
              'You are taking on new management responsibility for a block.',
              'An RTM company has taken over and the insurance is being renewed for the first time.',
              'A leaseholder or insurer has raised a question about the adequacy of cover.',
            ].map((point, i) => (
              <div key={i} className="bg-[#1d1d1f] p-8 flex gap-4">
                <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
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
