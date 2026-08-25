import Link from 'next/link'
import Image from 'next/image'

const ALL_PAGES = [
  { slug: '/services', title: 'Our Services', summary: 'Desktop, on-site and 3-Year Protection Plan — pick the assessment that fits your property.', img: '/AdobeStock_158046067.jpeg' },
  { slug: '/blocks-of-flats', title: 'Blocks of Flats', summary: 'Specialist assessments protecting every leaseholder in a shared building from the average clause.', img: '/AdobeStock_208633670.jpeg' },
  { slug: '/managing-agents-insurance-valuations', title: 'Managing Agents', summary: 'Discharge your compliance obligation and protect your PI file with a defensible valuation.', img: '/surveyor-reinstatement-cost-assessment-rics.png' },
  { slug: '/freeholders-leaseholders', title: 'Freeholders & Leaseholders', summary: 'Defend the insuring covenant, or challenge an inadequate sum insured independently.', img: '/rca-for-my-property-london-rebuild.png' },
  { slug: '/listed-buildings', title: 'Listed Buildings', summary: 'On-site specialist assessment for Grade I, Grade II* and Grade II heritage properties.', img: '/AdobeStock_1064771096.jpeg' },
  { slug: '/block-managers-reinstatement-cost-assessments', title: 'Block Managers', summary: 'Consistent, compliant figures across every block you manage, on a rolling cycle.', img: '/AdobeStock_270155966.jpeg' },
  { slug: '/commercial-reinstatement-costs', title: 'Commercial Property', summary: 'Offices, retail, industrial and mixed-use — tenant fitout and plant captured correctly.', img: '/commercial-reinstatement-cost-assessment.png' },
  { slug: '/portfolio-reinstatement-assessments', title: 'Portfolio Assessments', summary: 'One instruction, individual reports per asset, and a consolidated summary schedule.', img: '/AdobeStock_1477785304.jpeg' },
]

export default function RelatedPages({ currentSlug, heading = 'Related services', count = 3 }) {
  const items = ALL_PAGES.filter((g) => g.slug !== currentSlug).slice(0, count)
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0057FF] block mb-2">Explore Further</span>
          <h2 className="text-[2rem] sm:text-4xl font-semibold tracking-tight text-[#0d1b3e]">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((g) => (
            <Link
              key={g.slug}
              href={g.slug}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 10px 32px rgba(0,87,255,0.16)' }}
            >
              <Image
                src={g.img}
                alt={`${g.title} - Stearling Reinstatement`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold tracking-tight mb-1.5">{g.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">{g.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest">
                  Learn more
                  <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-0.5" style={{ fontSize: '0.9rem' }}>arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
