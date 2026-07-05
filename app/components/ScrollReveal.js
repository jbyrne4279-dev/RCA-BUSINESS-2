'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const targets = document.querySelectorAll('main section')
    targets.forEach(el => {
      el.classList.add('reveal')
      el.classList.remove('is-visible')
    })

    const cards = document.querySelectorAll('.grow-card')
    cards.forEach(el => el.classList.remove('is-visible'))

    // Force circuit-steps children visible in case scroll-driven animation doesn't fire
    const circuitItems = document.querySelectorAll('.circuit-steps > *')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            cardObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    )

    const circuitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target
            const idx = [...el.parentElement.children].indexOf(el)
            setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateX(0)' }, idx * 180)
            circuitObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    targets.forEach(el => observer.observe(el))
    cards.forEach(el => cardObserver.observe(el))
    circuitItems.forEach(el => circuitObserver.observe(el))

    return () => { observer.disconnect(); cardObserver.disconnect(); circuitObserver.disconnect() }
  }, [pathname])

  return null
}
