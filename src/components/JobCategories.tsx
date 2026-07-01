import { PlaneTakeoff } from 'lucide-react'
import { jobCategories, APPLY_FORM_URL } from '../content'

export default function JobCategories() {
  return (
    <section id="opportunities" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-3">Job categories</p>
        <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight max-w-2xl">
          Available international &amp; local opportunities
        </h2>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {jobCategories.map((job) => (
            <div
              key={job.code}
              className="group grid sm:grid-cols-[4rem_1fr_auto] items-center gap-4 py-6 sm:py-7"
            >
              <span className="font-mono text-3xl sm:text-4xl text-green/15 group-hover:text-gold transition-colors">
                {job.code}
              </span>
              <div>
                <h3 className="font-display font-semibold text-green-dark text-xl sm:text-2xl leading-tight">
                  {job.title}
                </h3>
                <p className="text-ink/55 text-sm sm:text-[15px] mt-1">{job.roles}</p>
              </div>
              <div className="flex sm:flex-col sm:items-end items-center justify-between gap-2 sm:gap-1">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-green">
                  <PlaneTakeoff size={14} /> {job.destination}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-display font-semibold px-6 py-3.5 rounded-sm transition-colors"
          >
            Apply Now
          </a>
          <span className="font-mono text-[11px] uppercase tracking-wide text-ink/40">
            Takes 2&ndash;3 minutes
          </span>
        </div>
      </div>
    </section>
  )
}
