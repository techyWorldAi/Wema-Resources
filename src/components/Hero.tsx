import { ArrowRight, MoveDown } from 'lucide-react'
import { APPLY_FORM_URL } from '../content'
import OpportunitiesPanel from './OpportunitiesPanel'
import ImageSection from './ImageSection'
import { SwooshUnderline } from './Swoosh'

export default function Hero() {
  return (
    <ImageSection id="top" src="/images.jpg" overlay="forest" className="pt-28 sm:pt-36 pb-20 sm:pb-28 ">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start ">
        <div className="animate-riselight">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light">
              Career support that gets results
            </p>
          </div>

          <h1 className="mt-6 font-display font-extrabold text-white text-[2.5rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] max-w-3xl">
            Land your next role with{' '}
            <span className="relative inline-block">
              trusted support
              <SwooshUnderline className="absolute left-0 -bottom-2" />
            </span>
          </h1>
          <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl">
            From verified local and international opportunities to CV refinement, interview prep,
            and guided applications, we help professionals present themselves with confidence and
            clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold px-6 py-3.5 rounded-sm transition-all duration-300 shadow-[0_10px_30px_rgba(214,169,59,0.25)] hover:-translate-y-0.5"
            >
              Apply now <ArrowRight size={18} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-white/85 hover:text-gold-light font-mono text-xs uppercase tracking-widest2 transition-colors"
            >
              <MoveDown size={16} /> See how it works
            </a>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-white/55">
            Simple application &middot; guided from start to finish
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-widest2 text-white/60">
            <span>Verified opportunities</span>
            <span className="text-gold/70">&middot;</span>
            <span>Transparent process</span>
            <span className="text-gold/70">&middot;</span>
            <span>Career support</span>
          </div>
        </div>

        <div className="lg:pt-2">
          <OpportunitiesPanel />
        </div>
      </section>
    </ImageSection>
  )
}
