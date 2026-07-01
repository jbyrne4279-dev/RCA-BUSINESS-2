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
    <header className="sticky top-0 w-full bg-white z-50 border-b border-zinc-200">
      <nav aria-label="Main navigation" className="flex items-center px-6 md:px-8 py-4 max-w-full mx-auto">
        <Link href="/" onClick={() => setOpen(false)} className="flex-1 flex items-center gap-2.5">
          <span className="logo-shine">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="RCA Ltd – Reinstatement Cost Assessment specialists"
              width={80}
              height={64}
              priority
              className="h-12 w-auto object-contain logo-levitate"
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? 'text-emerald-700 border-b-2 border-emerald-700 pb-1 font-semibold tracking-tight'
                    : 'text-zinc-600 hover:text-zinc-900 transition-all font-semibold tracking-tight'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-11 lg:h-12 w-auto object-contain"
          />
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center gap-3">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-9 w-auto object-contain"
          />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.6rem' }}>
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#1A6B4A]" style={{ backgroundColor: '#1A6B4A' }}>
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive
                      ? 'text-white font-semibold tracking-tight py-3 px-2 border-l-4 border-white bg-white/10'
                      : 'text-white/80 hover:text-white font-semibold tracking-tight py-3 px-2 border-l-4 border-transparent hover:border-white/40'
                  }
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
