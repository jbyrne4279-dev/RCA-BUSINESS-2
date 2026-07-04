'use client'
import Image from 'next/image'
import { useRef } from 'react'

export default function LogoSpin({ width = 36, height = 36, className = '', priority = false }) {
  const wrapRef = useRef(null)
  const lastX = useRef(null)
  const rot = useRef(0)
  const isOver = useRef(false)
  const restoreTimer = useRef(null)

  function onMouseEnter(e) {
    isOver.current = true
    lastX.current = e.clientX
    clearTimeout(restoreTimer.current)
    const el = wrapRef.current
    if (!el) return
    el.style.animation = 'none'
    el.style.transition = 'none'
  }

  function onMouseMove(e) {
    if (!isOver.current) return
    const delta = e.clientX - (lastX.current ?? e.clientX)
    rot.current += delta * 2.2
    lastX.current = e.clientX
    const el = wrapRef.current
    if (!el) return
    el.style.transform = `perspective(320px) rotateY(${rot.current}deg) scale(1.1)`
  }

  function onMouseLeave() {
    isOver.current = false
    lastX.current = null
    const el = wrapRef.current
    if (!el) return
    el.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = 'perspective(320px) rotateY(0deg) scale(1)'
    restoreTimer.current = setTimeout(() => {
      if (!isOver.current && wrapRef.current) {
        wrapRef.current.style.transition = ''
        wrapRef.current.style.transform = ''
        wrapRef.current.style.animation = 'logo-rock 4.5s ease-in-out infinite'
      }
    }, 560)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-flex' }}
    >
      <div
        ref={wrapRef}
        style={{
          animation: 'logo-rock 4.5s ease-in-out infinite',
          transformStyle: 'preserve-3d',
          display: 'inline-flex',
        }}
      >
        <Image
          src="/cr-monogram.svg"
          alt="Stearling Reinstatement"
          width={width}
          height={height}
          className={`object-contain ${className}`}
          priority={priority}
        />
      </div>
    </div>
  )
}
