import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import TiltCard from './components/TiltCard'
import TiltWrapper from './components/TiltWrapper'
import HomeHero from './components/HomeHero'
import GuideOverview from './components/GuideOverview'
import GuideTrustBand from './components/GuideTrustBand'

export const metadata = {
  title: 'Reinstatement Cost Assessment for Homeowners | Stearling Reinstatement',
  description: 'Make sure your home is insured for the right amount. RICS-regulated Reinstatement Cost Assessments for homeowners, first-time buyers and property owners, delivered in 24 hours.',
  keywords: ['Reinstatement Cost Assessment', 'reinstatement cost assessment for homeowners', 'what is a reinstatement cost assessment', 'reinstatement cost vs market value', 'am I underinsured', 'rebuild cost assessment', 'Reinstatement Cost Assessment UK', 'rebuild cost assessment UK', 'building insurance valuation UK', 'buildings insurance reinstatement cost', 'sum insured for my house', 'reinstatement cost assessment London', 'reinstatement cost assessment Birmingham', 'reinstatement cost assessment Midlands', 'reinstatement cost assessment Sussex'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reinstatement Cost Assessment for Homeowners | RICS-Regulated | Stearling Reinstatement',
    description: '80% of UK homes are underinsured. Make sure your new home is insured for the right amount with a RICS-regulated Reinstatement Cost Assessment, delivered in 24 hours.',
    url: 'https://stearlingreinstatement.com',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'RICS Reinstatement Cost Assessment for homeowners' }],
  },
}

