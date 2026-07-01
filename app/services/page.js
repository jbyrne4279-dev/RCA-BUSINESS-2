import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment Services | Rebuild Cost UK',
  },
  description:
    'Desktop, on-site and 3-year RICS reinstatement cost assessment services for managing agents, RTM companies and freeholders. 48-hour desktop turnaround. Broker-ready reports accepted by all insurers.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment Services | Rebuild Cost UK',
    description:
      'RICS reinstatement cost assessment services for managing agents and freeholders across the UK. Desktop RCA from £195, On-Site Survey, and 3-Year Protection with annual BCIS updates.',
    url: '/services',
  },
}

const servicesFaqItems = [
  {
    question: 'Which reinstatement cost assessment service is right for my block?',
    answer:
      'For standard residential blocks at annual renewal, a Desktop RCA is fast, cost-effective and RICS-compliant. If the block is listed, has non-standard construction, or the lease or insurer requires a physical inspection, commission an On-Site Survey. The 3-Year Protection Plan suits managing agents who want continuous compliance without re-instructing annually.',
  },
  {
    question: 'Why does the lease require a reinstatement cost assessment?',
    answer:
      'Most residential leases covenant the freeholder or managing agent to insure the building at full reinstatement cost. That covenant creates a legal obligation: if the sum insured proves inadequate at the time of a claim, leaseholders can hold the managing agent or RTM company liable for any shortfall. A RICS-regulated RCA removes that exposure.',
  },
  {
    question: 'What is a desktop reinstatement cost assessment?',
    answer:
      'A desktop RCA uses existing floor area data, property records, and current BCIS construction cost indices to calculate the rebuild cost without a site visit. It is RICS-regulated, accepted by all UK insurers, and is typically delivered within 48 hours of instruction.',
  },
  {
    question: 'When should I commission an on-site survey instead of a desktop assessment?',
    answer:
      'An on-site survey is recommended for listed buildings, complex or non-standard construction, mixed-use blocks, high-value assets, or where the insurer or lease specifically requires a physical inspection. Our surveyor attends the property, measures every element, and produces a fully evidenced RICS report.',
  },
  {
    question: 'What does the 3-Year Protection Plan include?',
    answer:
      'The plan comprises a full RICS reinstatement cost assessment in year one, followed by BCIS-indexed annual update certificates in years two and three. Each certificate is broker-ready and accepted by all UK insurers, ensuring your sum insured remains accurate as construction costs move.',
  },
  {
    question: 'How often should a reinstatement cost assessment be updated?',
    answer:
      'RICS guidance recommends review at least every three years, with annual index-linked updates in the intervening years. Construction costs have risen sharply since 2020: failing to update leaves your block exposed to the underinsurance gap and exposes you to leaseholder liability.',
  },
  {
    question: 'Are your assessments accepted by all UK insurers?',
    answer:
      "Yes. All our reports are produced by RICS-regulated surveyors and are accepted by every UK insurer and Lloyd's syndicate without challenge. They meet the RICS Reinstatement Cost Assessments of Buildings guidance note in full.",
  },
  {
    question: 'What happens if the sum insured proves too low at claim?',
    answer:
      'If the building is underinsured at the time of a claim, the insurer may apply average, reducing the payout proportionately. Leaseholders suffering loss as a result can pursue the managing agent or RTM company for the shortfall. An RICS-regulated RCA demonstrates that due diligence was exercised and provides a credible defence.',
  },
  {
    question: 'How quickly can I receive a desktop reinstatement cost assessment?',
    answer:
      'Our standard desktop turnaround is 48 hours from receipt of instruction. Urgent same-day service is available on request. Contact us to discuss your deadline.',
  },
  {
    question: 'Does a reinstatement cost assessment include demolition and professional fees?',
    answer:
      'Yes. Every assessment includes an allowance for demolition and site clearance costs, as well as professional fees (architect, structural engineer, project manager) required to rebuild the property to its current specification.',
  },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const servicesBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const servicesOfferJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Reinstatement Cost Assessment',
  provider: { '@type': 'ProfessionalService', name: 'Rebuild Cost UK', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Reinstatement Cost Assessment Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Desktop RCA',
        price: '195',
        priceCurrency: 'GBP',
        description: 'RICS-regulated desktop Reinstatement Cost Assessment delivered within 48 hours.',
      },
      {
        '@type': 'Offer',
        name: '3-Year Protection Plan',
        description: 'Full RCA with BCIS-indexed annual updates for three years.',
      },
      {
        '@type': 'Offer',
        name: 'On-Site Survey',
        description: 'Full on-site Reinstatement Cost Assessment by a RICS-regulated surveyor.',
      },
    ],
  },
}

