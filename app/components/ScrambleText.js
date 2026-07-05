'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrambleText({ text, className = '', delay = 0 }) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef(null)
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&'

  useEffect(() => {
    let iteration = 0
    const total = text.length * 6
    const start = () => {
      frameRef.current = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < iteration / 6) return text[i]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )
        iteration++
        if (iteration > total) clearInterval(frameRef.current)
      }, 40)
    }
    const t = setTimeout(start, delay)
    return () => { clearTimeout(t); clearInterval(frameRef.current) }
  }, [text, delay])

  return <span className={className}>{display}</span>
}
