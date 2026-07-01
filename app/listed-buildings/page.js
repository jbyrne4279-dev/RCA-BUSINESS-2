import Link from 'next/link'
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
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Listed &amp; Heritage Buildings</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Reinstatement cost assessments for listed and heritage buildings.
            </h1>
          </div>
          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Listed and heritage buildings carry reinstatement costs that standard construction calculators cannot capture. Authentic materials, specialist contractors, conservation constraints and planning requirements all increase rebuild cost materially. Our assessments account for each of these factors.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Why Specialist Work Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Standard calculators rarely capture the real cost.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Authentic materials, conservation requirements, access constraints and period detailing all increase the rebuild cost of a listed or heritage building beyond standard construction rates. Generic online calculators are calibrated to standard modern construction and fail to reflect these factors.
            </p>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              The consequence is a declared value that understates actual reinstatement cost. The building is underinsured, and the average clause will apply at the point of a claim.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Specialist materials', desc: 'Handmade brick, lime mortar, natural slate, traditional roof coverings and period ironwork carry significant cost premiums over standard materials.' },
              { title: 'Skilled contractors', desc: 'Conservation and heritage reinstatement requires specialist craftspeople. Standard contractor rates do not apply.' },
              { title: 'Planning and consent', desc: 'Listed building consent, conservation area requirements and Historic England involvement add both cost and time to any rebuild programme.' },
              { title: 'Access constraints', desc: 'Town centre locations, restricted sites and limited access materially increase the cost of demolition and reconstruction.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-1">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ASSESS */}
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
              { title: 'Grade II listed buildings', desc: 'The most common listing category. A site-based specialist assessment is required to establish an accurate rebuild cost.' },
              { title: 'Grade II* listed buildings', desc: 'Buildings of more than special interest. Specialist materials and construction methods add significant rebuild cost.' },
              { title: 'Grade I listed buildings', desc: 'Buildings of exceptional interest. Reinstatement demands the highest level of specialist expertise and commands the highest cost.' },
              { title: 'Conservation area buildings', desc: 'Unlisted buildings within a conservation area may carry significant material and planning cost constraints.' },
              { title: 'Period conversions', desc: 'Victorian and Edwardian houses converted to flats, where original features and traditional construction methods affect rebuild cost.' },
              { title: 'Listed blocks of flats', desc: 'Residential blocks within a listed building or curtilage, with communal areas and period features requiring specialist assessment.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE INCLUDE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">What We Include</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              A thorough assessment of the real rebuild cost.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              All listed building assessments are site-based. We inspect the property in person, assess materials, construction method and condition, consider every relevant cost factor, and produce a documented, broker-ready report.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Specialist materials', desc: 'Lime mortar, natural stone, traditional timber, handmade brick and period roofing materials.' },
              { title: 'Conservation requirements', desc: 'Listed building consent, planning conditions and Historic England requirements.' },
              { title: 'Specialist contractor costs', desc: 'Skilled craftspeople and heritage contractors priced at current market rates.' },
              { title: 'Access and logistics', desc: 'Site access constraints, town centre logistics and demolition complexity.' },
              { title: 'Professional and statutory fees', desc: 'Architect, structural engineer, planning fees and building control.' },
              { title: 'VAT where applicable', desc: 'VAT treatment for listed buildings is determined by use and ownership structure.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6 flex gap-3">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Get an accurate assessment for your listed building." />
      <FaqSection description="Common questions about reinstatement cost assessments for listed and heritage buildings." items={faqItems} />
    </main>
  )
}
