import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings | RCA',
  description: 'Specialist reinstatement cost assessments for listed buildings, heritage properties and conservation area buildings across the UK. Accurate rebuild valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings need a specialist assessment?', answer: 'Listed and heritage buildings often require specialist materials, traditional construction methods, and skilled craftspeople that standard calculators do not properly account for. Special materials, conservation requirements and access constraints can significantly affect rebuild cost.' },
  { question: 'Can you assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site surveys for all listed building categories, including Grade I and Grade II* listed properties, scheduled ancient monuments and conservation area buildings.' },
  { question: 'Does a standard online calculator work for listed buildings?', answer: 'No. Generic calculators are built around standard construction and do not account for lime mortar, handmade brick, traditional roof coverings, ornamental stonework or the premium cost of specialist contractors. A site-based specialist assessment is essential.' },
  { question: 'How long does a listed building assessment take?', answer: 'It depends on the property. We carry out a site visit and complete a thorough assessment before producing the report. We will confirm a timeline when you make an enquiry.' },
  { question: 'What does a reinstatement cost assessment for a listed building include?', answer: 'It includes specialist materials, traditional construction methods, conservation and planning considerations, access requirements, specialist contractor costs, professional fees, statutory fees, and VAT where applicable.' },
]

export default function ListedBuildingsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1d1d1f] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Listed & Heritage Buildings</p>
            <h1 className="font-headline font-semibold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Reinstatement cost<br />assessments for listed<br />and heritage buildings.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Listed and heritage buildings need special attention because reinstatement can be more complex and costly than standard construction. Our approach considers the features that make these buildings different, so the insurance figure is based on realistic rebuild assumptions.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Why Specialist Work Matters</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Standard calculators rarely capture the real cost.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              Special materials, conservation requirements, access constraints and detailed finishes can significantly affect the rebuild cost of a listed or heritage building. A generic online calculator is built around standard modern construction and will not properly reflect any of these factors.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              The result is often a declared value that substantially understates the real cost of reinstatement — leaving the building significantly underinsured at exactly the moment when accurate cover matters most.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get an Accurate Figure</Link>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#f5f5f7]">
            {[
              { title: 'Specialist materials', desc: 'Handmade brick, lime mortar, natural slate, traditional roof coverings and period ironwork carry significant cost premiums over standard materials.' },
              { title: 'Skilled contractors', desc: 'Conservation and heritage work requires specialist craftspeople. Standard builder rates do not apply.' },
              { title: 'Planning and consent', desc: 'Listed building consent, conservation area requirements and Historic England involvement add cost and time to any rebuild.' },
              { title: 'Access constraints', desc: 'Town centre locations, tight sites and restricted access can significantly increase the cost of demolition and reconstruction.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-1">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ASSESS */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Property Types</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Grade II listed buildings', desc: 'The most common listing category. Requires a site-based specialist assessment to reflect accurate rebuild cost.' },
              { title: 'Grade II* listed buildings', desc: 'Particularly important buildings of more than special interest. Specialist materials and methods add significant rebuild cost.' },
              { title: 'Grade I listed buildings', desc: 'Buildings of exceptional interest. Reinstatement involves the highest level of specialist expertise and cost.' },
              { title: 'Conservation area buildings', desc: 'Unlisted buildings within a conservation area may still carry significant material and planning constraints.' },
              { title: 'Period conversions', desc: 'Victorian and Edwardian houses converted into flats, where original features and traditional construction affect rebuild cost.' },
              { title: 'Listed blocks of flats', desc: 'Residential blocks within a listed building or curtilage, with communal areas and period features to consider.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-8">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE INCLUDE */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">What We Include</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              A thorough assessment of the real rebuild cost.
            </h2>
            <p className="text-[#6e6e73] text-sm leading-relaxed">
              Our listed building assessments are site-based. We inspect the property in person, assess the materials, construction method and condition, and consider all the relevant cost factors before producing a clear, documented report.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#f5f5f7]">
            {[
              { title: 'Specialist materials', desc: 'Lime mortar, natural stone, traditional timber, handmade brick and period roofing.' },
              { title: 'Conservation requirements', desc: 'Listed building consent, planning conditions and Historic England considerations.' },
              { title: 'Specialist contractor costs', desc: 'Skilled craftspeople and heritage contractors at realistic market rates.' },
              { title: 'Access and logistics', desc: 'Site access constraints, town centre premiums and demolition complexity.' },
              { title: 'Professional and statutory fees', desc: 'Architect, structural engineer, planning fees and building control.' },
              { title: 'VAT where applicable', desc: 'VAT treatment for listed buildings depends on use and ownership structure.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 flex gap-3">
                <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-[#1d1d1f] text-sm mb-1">{title}</p>
                  <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
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
