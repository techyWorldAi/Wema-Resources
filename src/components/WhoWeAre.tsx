import { ShieldCheck, Handshake, Compass } from 'lucide-react'
import { siteImages } from '../content'
import { SwooshUnderline } from './Swoosh'

const points = [
  {
    icon: Handshake,
    title: 'Partnership-driven',
    description: 'We work with licensed recruitment agencies and employers to verify every opportunity.',
  },
  {
    icon: Compass,
    title: 'Guided, end to end',
    description: 'From your first application to placement, we walk every stage with you.',
  },
  {
    icon: ShieldCheck,
    title: 'Built on trust',
    description: 'Clarity, integrity and transparency shape how we work with every candidate.',
  },
]

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-gold/20 via-transparent to-green/20 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gold/20 animate-drift-glow" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-[#0e2a1d] p-3 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.45)]">
            <img
              src={siteImages.about}
              alt="Professional reviewing documents with a modern, African-inspired backdrop"
              className="w-full h-[340px] sm:h-[420px] object-cover rounded-[20px] animate-float-slow"
              loading="lazy"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-light/90">
                Placeholder image
              </p>
              <p className="mt-1 text-sm text-white/90">
                Replace this with your photo or a more specific African-themed visual.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-4">Who we are</p>
          <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight">
            Connecting talent to{' '}
            <span className="relative inline-block">
              local &amp; international opportunities
              <SwooshUnderline className="absolute left-0 -bottom-1.5 w-2/3" />
            </span>
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Wema Resources is a recruitment and career support platform focused on connecting skilled,
            professional and hardworking individuals with employment opportunities both locally and
            abroad. We work closely with licensed recruitment agencies and employers to ensure
            candidates are matched to genuine opportunities and guided through every step of the
            process.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Our goal is simple &mdash; to help individuals access better work opportunities, with
            clarity, professionalism and support throughout the journey.
          </p>

          <dl className="mt-9 grid sm:grid-cols-3 gap-6">
            {points.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border-t-2 border-gold/40 pt-4">
                <Icon className="text-green" size={22} strokeWidth={1.75} />
                <dt className="mt-3 font-display font-semibold text-green-dark text-sm">
                  {title}
                </dt>
                <dd className="mt-1 text-ink/55 text-sm leading-relaxed">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
