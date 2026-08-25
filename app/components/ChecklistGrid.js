export default function ChecklistGrid({ items, columns = 2 }) {
  const gridCols = columns === 1 ? 'sm:grid-cols-1' : 'sm:grid-cols-2'
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-3`}>
      {items.map((item, i) => (
        <div
          key={item}
          className="flex gap-3 items-start rounded-xl border border-[#e2e8f0] bg-white p-4"
        >
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#7A1F3D,#5C1730)' }}
          >
            {i + 1}
          </span>
          <p className="text-[#2b0b14] text-sm leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  )
}
