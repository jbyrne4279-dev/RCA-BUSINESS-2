import QuizCard from './QuizCard'

export default function RiskQuizSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="badge badge-blue mb-4">Free Risk Check</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
          Find out if <span className="blue-keyword">you&apos;re underinsured</span>.
        </h2>
        <p className="text-[#64748b] text-sm mt-3 max-w-md mx-auto">
          Answer four quick questions for a free risk read-out and a tailored assessment recommendation.
        </p>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-3xl border border-[#e2e8f0] p-6 md:p-8" style={{ boxShadow: '0 8px 32px rgba(0,87,255,0.10)' }}>
        <QuizCard source="Homepage Risk Quiz" showIntro={false} />
      </div>
    </section>
  )
}
