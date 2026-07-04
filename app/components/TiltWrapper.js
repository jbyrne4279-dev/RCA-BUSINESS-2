'use client'
import { useRef } from 'react'

export default function TiltWrapper({ children, className = '', style = {} }) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -10
    const rotateY = ((x - cx) / cx) * 10
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025,1.025,1.025)`
    el.style.boxShadow = '0 16px 40px rgba(0,87,255,0.13)'
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    el.style.boxShadow = style.boxShadow || '0 2px 12px rgba(0,0,0,0.06)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        ...style,
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        cursor: 'default',
      }}
    >
      {children}
    </div>
  )
}
