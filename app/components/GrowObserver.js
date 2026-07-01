'use client'

import { useEffect } from 'react'

export default function GrowObserver() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-grow-card')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    cards.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return null
}
