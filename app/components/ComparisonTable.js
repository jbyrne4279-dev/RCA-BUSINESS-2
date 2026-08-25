export default function ComparisonTable({ columns, rows }) {
  return (
    <div className="rounded-2xl border border-[#e2e8f0] bg-white" style={{ boxShadow: '0 4px 16px rgba(0,87,255,0.08)' }}>
      {/* Desktop / tablet: real table, no horizontal scroll needed */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#f0f4ff]">
              <th className="text-left p-4 font-semibold text-[#0d1b3e]">&nbsp;</th>
              {columns.map((col) => (
                <th key={col} className="text-left p-4 font-semibold text-[#0057FF]">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#64748b]">
            {rows.map(({ label, values }) => (
              <tr key={label} className="border-t border-[#e2e8f0]">
                <td className="p-4 font-medium text-[#0d1b3e]">{label}</td>
                {values.map((val, i) => (
                  <td key={i} className="p-4">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards - no horizontal scrolling required */}
      <div className="sm:hidden divide-y divide-[#e2e8f0]">
        {rows.map(({ label, values }) => (
          <div key={label} className="p-4">
            <p className="text-xs font-semibold text-[#0d1b3e] uppercase tracking-wide mb-3">{label}</p>
            <div className="space-y-2.5">
              {columns.map((col, i) => (
                <div key={col} className="flex flex-col gap-0.5 rounded-xl bg-[#f0f4ff] px-3 py-2.5">
                  <span className="text-[10px] font-semibold text-[#0057FF] uppercase tracking-wide">{col}</span>
                  <span className="text-sm text-[#64748b]">{values[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
