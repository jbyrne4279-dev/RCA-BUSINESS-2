import Link from 'next/link'
import ContactSection from '../components/ContactSection'
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
    <main>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/contact-hero.jpeg"
          alt="Fire-damaged building — the hard way to find out you were underinsured"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] tracking-tight text-primary mb-6">
              Don&rsquo;t find out<br />you&rsquo;re <span className="text-shine-red">underinsured</span><br />the hard way.
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Over <strong className="font-bold text-primary">80%</strong> of UK properties are insured for the wrong amount. A RICS reinstatement cost assessment takes less than <strong className="font-bold text-primary">48 hours</strong> and could save you hundreds of thousands in an uncapped claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link href="#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Contact Surveyor
              </Link>
              <Link href="/services" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Our Services
              </Link>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white/60 text-xs font-semibold text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#1A6B4A] inline-block"></span>
                RICS Regulated &middot; London &amp; UK
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll-reveal">
        <ContactSection
          heading={
            <>
              Request Your UK <span className="text-shine">Rebuild Cost Assessment.</span>
            </>
          }
        />
      </div>
      <div className="scroll-reveal">
        <FaqSection
          description="Everything you need to know about rebuild costs, RICS-regulated assessments, and protecting yourself from underinsurance."
          items={contactFaqItems}
        />
      </div>

    </main>
    </>
  )
}