const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: servicesFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#c47c1e" fillOpacity="0.12" />
    <path d="M5.5 10.5l3 3 6-6" stroke="#c47c1e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const AmberCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#c47c1e" fillOpacity="0.2" />
    <path d="M5.5 10.5l3 3 6-6" stroke="#c47c1e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#111318" fillOpacity="0.06" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#111318" strokeOpacity="0.25" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesOfferJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
      <main>

        {/* Hero */}
        <section className="bg-[#111318] pt-28 pb-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">RICS-Regulated Services</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">
              Three ways to protect your position.
            </h1>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-2xl mb-10">
              Where a lease covenants insurance at full reinstatement cost, the managing agent or RTM company bears liability if the sum insured falls short at claim. An RICS-regulated reinstatement cost assessment is the only instrument that removes that exposure. Choose the service that matches your property and your obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-shine font-body font-semibold text-white px-8 py-4 text-sm text-center sovereign-shadow">
                Instruct a Surveyor
              </Link>
              <Link href="#comparison" className="font-body font-semibold text-white/70 border border-white/20 px-8 py-4 text-sm text-center hover:border-[#c47c1e] hover:text-white transition-colors">
                Compare Services
              </Link>
            </div>
          </div>
        </section>

        {/* Amber rule divider */}
        <div className="h-px w-full bg-[#c47c1e]" />

        {/* Three Service Cards */}
        <section className="bg-[#f4f5f7] py-20 px-6 md:px-12" id="services">
          <div className="max-w-5xl mx-auto">

            {/* Desktop RCA */}
            <div id="desktop-rca" className="scroll-reveal mb-12 bg-white border border-[#111318]/8 card-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                <div className="p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-[#111318]/8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#c47c1e]" />
                    <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">Service 01</span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-4">
                    Desktop Reinstatement Cost Assessment
                  </h2>
                  <p className="font-body text-[#111318]/60 text-sm leading-relaxed mb-6">
                    Produced from existing floor area data, property records, and live BCIS construction cost indices. No site visit required. The standard instrument for annual renewals on standard residential blocks.
                  </p>
                  <div className="mb-8">
                    <p className="font-body text-xs text-[#111318]/40 uppercase tracking-widest mb-1">From</p>
                    <p className="font-headline text-5xl text-[#111318]">&pound;195</p>
                  </div>
                  <Link href="/contact?service=desktop" className="btn-amber font-body font-semibold text-sm px-8 py-4 text-center block w-full md:w-auto md:inline-block">
                    Instruct Desktop RCA
                  </Link>
                </div>
                <div className="p-10 md:p-12">
                  <div className="space-y-6">
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-3">What is included</p>
                      <ul className="space-y-3">
                        {[
                          'RICS-regulated assessment to RICS guidance note standard',
                          'Live BCIS construction cost indices applied at point of assessment',
                          'Demolition, site clearance and professional fees included',
                          'Broker-ready report accepted by all UK insurers',
                          '48-hour turnaround from instruction (same-day on request)',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 font-body text-sm text-[#111318]/70">
                            <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px bg-[#111318]/8" />
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-2">Ideal for</p>
                      <p className="font-body text-sm text-[#111318]/60 leading-relaxed">
                        Standard residential blocks, leasehold flats, buy-to-let portfolios, HMOs, and commercial premises with conventional construction. Managing agents commissioning at annual renewal.
                      </p>
                    </div>
                    <div className="h-px bg-[#111318]/8" />
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-2">Liability protection</p>
                      <p className="font-body text-sm text-[#111318]/60 leading-relaxed">
                        An RICS-regulated desktop RCA demonstrates that the managing agent discharged their duty to insure at reinstatement value. In the event of a leaseholder dispute, it is the primary evidence of compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* On-Site Survey */}
            <div id="on-site-survey" className="scroll-reveal mb-12 bg-white border border-[#111318]/8 card-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                <div className="p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-[#111318]/8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#c47c1e]" />
                    <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">Service 02</span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-4">
                    On-Site RICS Survey
                  </h2>
                  <p className="font-body text-[#111318]/60 text-sm leading-relaxed mb-6">
                    A RICS-regulated surveyor attends the property, physically measures the building, assesses construction specification and condition, and produces a fully evidenced reinstatement cost assessment. The highest level of accuracy available.
                  </p>
                  <div className="mb-8">
                    <p className="font-body text-xs text-[#111318]/40 uppercase tracking-widest mb-1">Price on enquiry</p>
                    <p className="font-headline text-4xl text-[#111318]">Contact us</p>
                  </div>
                  <Link href="/contact?service=onsite" className="btn-amber font-body font-semibold text-sm px-8 py-4 text-center block w-full md:w-auto md:inline-block">
                    Instruct On-Site Survey
                  </Link>
                </div>
                <div className="p-10 md:p-12">
                  <div className="space-y-6">
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-3">What is included</p>
                      <ul className="space-y-3">
                        {[
                          'Physical attendance by a RICS-regulated surveyor',
                          'Full measurement and condition assessment on site',
                          'Specialist analysis of materials, specification and construction method',
                          'Photographic record and detailed site notes',
                          'Comprehensive RICS reinstatement cost assessment report',
                          'Broker-ready, insurer-accepted, professionally indemnified',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 font-body text-sm text-[#111318]/70">
                            <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px bg-[#111318]/8" />
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-2">Ideal for</p>
                      <p className="font-body text-sm text-[#111318]/60 leading-relaxed">
                        Listed buildings, non-standard construction, mixed-use blocks, large commercial floor plates, and any property where the lease or insurer requires physical inspection. Essential where desktop data cannot capture full complexity.
                      </p>
                    </div>
                    <div className="h-px bg-[#111318]/8" />
                    <div>
                      <p className="font-body font-semibold text-[#111318] text-sm mb-2">Specialist coverage</p>
                      <p className="font-body text-sm text-[#111318]/60 leading-relaxed">
                        Listed building consent requirements, specialist materials, mechanical and electrical installations, curtilage structures, and phased reinstatement scenarios are all addressed within the on-site report.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Year Protection Plan */}
            <div id="three-year-protection" className="scroll-reveal bg-[#111318] border border-[#c47c1e]/30 sovereign-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                <div className="p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-6 bg-[#c47c1e]" />
                    <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">Service 03</span>
                  </div>
                  <div className="inline-block bg-[#c47c1e] px-3 py-1 mb-5">
                    <span className="font-body text-white text-xs uppercase tracking-widest font-semibold">Best Value</span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-4">
                    3-Year Protection Plan
                  </h2>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                    A single RICS reinstatement cost assessment in year one, followed by BCIS-indexed annual update certificates in years two and three. Continuous compliance with no annual re-instruction.
                  </p>
                  <div className="mb-8">
                    <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-1">Three-year programme</p>
                    <p className="font-headline text-4xl text-white">Contact us</p>
                  </div>
                  <Link href="/contact?service=3year" className="btn-shine font-body font-semibold text-white text-sm px-8 py-4 text-center block w-full md:w-auto md:inline-block">
                    Enquire Now
                  </Link>
                </div>
                <div className="p-10 md:p-12">
                  <div className="space-y-6">
                    <div>
                      <p className="font-body font-semibold text-white text-sm mb-3">What is included</p>
                      <ul className="space-y-3">
                        {[
                          'Full RICS reinstatement cost assessment in year one',
                          'BCIS-indexed annual update certificate in year two',
                          'BCIS-indexed annual update certificate in year three',
                          'Each certificate is broker-ready and insurer-accepted',
                          'No re-instruction required across the three-year period',
                          'Backed by professional indemnity insurance throughout',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 font-body text-sm text-white/60">
                            <span className="mt-0.5 shrink-0"><AmberCheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div>
                      <p className="font-body font-semibold text-white text-sm mb-2">Ideal for</p>
                      <p className="font-body text-sm text-white/50 leading-relaxed">
                        Managing agents with multiple blocks, portfolio landlords, RTM companies, and freeholders who require continuous RICS-compliant reinstatement figures without the administrative burden of annual re-instruction.
                      </p>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div>
                      <p className="font-body font-semibold text-white text-sm mb-2">Why annual updates matter</p>
                      <p className="font-body text-sm text-white/50 leading-relaxed">
                        Construction costs have risen significantly year on year. A reinstatement figure set three years ago without index-linked review will almost certainly be inadequate today. The 3-Year Plan eliminates that gap automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Comparison Table */}
        <section className="scroll-reveal py-20 px-6 md:px-12 bg-white" id="comparison">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#c47c1e]" />
                <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">Which is right for me?</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight max-w-xl">
                Compare all three services.
              </h2>
            </div>

            <div className="border border-[#111318]/8 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: '580px' }}>
                  <thead>
                    <tr className="bg-[#111318]">
                      <th className="text-left pl-6 pr-4 py-5 font-body text-white/40 text-xs uppercase tracking-widest" style={{ minWidth: '160px' }}>Feature</th>
                      <th className="px-4 py-5 font-body text-white text-xs uppercase tracking-widest text-center" style={{ minWidth: '130px' }}>Desktop RCA</th>
                      <th className="px-4 py-5 font-body text-white text-xs uppercase tracking-widest text-center" style={{ minWidth: '130px' }}>On-Site Survey</th>
                      <th className="px-4 py-5 text-center" style={{ minWidth: '140px' }}>
                        <span className="block font-body text-[#c47c1e] text-xs uppercase tracking-widest">Best Value</span>
                        <span className="block font-body text-white text-xs uppercase tracking-widest mt-0.5">3-Year Plan</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#111318]/6">
                    {[
                      { feature: 'RICS-regulated report', desktop: true, onsite: true, plan: true },
                      { feature: 'Live BCIS cost data', desktop: true, onsite: true, plan: true },
                      { feature: 'Broker & insurer accepted', desktop: true, onsite: true, plan: true },
                      { feature: 'Demolition costs included', desktop: true, onsite: true, plan: true },
                      { feature: 'Professional fees included', desktop: true, onsite: true, plan: true },
                      { feature: 'Professionally indemnified', desktop: true, onsite: true, plan: true },
                      { feature: '48-hour turnaround', desktop: true, onsite: false, plan: false },
                      { feature: 'Physical site inspection', desktop: false, onsite: true, plan: false },
                      { feature: 'Condition & spec assessment', desktop: false, onsite: true, plan: false },
                      { feature: 'Listed & complex buildings', desktop: false, onsite: true, plan: false },
                      { feature: 'Annual BCIS update (yr 2 & 3)', desktop: false, onsite: false, plan: true },
                      { feature: '3-year continuous compliance', desktop: false, onsite: false, plan: true },
                      { feature: 'Ideal for', desktop: 'Standard blocks, annual renewal', onsite: 'Listed, complex & high-value', plan: 'Portfolios & long-term compliance' },
                    ].map(({ feature, desktop, onsite, plan }, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f5f7]'}>
                        <td className={`pl-6 pr-4 py-4 font-body font-medium text-[#111318] text-xs leading-snug ${i % 2 === 0 ? 'bg-white' : 'bg-[#f4f5f7]'}`}>{feature}</td>
                        {[desktop, onsite, plan].map((val, j) => (
                          <td key={j} className={`px-4 py-4 text-center align-middle ${j === 2 ? 'bg-[#c47c1e]/5' : ''}`}>
                            {val === true ? (
                              <span className="inline-flex items-center justify-center"><CheckIcon /></span>
                            ) : val === false ? (
                              <span className="inline-flex items-center justify-center"><CrossIcon /></span>
                            ) : (
                              <span className="font-body text-[#111318]/60 text-xs leading-snug block px-1">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="font-body text-xs text-[#111318]/40 mt-5 text-center">
              Unsure which service applies to your block?{' '}
              <Link href="/contact" className="text-[#c47c1e] hover:underline">Contact us</Link> and we will advise without obligation.
            </p>
          </div>
        </section>

        {/* What every assessment includes */}
        <section className="scroll-reveal py-20 px-6 md:px-12 bg-[#111318]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#c47c1e]" />
                <span className="text-[#c47c1e] text-xs font-body uppercase tracking-widest">Standard across all services</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-white leading-tight max-w-2xl">
                What every assessment delivers.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'RICS Regulation',
                  desc: 'Every report is produced by a RICS-regulated surveyor and meets the RICS Reinstatement Cost Assessments of Buildings guidance note in full.',
                },
                {
                  title: 'Live BCIS Data',
                  desc: 'Rebuild cost figures are calculated against current Building Cost Information Service indices, not outdated tables.',
                },
                {
                  title: 'Broker-Ready Format',
                  desc: 'Reports are formatted for direct submission to your insurer or placing broker without amendment or supplementary correspondence.',
                },
                {
                  title: 'Professional Indemnity',
                  desc: 'All assessments are backed by professional indemnity insurance, providing recourse in the event the figure is challenged.',
                },
                {
                  title: 'Demolition & Fees',
                  desc: 'Each report includes an allowance for demolition, site clearance, and professional fees required to reinstate the building.',
                },
                {
                  title: 'All Property Types',
                  desc: 'Residential blocks, commercial premises, mixed-use, industrial, listed buildings, and portfolio instructions all accepted.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="hover-lift bg-white/5 border border-white/8 p-7">
                  <div className="h-px w-6 bg-[#c47c1e] mb-5" />
                  <p className="font-body font-semibold text-white text-sm mb-2">{title}</p>
                  <p className="font-body text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          heading={
            <>
              Protect your position with an{' '}
              <span className="text-[#c47c1e]">RICS-regulated assessment.</span>
            </>
          }
        />

        <FaqSection
          description="Common questions from managing agents, RTM companies and freeholders on reinstatement cost assessments, liability, and service selection."
          items={servicesFaqItems}
        />

      </main>
    </>
  )
}
