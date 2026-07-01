import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings | RCA',
  description: 'Specialist reinstatement cost assessments for listed buildings. Listed properties carry 20–50% higher rebuild costs than standard construction. Accurate, site-based valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings need a specialist assessment?', answer: 'Listed buildings must be reinstated in original style and materials under the Planning (Listed Buildings and Conservation Areas) Act 1990. Standard calculators calibrated to modern construction cannot account for lime mortar, handmade brick, heritage contractor rates, conservation consents or extended programme timescales. The result is systematic underinsurance.' },
  { question: 'Can you assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site surveys for all listed building categories. Grade I and Grade II* buildings cannot be assessed by desktop — they require a physical inspection by a specialist surveyor. We confirm the programme and fee on receipt of your enquiry.' },
  { question: 'Does a standard online calculator work for listed buildings?', answer: 'No. Generic calculators apply standard construction rates and miss specialist materials, heritage labour premiums, conservation consents and extended programme costs entirely. Listed properties are underinsured by approximately 40% on average — the gap is significantly wider than for standard buildings.' },
  { question: 'What is the VAT position on listed building reinstatement?', answer: 'A full rebuild after total loss is zero-rated. But demolition, professional fees and partial-damage repairs attract 20% VAT. Since most real claims are partial rather than total-loss, VAT at 20% applies to the majority of listed building insurance work. Getting VAT treatment right is a material element of the declared value.' },
  { question: 'How often should a listed building be reassessed?', answer: 'A full specialist reassessment is required at least every three years, with annual BCIS-indexed inflation reviews in intervening years. Where material works have been carried out, or where the building has not been assessed since before 2020, a fresh site-based assessment should be commissioned before the next renewal.' },
]

