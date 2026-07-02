'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/blocks-of-flats', label: 'Blocks of Flats' },
  { href: '/managing-agents-insurance-valuations', label: 'Managing Agents' },
  { href: '/freeholders-leaseholders', label: 'Freeholders' },
  { href: '/listed-buildings', label: 'Listed Buildings' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#dadce0]"
      style={{ boxShadow: '0 1px 0 rgba(60,64,67,0.08), 0 2px 12px rgba(60,64,67,0.06)' }}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex-shrink-0 flex items-center gap-2.5 logo-shine group">
          <Image
            src="/cr-monogram.svg"
            alt="Cavendish & Rowe"
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="hidden sm:block text-sm font-semibold text-[#202124] tracking-tight">
            Cavendish <span className="text-[#9aa0a6] font-light">&amp;</span> Rowe
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-0.5">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'text-[#1a73e8] bg-[#e8f0fe]'
                    : 'text-[#3c4043] hover:bg-[#f3f6ff] hover:text-[#1a73e8]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a href="tel:+442031788099" className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors font-medium hidden lg:block">020 3178 8099</a>
          <Link href="/contact#contact-form" className="btn-shine !text-sm !py-2 !px-5">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden ml-auto flex items-center gap-2">
          <Link href="/contact#contact-form" className="btn-shine !text-xs !py-1.5 !px-4">
            Quote
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#f3f6ff] text-[#5f6368] transition-colors"
          >
            <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#dadce0]/70">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-0.5">
            <Link href="/" onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#5f6368] hover:bg-[#f3f6ff] hover:text-[#1a73e8] transition-colors">
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#3c4043] hover:bg-[#f3f6ff] hover:text-[#1a73e8] transition-colors">
                {label}
              </Link>
            ))}
            <div className="border-t border-[#f0f0f0] mt-1 pt-2 pb-1">
              <a href="tel:+442031788099" className="px-3 py-2.5 text-sm text-[#5f6368] font-medium flex items-center gap-2">
                <span>📞</span> 020 3178 8099
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
