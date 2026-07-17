import QuizCard from './QuizCard'

const highlights = [
  { title: '60-second questionnaire', desc: 'Four quick questions about your property and cover.' },
  { title: 'Instant risk read-out', desc: 'See whether you’re likely underinsured before speaking to anyone.' },
  { title: 'Tailored recommendation', desc: 'Get matched to the right assessment for your property type.' },
]

export default function RiskQuizSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0f4ff' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="badge badge-blue mb-5">Free Risk Check</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
            Find out if <span className="blue-keyword">you&apos;re underinsured</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-8">
            Answer four quick questions for a free risk read-out and a tailored assessment recommendation - no obligation, takes about a minute.
          </p>
          <div className="space-y-3">
            {highlights.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span
                  className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg,#0057FF,#0040CC)' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0d1b3e]">{title}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 md:p-7" style={{ boxShadow: '0 8px 32px rgba(0,87,255,0.10)' }}>
          <QuizCard source="Homepage Risk Quiz" showIntro={false} />
        </div>
      </div>
    </section>
  )
}
