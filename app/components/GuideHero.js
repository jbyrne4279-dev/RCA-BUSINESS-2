import Link from 'next/link'
import Image from 'next/image'

export default function GuideHero({
  image,
  imageAlt,
  badge = 'Homeowner Guide',
  headlineMain,
  headlineAccent,
  subtitle,
  primaryHref = '/contact#contact-form',
  primaryLabel = 'Get My Assessment',
  secondaryHref,
  secondaryLabel,
  children,
}) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative z-10 w-full flex items-center justify-center px-5 py-16 md:py-24">
        <div className={`w-full flex flex-col md:flex-row gap-6 items-stretch justify-center ${children ? 'max-w-lg md:max-w-5xl' : 'max-w-lg md:max-w-2xl'}`}>
          <div className="w-full md:max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl px-7 py-9 md:px-14 md:py-14 border border-white/40 shadow-[0_12px_60px_rgba(0,0,0,0.25)] text-center flex flex-col">
            <span className="badge badge-blue mb-4">{badge}</span>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-[#2b0b14] mb-4">
              {headlineMain}{headlineAccent ? <> <span className="text-shine">{headlineAccent}</span></> : null}
            </h1>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-8 max-w-md mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={primaryHref} className="btn-shine px-8 py-4 font-bold active:scale-[0.97] transition-transform text-center text-sm">
                {primaryLabel}
              </Link>
              {secondaryHref && (
                <Link href={secondaryHref} className="bg-[#2b0b14]/8 border border-[#2b0b14]/15 text-[#2b0b14] px-6 py-4 rounded-md font-semibold text-sm hover:bg-[#2b0b14]/12 active:scale-[0.97] transition-all text-center">
                  {secondaryLabel}
                </Link>
              )}
            </div>

            <div className="flex flex-col items-center gap-1 mt-auto pt-8">
              <Image src="/rics-logo.png" alt="RICS Regulated Firm" width={120} height={80} className="w-24 h-auto object-contain" />
            </div>
          </div>

          {children && (
            <div className="w-full md:max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl px-7 py-9 md:px-10 md:py-10 border border-white/40 shadow-[0_12px_60px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <div className="w-full">{children}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
