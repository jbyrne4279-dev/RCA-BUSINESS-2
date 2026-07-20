import Link from 'next/link'
import Image from 'next/image'

const SERVICE_CARDS = [
  {
    img: '/rcs-desktop-reinstatemenet-cost-assessment.png',
    imgAlt: 'Desktop Reinstatement Cost Assessment service',
    imgPosition: 'center top',
    id: 'desktop-rca',
    badge: '01. Desktop',
    title: 'Desktop Reinstatement Cost Assessment',
    desc: 'BCIS-indexed rebuild cost modelling without a site visit. Delivered within 24 hours of instruction. Accepted by all UK insurers.',
    features: [
      'RICS-regulated, broker-ready report',
      'BCIS-indexed rebuild cost modelling',
      'Delivered within 24 hours of instruction',
      'Accepted by every UK insurer',
    ],
    href: '/contact?service=desktop#contact-form',
    link: 'Request Desktop Assessment',
    note: 'Listed or non-standard property? An On-Site Survey may be required instead.',
  },
  {
    img: '/rca-onsite-inspection-surveyor.png',
    imgAlt: 'RICS surveyor conducting an on-site Reinstatement Cost Assessment',
    imgPosition: 'center center',
    id: 'on-site-survey',
    badge: '02. On-Site',
    title: 'On-Site Rebuild Cost Assessment',
    desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed, heritage and complex buildings.',
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
    imgPosition: 'center center',
    id: 'three-year-protection',
    badge: '03. Recommended',
    title: '3-Year Reinstatement Cost Assessment Plan',
    desc: 'One instruction covers three years of RICS compliance — full Reinstatement Cost Assessment in year one, annual BCIS-indexed renewal reports before each renewal date.',
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
]

export default function ServiceCardsSection({ flip = false }) {
  return (
    <section id="service-cards" className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background: flip ? '#f0f4ff' : '#ffffff'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="badge badge-blue">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3">
            Pick the assessment that <span className="blue-keyword">fits your property</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICE_CARDS.map(({ img, imgAlt, imgPosition, id, badge, title, desc, features, href, link, note, highlight }) => (
            <Link
              key={id}
              id={id}
              href={href}
              className={`float-card relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer group ${highlight ? 'border-2 border-[#0057FF]' : 'border border-[#e2e8f0]'}`}
              style={{boxShadow: highlight ? '0 10px 32px rgba(0,87,255,0.20)' : '0 2px 16px rgba(0,0,0,0.05)', textDecoration:'none'}}
            >
              {highlight && (
                <span
                  className="best-value-pill absolute top-3 right-3 z-10 text-xs font-bold uppercase tracking-wide text-white px-4 py-1.5 rounded-full"
                  style={{background:'linear-gradient(135deg,#0057FF,#0040CC)'}}
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
                  style={{objectPosition: imgPosition}}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/30 to-transparent" />
              </div>
              <div className="p-5 md:p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide">{badge}</p>
                  <span className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-[9px] font-semibold text-[#0d1b3e]/60 uppercase tracking-wide whitespace-nowrap">RICS Regulated</span>
                    <Image src="/rics-logo.png" alt="RICS" width={36} height={24} className="object-contain" />
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="mt-0.5 shrink-0 text-[#0057FF]" width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                      <span className="text-[#64748b] text-xs leading-relaxed">
                        {f.startsWith('Accepted') ? (
                          <><span className="cta-flash font-semibold">Accepted</span>{f.slice(8)}</>
                        ) : f}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="link-arrow cta-flash mt-auto">
                  {link}
                </span>
                {note && <p className="text-[11px] text-[#94a3b8] leading-relaxed mt-3">{note}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
