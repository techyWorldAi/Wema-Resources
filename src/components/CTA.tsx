import { Info } from 'lucide-react'
import ApplyCard from './ApplyCard'
import ImageSection from './ImageSection'
import { siteImages } from '../content'

export default function CTA() {
  return (
    <ImageSection src={siteImages.cta} overlay="soft" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-3 text-center">
          Explore local &amp; international opportunities
        </p>
        <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight text-center">
          Submit your application and take the next step in your career journey
        </h2>

        <div className="mt-12">
          <ApplyCard variant="light" />
        </div>

        <div className="mt-10 flex gap-4 bg-white border border-ink/10 rounded-md p-5 sm:p-6 shadow-sm">
          <Info className="text-green shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-display font-semibold text-green-dark text-sm">
              Important information
            </h3>
            <p className="mt-1.5 text-ink/60 text-sm leading-relaxed">
              Wema Resources assists candidates in accessing employment opportunities through
              licensed recruitment agencies. For international opportunities, certain processing
              costs such as passport, medical examination, visa applications, and government
              documentation may apply, depending on the destination country and employer
              requirements, and will be explained during the application process.
            </p>
          </div>
        </div>
      </div>
    </ImageSection>
  )
}
