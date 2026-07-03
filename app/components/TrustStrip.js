export default function TrustStrip() {
  return (
    <div className="border-b border-[#e2e8f0] py-5 px-6 md:px-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto scrollbar-hide flex items-center gap-6 overflow-x-auto md:overflow-visible md:justify-between">
        <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest shrink-0">Trusted by</p>
        {['Managing Agents', 'RTM Companies', 'Freeholders', 'Block Managers', 'Portfolio Landlords'].map((l, i) => (
          <span key={l} className="trust-item text-sm font-semibold shrink-0" style={{ animationDelay: `${i * 1.1}s` }}>{l}</span>
        ))}
      </div>
    </div>
  )
}
