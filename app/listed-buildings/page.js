import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings | RCA',
  description: 'Specialist reinstatement cost assessments for listed buildings, heritage properties and conservation area buildings across the UK. Accurate rebuild valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings need a specialist assessment?', answer: 'Listed buildings require specialist materials, traditional construction methods and skilled craftspeople that standard calculators cannot account for. Conservation requirements, access constraints and period finishes all affect rebuild cost materially and must be assessed by a specialist.' },
  { question: 'Can you assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site surveys for all listed building categories, including Grade I, Grade II* and Grade II listed properties, scheduled ancient monuments and conservation area buildings.' },
  { question: 'Does a standard online calculator work for listed buildings?', answer: 'No. Generic calculators are calibrated to standard modern construction. They do not account for lime mortar, handmade brick, traditional roof coverings, ornamental stonework or the cost premium of specialist heritage contractors. A site-based assessment is the only appropriate approach.' },
  { question: 'How long does a listed building assessment take?', answer: 'Timescale depends on the complexity of the property. We conduct a site visit, complete the assessment, and deliver a documented report. We confirm the timeline on receipt of your enquiry.' },
  { question: 'What does a reinstatement cost assessment for a listed building include?', answer: 'Specialist materials, traditional construction methods, conservation and planning considerations, access requirements, heritage contractor rates, professional fees, statutory fees, and VAT where applicable.' },
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
              Standard calculators cannot price a listed building.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Listed and heritage buildings carry reinstatement costs that generic tools miss entirely. Authentic materials, specialist contractors, conservation constraints and planning requirements all increase rebuild cost materially. Our site-based assessments account for every factor.
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

      {/* WHY SPECIALIST */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              The gap between standard and specialist is significant.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Generic online calculators are calibrated to standard modern construction. They do not account for lime mortar, handmade brick, traditional roof coverings, ornamental stonework, or the cost premium of heritage contractors. The result is a declared value that understates actual reinstatement cost.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed">
              When a claim arises, the average clause applies and the payout is reduced in proportion to the shortfall. A site-based specialist assessment eliminates that exposure.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Online calculator', desc: 'Calibrated to standard modern construction. Cannot capture listed building cost premiums.', ok: false },
              { label: 'Specialist site-based assessment', desc: 'Accounts for authentic materials, heritage contractors, conservation requirements and access constraints.', ok: true },
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

      {/* WHAT DRIVES COST */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Cost Factors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              What makes the rebuild cost higher.
            </h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'Specialist materials.', desc: 'Handmade brick, lime mortar, natural slate, traditional roof coverings and period ironwork carry significant cost premiums over standard materials.' },
              { title: 'Skilled contractors.', desc: 'Conservation and heritage reinstatement requires specialist craftspeople. Standard contractor rates do not apply.' },
              { title: 'Planning and consent.', desc: 'Listed building consent, conservation area requirements and Historic England involvement add both cost and time to any rebuild programme.' },
              { title: 'Access constraints.', desc: 'Town centre locations, restricted sites and limited access materially increase the cost of demolition and reconstruction.' },
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

      {/* PROPERTY TYPES */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Grade II listed buildings', desc: 'The most common listing category. A site-based specialist assessment is required to establish an accurate rebuild cost.' },
              { title: 'Grade II* listed buildings', desc: 'Buildings of more than special interest. Specialist materials and construction methods add significant rebuild cost.' },
              { title: 'Grade I listed buildings', desc: 'Buildings of exceptional interest. Reinstatement demands the highest level of specialist expertise and commands the highest cost.' },
              { title: 'Conservation area buildings', desc: 'Unlisted buildings within a conservation area may carry significant material and planning cost constraints.' },
              { title: 'Period conversions', desc: 'Victorian and Edwardian houses converted to flats, where original features and traditional construction methods affect rebuild cost.' },
              { title: 'Listed blocks of flats', desc: 'Residential blocks within a listed building or curtilage, with communal areas and period features requiring specialist assessment.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-6">
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
              <div key={i} className="bg-white/10 rounded-xl border border-white/20 p-6 flex gap-4">
                <span className="text-white font-bold text-sm shrink-0 mt-0.5">✓</span>
                <p className="text-white/80 text-sm leading-relaxed">{point}</p>
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
