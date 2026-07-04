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
    <div className="border-b border-[#e2e8f0] py-5 bg-white overflow-hidden">

      {/* ── Desktop: static row ── */}
      <div className="hidden md:flex max-w-6xl mx-auto px-10 items-center gap-6 justify-between">
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

      {/* ── Mobile: infinite marquee ── */}
      <div className="md:hidden flex items-center gap-6 px-6">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-10 w-max"
            style={{ animation: 'trust-marquee 12s linear infinite' }}
          >
            {[...items, ...items].map(({ label, href }, i) => (
              <Link
                key={i}
                href={href}
                className="trust-marquee-item text-sm font-semibold shrink-0"
                style={{ animationDelay: `${(i % items.length) * (12 / items.length)}s` }}
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
          0%   { color: #0d1b3e; text-shadow: none; }
          40%  { color: #0057FF; text-shadow: 0 0 12px rgba(0,87,255,0.7), 0 0 24px rgba(0,87,255,0.35); }
          60%  { color: #0057FF; text-shadow: 0 0 12px rgba(0,87,255,0.7), 0 0 24px rgba(0,87,255,0.35); }
          100% { color: #0d1b3e; text-shadow: none; }
        }
        .trust-marquee-item {
          color: #0d1b3e;
          animation: trust-glow 12s linear infinite;
        }
      `}</style>
    </div>
  )
}
