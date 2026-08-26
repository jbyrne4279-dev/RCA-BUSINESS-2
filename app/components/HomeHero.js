'use client'
import { useState } from 'react'
import Link from 'next/link'
import GuideHero from './GuideHero'
import QuizCard from './QuizCard'

export default function HomeHero() {
  const [open, setOpen] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  function openQuiz() {
    setResetKey((k) => k + 1)
    setOpen(true)
  }

  function close() {
    setOpen(false)
  }

  return (
    <>
      <GuideHero
        image="/rca-for-my-property-london-rebuild.png"
        imageAlt="Homeowner's Reinstatement Cost Assessment"
        badge="Homeowners"
        headlineMain="Make sure your home is insured"
        headlineAccent="for the right amount."
        subtitle="Bought a new home? Renewing your insurance? A RICS-regulated Reinstatement Cost Assessment tells you the true cost to rebuild your property - so you're never caught out by a reduced claim payout. Broker-ready reports in 24 hours."
        primaryLabel="Get My Assessment"
        onPrimaryClick={openQuiz}
      >
        <div className="flex justify-center">
          <Link href="/what-is-a-reinstatement-cost-assessment" className="btn-ghost">What Is an RCA?</Link>
        </div>
      </GuideHero>

      {open && (
        <div className="quiz-overlay" onClick={close}>
          <div
            className="quiz-panel bg-white rounded-3xl max-w-md w-full shadow-2xl border border-[#e2e8f0]"
            onClick={(e) => e.stopPropagation()}
          >
            <QuizCard key={resetKey} onClose={close} source="Hero Get My Assessment" />
          </div>
        </div>
      )}
    </>
  )
}
