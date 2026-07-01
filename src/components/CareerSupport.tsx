import { FileText, MessageSquare, Briefcase, ArrowRight } from 'lucide-react'
import { careerServices, whyCandidates, CAREER_SUPPORT_FORM_URL } from '../content'

const icons = [FileText, MessageSquare, Briefcase]

export default function CareerSupport() {
  return (
    <section id="career-support" className="bg-green-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-3">
            Career support services
          </p>
          <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight max-w-xl">
            We help you prepare &amp; present yourself professionally
          </h2>

          <div className="mt-10 space-y-6">
            {careerServices.map((service, i) => {
              const Icon = icons[i]
              return (
                <div key={service.title} className="flex gap-4 sm:gap-5">
                  <span className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-white border border-ink/10 text-green">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-green-dark text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-ink/60 text-sm leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href={CAREER_SUPPORT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold px-6 py-3.5 rounded-sm transition-colors"
          >
            Get Career Support <ArrowRight size={18} />
          </a>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink/40">
            Takes 2&ndash;3 minutes
          </p>
        </div>

        <div className="bg-white border border-ink/10 rounded-md p-7 sm:p-9 self-start shadow-sm">
          <p className="font-mono text-xs uppercase tracking-widest2 text-green mb-5">
            Why candidates work with us
          </p>
          <ul className="space-y-4">
            {whyCandidates.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                <span className="text-ink/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
