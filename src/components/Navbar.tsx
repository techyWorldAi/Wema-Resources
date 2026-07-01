import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { APPLY_FORM_URL } from '../content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#opportunities', label: 'Opportunities' },
  { href: '#career-support', label: 'Career Support' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-black/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Wema Resources" className="h-11 sm:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest2 text-ink/70 hover:text-green transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors"
          >
            Apply Now
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-green p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-ink/10">
          <nav className="flex flex-col px-5 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest2 text-ink/80 hover:text-green"
              >
                {l.label}
              </a>
            ))}
            <a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep text-green-dark font-display font-semibold text-sm px-5 py-3 rounded-sm"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
