import { ReactNode } from 'react'

interface Props {
  id?: string
  src?: string
  overlay?: 'forest' | 'soft' | 'none'
  className?: string
  children: ReactNode
}

/**
 * Wraps a section in an optional background photo. Pass any image URL via
 * `src` — swap in real photography at any time without touching layout.
 * If `src` is omitted, the section simply renders on a plain background.
 */
export default function ImageSection({ id, src, overlay = 'forest', className = '', children }: Props) {
  const overlayClasses = {
    forest: 'absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,169,59,0.18),transparent_32%),linear-gradient(120deg,rgba(3,12,8,0.92),rgba(4,24,16,0.82))]',
    soft: 'absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_38%),linear-gradient(120deg,rgba(245,235,214,0.9),rgba(255,248,238,0.86))]',
    none: 'absolute inset-0 bg-transparent',
  }

  return (
    <div
      id={id}
      className={`relative isolate overflow-hidden bg-cover bg-center ${className}`}
      style={src ? { backgroundImage: `url(${src})` } : undefined}
    >
      {src && <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,10,8,0.16)_100%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}