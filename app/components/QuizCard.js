'use client'
import { useState } from 'react'

const PROPERTY_TYPES = [
  {
    id: 'residential',
    label: 'Residential Block of Flats',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></svg>,
  },
  {
    id: 'commercial',
    label: 'Commercial Property',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-4h6v4" /><path d="M9 8h1M14 8h1M9 12h1M14 12h1" /></svg>,
  },
  {
    id: 'listed',
    label: 'Listed / Heritage Building',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-6 9 6" /><path d="M5 10v10M19 10v10M9 10v10M15 10v10" /><path d="M3 20h18" /></svg>,
  },
  {
    id: 'mixed',
    label: 'Mixed-Use Property',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>,
  },
]

const ROLES = [
  { id: 'agent', label: 'Managing Agent / RTM Company' },
  { id: 'freeholder', label: 'Freeholder / Leaseholder' },
  { id: 'portfolio', label: 'Block Manager / Portfolio Landlord' },
  { id: 'broker', label: 'Insurance Broker' },
  { id: 'other', label: 'Other' },
]

const LAST_ASSESSED = [
  { id: 'recent', label: 'Within the last 12 months', risk: 0 },
  { id: 'mid', label: '1-3 years ago', risk: 1 },
  { id: 'old', label: 'Over 3 years ago', risk: 2 },
  { id: 'never', label: 'Never / not sure', risk: 3 },
]

const UNIT_COUNTS = [
  { id: 'single', label: 'Single property' },
  { id: 'small', label: '2-10 units' },
  { id: 'medium', label: '11-50 units' },
  { id: 'large', label: '50+ (portfolio)' },
]

const SERVICE_INFO = {
  desktop: {
    label: 'Desktop Reinstatement Cost Assessment',
    desc: 'BCIS-indexed rebuild cost modelling, delivered within 24 hours. No site visit required.',
  },
  onsite: {
    label: 'On-Site Rebuild Cost Assessment',
    desc: 'A RICS surveyor attends in person for full measurement and construction analysis - required for listed and heritage buildings.',
  },
  '3year': {
    label: '3-Year Reinstatement Cost Assessment Plan',
    desc: 'One instruction covers three years of RICS compliance across your portfolio, with annual BCIS-indexed renewal reports.',
  },
}

const STEPS = [
  { key: 'propertyType', question: 'What type of property needs insuring?', options: PROPERTY_TYPES },
  { key: 'role', question: 'What is your role?', options: ROLES },
  { key: 'lastAssessed', question: 'When was the last Reinstatement Cost Assessment carried out?', options: LAST_ASSESSED },
  { key: 'units', question: 'How many properties or units does this cover?', options: UNIT_COUNTS },
]

function computeResult(answers) {
  const lastAssessed = LAST_ASSESSED.find((o) => o.id === answers.lastAssessed)
  const riskScore = lastAssessed ? lastAssessed.risk : 1

  let riskLevel = 'Low Risk'
  let riskColor = '#16a34a'
  if (riskScore >= 2) {
    riskLevel = 'High Underinsurance Risk'
    riskColor = '#dc2626'
  } else if (riskScore === 1) {
    riskLevel = 'Moderate Risk'
    riskColor = '#d97706'
  }

  let service = 'desktop'
  if (answers.propertyType === 'listed') {
    service = 'onsite'
  } else if (answers.units !== 'single' && (answers.role === 'agent' || answers.role === 'portfolio')) {
    service = '3year'
  }

  return { riskLevel, riskColor, riskScore, service }
}