export default function ListedBuildingsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/rca-for-my-property.png" alt="Listed building reinstatement cost assessment" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Listed &amp; Heritage Buildings</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Listed buildings cost significantly more to rebuild than standard calculators suggest.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              A 20–50% rebuild cost uplift over standard construction is typical. For complex heritage properties it can be far higher. Generic tools miss specialist materials, heritage contractors, conservation consents and VAT exposure entirely. Our site-based assessments account for every factor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#on-site-survey" className="btn-ghost">On-Site Survey</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 shadow-xl">
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Listed building assessment" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* THE COST GAP */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Cost Gap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Rebuild cost regularly exceeds market value for listed properties.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              For a standard property, market value is often higher than rebuild cost. For listed buildings, the reverse is frequently true. Authentic materials, specialist contractors, conservation requirements and extended programme timescales combine to push rebuild cost well above what a comparable unlisted building would cost to replace.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              A thatched cottage worth £500,000 on the open market can carry a reinstatement cost of £1,000,000 or more once listing requirements, conservation consents and specialist labour and materials are properly accounted for. A Victorian terrace valued at £400,000 may cost £800,000 to rebuild correctly.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Generic calculators apply standard modern construction rates. They do not account for any of these factors, and the resulting figure systematically understates the true cost.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Online calculator or inherited estimate', desc: 'Applies standard modern construction rates. Misses specialist materials, heritage labour, conservation consents and VAT exposure. Not defensible in a dispute.', ok: false },
              { label: 'Specialist site-based assessment', desc: 'Accounts for authentic materials, heritage contractor rates, conservation requirements, extended programme costs and VAT treatment. Accepted by all UK insurers.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`rounded-xl border p-6 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : 'border-[#dadce0] bg-white'}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#dadce0]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{label}</p>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-5 mt-2">
              <p className="text-xs text-[#5f6368] leading-relaxed"><span className="font-semibold text-[#202124]">Per square metre context.</span> Standard BCIS rates in 2025 run approximately £1,700–£2,400/m². For complex listed properties, realistic figures climb to £3,000–£5,000/m² or more — before professional fees, consents and VAT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COST FACTORS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">What Drives the Cost</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Six factors that standard assessments miss.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Under the Planning (Listed Buildings and Conservation Areas) Act 1990, reinstatement must be carried out in original style and materials. That legal obligation drives every additional cost below.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'Specialist materials.', desc: 'Handmade brick, lime mortar, natural stone, traditional timber and period roofing materials carry significant cost premiums. Lime mortar is slower to work with; stone is highly variable and must be individually priced rather than applied as a standard rate.' },
              { title: 'Heritage contractors.', desc: 'Stonemasons, lime plasterers, heritage carpenters and master thatchers command premium rates and are often booked months ahead. Standard contractor rates do not apply. Around 80% of thatched homes are listed, adding a further layer of specialist labour and material cost.' },
              { title: 'Conservation consents and professional fees.', desc: 'Listed Building Consent, conservation officer involvement and sometimes archaeological recording conditions all add to programme duration and cost. Professional fees run higher than standard — conservation architects and heritage consultants extend the team significantly beyond the standard build.' },
              { title: 'Extended programme.', desc: 'Longer reinstatement timescales increase preliminaries and expose projects to construction cost inflation. Index-linking on an insurance policy does not fully capture this exposure.' },
              { title: 'VAT treatment.', desc: 'A full rebuild after total loss is zero-rated. Demolition, professional fees and partial-damage repairs attract 20% VAT. Most real claims are partial rather than total-loss, so VAT at 20% applies in the majority of cases. This is frequently excluded from desktop figures.' },
              { title: 'Curtilage structures.', desc: 'Listing frequently extends beyond the main building to boundary walls, ancillary buildings and structures within the historic curtilage. These are easily missed in an inherited or desktop figure and can represent material additional cost.' },
            ].map(({ title, desc }) => (
              <div key={title} className="py-8 flex gap-6">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <div>
                  <h3 className="font-semibold text-[#202124] text-sm mb-2">{title}</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNDERINSURANCE RISK */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Underinsurance Risk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Listed properties are underinsured by approximately 40% on average.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Across UK property broadly, around 70% of buildings carry an inaccurate sum insured. For listed buildings the gap is wider — BCIS-linked analysis suggests an average underinsurance of approximately 40%, driven by the systematic failure of standard assessment methods to account for heritage rebuild costs.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              When the average clause applies, the payout is reduced in proportion to the shortfall. A building insured for £1,000,000 against a true rebuild cost of £1,500,000 is covered for 67%. A £300,000 claim is paid at £200,000. The £100,000 gap falls on the owner.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { stat: '40%', label: 'average underinsurance gap for listed buildings based on BCIS-linked analysis' },
              { stat: '20–50%', label: 'typical rebuild cost uplift over standard construction for listed properties' },
              { stat: '£3–5k', label: 'realistic per m² rebuild cost for complex listed properties, vs £1,700–2,400 for standard' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-xl border border-[#dadce0] p-6 flex items-center gap-6">
                <p className="text-3xl font-bold text-[#202124] leading-none shrink-0 w-28">{stat}</p>
                <p className="text-[#5f6368] text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Grade II listed buildings', desc: '91% of all listed buildings fall into this category. A site-based specialist assessment is required to establish an accurate rebuild cost — desktop rates do not apply.' },
              { title: 'Grade II* listed buildings', desc: 'Buildings of more than special interest. Grade II* and Grade I buildings cannot be assessed by desktop and require an on-site inspection.' },
              { title: 'Grade I listed buildings', desc: 'Buildings of exceptional interest. Reinstatement demands the highest level of specialist expertise and commands the highest cost per m².' },
              { title: 'Conservation area buildings', desc: 'Unlisted buildings within a conservation area may carry significant material and planning cost constraints depending on local authority requirements.' },
              { title: 'Thatched and period properties', desc: 'Around 80% of thatched homes are listed. Specialist thatch rates, heritage materials and conservation consents all require individual pricing.' },
              { title: 'Listed blocks of flats', desc: 'Residential blocks within a listed building or curtilage, with communal areas, shared services and period features requiring full specialist assessment.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO INSTRUCT */}
      <section className="bg-[#1a73e8] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">When to Act</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              When should you commission an assessment?
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Any of the following circumstances creates a material risk that the current sum insured does not reflect the true reinstatement cost of your listed property.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'The building has never had a specialist reinstatement cost assessment.',
              'The insurance figure is based on an online calculator or inherited estimate.',
              'The property has not been formally assessed in three or more years.',
              'You are acquiring or taking on management of a listed property.',
              'Significant works, alterations or extensions have been carried out.',
              'Your insurer or broker has queried the adequacy of the declared value.',
            ].map((point, i) => (
              <div key={i} className="bg-white rounded-xl border border-white/40 p-6 flex gap-4">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 mt-0.5 tick-glow">✓</span>
                <p className="text-[#3c4043] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact#contact-form" className="bg-white text-[#1a73e8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Commission an Assessment</Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate assessment for your listed building." />
      <FaqSection description="Common questions about reinstatement cost assessments for listed and heritage buildings." items={faqItems} />
    </main>
  )
}
