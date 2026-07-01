'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-white z-50 border-b border-[#111318]/10">
      <nav aria-label="Main navigation" className="flex items-center px-6 md:px-10 py-4 max-w-full mx-auto">
        <Link href="/" onClick={() => setOpen(false)} className="flex-1 flex items-center gap-2.5">
          <span className="logo-shine">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="RCA Ltd – Reinstatement Cost Assessment specialists"
              width={80}
              height={64}
              priority
              className="h-11 w-auto object-contain"
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-10">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? 'text-[#111318] border-b border-[#c47c1e] pb-0.5 font-medium text-sm tracking-wide'
                    : 'text-[#111318]/50 hover:text-[#111318] transition-all font-medium text-sm tracking-wide'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <a href="tel:+442031788099" className="text-sm font-medium text-[#111318]/50 hover:text-[#111318] transition-colors tracking-wide">
            020 3178 8099
          </a>
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center gap-3">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-8 w-auto object-contain"
          />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center w-9 h-9 text-[#111318] hover:bg-[#111318]/5 transition-colors"
          >
            <span style={{ fontSize: '1.4rem', fontWeight: 300 }}>{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#111318]/10 bg-[#111318]">
          <div className="flex flex-col px-6 py-5 gap-0.5">
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive
                      ? 'text-[#c47c1e] font-medium tracking-wide py-3 px-3 border-l-2 border-[#c47c1e] text-sm'
                      : 'text-white/70 hover:text-white font-medium tracking-wide py-3 px-3 border-l-2 border-transparent hover:border-white/20 text-sm transition-all'
                  }
                >
                  {label}
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-white/10">
              <a href="tel:+442031788099" className="text-white/50 text-xs tracking-wider">020 3178 8099</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
