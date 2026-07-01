import { useState, FormEvent } from 'react'
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react'
import { APPLY_FORM_URL } from '../content'

export default function ContactFooter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:hello@wemaresources.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section id="contact" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest2 text-gold-deep mb-3">Contact us</p>
            <h2 className="font-display font-bold text-green-dark text-3xl sm:text-4xl leading-tight">
              Get in touch
            </h2>
            <p className="mt-5 text-ink/65 leading-relaxed max-w-sm">
              Have questions about our services? Reach out and we&rsquo;ll guide you through the
              process.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@wemaresources.com"
                className="flex items-center gap-3 text-ink/80 hover:text-green transition-colors"
              >
                <Mail size={18} className="text-gold-deep" /> hello@wemaresources.com
              </a>
              <p className="flex items-center gap-3 text-ink/80">
                <MapPin size={18} className="text-gold-deep" /> Nairobi, Kenya
              </p>
              <a
                href="https://www.linkedin.com/company/wema-resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink/80 hover:text-green transition-colors"
              >
                <Linkedin size={18} className="text-gold-deep" /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream border border-ink/10 rounded-md p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-widest2 text-green mb-6">
              Send us a message
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-ink/55 text-xs uppercase tracking-wide mb-2">Name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full bg-white border border-ink/15 rounded-sm px-4 py-3 text-ink placeholder:text-ink/30 focus:border-gold outline-none"
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className="block text-ink/55 text-xs uppercase tracking-wide mb-2">Email</span>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-white border border-ink/15 rounded-sm px-4 py-3 text-ink placeholder:text-ink/30 focus:border-gold outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block mt-5">
              <span className="block text-ink/55 text-xs uppercase tracking-wide mb-2">Message</span>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white border border-ink/15 rounded-sm px-4 py-3 text-ink placeholder:text-ink/30 focus:border-gold outline-none resize-none"
                placeholder="How can we help?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-display font-semibold px-6 py-3.5 rounded-sm transition-colors"
            >
              Submit <ArrowRight size={18} />
            </button>
            {sent && (
              <p className="mt-4 text-green text-sm" role="status">
                Opening your mail app to send this to hello@wemaresources.com&hellip;
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-green-dark border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <a href="#top" className="flex items-center">
              <img src="/logo.png" alt="Wema Resources" className="h-12 w-auto" />
            </a>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest2 text-white/55">
              <a href="#about" className="hover:text-gold-light transition-colors">About</a>
              <a href="#opportunities" className="hover:text-gold-light transition-colors">Opportunities</a>
              <a href="#career-support" className="hover:text-gold-light transition-colors">Career Support</a>
              <a href="#contact" className="hover:text-gold-light transition-colors">Contact</a>
            </nav>

            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors w-fit"
            >
              Apply Now
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Wema Resources. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
