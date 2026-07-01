export default function FaqSection({ description, items }) {
  return (
    <section className="pt-16 pb-24 bg-[#0e1b36]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#c4a35a]" />
            <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Frequently Asked Questions</span>
            <div className="h-px w-8 bg-[#c4a35a]" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white">Common Questions.</h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white/4 border border-white/8 p-7 flex flex-col gap-3 hover:bg-white/6 hover:border-[#c4a35a]/25 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-white leading-snug">
                {item.question}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
