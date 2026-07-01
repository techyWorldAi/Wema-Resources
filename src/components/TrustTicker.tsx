const items = [
  'Verified Opportunities',
  'Transparent Process',
  'Career Support',
  'Licensed Partners',
  'Structured Guidance',
]

export default function TrustTicker() {
  const track = [...items, ...items]
  return (
    <div className="bg-green-50 overflow-hidden border-y border-green/10">
      <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 py-2.5 font-mono text-[11px] uppercase tracking-widest2 text-green-dark"
          >
            {item}
            <span className="text-gold" aria-hidden="true">
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
