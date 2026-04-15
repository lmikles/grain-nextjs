import Link from 'next/link'

const beers = [
  { left: 24, top: 28, name: 'Mango Cart', tipName: 'Golden Road Mango Cart', tipDesc: '4% · $8 · Light, tropical' },
  { left: 50, top: 22, name: 'Allagash White', tipName: 'Allagash White', tipDesc: '5.2% · $7.50 · Belgian wheat' },
  { left: 75, top: 24, name: 'Juicy Haze', tipName: 'Voodoo Ranger Juicy Haze', tipDesc: '7.5% · $8.50 · Tropical IPA' },
  { left: 42, top: 42, name: 'Blue Hen Pilsner', tipName: 'Dogfish Blue Hen Pilsner', tipDesc: "4.8% · $6 · Delaware's own" },
  { left: 50, top: 53, name: 'Yuengling', tipName: 'Yuengling Lager', tipDesc: '4.5% · $5 · Classic lager' },
  { left: 28, top: 74, name: 'Guinness', tipName: 'Guinness Draught', tipDesc: '4.2% · $7 · Dry Irish stout' },
  { left: 76, top: 57, name: '60 Min IPA', tipName: 'Dogfish Head 60 Minute', tipDesc: '6% · $7 · Balanced IPA' },
  { left: 87, top: 71, name: '90 Min IPA', tipName: 'Dogfish Head 90 Minute', tipDesc: '9% · $9 · Imperial IPA' },
]

export default function BeerBible() {
  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '104px 52px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="bb-inner-grid"
      >
        {/* Left: text */}
        <div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{ display: 'block', width: '24px', height: '2px', background: 'var(--amber)' }}
            />
            The Beer Bible
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'var(--night)',
              marginBottom: '18px',
            }}
          >
            Find a beer you know.
            <br />
            <em
              style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}
            >
              Start exploring from there.
            </em>
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-mid)',
              marginBottom: '36px',
            }}
          >
            We mapped our entire tap list by flavor so you can find something new without
            gambling on a pint you won&apos;t finish. Hover a dot. Not sure? Ask for a taster
            — once it&apos;s poured, it&apos;s yours.
          </p>
          <Link
            href="/menus"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: 'var(--amber)',
              color: '#fff',
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background .25s, transform .2s, box-shadow .25s',
              boxShadow: '0 4px 20px rgba(212,114,14,.35)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--amber-bright)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--amber)'
              el.style.transform = 'translateY(0)'
            }}
          >
            See the Full Beer Bible
          </Link>
        </div>

        {/* Right: chart */}
        <div className="bb-chart">
          <div className="bb-area" />
          <div className="bb-axis-h" />
          <div className="bb-axis-v" />
          <div className="bb-label top">Fruitier</div>
          <div className="bb-label bottom">Maltier</div>
          <div className="bb-label left">Sweeter</div>
          <div className="bb-label right">Bitter</div>
          {beers.map((beer) => (
            <div
              key={beer.name}
              className="bb-dot"
              style={{ left: `${beer.left}%`, top: `${beer.top}%` }}
            >
              <div className="bb-dot-circle" />
              <div className="bb-dot-name">{beer.name}</div>
              <div className="bb-tooltip">
                <div className="bb-tooltip-name">{beer.tipName}</div>
                <div className="bb-tooltip-desc">{beer.tipDesc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bb-inner-grid { grid-template-columns: 1fr !important; }
          .bb-chart { max-width: 320px !important; margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}
