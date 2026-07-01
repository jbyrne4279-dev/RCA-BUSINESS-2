export default function FaqSection({ description, items }) {
  return (
    <section className="pt-12 pb-20 bg-[#0f3d28]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>quiz</span>Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Frequently Asked Questions.</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base font-bold text-primary leading-snug">
                {item.question}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
