'use client'

import { useState } from 'react'

const styles = [
  {
    id: 'lager',
    label: 'Lager',
    left: 52,
    top: 68,
    color: '#e8b820',
    emoji: '🍺',
    abv: '3.5–5%',
    tags: ['Crisp', 'Clean', 'Refreshing'],
    love: 'You want something cold and effortless',
  },
  {
    id: 'wheat',
    label: 'Wheat & Wit',
    left: 28,
    top: 30,
    color: '#f0a830',
    emoji: '🌾',
    abv: '4.5–5.5%',
    tags: ['Hazy', 'Citrus', 'Soft'],
    love: 'You liked Blue Moon or Allagash',
  },
  {
    id: 'pale',
    label: 'Pale Ale',
    left: 64,
    top: 46,
    color: '#d4720e',
    emoji: '🍊',
    abv: '4.5–5.5%',
    tags: ['Balanced', 'Hoppy', 'Easy'],
    love: 'You want something a step above a lager',
  },
  {
    id: 'neipa',
    label: 'New England IPA',
    left: 77,
    top: 18,
    color: '#e8a020',
    emoji: '🍍',
    abv: '6–8%',
    tags: ['Tropical', 'Juicy', 'Hazy'],
    love: 'You want big flavor without sharp bitterness',
  },
  {
    id: 'wcipa',
    label: 'West Coast IPA',
    left: 88,
    top: 36,
    color: '#c75a08',
    emoji: '🌲',
    abv: '6–7.5%',
    tags: ['Piney', 'Citrus', 'Dry'],
    love: 'You like a clean, pronounced bitter finish',
  },
  {
    id: 'amber',
    label: 'Amber / Märzen',
    left: 26,
    top: 56,
    color: '#a04010',
    emoji: '🍂',
    abv: '4.8–5.5%',
    tags: ['Toasty', 'Caramel', 'Malt-forward'],
    love: 'You want something warm and familiar',
  },
  {
    id: 'sour',
    label: 'Sour / Gose',
    left: 50,
    top: 10,
    color: '#6aaa30',
    emoji: '🍋',
    abv: '3.5–5%',
    tags: ['Tart', 'Fruity', 'Bright'],
    love: 'You like kombucha or dry rosé',
  },
  {
    id: 'porter',
    label: 'Porter & Stout',
    left: 18,
    top: 82,
    color: '#5a3520',
    emoji: '☕',
    abv: '4.2–9%',
    tags: ['Roasty', 'Chocolate', 'Dark'],
    love: 'You like coffee or dark chocolate',
  },
]

export default function BeerBible() {
  const [active, setActive] = useState<number | null>(null)

  const activeBeer = active !== null ? styles[active] : null

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
          gap: '64px',
          alignItems: 'center',
          minWidth: 0, // prevent grid blowout
        }}
        className="bb-inner-grid"
      >
        {/* Left: text + active beer card */}
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
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--amber)' }} />
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
            Know what you like.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}>
              Discover what&apos;s next to it.
            </em>
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-mid)',
              marginBottom: '14px',
            }}
          >
            Every location keeps its own Beer Bible — a rotating tap list that&apos;s always
            changing. Stop in and see what&apos;s on.
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-mid)',
              marginBottom: '32px',
            }}
          >
            Find a style you know you love on the chart, then explore the beers around it.
            Your bartender will do the rest. Tasters are always free to ask for.
          </p>

          {/* Active beer detail card */}
          <div
            style={{
              minHeight: '140px',
              borderRadius: '12px',
              padding: '24px',
              background: activeBeer ? '#fff' : 'rgba(30,20,10,.04)',
              border: activeBeer ? '1.5px solid rgba(212,114,14,.2)' : '1.5px dashed rgba(30,20,10,.12)',
              transition: 'background .3s, border-color .3s',
            }}
          >
            {activeBeer ? (
              <div style={{ animation: 'bbFadeIn .2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '28px' }}>{activeBeer.emoji}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-fraunces), serif',
                        fontSize: '22px',
                        fontWeight: 700,
                        color: 'var(--night)',
                        lineHeight: 1.1,
                      }}
                    >
                      {activeBeer.label}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--amber)',
                        letterSpacing: '0.05em',
                        marginTop: '2px',
                      }}
                    >
                      Typically {activeBeer.abv} ABV
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {activeBeer.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        background: 'rgba(212,114,14,.1)',
                        color: 'var(--amber)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: 'var(--text-soft)',
                    borderLeft: '3px solid var(--amber)',
                    paddingLeft: '12px',
                    lineHeight: 1.5,
                  }}
                >
                  {activeBeer.love}
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'var(--text-soft)',
                  textAlign: 'center',
                  gap: '8px',
                  padding: '16px 0',
                }}
              >
                <span style={{ fontSize: '24px', opacity: 0.4 }}>👈</span>
                <span style={{ fontSize: '13px', fontWeight: 600, opacity: 0.5 }}>
                  Hover a dot to explore beer styles
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: flavor chart — inline sizing guarantees square in any layout context */}
        <div
          className="bb-chart"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '460px',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            alignSelf: 'center',
          }}
        >
          <div className="bb-area" />
          <div className="bb-axis-h" />
          <div className="bb-axis-v" />
          <div className="bb-label top">Fruitier</div>
          <div className="bb-label bottom">Maltier</div>
          <div className="bb-label left">Lighter</div>
          <div className="bb-label right">Bolder</div>

          {styles.map((beer, i) => (
            <div
              key={beer.id}
              className="bb-dot"
              style={{ left: `${beer.left}%`, top: `${beer.top}%` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Pulse ring */}
              <div
                className={active === i ? 'bb-pulse bb-pulse-active' : 'bb-pulse'}
                style={{ borderColor: beer.color }}
              />
              {/* Dot */}
              <div
                className="bb-dot-circle"
                style={{
                  background: beer.color,
                  transform: active === i ? 'scale(1.5)' : 'scale(1)',
                  boxShadow: active === i ? `0 0 0 4px ${beer.color}33` : 'none',
                }}
              />
              {/* Label */}
              <div
                className="bb-dot-name"
                style={{
                  opacity: active === i ? 1 : 0.55,
                  fontWeight: active === i ? 800 : 600,
                  transform: active === i ? 'translateY(2px)' : 'none',
                  color: active === i ? 'var(--night)' : undefined,
                }}
              >
                {beer.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bbFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bbPulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: .6; }
          100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; }
        }
        .bb-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0;
          pointer-events: none;
        }
        .bb-pulse-active {
          animation: bbPulse .8s ease-out infinite;
        }
        .bb-dot-circle {
          transition: transform .25s, box-shadow .25s;
        }
        .bb-dot-name {
          transition: opacity .2s, font-weight .2s;
        }
        @media (max-width: 900px) {
          .bb-inner-grid { grid-template-columns: 1fr !important; }
          .bb-chart { max-width: 320px !important; margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}
