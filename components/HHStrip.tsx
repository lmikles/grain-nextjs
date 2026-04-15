export default function HHStrip() {
  const items = [
    'Happy Hour',
    'Mon–Fri 3–6pm',
    'All 3 Locations',
    '$10 Smashburger + Beer',
    'The Diamond State $7',
    'Happy Hour',
    'Mon–Fri 3–6pm',
    'All 3 Locations',
    '$10 Smashburger + Beer',
    'The Diamond State $7',
    'Happy Hour',
    'Mon–Fri 3–6pm',
    'All 3 Locations',
    '$10 Smashburger + Beer',
    'The Diamond State $7',
  ]

  return (
    <div
      style={{
        background: 'var(--amber)',
        padding: 0,
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        className="animate-scroll-ticker"
        style={{
          display: 'flex',
          gap: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.9)',
              padding: '0 36px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ opacity: 0.4, fontSize: '16px' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