const faqItems = [
  { question: 'What is a Reinstatement Cost Assessment?', answer: 'A Reinstatement Cost Assessment (RCA) also called a rebuild cost assessment is a formal RICS-regulated calculation of the full cost to rebuild your home from scratch, used to set your buildings insurance sum insured. It covers demolition and site clearance, structure, finishes, professional fees, statutory fees, and VAT where applicable. It is not the same as market value, and only a current Reinstatement Cost Assessment produces a figure your insurer will rely on if you ever need to claim.' },
  { question: 'How is reinstatement cost different from market value?', answer: 'Market value is what a buyer would pay on the open market. Reinstatement cost or rebuild cost is what it costs to reconstruct the building from cleared ground, excluding the land. In many locations they diverge significantly: a central-London flat may be worth £800,000 on the market but cost £350,000 to rebuild. Insuring at market value wastes money on excess premium; insuring below true reinstatement cost triggers the average clause and cuts every claim payout.' },
  { question: 'Do I need a Reinstatement Cost Assessment as a first-time buyer?', answer: "It's one of the most overlooked steps after buying. Your mortgage lender requires buildings insurance sufficient for full reinstatement cost, and the sum insured suggested by comparison sites or a previous owner's policy is often wrong. Getting an accurate figure before you insure protects you from day one." },
  { question: 'What happens if my home is underinsured?', answer: "The insurer applies the condition of average and reduces every claim payout proportionally - not just on a total loss. If your home's true rebuild cost is £400,000 but you're insured for £300,000, a £20,000 claim pays out only £15,000. You'd have to find the remaining £5,000 yourself." },
  { question: 'How often should a Reinstatement Cost Assessment be updated?', answer: 'RICS guidance recommends a formal reassessment at least every three years, with annual BCIS-indexed inflation adjustment in between. If you\'ve extended, converted or significantly renovated your home, or can\'t remember your last assessment, it\'s worth updating before your next renewal.' },
  { question: 'How much does a Reinstatement Cost Assessment cost?', answer: "It depends on your property's size, type and whether a desktop or on-site assessment is needed. Tell us about your home and we'll confirm a fixed price before you commit to anything - see our full pricing guide for homeowners." },
]

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://stearlingreinstatement.com/#webpage',
        url: 'https://stearlingreinstatement.com/',
        name: 'Reinstatement Cost Assessment for Homeowners | Stearling Reinstatement',
        isPartOf: { '@id': 'https://stearlingreinstatement.com/#website' },
        about: { '@id': 'https://stearlingreinstatement.com/#organization' },
        description: 'RICS-regulated Reinstatement Cost Assessments for homeowners, first-time buyers and property owners across the UK.',
        inLanguage: 'en-GB',
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HomeHero />

      <GuideOverview
        kicker="Homeowner Guide"
        heading="What is a"
        headingAccent="Reinstatement Cost Assessment?"
        description="In plain English: it's a RICS-regulated calculation of what it would actually cost to rebuild your home from scratch, not what you paid for it and not what it's worth on the market - and it's the figure your buildings insurance sum insured should be based on, because your insurer will only ever pay out up to that number. Get it wrong, and you could end up covering thousands of pounds of the rebuild yourself, even after years of paying your premiums."
        highlights={[
          { icon: 'not_interested', title: 'Not Market Value', desc: "It excludes the land - only the cost to demolish and rebuild the structure itself." },
          { icon: 'verified', title: 'RICS-Regulated', desc: 'A figure your insurer will rely on if you ever need to make a claim.' },
          { icon: 'update', title: 'Reviewed Every 3 Years', desc: 'RICS guidance recommends a full reassessment at least every three years.' },
        ]}
      />

      <div className="text-center -mt-8 mb-4 md:mb-8">
        <Link href="/what-is-a-reinstatement-cost-assessment" className="link-arrow cta-flash">
          Read the full homeowner guide
        </Link>
      </div>

      {/* 4. WHY IT MATTERS - the problem/risk that creates urgency */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#fbf0f2'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: tilt card */}
          <TiltCard />

          {/* Right: text */}
          <div>
            <span className="badge badge-blue mb-5">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
              Get this figure wrong, and <span className="blue-keyword">you</span> pay the price.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              After a loss, insurers pay out based on rebuild cost - not market value, and not what you paid for the property. Get the sum insured wrong, and the consequences land squarely on you:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'The insurer applies the average clause and cuts your payout in proportion to the shortfall - on every claim, not just a total loss.',
                'A previous owner\'s figure, an online calculator or a rough guess offers no protection when the claim comes in.',
                'You could be paying too much premium if you\'re insured at market value instead of true rebuild cost.',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{background:'#7A1F3D'}} />
                  <span className="text-[#64748b] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#2b0b14] text-base font-semibold leading-relaxed mb-8">
              A RICS-regulated Reinstatement Cost Assessment is the only reliable basis for your buildings sum insured.
            </p>
            <Link href="/what-happens-if-my-property-is-underinsured" className="link-arrow cta-flash">
              See what underinsurance actually costs
            </Link>
          </div>
        </div>
      </section>

      {/* 5. RCA VS CALCULATOR - answers "rics rebuilding cost calculator" searches */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-5">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            A proper assessment vs <span className="blue-keyword">online rebuild cost calculators</span>
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            Free rebuild cost calculators and insurer-supplied estimators use generic per-square-metre averages. They don&apos;t account for your property&apos;s actual construction, specification or location - and they carry no RICS accountability if the figure is ever questioned after a claim.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed mb-6">
            A RICS Reinstatement Cost Assessment is different: it&apos;s a regulated valuation, carried out by a chartered surveyor, indexed to BCIS build cost data for your property&apos;s actual location and specification. If an insurer questions your sum insured after a claim, an online calculator figure offers no defence - a RICS-regulated assessment does.
          </p>
          <Link href="/reinstatement-cost-vs-market-value" className="link-arrow cta-flash">
            Reinstatement cost vs market value, explained
          </Link>
        </div>
      </section>

      {/* 5b. HOMEOWNER GUIDES - quick links to every guide page */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Homeowner Guides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight">Everything you need to <span className="blue-keyword">get it right</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Plain-English guides covering every question homeowners ask us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'What Is an RCA?', desc: "A plain-English explainer - what it is, and why it's not the same as market value.", href: '/what-is-a-reinstatement-cost-assessment' },
              { title: 'RCA vs Market Value', desc: 'A clear, visual comparison of the two figures - and why they diverge.', href: '/reinstatement-cost-vs-market-value' },
              { title: 'Do I Need One?', desc: 'The specific situations that mean it\'s time to get an assessment.', href: '/do-i-need-a-reinstatement-cost-assessment' },
              { title: 'How Much Does It Cost?', desc: 'What determines price, and how to get a fixed quote.', href: '/reinstatement-cost-assessment-cost' },
              { title: "What If I'm Underinsured?", desc: 'The average clause explained, with a worked example.', href: '/what-happens-if-my-property-is-underinsured' },
            ].map(({ title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-2"
                style={{ boxShadow: '0 4px 16px rgba(122,31,61,0.08)', textDecoration: 'none' }}
              >
                <h3 className="text-base font-bold text-[#2b0b14]">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1">{desc}</p>
                <span className="text-[#7A1F3D] text-sm font-semibold mt-2">Read the guide &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5c. COMMON REASONS - condensed version of the "Do I Need One?" triggers, reworded for the homepage */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#fbf0f2'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Common Reasons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight">Not sure if it's <span className="blue-keyword">time to get one?</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-lg mx-auto">These are the situations that most often mean your current figure needs checking.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: 'apartment', title: 'Buying into a block', desc: "Ask when the block's assessment was last reviewed before you exchange. A missing or stale figure is often a sign the building is already underinsured." },
              { icon: 'policy', title: 'Your insurer wants proof', desc: 'Older, listed or higher-value properties are often asked for an independent figure rather than a self-declared estimate.' },
              { icon: 'event_repeat', title: 'Renewal is coming up', desc: 'Building costs move every year. A figure that was right a couple of years ago is unlikely to still be accurate.' },
              { icon: 'gavel', title: "It's been three years or more", desc: 'RICS guidance calls for a full reassessment at least every three years, with smaller adjustments in between.' },
              { icon: 'receipt_long', title: 'A claim paid out less than expected', desc: 'A reduced payout after a claim is usually a sign the sum insured was too low to begin with.' },
              { icon: 'construction', title: "You've built, converted or renovated", desc: "Loft conversions, extensions and major renovations all change what it would actually cost to rebuild." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-3" style={{boxShadow:'0 4px 16px rgba(122,31,61,0.08)'}}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(122,31,61,0.10)'}}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color: '#7A1F3D' }}>{icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#2b0b14]">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/do-i-need-a-reinstatement-cost-assessment" className="link-arrow cta-flash">
              See all six situations explained in full
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SERVICES - the solution, once the problem is established */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#fbf0f2'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight">Choose the assessment that <span className="blue-keyword">fits your home</span></h2>
            <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">Whether you own a standard house, a flat, or a listed property, there's a straightforward option for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                img: '/rcs-desktop-reinstatemenet-cost-assessment.png',
                imgAlt: 'Desktop Reinstatement Cost Assessment service',
                id: 'desktop-rca',
                badge: '01. Desktop',
                title: 'Desktop Reinstatement Cost Assessment',
                desc: 'BCIS-indexed rebuild cost modelling delivered within 24 hours. No site visit required. Ideal for standard houses, bungalows and flats.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'BCIS-indexed rebuild cost modelling',
                  'Delivered within 24 hours - no site visit',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment',
                note: 'Listed or non-standard property? An On-Site Survey may be required instead.',
              },
              {
                img: '/AdobeStock_270155966.jpeg',
                imgAlt: 'RICS surveyor conducting an on-site Reinstatement Cost Assessment',
                id: 'on-site-survey',
                badge: '02. On-Site',
                title: 'On-Site Rebuild Cost Assessment',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed buildings, heritage properties and complex structures.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'Surveyor attends in person, full measurement',
                  'Required for listed, heritage & complex buildings',
                  'The insurer-preferred option for high-value risk',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey',
                note: 'Managing more than one property? Ask about the 3-Year Protection Plan.',
              },
              {
                img: '/continual-reinstatement-cost-assessment-plan.png',
                imgAlt: '3-Year RICS Reinstatement Cost Assessment protection plan',
                id: 'three-year-protection',
                badge: '03. Recommended',
                title: '3-Year Reinstatement Cost Assessment Plan',
                desc: 'One instruction covers three years of RICS compliance. Full Reinstatement Cost Assessment in year one, annual BCIS-indexed renewal reports delivered before each renewal date.',
                features: [
                  'RICS-regulated, broker-ready report',
                  'Full assessment year one, indexed updates years two & three',
                  'One instruction, one invoice - no re-instructing',
                  'The preferred choice for agents & portfolio landlords',
                  'Accepted by every UK insurer',
                ],
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan',
                note: 'Saves the cost and admin of re-instructing every year.',
                highlight: true,
              },
            ].map(({ img, imgAlt, id, badge, title, desc, features, href, link, note, highlight }) => (
              <Link
                key={title}
                id={id}
                href={href}
                className={`relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform duration-300 ${highlight ? 'border-2 border-[#7A1F3D]' : 'border border-[#e2e8f0]'}`}
                style={{boxShadow: highlight ? '0 10px 32px rgba(122,31,61,0.20)' : '0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}
              >
                {highlight && (
                  <span
                    className="best-value-pill absolute top-3 right-3 z-10 text-xs font-bold uppercase tracking-wide text-white px-4 py-1.5 rounded-full"
                    style={{background:'linear-gradient(135deg,#7A1F3D,#5C1730)'}}
                  >
                    Best Value
                  </span>
                )}
                <div className="relative w-full overflow-hidden" style={{height:'200px'}}>
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-semibold text-[#7A1F3D] uppercase tracking-wide">{badge}</p>
                    <span className="shrink-0">
                      <Image src="/rics-logo.png" alt="RICS Regulated" width={36} height={24} className="object-contain" />
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2b0b14] mb-3">{title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg className="mt-0.5 shrink-0 text-[#7A1F3D]" width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                        <span className="text-[#64748b] text-xs leading-relaxed">
                          {f.startsWith('Accepted') ? (
                            <><span className="cta-flash font-semibold">Accepted</span>{f.slice(8)}</>
                          ) : f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="btn-shine text-center mt-auto">
                    {link}
                  </span>
                  {note && <p className="text-[11px] text-[#94a3b8] leading-relaxed mt-3 text-center">{note}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHO WE HELP - relevance to the visitor + how the process works */}
      <section className="py-16 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <span className="badge badge-blue mb-5">Who We Help</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-4">
              Whatever stage you're at, <span className="blue-keyword">we can help</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed">
              One practice, one specialisation - every instruction delivered as a RICS-regulated Reinstatement Cost Assessment.
            </p>
          </div>

          {/* Audience cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 md:mb-24">
            {[
              {
                title: 'First-Time & New Buyers',
                desc: "Just bought your first home? Make sure it's insured for the right amount from day one, not a guess carried over from the seller.",
                href: '/do-i-need-a-reinstatement-cost-assessment',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
              },
              {
                title: 'Homeowners Renewing Cover',
                desc: 'Coming up to renewal? Update your sum insured to reflect current build costs before you commit to another year.',
                href: '/what-is-a-reinstatement-cost-assessment',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                title: 'Leasehold Flat Owners',
                desc: "Don't need the freeholder's permission - commission your own independent assessment to check or challenge the declared value.",
                href: '/freeholders-leaseholders',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="14"/><rect x="9" y="3" width="6" height="18"/><rect x="16" y="10" width="6" height="11"/></svg>,
              },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-[#7A1F3D]/30 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)', textDecoration: 'none' }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-5"
                  style={{ background: 'linear-gradient(135deg,#7A1F3D,#5C1730)', boxShadow: '0 6px 18px rgba(122,31,61,0.3)' }}
                >
                  {icon}
                </span>
                <p className="text-base font-semibold text-[#2b0b14] mb-2 group-hover:text-[#7A1F3D] transition-colors">{title}</p>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">{desc}</p>
                <span className="link-arrow !text-xs">Learn more</span>
              </Link>
            ))}
          </div>

          {/* Assessment process - horizontal timeline */}
          <TiltWrapper className="bg-white rounded-2xl border border-[#e2e8f0] p-8 md:p-12" style={{boxShadow:'0 8px 32px rgba(122,31,61,0.10)'}}>
            <p className="text-xs font-semibold text-[#64748b] uppercase tracking-widest text-center mb-10">Assessment Process</p>
            <div className="relative">
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[#e2e8f0]" />
              <div className="circuit-steps grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {[
                  { n: '01', title: 'Tell us about your home', desc: 'Address, property type, approximate size and any previous valuation.' },
                  { n: '02', title: 'We confirm scope and fee', desc: 'Desktop or on-site - a fixed price, agreed upfront.' },
                  { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services and fees - all captured.' },
                  { n: '04', title: 'You receive your report', desc: 'A clear, broker-ready figure, ready for your insurer.' },
                ].map(({ n, title, desc }, i) => (
                  <div key={n} className={`step-light relative z-10 flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center ${i < 3 ? 'pb-6 mb-2 border-b border-[#e2e8f0] md:pb-0 md:mb-0 md:border-b-0 step-has-border' : ''}`}>
                    <span className="circuit-num text-xs font-bold text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{background:'linear-gradient(135deg,#7A1F3D,#5C1730)', boxShadow:'0 0 14px rgba(122,31,61,0.45)'}}>{n}</span>
                    <div>
                      <p className="step-title text-sm font-semibold text-[#2b0b14]">{title}</p>
                      <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TiltWrapper>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link href="/contact#contact-form" className="btn-shine">Get My Assessment</Link>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE COVER - answers location-modified searches (London, Birmingham, Midlands, Sussex) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#fbf0f2'}}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge badge-blue mb-5">Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            Areas <span className="blue-keyword">we cover</span>
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Stearling Reinstatement provides RICS Reinstatement Cost Assessments across the whole of the UK. Desktop assessments are available nationwide, typically within 24 hours; on-site surveys are carried out across England, Scotland, Wales and Northern Ireland - including London, the Midlands, Birmingham and Sussex.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['London', 'Midlands', 'Birmingham', 'Sussex', 'England', 'Scotland', 'Wales', 'Northern Ireland'].map((area) => (
              <span
                key={area}
                className="text-xs font-semibold text-[#2b0b14] border border-[#e2e8f0] rounded-full px-4 py-2 bg-white"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-[#64748b] text-sm leading-relaxed">
            Listed or heritage property? See our <Link href="/listed-buildings" className="link-arrow">dedicated Listed Buildings service</Link>.
          </p>
        </div>
      </section>

      {/* 8b. BUILDINGS WE COVER - answers building-type searches (listed, period, extensions, new-build) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-blue mb-5">Building Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-4">
              The buildings <span className="blue-keyword">we cover</span>
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed">
              From a Grade II listed cottage with a modern extension to a purpose-built block of flats, we assess every type of property. Whatever the age, construction or use, we produce a RICS-regulated reinstatement cost figure - we cover all building types.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Listed & Heritage Buildings', desc: 'Grade I, Grade II* and Grade II listed properties, assessed with traditional materials and craftsmanship costed in.' },
              { title: 'Period & Traditional Homes', desc: 'Victorian, Georgian, Edwardian and older properties, including solid-wall and non-standard construction.' },
              { title: 'Extensions & Alterations', desc: 'Extended, converted or refurbished buildings where a previous valuation no longer reflects the current structure.' },
              { title: 'Blocks of Flats & Apartments', desc: 'Purpose-built and converted blocks, including communal areas, shared services and multi-storey structures.' },
              { title: 'Commercial & Mixed-Use', desc: 'Offices, retail, industrial units and mixed residential-commercial premises of every size.' },
              { title: 'New-Build & Modern Construction', desc: 'Contemporary homes, developments and non-traditional builds indexed to current BCIS rebuild cost data.' },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 md:p-7 flex flex-col hover:-translate-y-1 hover:border-[#7A1F3D]/30 transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
              >
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white mb-5"
                  style={{ background: 'linear-gradient(135deg,#7A1F3D,#5C1730)', boxShadow: '0 6px 18px rgba(122,31,61,0.3)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>
                </span>
                <h3 className="text-base font-semibold text-[#2b0b14] mb-2">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#2b0b14] text-base font-semibold leading-relaxed mt-12 max-w-2xl mx-auto">
            If it has a roof and a sum insured, we can assess it - we cover all building types across the UK.
          </p>
        </div>
      </section>

      <GuideTrustBand />

      {/* 9. CONTACT FORM - the conversion goal */}
      <ContactSection heading="Get your Reinstatement Cost Assessment." flip />

      {/* 10. FAQ - handle remaining objections, last thing before the footer */}
      <FaqSection
        description="Straightforward answers to the questions homeowners and property owners ask most about Reinstatement Cost Assessments."
        items={faqItems}
        flip
      />
    </main>
  )
}
