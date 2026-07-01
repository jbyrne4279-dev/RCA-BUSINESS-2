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
  { href: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#dadce0]"
      style={{ boxShadow: '0 1px 3px rgba(60,64,67,0.12)' }}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="flex-shrink-0 flex items-center gap-3 logo-shine">
          <Image
            src="/cr-monogram.svg"
            alt="Cavendish & Rowe"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center gap-1 ml-4">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#1a73e8] bg-[#e8f0fe]'
                    : 'text-[#3c4043] hover:bg-[#f8f9fa] hover:text-[#202124]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a href="tel:+442031788099"
            className="text-sm text-[#5f6368] hover:text-[#202124] transition-colors font-medium">
            020 3178 8099
          </a>
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
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f8f9fa] text-[#5f6368] transition-colors"
          >
            <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#dadce0]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
            <Link href="/" onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-md text-sm font-medium text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124] transition-colors">
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-[#3c4043] hover:bg-[#f8f9fa] hover:text-[#202124] transition-colors border-t border-[#f8f9fa]">
                {label}
              </Link>
            ))}
<div className="px-3 py-4 border-t border-[#dadce0] mt-1">
              <a href="tel:+442031788099" className="text-sm text-[#5f6368]">020 3178 8099</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
