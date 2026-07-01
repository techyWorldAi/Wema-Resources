import { jobCategories } from '../content'

/** Clean white panel listing job categories, floating over the hero photo. */
export default function OpportunitiesPanel() {
  return (
    <div className="bg-white shadow-2xl shadow-black/30 overflow-hidden">
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-ink/10">
        <span className="font-display font-semibold text-green-dark text-sm">
          Open Opportunities
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest2 text-ink/40">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          Verified
        </span>
      </div>

      <ul>
        {jobCategories.map((job, i) => (
          <li
            key={job.code}
            className="flex items-center gap-4 px-5 sm:px-6 py-3.5 border-b border-ink/5 last:border-b-0 animate-riselight"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-green-50 text-green font-mono text-[11px] font-semibold">
              {job.code}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display font-semibold text-ink text-[15px] leading-tight">
                {job.title}
              </span>
              <span className="block text-ink/45 text-xs truncate">{job.roles}</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wide text-gold-deep bg-gold/15 px-2 py-1 rounded-sm whitespace-nowrap">
              Open
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
