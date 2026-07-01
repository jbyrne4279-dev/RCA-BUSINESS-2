import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactFormInner from '../components/ContactFormInner'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'Get a RICS Reinstatement Cost Assessment | Instruct Online',
  },
  description:
    'Instruct a RICS reinstatement cost assessment online. Rebuild cost assessments for all UK property types — Desktop and On-Site Survey options. 24-hour response, insurer-accepted reports.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Get a RICS Reinstatement Cost Assessment | RCA Ltd UK',
    description:
      'Instruct a RICS reinstatement cost assessment or rebuild cost assessment for your UK building. Desktop and on-site options available. 24-hour response guaranteed.',
    url: '/contact',
  },
}

const contactFaqItems = [
  { question: 'What is the average rebuild cost per square foot in the UK?', answer: 'Rebuild costs vary by property type and region. As of 2024, typical UK rebuild costs range from £1,500 to £3,500 per square metre depending on specification, location, and construction complexity. A RICS reinstatement cost assessment gives you the exact figure for your specific building.' },
  { question: 'How do rising construction costs affect my building insurance?', answer: "UK construction costs have risen over 25% since 2019 due to material shortages and labour inflation. If your sum insured hasn't been updated, your policy is almost certainly below the true rebuild cost, leaving you exposed to a proportional reduction in any claim." },
  { question: 'Can I use my mortgage valuation as my buildings insurance figure?', answer: 'No. A mortgage valuation assesses lending risk, not rebuild cost. Using it for insurance is one of the most common causes of underinsurance in the UK. Only a RICS reinstatement cost assessment provides an insurer-defensible rebuild figure.' },
  { question: 'What does a rebuild cost assessment include for commercial property?', answer: 'A commercial reinstatement cost assessment covers demolition and site clearance, rebuilding to current regulations, professional fees such as architects and engineers, and all external structures within the curtilage. It accounts for regional labour rates and current material costs.' },
  { question: 'What is the BCIS and why does it matter for my rebuild valuation?', answer: 'The Building Cost Information Service is the industry-standard data source used by RICS surveyors to benchmark construction costs. We use live BCIS indices to ensure your rebuild figure reflects current market rates, not outdated estimates.' },
  { question: 'What happens to my insurance claim if I am significantly underinsured?', answer: 'Under the Condition of Average, insurers reduce payouts proportionally to the degree of underinsurance. If your rebuild cost is £500,000 but you are insured for £300,000, a £100,000 claim would only pay out £60,000, leaving a £40,000 shortfall you must cover yourself.' },
  { question: 'Do leaseholders need a rebuild cost assessment?', answer: 'Yes. Where leaseholders are responsible for insuring the structure under their lease terms, a reinstatement cost assessment is essential. Without one, you risk breaching lease obligations and being personally liable for any rebuild shortfall.' },
  { question: 'How does inflation affect rebuild cost assessments over time?', answer: "Construction inflation directly erodes the accuracy of your reinstatement cost assessment. A valuation from three years ago may underestimate today's rebuild cost by 20% or more. Annual indexation and a full reassessment every three years keeps your coverage aligned with current costs." },
  { question: 'What professional fees are included in a rebuild cost assessment?', answer: 'Professional fees typically include architect, structural engineer, quantity surveyor, and planning consultant costs. All are required to manage a full rebuild and can add 12 to 18% on top of construction costs, yet are often overlooked in estimates.' },
  { question: 'Can a rebuild cost assessment be used as evidence in an insurance dispute?', answer: 'Yes. A RICS-regulated reinstatement cost assessment is a professionally certified document that carries legal weight in insurance disputes and claim negotiations. It provides an independently verified rebuild figure that insurers cannot easily challenge.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact RCA Ltd',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'RCA Ltd',
    telephone: '+44-20-3178-8099',
    email: 'info@rca-ltd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Hanover Square',
      addressLocality: 'London',
      postalCode: 'W1S 1BN',
      addressCountry: 'GB',
    },
  },
}

const contactFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-white border-b border-[#111318]/8 py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-[#c47c1e] text-xs font-body font-semibold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl text-[#111318] leading-[1.05] tracking-tight max-w-2xl">
              Commission your assessment.
            </h1>
            <p className="font-body text-[#111318]/65 text-lg mt-6 max-w-xl leading-relaxed">
              Speak directly with an RICS-regulated surveyor. We respond within 24 hours and issue desktop reports within 48 hours of instruction.
            </p>
          </div>
        </section>

        {/* Two-column contact section */}
        <section className="bg-[#f4f5f7] py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

              {/* Left: contact info */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-[#c47c1e] text-xs font-body font-semibold uppercase tracking-widest">Contact Details</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-10">
                  Reach our surveyors directly.
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 border border-[#c47c1e]/30 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e] mb-1">Address</p>
                      <p className="font-body text-[#111318] text-base leading-relaxed">
                        17 Hanover Square<br />London, W1S 1BN
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 border border-[#c47c1e]/30 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e] mb-1">Telephone</p>
                      <a href="tel:+442031788099" className="font-body text-[#111318] text-base hover:text-[#c47c1e] transition-colors">
                        020 3178 8099
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 border border-[#c47c1e]/30 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M2 8l10 6 10-6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e] mb-1">Email</p>
                      <a href="mailto:info@rca-ltd.com" className="font-body text-[#111318] text-base hover:text-[#c47c1e] transition-colors">
                        info@rca-ltd.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Key credentials */}
                <div className="mt-12 pt-10 border-t border-[#111318]/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-5 bg-[#c47c1e]" />
                    <span className="font-body text-sm text-[#111318]">RICS regulated surveyors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-5 bg-[#c47c1e]" />
                    <span className="font-body text-sm text-[#111318]">24-hour response guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-5 bg-[#c47c1e]" />
                    <span className="font-body text-sm text-[#111318]">Desktop reports issued within 48 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-5 bg-[#c47c1e]" />
                    <span className="font-body text-sm text-[#111318]">Reports accepted by all major UK insurers</span>
                  </div>
                </div>
              </div>

              {/* Right: contact form */}
              <div id="contact-form" className="bg-white border border-[#111318]/8 p-8 md:p-10 card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#c47c1e]" />
                  <span className="text-[#c47c1e] text-xs font-body font-semibold uppercase tracking-widest">Instruct Online</span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl text-[#111318] leading-tight mb-8">
                  Request your assessment.
                </h2>
                <Suspense fallback={
                  <div className="py-12 text-center font-body text-[#111318]/50 text-sm">Loading form&hellip;</div>
                }>
                  <ContactFormInner />
                </Suspense>
              </div>

            </div>
          </div>
        </section>

        {/* Liability callout */}
        <section className="bg-[#111318] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              <div>
                <p className="font-headline text-4xl md:text-5xl text-[#c47c1e] leading-none mb-3">80%+</p>
                <p className="font-body text-white/70 text-sm leading-relaxed">of UK residential blocks are estimated to be underinsured at the point of claim</p>
              </div>
              <div>
                <p className="font-headline text-4xl md:text-5xl text-[#c47c1e] leading-none mb-3">&pound;425bn</p>
                <p className="font-body text-white/70 text-sm leading-relaxed">estimated underinsurance gap across UK commercial and residential property</p>
              </div>
              <div>
                <p className="font-headline text-4xl md:text-5xl text-[#c47c1e] leading-none mb-3">48 hrs</p>
                <p className="font-body text-white/70 text-sm leading-relaxed">desktop turnaround from instruction to RICS-certified reinstatement cost report</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="scroll-reveal">
          <FaqSection
            description="Everything managing agents, RTM companies, and leaseholders need to know about reinstatement cost assessments, RICS regulation, and liability exposure."
            items={contactFaqItems}
          />
        </div>

      </main>
      <Footer />
    </>
  )
}
