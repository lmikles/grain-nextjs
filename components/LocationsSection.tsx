'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Location } from '@/lib/sanity'
import { GrainEvent } from '@/lib/events'

const locationImages: Record<string, string> = {
  newark: '/images/location-newark-hero.jpg',
  h2o: '/images/location-h2o-hero.jpg',
  exchange: '/images/hero-exchange-1.jpeg',
}

// Photo gallery images per location
// Drop photos into /public/images/locations/[slug]/photo-1.jpg, photo-2.jpg, etc.
const galleryImages: Record<string, string[]> = {
  newark: [
    '/images/location-newark.jpg',
    '/images/community-event-1.jpg',
  ],
  h2o: [
    '/images/location-h2o.jpg',
  ],
  exchange: [
    '/images/location-exchange.jpg',
    '/images/location-exchange-hero.jpg',
  ],
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

const EVENT_ICONS: Record<string, string> = {
  music: '🎵',
  special: '⭐',
  games: '🎯',
  general: '📅',
  static: '🕐',
}

function formatEventDate(dateStr?: string): string {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr + 'T12:00:00')
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  } catch {
    return dateStr
  }
}

const fallbackLocations: Location[] = [
  {
    _id: 'newark',
    name: 'Grain on Main',
    slug: { current: 'newark' },
    tagline: 'The original. Est. 2015.',
    addressLine1: '270 East Main Street',
    addressLine2: 'Newark, DE',
    descriptionShort: 'The flagship. Main Street energy, a fire pit patio, and live music every Saturday.',
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
    tagline: "Newark's craft bar.",
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
  events?: GrainEvent[]
}

export default function LocationsSection({ locations, events = [] }: LocationsSectionProps) {
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
          gap: '24px',
        }}
        className="loc-cards-grid"
      >
        {displayLocations.map((loc) => {
          const slug = loc.slug?.current || loc._id
          const imgSrc = locationImages[slug]
          const style = locationStyles[slug]
          const photos = galleryImages[slug] || []

          // Events for this location — next 3
          const locEvents = events
            .filter((e) => e.location === slug)
            .slice(0, 3)

          return (
            <div
              key={loc._id}
              style={{
                background: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 16px rgba(30,20,10,.07)',
                transition: 'transform .3s, box-shadow .3s',
              }}
              className="loc-card"
            >
              {/* Hero image */}
              <Link href={`/locations/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
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
                      style={{ objectFit: 'cover', transition: 'transform .5s ease' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="loc-hero-img"
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
                      background: 'linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.5) 100%)',
                    }}
                  />
                  {loc.badgeLabel && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(0,0,0,.45)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '16px',
                        padding: '5px 12px',
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,.88)',
                      }}
                    >
                      {loc.badgeLabel}
                    </div>
                  )}
                  {/* Location name overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '16px',
                      right: '16px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-fraunces), serif',
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#fff',
                        textShadow: '0 2px 8px rgba(0,0,0,.4)',
                        lineHeight: 1.1,
                      }}
                    >
                      {loc.name}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,.7)',
                        marginTop: '3px',
                      }}
                    >
                      {loc.addressLine1}{loc.addressLine2 ? ` · ${loc.addressLine2}` : ''}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Photo strip (if extra photos) */}
              {photos.length > 0 && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(photos.length, 3)}, 1fr)`,
                    gap: '2px',
                    height: '72px',
                  }}
                >
                  {photos.slice(0, 3).map((src, i) => (
                    <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                      <Image
                        src={src}
                        alt=""
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 33vw, 11vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Card body */}
              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {loc.descriptionShort && (
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: 'var(--text-mid)',
                      marginBottom: '14px',
                    }}
                  >
                    {loc.descriptionShort}
                  </p>
                )}
                {loc.features && loc.features.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                      flexWrap: 'wrap',
                      marginBottom: '18px',
                    }}
                  >
                    {loc.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 9px',
                          borderRadius: '12px',
                          background: 'rgba(212,114,14,.09)',
                          color: 'var(--amber)',
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Upcoming events for this location */}
                <div
                  style={{
                    borderTop: '1px solid rgba(30,20,10,.08)',
                    paddingTop: '16px',
                    marginTop: 'auto',
                  }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--amber)',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ display: 'block', width: '16px', height: '1.5px', background: 'var(--amber)' }} />
                    Up Next
                  </div>

                  {locEvents.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {locEvents.map((ev) => (
                        <div
                          key={ev.id}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                          }}
                        >
                          <span style={{ fontSize: '14px', lineHeight: 1, paddingTop: '1px' }}>
                            {EVENT_ICONS[ev.type || 'general'] || '📅'}
                          </span>
                          <div>
                            <div
                              style={{
                                fontSize: '13px',
                                fontWeight: 700,
                                color: 'var(--night)',
                                lineHeight: 1.2,
                              }}
                            >
                              {ev.title}
                            </div>
                            <div
                              style={{
                                fontSize: '11px',
                                color: 'var(--text-soft)',
                                marginTop: '2px',
                              }}
                            >
                              {ev.date ? formatEventDate(ev.date) : ''}
                              {ev.time && ev.time !== 'All Day' ? ` · ${ev.time}` : ''}
                              {ev.freeAdmission ? ' · Free' : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p
                      style={{
                        fontSize: '12px',
                        fontStyle: 'italic',
                        color: 'var(--text-soft)',
                      }}
                    >
                      Check back soon — events added weekly.
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/locations/${slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: '16px',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: 'var(--amber)',
                    textDecoration: 'none',
                  }}
                >
                  See full schedule →
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <p
        style={{
          marginTop: '28px',
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
        .loc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(30,20,10,.13) !important;
        }
        .loc-card:hover .loc-hero-img {
          transform: scale(1.04);
        }
        @media (max-width: 1100px) {
          .loc-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
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
