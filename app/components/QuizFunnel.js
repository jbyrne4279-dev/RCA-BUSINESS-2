'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import QuizCard from './QuizCard'

const EXCLUDED_PATHS = ['/contact', '/thank-you']

export default function QuizFunnel() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const timerRef = useRef(null)

  const excluded = EXCLUDED_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))

  useEffect(() => {
    if (excluded) return
    if (localStorage.getItem('sr_quiz_dismissed')) return

    timerRef.current = setTimeout(() => {
      if (localStorage.getItem('sr_quiz_dismissed')) return
      setOpen(true)
    }, 18000)

    function handleExitIntent(e) {
      if (localStorage.getItem('sr_quiz_dismissed')) return
      if (e.clientY <= 0 && !e.relatedTarget) {
        setOpen(true)
      }
    }
    document.addEventListener('mouseout', handleExitIntent)

    return () => {
      clearTimeout(timerRef.current)
      document.removeEventListener('mouseout', handleExitIntent)
    }
  }, [excluded])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (excluded) return null

  function close() {
    setOpen(false)
    localStorage.setItem('sr_quiz_dismissed', '1')
    clearTimeout(timerRef.current)
  }

  function openFresh() {
    setResetKey((k) => k + 1)
    setOpen(true)
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={openFresh}
          className="quiz-fab btn-shine !text-xs !py-3 !px-5 flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 015.83 1c0 2-3 2-3 4" /><path d="M12 17h.01" /><circle cx="12" cy="12" r="10" /></svg>
          Check If You&apos;re Underinsured
        </button>
      )}

      {open && (
        <div className="quiz-overlay" onClick={close}>
          <div
            className="quiz-panel bg-white rounded-3xl max-w-md w-full shadow-2xl border border-[#e2e8f0] p-6 md:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <QuizCard key={resetKey} onClose={close} source="Popup Risk Quiz" />
          </div>
        </div>
      )}
    </>
  )
}
