import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | Cavendish & Rowe',
  description: 'RICS-regulated reinstatement cost assessments for block managers. Consistent, compliant, accepted at renewal without question.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
}

const faqItems = [
  { question: 'As a block manager, am I personally liable for underinsurance?', answer: 'Yes. Where your management agreement requires you to arrange buildings insurance at full reinstatement cost, failure to do so exposes you to a personal liability claim from leaseholders. A RICS-regulated assessment is the documented evidence that you have discharged that duty.' },
  { question: 'Why does an insurer calculator not protect me?', answer: 'Insurer rebuild tools carry no professional accountability and no RICS regulation. In any underinsurance dispute they provide no documented methodology and no defence. Only a RICS-regulated assessment gives you a professionally defensible figure.' },
  { question: 'How do we instruct assessments for multiple blocks at once?', answer: 'Contact us with your portfolio details. We issue a consolidated quote covering all blocks, with individual reports per property and a portfolio summary schedule under a single engagement - no repeat admin.' },
  { question: 'Can leaseholders or a tribunal challenge the figure?', answer: 'A RICS-regulated report is the standard of evidence accepted by UK courts, the First-tier Tribunal and the Property Ombudsman. Our reports are produced to that standard and are defensible to that level of scrutiny.' },
  { question: 'What information do you need to get started?', answer: 'Property address, approximate gross internal floor area, construction type, number of storeys, and any specialist features such as listed status. We issue a simple instruction form on confirmation - the process takes minutes.' },
]

export default function BlockManagersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Block Managers', item: 'https://reinstatementcostassessment.org/block-managers-reinstatement-cost-assessments' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              <span className="blue-keyword">Compliant figures</span> across every block you manage.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              As block manager, the obligation to insure at full reinstatement cost sits with you. RICS-regulated assessments across every block you manage - documented, defensible, and accepted at renewal without challenge.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_208633670.jpeg"
              alt="Block manager reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated figures across your entire managed portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION A - The compliance burden (text left, card right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <span className="badge badge-blue mb-5">The Compliance Burden</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Every block you manage needs a <span className="blue-keyword">regular RICS review</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              RICS guidance requires formal reassessment at least every three years, with annual inflation adjustments in between. Across a portfolio of blocks, keeping track of each renewal cycle - and ensuring no property lapses - is a material compliance obligation.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              When figures lapse or an online calculator is used in place of a regulated assessment, your professional indemnity exposure increases significantly. In any underinsurance dispute, only a RICS-regulated report provides a defensible methodology.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Discuss Your Portfolio</Link>
          </div>

          {/* Right: 3-year compliance cycle card */}
          <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <div className="px-7 pt-7 pb-5 border-b border-[#e2e8f0]">
              <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-1">3-Year Compliance Cycle</p>
              <p className="text-sm text-[#64748b]">How RICS guidance applies to your managed blocks</p>
            </div>
            <div className="p-7 flex flex-col gap-5">
              {[
                { year: 'Year 1', title: 'Full RICS Assessment', desc: 'Base reinstatement cost established by a RICS-regulated surveyor. Report issued in broker-ready format.' },
                { year: 'Year 2', title: 'BCIS-Indexed Update', desc: 'Annual inflation uplift applied using BCIS data. Renewal-ready report issued before your renewal date.' },
                { year: 'Year 3', title: 'BCIS-Indexed Update', desc: 'Second annual uplift. Three-year RICS compliance maintained - no re-instruction required.' },
              ].map(({ year, title, desc }) => (
                <div key={year} className="flex gap-4 items-start step-reveal-item">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xs font-bold text-white" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
                    {year}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b3e] mb-1">{title}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION B - What block managers get (card left, text right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: checklist card */}
          <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-8" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-5">What Block Managers Get</p>
            <ul className="space-y-4">
              {[
                { title: '24-hr desktop turnaround', desc: 'Broker-ready report issued within 24 hours of instruction for standard blocks.' },
                { title: 'Portfolio schedules', desc: 'A single summary schedule covering all blocks in your managed portfolio - one document for renewal season.' },
                { title: 'Managed renewals', desc: 'We track each block\'s review date and issue renewal-ready reports before you need them - no chasing required.' },
                { title: 'Single-invoice billing', desc: 'One consolidated invoice per portfolio instruction. No per-block admin.' },
                { title: 'Named surveyor throughout', desc: 'One point of contact across your entire portfolio, from instruction to report delivery.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-3 items-start step-reveal-item">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#0057FF]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#0d1b3e]">{title}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: text */}
          <div>
            <span className="badge badge-blue mb-5">How We Work With Block Managers</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              One instruction covers your <span className="blue-keyword">entire managed portfolio</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              We work with block management firms of all sizes - from a handful of blocks to portfolios of hundreds. A single instruction to us triggers a coordinated assessment across every property, with individual reports per block and a consolidated portfolio schedule.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Our 3-Year Protection plan means you instruct once and we handle all subsequent renewals - including annual BCIS-indexed updates - so compliance is maintained without any re-instruction or admin from your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact?service=3year#contact-form" className="btn-shine">Enquire About 3-Year Plan</Link>
              <Link href="/contact#contact-form" className="btn-ghost">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-COL FEATURE CARDS */}
      <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              Built for <span className="blue-keyword">block management firms</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-5 h-5 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-3">Portfolio Scale</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-1">
                One instruction covers every block in your managed portfolio. Individual RICS-regulated reports per property, plus a consolidated summary schedule for your records and insurers.
              </p>
              <Link href="/contact#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">
                Request a portfolio quote &rarr;
              </Link>
            </div>

            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-5 h-5 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-3">Managed Renewals</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-1">
                We track every block&apos;s review date. Annual BCIS-indexed updates and full reassessments are issued before each renewal without any re-instruction from your team. Three-year RICS compliance - fully managed.
              </p>
              <Link href="/contact?service=3year#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">
                Enquire about 3-Year Protection &rarr;
              </Link>
            </div>

            <div className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,87,255,0.10)'}}>
                <svg className="w-5 h-5 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-3">24-hr Desktop</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-1">
                Standard desktop assessments are delivered within 24 hours of instruction. Broker-ready format, RICS-regulated methodology, and PI-insured - accepted at renewal without challenge.
              </p>
              <Link href="/contact?service=desktop#contact-form" className="text-[#0057FF] text-sm font-semibold hover:underline">
                Instruct a desktop assessment &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TEAL CTA BANNER */}
      <section className="py-12 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: text + pill buttons */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style={{background:'rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.9)'}}>
              Remove the liability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Your portfolio. Compliant. This renewal season.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              One instruction covers every block. RICS-regulated reports issued in 24 hours. Fully managed renewals - so you never let compliance lapse again.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-white hover:bg-white/90 transition-colors" style={{color:'#0040CC'}}>
                Request a Portfolio Quote
              </Link>
              <Link href="/contact?service=3year#contact-form" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors">
                Enquire About 3-Year Plan
              </Link>
            </div>
          </div>

          {/* Right: checklist card */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-7">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">What&apos;s included</p>
            <ul className="space-y-3">
              {[
                'RICS-regulated assessment per block',
                'Portfolio summary schedule',
                '24-hr desktop turnaround',
                'Annual BCIS-indexed updates',
                'Managed renewals - no re-instruction',
                'Single-invoice billing',
                'Named surveyor throughout',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CONTACT + FAQ */}
      <ContactSection heading="Remove the liability. Instruct today." />
      <FaqSection description="Questions from block management firms about reinstatement cost assessments." items={faqItems} />

    </main>
  )
}


















