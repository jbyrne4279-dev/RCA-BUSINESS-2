import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Listed and Heritage Buildings',
  description: 'Specialist reinstatement cost assessments for listed buildings. Listed properties carry 20–50% higher rebuild costs than standard construction. Accurate, site-based valuations for buildings insurance.',
  alternates: { canonical: '/listed-buildings' },
}

const faqItems = [
  { question: 'Why do listed buildings cost so much more to reinstate than standard properties?', answer: 'Legal obligation drives the cost: under the Planning (Listed Buildings and Conservation Areas) Act 1990, reinstatement must be carried out in original style and materials. Lime mortar, handmade brick, heritage contractors and conservation consents all carry significant premiums over standard construction - and most assessors who are not heritage specialists underestimate every one of them.' },
  { question: 'Is a desktop assessment appropriate for a listed building?', answer: 'No. A desktop assessment applies standard construction rates and cannot account for specialist materials, heritage labour, conservation consent requirements or the extended programme costs that come with a listed reinstatement. On-site inspection by a specialist surveyor is the only method that produces a defensible declared value for a listed property.' },
  { question: 'Can you assess Grade I and Grade II* listed buildings?', answer: 'Yes. We carry out on-site surveys for all listed building categories. Grade I and Grade II* buildings in particular cannot be assessed by desktop - they require physical inspection and specialist knowledge. We confirm the programme and fee on receipt of your enquiry.' },
  { question: 'What is the VAT position on listed building reinstatement?', answer: 'A full rebuild after total loss is zero-rated. But demolition, professional fees and partial-damage repairs attract 20% VAT. Since most real claims are partial rather than total-loss, VAT at 20% applies to the majority of listed building insurance work - and it is frequently excluded from desktop figures.' },
  { question: 'How often should a listed building be reassessed?', answer: 'A full specialist reassessment is required at least every three years, with annual BCIS-indexed inflation reviews in intervening years. Where material works have been carried out, or where the building has not been assessed since before 2020, a fresh site-based assessment should be commissioned before the next renewal.' },
]

export default function ListedBuildingsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Listed &amp; Heritage Buildings</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              Listed buildings cost far more to reinstate than most assessors realise.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Authentic materials, heritage contractors and conservation requirements drive rebuild costs far above standard construction. For complex Grade I properties the gap is wider still - and a desktop assessment will miss it entirely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#on-site-survey" className="btn-ghost">On-Site Survey</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Listed building assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Site-based specialist assessments for listed and heritage buildings across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE COST GAP */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Cost Gap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              For listed properties, rebuild cost regularly exceeds market value - and standard assessors don't price the gap.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-6">
              Generic calculators apply standard construction rates and systematically understate the figure.
            </p>
          </div>
          <div className="space-y-4 mt-4">
            {[
              { label: 'Desktop assessment or online calculator', desc: 'Misses heritage materials, labour premiums, consents and timescales.', ok: false },
              { label: 'Specialist on-site assessment', desc: 'The only appropriate method for any listed property.', ok: true },
            ].map(({ label, desc, ok }) => (
              <div key={label} className={`ls-card p-6 flex gap-4 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : ''}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-semibold text-[#202124] text-sm mb-1">{label}</p>
                  <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="ls-card p-5 mt-2">
              <p className="text-xs text-[#5f6368] leading-relaxed"><span className="font-semibold text-[#202124]">Per square metre context.</span> Current approximate BCIS rates run £1,700–£2,400/m² for standard construction. For complex listed properties, realistic figures can reach £3,000–£5,000/m² or more, before professional fees, consents and VAT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COST FACTORS */}
      <section className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="badge badge-blue">What Drives the Cost</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Six cost drivers that most assessors aren't qualified to price.
            </h2>
            <p className="text-[#5f6368] text-sm leading-relaxed">
              Reinstatement must be carried out in original style and materials under the Planning (Listed Buildings and Conservation Areas) Act 1990.
            </p>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#dadce0]">
            {[
              { title: 'Specialist materials.' },
              { title: 'Heritage contractors.' },
              { title: 'Conservation consents and professional fees.' },
              { title: 'Extended programme.' },
              { title: 'VAT treatment.' },
              { title: 'Curtilage structures.' },
            ].map(({ title }) => (
              <div key={title} className="py-8 flex gap-6">
                <span className="text-[#1a73e8] font-bold text-sm shrink-0 tick-glow">✓</span>
                <div>
                  <h3 className="font-semibold text-[#202124] text-sm">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              What we assess.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Grade II listed buildings', href: '/contact' },
              { title: 'Grade II* listed buildings', href: '/contact' },
              { title: 'Grade I listed buildings', href: '/contact' },
              { title: 'Conservation area buildings', href: '/contact' },
              { title: 'Thatched and period properties', href: '/contact' },
              { title: 'Listed blocks of flats', href: '/blocks-of-flats' },
            ].map(({ title, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'#f1f3f9'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#9aa7bd" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                  <Link href={href} className="text-[#1a73e8] text-xs font-semibold hover:text-[#1254b5] transition-colors">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Get a specialist on-site assessment for your listed building." />
      <FaqSection description="Common questions about reinstatement cost assessments for listed and heritage buildings." items={faqItems} />
    </main>
  )
}
