import Link from 'next/link'
import Image from 'next/image'

const ALL_GUIDES = [
  { slug: '/what-is-a-reinstatement-cost-assessment', title: 'What Is an RCA?', summary: "A plain-English explainer - what it is, and why it's not the same as market value.", img: '/rca-floor-plan-review.webp' },
  { slug: '/reinstatement-cost-vs-market-value', title: 'RCA vs Market Value', summary: 'A clear, visual comparison of the two figures - and why they diverge.', img: '/reinstatement-cost-assessment-uk.png' },
  { slug: '/do-i-need-a-reinstatement-cost-assessment', title: 'Do I Need One?', summary: "The specific situations that mean it's time to get an assessment.", img: '/building-plans-good.jpg' },
  { slug: '/reinstatement-cost-assessment-cost', title: 'How Much Does It Cost?', summary: 'What determines price, and how to get a fixed quote.', img: '/builing-plans.jpg' },
  { slug: '/what-happens-if-my-property-is-underinsured', title: "What If I'm Underinsured?", summary: 'The average clause explained, with a worked example.', img: '/rca-flats-building.webp' },
]

export default function RelatedGuides({ currentSlug }) {
  const items = ALL_GUIDES.filter((g) => g.slug !== currentSlug).slice(0, 3)
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <span className="badge badge-blue mb-2">Explore Further</span>
          <h2 className="text-[2rem] sm:text-4xl font-semibold tracking-tight text-[#2b0b14]">Related homeowner guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((g) => (
            <Link
              key={g.slug}
              href={g.slug}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 10px 32px rgba(122,31,61,0.16)' }}
            >
              <Image
                src={g.img}
                alt={`${g.title} - Stearling Reinstatement homeowner guide`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold tracking-tight mb-1.5">{g.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">{g.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest">
                  Read the guide
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
