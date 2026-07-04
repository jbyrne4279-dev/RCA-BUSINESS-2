import Link from 'next/link'

const items = [
  { label: 'Managing Agents',    href: '/managing-agents-insurance-valuations' },
  { label: 'RTM Companies',      href: '/managing-agents-insurance-valuations' },
  { label: 'Freeholders',        href: '/freeholders-leaseholders' },
  { label: 'Block Managers',     href: '/block-managers-reinstatement-cost-assessments' },
  { label: 'Portfolio Landlords', href: '/portfolio-reinstatement-assessments' },
]

export default function TrustStrip() {
  return (
    <div className="border-b border-[#e2e8f0] py-5 px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto scrollbar-hide flex items-center gap-6 overflow-x-auto md:overflow-visible md:justify-between">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
        {items.map(({ label, href }, i) => (
          <Link
            key={label}
            href={href}
            className="trust-item text-sm font-semibold shrink-0 hover:text-[#0057FF] transition-colors"
            style={{ animationDelay: `${i * 1.1}s` }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
