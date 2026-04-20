'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Location } from '@/lib/sanity'

const locationImages: Record<string, string> = {
  newark: '/images/location-newark-hero.jpg',
  h2o: '/images/location-h2o-hero.jpg',
  exchange: '/images/hero-exchange-1.jpeg',
}

const locationStyles: Record<string, { bg: string }> = {
  newark: {
    bg: `radial-gradient(ellipse 80% 60% at 55% 25%,rgba(212,114,14,.45) 0%,transparent 58%),
         radial-gradient(ellipse 60% 70% at 10% 75%,rgba(180,60,20,.3) 0%,transparent 55%),
         linear-gradient(155deg,#4a2a10,#2a1408,#180c04)`,
  },
  h2o: {
    bg: `radial-gradient(ellipse 80% 60% at 40% 20%,rgba(45,90,61,.5) 0%,transparent 55%),
         radial-gradient(ellipse 60% 70% at 85% 70%,rgba(26,92,88,.4) 0%,transparent 52%),
         linear-gradient(155deg,#0e2818,#081c14,#041008)`,
  },
  exchange: {
    bg: `radial-gradient(ellipse 80% 60% at 50% 20%,rgba(100,65,20,.5) 0%,transparent 55%),
         radial-gradient(ellipse 60% 70% at 15% 75%,rgba(80,45,15,.3) 0%,transparent 52%),
         linear-gradient(155deg,#32200a,#201408,#140c04)`,
  },
}

const fallbackLocations: Location[] = [
  {
    _id: 'newark',
    name: 'Newark',
    slug: { current: 'newark' },
    tagline: 'The original. Est. 2015.',
    addressLine1: '270 East Main Street',
    addressLine2: 'Newark, DE',
    descriptionShort: 'The flagship. Main Street energy, a fire pit patio that keeps going after sundown, and live music every Saturday.',
    features: ['Fire Pit Patio', 'Live Music Sat', 'Dog Friendly', 'Free Parking'],
    badgeLabel: 'Est. 2015 · The Original',
    accentColor: '#d4720e',
  },
  {
    _id: 'h2o',
    name: 'Grain H2O',
    slug: { current: 'h2o' },
    tagline: "Delaware's waterfront bar.",
    addressLine1: 'C+D Canal on the Castle Trail',
    addressLine2: 'Wilmington, DE',
    descriptionShort: "On the C&D Canal. An outdoor stage built for full bands and a marina patio that makes you forget tomorrow exists.",
    features: ['Marina View', 'Live Music Fri–Sun', 'Outdoor Stage', 'Sunday Funday'],
    badgeLabel: 'Waterfront · Wilmington',
    accentColor: '#2d5a3d',
  },
  {
    _id: 'exchange',
    name: 'Grain Exchange',
    slug: { current: 'exchange' },
    tagline: "Middletown's craft bar.",
    addressLine1: 'STAR Campus',
    addressLine2: 'Newark, DE',
    descriptionShort: "Newark's first outdoor patio in 30 years. Big city energy, a great lawn, and UD Athletics right across the street.",
    features: ['Indoor/Outdoor Bar', 'Live Music', 'UD Game Days', 'Kids Eat Free Sat'],
    badgeLabel: 'STAR Campus · Newark',
    accentColor: '#b03a18',
  },
]

interface LocationsSectionProps {
  locations: Location[]
}

export default function LocationsSection({ locations }: LocationsSectionProps) {
  const displayLocations = locations.length > 0 ? locations : fallbackLocations

  return (
    <section
      style={{
        background: 'var(--warm)',
        padding: '104px 52px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'end',
          marginBottom: '56px',
        }}
        className="loc-head-grid"
      >
        <div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '14px',
            }}
          >
            WHERE TO FIND US
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: 'var(--night)',
            }}
          >
            Find Your Grain
          </h2>
        </div>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--text-mid)',
            paddingTop: '28px',
            borderTop: '2px solid var(--border-warm)',
          }}
        >
          Each location has its own vibe. All three have the food, the drinks, the Grain
          Way — and a patio your dog will love.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
        className="loc-cards-grid"
      >
        {displayLocations.map((loc) => {
          const slug = loc.slug?.current || loc._id
          const imgSrc = locationImages[slug]
          const style = locationStyles[slug]

          return (
            <Link
              key={loc._id}
              href={`/locations/${slug}`}
              style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'block',
                transition: 'transform .35s, box-shadow .35s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-8px)'
                el.style.boxShadow = '0 20px 52px rgba(30,20,10,.15)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Card top image */}
              <div
                style={{
                  height: '220px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={loc.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: style?.bg || 'var(--night)',
                    }}
                  />
                )}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,.45) 100%)',
                  }}
                />
                {loc.badgeLabel && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(255,255,255,.12)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '5px 12px',
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,.85)',
                    }}
                  >
                    {loc.badgeLabel}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: '24px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '26px',
                    fontWeight: 700,
                    color: 'var(--night)',
                    marginBottom: '6px',
                  }}
                >
                  {loc.name}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-soft)',
                    marginBottom: '12px',
                  }}
                >
                  {loc.addressLine1}
                  {loc.addressLine2 ? ` · ${loc.addressLine2}` : ''}
                </div>
                {loc.descriptionShort && (
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: 'var(--text-mid)',
                      marginBottom: '20px',
                    }}
                  >
                    {loc.descriptionShort}
                  </p>
                )}
                {loc.features && loc.features.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginBottom: '20px',
                    }}
                  >
                    {loc.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '12px',
                          background: 'rgba(212,114,14,.1)',
                          color: 'var(--amber)',
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: 'var(--amber)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  See this location →
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <p
        style={{
          marginTop: '24px',
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: 'var(--text-soft)',
        }}
      >
        Also in Delaware:{' '}
        <a href="#" style={{ color: 'var(--amber)', textDecoration: 'none' }}>
          Grain On The Rocks
        </a>{' '}
        in Lewes — independently owned and operated.
      </p>

      <style>{`
        @media (max-width: 900px) {
          .loc-head-grid { grid-template-columns: 1fr !important; }
          .loc-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  )
}
