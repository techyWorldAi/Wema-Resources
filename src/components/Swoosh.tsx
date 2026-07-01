/** Small inline gold swoosh used as an accent under headline words, mirroring the logo mark. */
export function SwooshUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 22"
      className={`w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 14C40 2 90 2 130 10C155 15 175 9 198 4"
        fill="none"
        stroke="#D6A93B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Full-width decorative wave used between sections, echoing the logo's swoosh. */
export function SwooshDivider({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      className={`w-full block ${flip ? 'rotate-180' : ''} ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40C220 8 420 8 620 32C820 56 1020 24 1200 10"
        fill="none"
        stroke="#D6A93B"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}
