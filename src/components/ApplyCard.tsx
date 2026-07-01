import { ArrowRight } from 'lucide-react'
import { APPLY_FORM_URL } from '../content'

interface Props {
  variant?: 'light' | 'dark'
}

/** Clean call-to-action card used in the mid-page CTA band. */
export default function ApplyCard({ variant = 'light' }: Props) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`relative rounded-md border-l-4 border-gold overflow-hidden ${
        isDark ? 'bg-white/10 backdrop-blur border border-white/15' : 'bg-white shadow-xl shadow-black/10'
      }`}
    >
      <div className="p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className={`font-mono text-[10px] uppercase tracking-widest2 ${isDark ? 'text-gold-light' : 'text-gold-deep'}`}>
            Ready when you are
          </p>
          <h3 className={`mt-2 font-display font-bold text-2xl sm:text-3xl ${isDark ? 'text-white' : 'text-green-dark'}`}>
            Start your application today
          </h3>
          <p className={`mt-1 font-mono text-[11px] uppercase tracking-wide ${isDark ? 'text-white/50' : 'text-ink/40'}`}>
            Takes 2&ndash;3 minutes
          </p>
        </div>
        <a
          href={APPLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold px-7 py-4 rounded-sm transition-colors shrink-0"
        >
          Apply Now <ArrowRight size={18} />
        </a>
      </div>
    </div>
  )
}
