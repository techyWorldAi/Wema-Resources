import { processSteps } from '../content'

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-3">Process</p>
        <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight max-w-2xl">
          How it works
        </h2>

        <ol className="mt-14 relative">
          <span
            className="hidden sm:block absolute left-[27px] top-3 bottom-3 w-px bg-ink/10"
            aria-hidden="true"
          />
          {processSteps.map((step) => (
            <li key={step.gate} className="relative flex gap-5 sm:gap-7 pb-10 last:pb-0">
              <span className="relative z-10 shrink-0 grid place-items-center h-14 w-14 rounded-full bg-green text-white font-display font-bold border-4 border-white shadow">
                {step.gate}
              </span>
              <div className="pt-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display font-semibold text-green-dark text-lg sm:text-xl">
                    {step.title}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-sm ${
                      step.tag === 'International'
                        ? 'bg-gold/20 text-gold-deep'
                        : 'bg-green-50 text-green'
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <p className="mt-1.5 text-ink/60 max-w-lg leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
