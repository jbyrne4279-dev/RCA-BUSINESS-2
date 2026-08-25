import Link from 'next/link'

const items = [
  { label: 'Managing Agents',    href: '/managing-agents-insurance-valuations' },
  { label: 'RTM Companies',      href: '/managing-agents-insurance-valuations' },
  { label: 'Freeholders',        href: '/freeholders-leaseholders' },
  { label: 'Block Managers',     href: '/block-managers-reinstatement-cost-assessments' },
  { label: 'Portfolio Landlords', href: '/portfolio-reinstatement-assessments' },
]

const homeownerItems = [
  { label: 'First-Time Buyers',   href: '/do-i-need-a-reinstatement-cost-assessment' },
  { label: 'Homeowners',          href: '/what-is-a-reinstatement-cost-assessment' },
  { label: 'Leasehold Flat Owners', href: '/freeholders-leaseholders' },
  { label: 'Freeholders',         href: '/freeholders-leaseholders' },
  { label: 'Property Owners',     href: '/reinstatement-cost-assessment-cost' },
]

export default function TrustStrip({ variant = 'professional' }) {
  const list = variant === 'homeowner' ? homeownerItems : items
  return (
    <div className="border-b border-[#e2e8f0] py-5 bg-white overflow-hidden">

      {/* ── Desktop: static row ── */}
      <div className="hidden md:flex max-w-6xl mx-auto px-10 items-center gap-6 justify-between">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
        {list.map(({ label, href }, i) => (
          <Link
            key={label}
            href={href}
            className="trust-item text-sm font-semibold shrink-0 hover:text-[#7A1F3D] transition-colors"
            style={{ animationDelay: `${i * 1.1}s` }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ── Mobile: infinite marquee ── */}
      <div className="md:hidden flex items-center gap-6 px-6">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-10 w-max"
            style={{ animation: 'trust-marquee 12s linear infinite' }}
          >
            {[...list, ...list].map(({ label, href }, i) => (
              <Link
                key={i}
                href={href}
                className="trust-marquee-item text-sm font-semibold shrink-0"
                style={{ animationDelay: `${(i % list.length) * (12 / list.length)}s` }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trust-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes trust-glow {
          0%   { color: #2b0b14; text-shadow: none; }
          40%  { color: #7A1F3D; text-shadow: 0 0 5px rgba(122,31,61,0.3); }
          60%  { color: #7A1F3D; text-shadow: 0 0 5px rgba(122,31,61,0.3); }
          100% { color: #2b0b14; text-shadow: none; }
        }
        .trust-marquee-item {
          color: #2b0b14;
          animation: trust-glow 12s linear infinite;
        }
      `}</style>
    </div>
  )
}
