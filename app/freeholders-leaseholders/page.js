import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Freeholders and Leaseholders | RCA',
  description: 'Specialist reinstatement cost assessments for freeholders and leaseholders. Ensure your buildings insurance reflects the real rebuild cost, not the market value.',
  alternates: { canonical: '/freeholders-leaseholders' },
}

const faqItems = [
  { question: 'What is the difference between reinstatement cost and market value?', answer: 'Market value is the price a property achieves on the open market. Reinstatement cost is the cost to rebuild it from scratch after total loss. The two figures are frequently very different. Only reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'Who is responsible for insuring to the correct reinstatement cost?', answer: 'The lease governs this. Most long leases place the obligation to insure to full reinstatement cost on the freeholder or the managing agent acting on their behalf. Some leases require leaseholders to contribute or arrange separate cover for their demise. The starting point is always the lease.' },
  { question: 'Can a leaseholder commission their own reinstatement cost assessment?', answer: 'Yes. Leaseholders with grounds to question the sum insured arranged for their block may instruct an independent reinstatement cost assessment. Our report can be used to raise a formal concern with the freeholder or managing agent, or as evidence in a service charge dispute.' },
  { question: 'What if our building has not been valued for several years?', answer: 'UK construction costs rose substantially between 2020 and 2024. A reinstatement figure not formally reviewed in that period, regardless of annual index-linking, may no longer reflect actual rebuild cost. A fresh assessment is the correct step.' },
  { question: 'What information do you need to get started?', answer: 'Address, property type, approximate floor area, any previous valuation or assessment, and details of recent alterations or extensions. We can begin with limited information and request further detail as needed.' },
]

export default function FreeholdersLeaseholdersPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/rca-for-my-property.png" alt="Reinstatement cost assessment for freeholders and leaseholders" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Freeholders &amp; Leaseholders</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              The insurance figure should reflect rebuild cost, not market value.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Whether you hold the freehold or a leasehold interest in a block, the buildings sum insured must reflect the cost to rebuild. Underinsurance creates a documented financial exposure that falls directly on those responsible for arranging cover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-xl">
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Freeholder reinstatement cost assessment" fill className="object-cover" priority />
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
          <div className="space-y-4 mt-4">
            {[
              { label: 'Market value', desc: 'Determined by location, demand and comparable sales. Not relevant for insurance purposes.', ok: false },
              { label: 'Reinstatement cost', desc: 'The actual cost to demolish, clear and rebuild. The only correct basis for the buildings sum insured.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`rounded-xl border p-6 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : 'border-[#dadce0] bg-white'}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#dadce0]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{label}</p>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR FREEHOLDERS / LEASEHOLDERS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-[#dadce0] p-8 flex flex-col">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 w-fit">For Freeholders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] leading-tight mb-4">
              A clearer basis for insurance decisions.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-4 flex-1">
              Most long leases require the freeholder to insure the block to full reinstatement cost. A specialist assessment produces the documented, professionally accountable figure that satisfies the lease obligation and supports insurance decisions and renewal discussions with brokers.
            </p>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-8 text-[#9aa0a6]">
              Appropriate for individual blocks, portfolio reviews and buildings where the insurance figure has not been formally reviewed in three or more years.
            </p>
            <Link href="/contact#contact-form" className="btn-shine w-fit">Instruct an Assessment</Link>
          </div>
          <div className="bg-[#e8f0fe] rounded-2xl border border-[#c8d8f8] p-8 flex flex-col">
            <span className="inline-flex items-center bg-white/60 text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5 w-fit">For Leaseholders</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#202124] leading-tight mb-4">
              More confidence in the cover arranged for your building.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-4 flex-1">
              Where the declared sum insured is adequate, leaseholders are properly protected at the point of a claim. Where it is not, the average clause reduces the payout and the gap falls on those whose property is affected. Leaseholders who have grounds to question the figure in use may commission an independent assessment.
            </p>
            <p className="text-[#5f6368] text-sm leading-relaxed mb-8 text-[#9aa0a6]">
              Our report provides documented evidence to raise a formal concern with the freeholder or managing agent, or to support a service charge dispute.
            </p>
            <Link href="/contact#contact-form" className="btn-shine w-fit">Get Independent Advice</Link>
          </div>
        </div>
      </section>

      {/* WHEN TO INSTRUCT */}
      <section className="bg-[#1a73e8] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">When to Act</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              When should you review the figure?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Any of the following circumstances creates a material risk that the current sum insured is inadequate. Each one warrants a formal reassessment before the next renewal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'The insurance figure has not been formally reviewed in three or more years.',
              'The building has been extended, altered or refurbished since the last assessment.',
              'The current sum insured does not appear to reflect actual rebuild cost.',
              'You are taking on new management responsibility for a block.',
              'An RTM company has assumed control and insurance is being renewed for the first time.',
              'A leaseholder or insurer has questioned the adequacy of cover.',
            ].map((point, i) => (
              <div key={i} className="bg-white rounded-xl border border-white/40 p-6 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 mt-0.5 tick-glow">✓</span>
                <p className="text-[#3c4043] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Check Your Sum Insured</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Commission a reinstatement cost assessment today." />
      <FaqSection description="Common questions from freeholders and leaseholders about reinstatement cost assessments and buildings insurance." items={faqItems} />
    </main>
  )
}