export default function QuizCard({ onClose, source = 'Risk Quiz', showIntro = true }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  function selectOption(key, id) {
    const next = { ...answers, [key]: id }
    setAnswers(next)
    setTimeout(() => setStep((s) => s + 1), 220)
  }

  const isResultStep = step >= STEPS.length
  const result = isResultStep ? computeResult(answers) : null
  const serviceInfo = result ? SERVICE_INFO[result.service] : null
  const showBack = step > 0

  return (
    <div className="relative">
      <div className="p-6 md:p-7 max-h-[80vh] overflow-y-auto">
      {(showBack || onClose) && (
        <div className="flex items-center justify-between gap-2 mb-2">
          {showBack ? (
            <button
              type="button"
              aria-label="Back"
              onClick={() => setStep((s) => s - 1)}
              className="-ml-2 shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[#94a3b8] hover:text-[#0057FF] hover:bg-[#f0f4ff] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
          ) : <span />}
          {onClose ? (
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="-mr-2 shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-[#94a3b8] hover:text-[#0d1b3e] hover:bg-[#f0f4ff] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          ) : <span />}
        </div>
      )}

      {!isResultStep && (
        <div key={step} className="quiz-step-in">
          <div className="quiz-dots mb-4">
            {STEPS.map((_, i) => (
              <span key={i} className={`quiz-dot ${i <= step ? 'filled' : ''}`} />
            ))}
          </div>

          <h3 className={`text-lg md:text-xl font-bold text-[#0d1b3e] leading-snug ${step === 0 ? 'mb-2' : 'mb-7'}`}>
            {STEPS[step].question}
          </h3>
          {step === 0 && showIntro && (
            <p className="text-[#94a3b8] text-xs mb-7">Free risk read-out and tailored recommendation - takes about a minute.</p>
          )}

          <div className="flex flex-col gap-2">
            {STEPS[step].options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => selectOption(STEPS[step].key, opt.id)}
                className={`quiz-option flex items-center gap-3 ${answers[STEPS[step].key] === opt.id ? 'selected' : ''}`}
              >
                {opt.icon && <span className="quiz-option-icon shrink-0">{opt.icon}</span>}
                <span className="text-sm font-medium text-[#0d1b3e] flex-1">{opt.label}</span>
                <svg className="quiz-chevron shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {isResultStep && result && (
        <div className="quiz-step-in">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${result.riskColor}1a`, color: result.riskColor }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: result.riskColor }}>{result.riskLevel}</p>
              <p className="text-xs text-[#94a3b8]">Based on your answers</p>
            </div>
          </div>

          <p className="text-[#64748b] text-sm leading-relaxed mb-4">
            80% of UK buildings are underinsured. An outdated assessment can mean a reduced claim payout under the average clause.
          </p>

          <div className="rounded-2xl border border-[#e2e8f0] p-3.5 mb-5" style={{ background: '#f0f4ff' }}>
            <p className="text-[10px] font-semibold text-[#0057FF] uppercase tracking-wide mb-1">Recommended for you</p>
            <p className="text-sm font-bold text-[#0057FF]">{serviceInfo.label}</p>
          </div>

          <form action="https://formspree.io/f/mykqolzj" method="POST" className="space-y-2.5">
            <input type="hidden" name="_next" value="https://stearlingreinstatement.com/thank-you" />
            <input type="hidden" name="_subject" value="New quiz lead - Stearling Reinstatement" />
            <input type="hidden" name="source" value={source} />
            <input type="hidden" name="property_type" value={answers.propertyType || ''} />
            <input type="hidden" name="role" value={answers.role || ''} />
            <input type="hidden" name="last_assessed" value={answers.lastAssessed || ''} />
            <input type="hidden" name="units" value={answers.units || ''} />
            <input type="hidden" name="risk_level" value={result.riskLevel} />
            <input type="hidden" name="recommended_service" value={serviceInfo.label} />

            <input
              name="name" required type="text" placeholder="Full Name"
              className="w-full bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                name="phone" required type="tel" placeholder="Phone"
                className="bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
              />
              <input
                name="email" required type="email" placeholder="Email"
                className="bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
              />
            </div>

            <button type="submit" className="btn-shine w-full justify-center !py-3 !text-sm !mt-4">
              Contact RICS Surveyor
            </button>
            <p className="text-xs text-center cta-no-obligation">No obligation. RICS-regulated. Reply within 24 hours.</p>
          </form>
        </div>
      )}
      </div>
    </div>
  )
}
