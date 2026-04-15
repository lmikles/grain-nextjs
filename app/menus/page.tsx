import { Metadata } from 'next'
import Link from 'next/link'
import BeerBible from '@/components/BeerBible'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Food & Drink Menus — Grain Delaware',
  description: 'View the full Grain menu. No sales tax. No credit card fees. Just the price on the menu.',
}

const locationMenus = [
  {
    slug: 'newark',
    name: 'Grain on Main',
    subtitle: '270 East Main Street · Newark',
    accent: '#d4720e',
    menuUrl: '#',
    orderUrl: '#',
  },
  {
    slug: 'h2o',
    name: 'Grain H2O',
    subtitle: 'C+D Canal · Bear, DE',
    accent: '#2d5a3d',
    menuUrl: '#',
    orderUrl: '#',
  },
  {
    slug: 'exchange',
    name: 'Grain Exchange',
    subtitle: 'STAR Campus · Newark',
    accent: '#b03a18',
    menuUrl: '#',
    orderUrl: '#',
  },
]

export default function MenusPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--night)',
          padding: '160px 52px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(212,114,14,.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '16px',
            }}
          >
            FOOD & DRINK
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '20px',
            }}
          >
            Real food.
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              Great drinks.
            </em>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,.55)',
              lineHeight: 1.7,
              marginBottom: '12px',
            }}
          >
            Made from scratch. Ordered by regulars.
          </p>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--orange)',
              background: 'rgba(212,114,14,.12)',
              border: '1px solid rgba(212,114,14,.25)',
              padding: '8px 16px',
              borderRadius: '20px',
            }}
          >
            ✓ No sales tax · No credit card fees · Just the price on the menu
          </p>
        </div>
      </section>

      {/* Location Menu Cards */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="menu-cards-grid"
        >
          {locationMenus.map((loc) => (
            <div
              key={loc.slug}
              style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                overflow: 'hidden',
                borderTop: `4px solid ${loc.accent}`,
              }}
            >
              <div style={{ padding: '32px 28px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--night)',
                    marginBottom: '6px',
                  }}
                >
                  {loc.name}
                </h2>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-soft)',
                    marginBottom: '28px',
                  }}
                >
                  {loc.subtitle}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                  <a
                    href={loc.menuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '13px 20px',
                      background: loc.accent,
                      color: '#fff',
                      fontFamily: 'var(--font-nunito), sans-serif',
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      textAlign: 'center',
                    }}
                  >
                    View Full Menu
                  </a>
                  <a
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      border: `2px solid ${loc.accent}`,
                      color: loc.accent,
                      fontFamily: 'var(--font-nunito), sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      borderRadius: '6px',
                      textAlign: 'center',
                    }}
                  >
                    Order Online →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .menu-cards-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Beer Bible */}
      <BeerBible />

      {/* Pricing note */}
      <div
        style={{
          background: 'var(--night)',
          padding: '48px 52px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'rgba(255,255,255,.5)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          We don&apos;t charge sales tax. We don&apos;t charge credit card fees. The price
          on the menu is the price you pay.{' '}
          <span style={{ color: 'var(--amber)' }}>That&apos;s it.</span>
        </p>
        <a
          href="https://grain.bigcartel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 28px',
            background: 'rgba(212,114,14,.2)',
            border: '1px solid rgba(212,114,14,.4)',
            color: 'var(--orange)',
            fontFamily: 'var(--font-nunito), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
            borderRadius: '6px',
          }}
        >
          🎁 Buy a Gift Card →
        </a>
      </div>

      <EmailSignup />
    </>
  )
}
