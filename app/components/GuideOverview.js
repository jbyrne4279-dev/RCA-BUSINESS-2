import Image from 'next/image'

const HIGHLIGHT_COLORS = [
  { color: '#7A1F3D', bg: 'rgba(122,31,61,0.10)' },
  { color: '#16a34a', bg: 'rgba(22,163,74,0.10)' },
  { color: '#d97706', bg: 'rgba(217,119,6,0.12)' },
]

export default function GuideOverview({ kicker = 'Overview', heading, headingAccent, description, image, imageAlt, highlights = [], highlightTheme }) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F3D] block mb-4">{kicker}</span>
          <h2 className="text-[2rem] sm:text-5xl font-semibold tracking-tight text-[#2b0b14] leading-[1.08]">
            {heading} {headingAccent && <span className="text-shine">{headingAccent}</span>}
          </h2>
          {description && (
            <p className="text-lg sm:text-xl text-[#64748b] leading-relaxed mt-6">{description}</p>
          )}
        </div>

        {image && (
          <div className="mt-14 relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(43,11,20,0.35)]">
            <Image
              src={image}
              alt={imageAlt}
              width={1600}
              height={900}
              className="w-full h-full object-cover aspect-[16/10] sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {highlights.length > 0 && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {highlights.map(({ icon, title, desc }, i) => {
              const c = HIGHLIGHT_COLORS[i % HIGHLIGHT_COLORS.length]
              const burgundy = highlightTheme === 'burgundy'
              return (
                <div
                  key={title}
                  className={
                    burgundy
                      ? 'rounded-2xl border border-[#7A1F3D] bg-[#7A1F3D] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-12px_rgba(122,31,61,0.35)] transition-shadow duration-300'
                      : 'rounded-2xl border border-[#e2e8f0] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-12px_rgba(122,31,61,0.18)] transition-shadow duration-300'
                  }
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="inline-flex w-10 h-10 rounded-full items-center justify-center shrink-0"
                      style={{ backgroundColor: burgundy ? 'rgba(255,255,255,0.15)' : c.bg }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '1.15rem', color: burgundy ? '#ffffff' : c.color }}>{icon}</span>
                    </div>
                    <h3 className={`text-lg font-semibold tracking-tight ${burgundy ? 'text-white' : 'text-[#2b0b14]'}`}>{title}</h3>
                  </div>
                  <p className={`text-[15px] leading-relaxed ${burgundy ? 'text-white/85' : 'text-[#64748b]'}`}>{desc}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
