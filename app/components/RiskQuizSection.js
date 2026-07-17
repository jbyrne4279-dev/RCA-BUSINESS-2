import QuizCard from './QuizCard'

export default function RiskQuizSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0f4ff' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="max-w-lg">
          <span className="badge badge-blue mb-5">Free Risk Check</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-[1.1] tracking-tight mb-6">
            Find out if <span className="blue-keyword">you&apos;re underinsured</span>.
          </h2>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Four short questions. A free read-out on your risk, and a tailored recommendation - takes about a minute, no obligation.
          </p>
        </div>

        <div className="bg-white rounded-[28px] p-6 md:p-9" style={{ boxShadow: '0 24px 64px rgba(13,27,62,0.12)' }}>
          <QuizCard source="Homepage Risk Quiz" showIntro={false} />
        </div>
      </div>
    </section>
  )
}
