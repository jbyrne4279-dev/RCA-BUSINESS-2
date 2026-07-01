'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/blocks-of-flats', label: 'Blocks of Flats' },
  { href: '/managing-agents-insurance-valuations', label: 'Managing Agents' },
  { href: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex-shrink-0 flex items-center gap-2.5 logo-shine">
          <Image
            src="/rca-logo-reinstatement-cost-assessment.png"
            alt="RCA Ltd"
            width={80}
            height={64}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? 'text-[0.8rem] font-medium text-[#1d1d1f] tracking-wide'
                    : 'text-[0.8rem] font-medium text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors tracking-wide'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <a href="tel:+442031788099" className="text-[0.78rem] text-[#1d1d1f]/45 hover:text-[#1d1d1f] transition-colors font-medium">
            020 3178 8099
          </a>
          <Link
            href="/contact#contact-form"
            className="btn-shine !py-2 !px-5 !text-[0.72rem]"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden ml-auto flex items-center gap-3">
          <Link href="/contact#contact-form" className="btn-shine !py-1.5 !px-4 !text-[0.68rem]">
            Quote
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="w-8 h-8 flex items-center justify-center text-[#1d1d1f]"
          >
            <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-[#1d1d1f]/50 hover:text-[#1d1d1f] transition-colors">
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors border-t border-black/[0.05]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/freeholders-leaseholders"
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors border-t border-black/[0.05]"
            >
              Freeholders & Leaseholders
            </Link>
            <Link
              href="/listed-buildings"
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors border-t border-black/[0.05]"
            >
              Listed Buildings
            </Link>
            <div className="pt-4 border-t border-black/[0.05]">
              <a href="tel:+442031788099" className="text-xs text-[#1d1d1f]/35 tracking-wide">020 3178 8099</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
