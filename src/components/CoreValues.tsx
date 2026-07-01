import { coreValues, siteImages } from '../content'
import ImageSection from './ImageSection'

export default function CoreValues() {
  return (
    <ImageSection src={siteImages.values} overlay="forest" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-gold-light mb-3">
              Core values &middot; Sc&middot;I&middot;T
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl leading-tight">
              Our commitment to you
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="relative bg-white/10 backdrop-blur border border-white/15 rounded-md p-6 hover:border-gold/50 transition-colors"
            >
              <span className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full border-2 border-gold/60 text-gold-light font-display font-bold text-base">
                {value.letter}
              </span>
              <h3 className="font-display font-semibold text-white text-lg pr-12">
                {value.title}
              </h3>
              <p className="mt-3 text-white/65 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ImageSection>
  )
}
