import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getLocation, getLocationSlugs } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import EmailSignup from '@/components/EmailSignup'
import { notFound } from 'next/navigation'

const locationImages: Record<string, string> = {
  newark: '/images/location-newark-hero.jpg',
  h2o: '/images/location-h2o-hero.jpg',
  exchange: '/images/hero-exchange-1.jpeg',
}

const locationFallback: Record<string, {
  name: string; heroHeadline: string; heroSubhead: string;
  tagline: string; addressLine1: string; addressLine2: string;
  descriptionShort: string; features: string[]; hours: string;
  accentColor: string; mapUrl: string;
}> = {
  newark: {
    name: 'Grain on Main',
    heroHeadline: 'Where It All Started',
    heroSubhead: 'Dog-friendly patio, weekly live music, and the full Beer Bible.',
    tagline: 'The original. Est. 2015.',
    addressLine1: '270 East Main Street',
    addressLine2: 'Newark, DE 19711',
    descriptionShort: 'Our original location. Dog-friendly patio, weekly live music, and free off-street parking.',
    features: ['Dogs Welcome', 'Live Music', 'Patio', 'Free Parking'],
    hours: 'Mon–Thu 11am–1am · Fri 11am–2am · Sat 10am–2am · Sun 10am–1am',
    accentColor: '#d4720e',
    mapUrl: 'https://maps.google.com',
  },
  h2o: {
    name: 'Grain H2O',
    heroHeadline: 'Drinks on the Water',
    heroSubhead: 'Stunning waterfront views, an outdoor stage built for full bands and a marina patio.',
    tagline: "Delaware's waterfront bar.",
    addressLine1: 'C+D Canal on the Castle Trail',
    addressLine2: 'Bear, DE',
    descriptionShort: 'Our neighborhood spot on the water. Stunning waterfront views, an outdoor stage built for full bands.',
    features: ['Dogs Welcome', 'Live Music', 'Waterfront', 'Outdoor Stage'],
    hours: 'Wed–Thu 3pm–11pm · Fri 3pm–12am · Sat 11am–12am · Sun 11am–9pm',
    accentColor: '#2d5a3d',
    mapUrl: 'https://maps.google.com',
  },
  exchange: {
    name: 'Grain Exchange',
    heroHeadline: "Newark's First Outdoor Patio in 30 Years",
    heroSubhead: 'Big city energy, a great lawn, and UD Athletics right across the street.',
    tagline: "Middletown's craft bar.",
    addressLine1: '591 Collaboration Way · STAR Campus',
    addressLine2: 'Newark, DE',
    descriptionShort: "Newark's first outdoor patio in 30 years. Big city energy, a great lawn, and UD Athletics right across the street.",
    features: ['Dogs Welcome', 'Live Music', 'Patio', 'Fire Features'],
    hours: 'Mon–Thu 11am–11pm · Fri 11am–1am · Sat 10am–1am · Sun 10am–10pm',
    accentColor: '#b03a18',
    mapUrl: 'https://maps.google.com',
  },
}

export async function generateStaticParams() {
  try {
    const slugs = await getLocationSlugs()
    return slugs
  } catch {
    return [{ slug: 'newark' }, { slug: 'h2o' }, { slug: 'exchange' }]
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const fallback = locationFallback[params.slug]
  const name = fallback?.name || 'Grain Location'
  return {
    title: `${name} — Grain Craft Bar + Kitchen`,
    description: fallback?.descriptionShort || 'Craft bar in Delaware.',
  }
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  if (!['newark', 'h2o', 'exchange'].includes(slug)) {
    notFound()
  }

  let location
  try {
    location = await getLocation(slug)
  } catch {
    location = null
  }

  const fallback = locationFallback[slug]
  const imgSrc = locationImages[slug]

  const name = location?.name || fallback.name
  const heroHeadline = location?.heroHeadline || fallback.heroHeadline
  const heroSubhead = location?.heroSubhead || fallback.heroSubhead
  const addressLine1 = location?.addressLine1 || fallback.addressLine1
  const addressLine2 = location?.addressLine2 || fallback.addressLine2
  const descriptionShort = location?.descriptionShort || fallback.descriptionShort
  const features = location?.features || fallback.features
  const accentColor = location?.accentColor || fallback.accentColor
  const mapUrl = location?.mapUrl || fallback.mapUrl

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: '70vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={name}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        )}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(18,12,4,1) 0%, rgba(18,12,4,.7) 40%, rgba(18,12,4,.2) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 52px 72px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: accentColor,
              color: '#fff',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '16px',
            }}
          >
            {slug === 'newark' ? 'Est. 2015 · The Original' : slug === 'h2o' ? 'Waterfront · Bear, DE' : 'STAR Campus · Newark'}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            {heroHeadline}
          </h1>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255,255,255,.7)',
              maxWidth: '600px',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            {heroSubhead}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '13px 28px',
                background: accentColor,
                color: '#fff',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              Get Directions
            </a>
            <Link
              href="/menus"
              style={{
                padding: '12px 28px',
                border: '2px solid rgba(255,255,255,.3)',
                color: '#fff',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              See Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section
        style={{
          background: 'var(--night)',
          padding: '64px 52px',
          borderBottom: '1px solid rgba(255,255,255,.06)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
          }}
          className="quick-info-grid"
        >
          <div>
            <h3
              style={{
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,114,14,.7)',
                marginBottom: '14px',
              }}
            >
              Address
            </h3>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', lineHeight: 1.6 }}>
              {addressLine1}
              <br />
              {addressLine2}
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--amber)',
                textDecoration: 'none',
              }}
            >
              Directions →
            </a>
          </div>

          <div>
            <h3
              style={{
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,114,14,.7)',
                marginBottom: '14px',
              }}
            >
              Hours
            </h3>
            {location?.hours ? (
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)', lineHeight: 1.8 }}>
                <PortableText value={location.hours as Parameters<typeof PortableText>[0]['value']} />
              </div>
            ) : (
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.7)', lineHeight: 1.8 }}>
                {fallback.hours}
              </p>
            )}
          </div>

          <div>
            <h3
              style={{
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,114,14,.7)',
                marginBottom: '14px',
              }}
            >
              Features
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {features.map((feat) => (
                <span
                  key={feat}
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: '20px',
                    background: `${accentColor}22`,
                    color: accentColor,
                    border: `1px solid ${accentColor}44`,
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .quick-info-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Description */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {location?.descriptionLong ? (
            <div
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                color: 'var(--text-mid)',
                fontFamily: 'var(--font-nunito), sans-serif',
              }}
            >
              <PortableText value={location.descriptionLong as Parameters<typeof PortableText>[0]['value']} />
            </div>
          ) : (
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.8,
                color: 'var(--text-mid)',
              }}
            >
              {descriptionShort}
            </p>
          )}
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </>
  )
}
