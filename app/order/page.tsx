import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Online — Grain Craft Bar + Kitchen',
  description: 'Order food and drinks online from any Grain location in Delaware. Pickup available at Newark, H2O on the C&D Canal, and Grain Exchange.',
}

const locations = [
  {
    slug: 'newark',
    name: 'Grain on Main',
    label: 'The Original · Est. 2015',
    address: '270 East Main Street · Newark, DE',
    orderUrl: 'https://www.toasttab.com/grain-on-main-270-e-main-st',
    accentColor: '#d4720e',
    img: '/images/location-newark-hero.jpg',
    hours: 'Mon–Thu 11am–1am · Fri 11am–2am · Sat 10am–2am · Sun 10am–1am',
    highlight: 'Free parking · Dog-friendly patio · Live music Saturdays',
  },
  {
    slug: 'h2o',
    name: 'Grain H2O',
    label: 'C&D Canal · Castle Trail',
    address: 'C&D Canal · New Castle County, DE',
    orderUrl: 'https://www.toasttab.com/grain-h2o-3006-summit-harbour-place',
    accentColor: '#2d5a3d',
    img: '/images/location-h2o-hero.jpg',
    hours: 'Wed–Thu 3–11pm · Fri 3pm–12am · Sat 11am–12am · Sun 11am–9pm',
    highlight: 'Waterfront patio · Outdoor stage · Sunday Funday brunch',
  },
  {
    slug: 'exchange',
    name: 'Grain Exchange',
    label: 'STAR Campus · Newark',
    address: '591 Collaboration Way · Newark, DE',
    orderUrl: 'https://order.toasttab.com/online/grain-new-executive-location-591-collaboration-way',
    accentColor: '#b03a18',
    img: '/images/hero-exchange-1.jpeg',
    hours: 'Mon–Thu 11am–11pm · Fri 11am–1am · Sat 10am–1am · Sun 10am–10pm',
    highlight: 'Kids eat free Saturdays · Wings Mondays · Trivia & bingo weekly',
  },
]

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--night)',
          padding: '100px 52px 72px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Decorative DE state silhouette watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            opacity: 0.035,
            fontSize: '420px',
            lineHeight: 1,
            fontFamily: 'var(--font-fraunces), serif',
            fontWeight: 900,
            color: '#fff',
            userSelect: 'none',
            letterSpacing: '-0.08em',
          }}
        >
          DE
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--amber)' }} />
            Three Locations
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--amber)' }} />
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(38px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            Order from
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}>
              your Grain.
            </em>
          </h1>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255,255,255,.55)',
              maxWidth: '500px',
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            Pick a location below. Pickup ready in 20–25 minutes.
            No fees. Same great food.
          </p>

          {/* Gift cards + merch links */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.toasttab.com/grain-craft-bar-kitchen/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '11px 22px',
                border: '1.5px solid rgba(255,255,255,.2)',
                color: 'rgba(255,255,255,.7)',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              🎁 Gift Cards
            </a>
            <a
              href="https://grain-craft-bar.printful.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '11px 22px',
                border: '1.5px solid rgba(255,255,255,.2)',
                color: 'rgba(255,255,255,.7)',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              👕 Shop Merch
            </a>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section style={{ background: 'var(--warm)', padding: '72px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="order-cards-grid"
        >
          {locations.map((loc, i) => (
            <div
              key={loc.slug}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 4px 24px rgba(30,20,10,.09)',
                display: 'flex',
                flexDirection: 'column',
                // Slight vertical offset to evoke a map/scatter feel
                marginTop: i === 1 ? '32px' : i === 2 ? '16px' : '0',
              }}
            >
              {/* Photo */}
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={loc.img}
                  alt={loc.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,.55))' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '16px',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.8)',
                    background: `${loc.accentColor}cc`,
                    padding: '4px 10px',
                    borderRadius: '20px',
                  }}
                >
                  {loc.label}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-soft)', marginBottom: '12px' }}>
                  {loc.address}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-soft)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {loc.hours}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    fontStyle: 'italic',
                    color: loc.accentColor,
                    marginBottom: '20px',
                    paddingLeft: '10px',
                    borderLeft: `3px solid ${loc.accentColor}`,
                    lineHeight: 1.5,
                  }}
                >
                  {loc.highlight}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '14px',
                      background: loc.accentColor,
                      color: '#fff',
                      fontFamily: 'var(--font-nunito), sans-serif',
                      fontSize: '14px',
                      fontWeight: 800,
                      letterSpacing: '0.03em',
                      textDecoration: 'none',
                      borderRadius: '6px',
                    }}
                  >
                    🛒 Order from {loc.name}
                  </a>
                  <Link
                    href={`/locations/${loc.slug}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '11px',
                      border: `1.5px solid ${loc.accentColor}55`,
                      color: loc.accentColor,
                      fontFamily: 'var(--font-nunito), sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      borderRadius: '6px',
                    }}
                  >
                    See what&apos;s on →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '52px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border-warm)',
          }}
        >
          <p style={{ fontSize: '15px', color: 'var(--text-soft)', marginBottom: '8px' }}>
            Questions about your order? Call the location directly.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {locations.map((loc) => (
              <div key={loc.slug} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: loc.accentColor, marginBottom: '2px' }}>{loc.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-mid)' }}>
                  {loc.slug === 'newark' ? '(302) 555-0100' : loc.slug === 'h2o' ? '(302) 555-0200' : '(302) 555-0300'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .order-cards-grid { grid-template-columns: 1fr !important; }
          .order-cards-grid > div { margin-top: 0 !important; }
        }
      `}</style>
    </>
  )
}
