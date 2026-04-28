import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getLocation, getLocationSlugs } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import EmailSignup from '@/components/EmailSignup'
import { notFound } from 'next/navigation'
import { fetchWeather, fetchEvents } from '@/lib/events'

// ─── Per-location config (update ordering URLs when you have them) ─────────
const locationConfig: Record<string, {
  name: string
  heroHeadline: string
  heroSubhead: string
  tagline: string
  addressLine1: string
  addressLine2: string
  phone: string
  email: string
  googleMapsUrl: string
  descriptionShort: string
  descriptionLong: string
  features: string[]
  hours: { days: string; time: string }[]
  accentColor: string
  orderUrl: string
  giftCardUrl: string
  merchUrl: string
  weeklyEvents: { day: string; time: string; name: string; desc: string; icon: string }[]
  dogCopy: string
  parking: string
  instagram: string
  instagramUrl: string
  facebook: string
  facebookUrl: string
  extraNote?: string
}> = {
  newark: {
    name: 'Grain on Main',
    heroHeadline: 'Where It All Started',
    heroSubhead: 'Dog-friendly fire pit patio, weekly live music, and free parking on Main Street.',
    tagline: 'The original. Est. 2015.',
    addressLine1: '270 East Main Street',
    addressLine2: 'Newark, DE 19711',
    phone: '(302) 444-8646',
    email: 'info@grainonmain.com',
    googleMapsUrl: 'https://maps.google.com/?q=Grain+Craft+Bar+Kitchen+Newark+DE',
    descriptionShort: 'Our original location. Dog-friendly patio, weekly live music, and free off-street parking.',
    descriptionLong: `Grain on Main opened on East Main Street in 2015 with a simple idea: Newark deserved a craft bar that felt like it belonged to the neighborhood. Ten years later it still does. The fire pit patio runs all season, dogs are always welcome, and the live music never has a cover charge. We hire people who actually like people — and it shows every night of the week.`,
    features: ['🐶 Dogs Welcome', '🎵 Live Music Sat', '🍳 Weekend Brunch', '🅿️ Free Parking', '🍺 Happy Hour'],
    hours: [
      { days: 'Mon–Thu', time: '11am – 1am' },
      { days: 'Friday', time: '11am – 2am' },
      { days: 'Saturday', time: '10am – 2am' },
      { days: 'Sunday', time: '10am – 1am' },
    ],
    accentColor: '#d4720e',
    orderUrl: 'https://www.toasttab.com/grain-on-main-270-e-main-st',
    giftCardUrl: 'https://www.toasttab.com/grain-craft-bar-kitchen/giftcards',
    merchUrl: 'https://grain-craft-bar.printful.me',
    weeklyEvents: [
      { day: 'Mon–Fri', time: '4–7pm', name: 'Happy Hour', desc: '$1 off all drafts, well drinks & select apps. Best deal on Main Street.', icon: '🍺' },
      { day: 'Tuesday', time: '7pm', name: 'Trivia Night', desc: 'Teams of 2–6. Free to play. Prizes every week.', icon: '🧠' },
      { day: 'Saturday', time: '7pm', name: 'Live Music', desc: 'Local and regional acts. Free, no cover. Ever.', icon: '🎵' },
      { day: 'Sat & Sun', time: '10am–2pm', name: 'Weekend Brunch', desc: 'Full brunch menu + mimosas and Bloody Marys.', icon: '🍳' },
    ],
    dogCopy: 'Dogs have been regulars on our Main Street patio since day one. Fresh water is always out. Your dog is genuinely welcome — not just technically tolerated.',
    parking: 'Free off-street parking behind the building. Never stress about parking on a Saturday night.',
    instagram: '@grainksq',
    instagramUrl: 'https://www.instagram.com/grainksq/',
    facebook: 'grainksq',
    facebookUrl: 'https://www.facebook.com/grainksq',
  },
  h2o: {
    name: 'Grain H2O',
    heroHeadline: 'Drinks on the Water',
    heroSubhead: 'On the C&D Canal. An outdoor stage, a marina patio, and the best view in Delaware.',
    tagline: "Delaware's waterfront craft bar.",
    addressLine1: 'C&D Canal · Castle Trail',
    addressLine2: 'New Castle County, DE',
    phone: '(302) 440-4404',
    email: 'H2O@GrainOnMain.com',
    googleMapsUrl: 'https://maps.google.com/?q=Grain+H2O+Delaware',
    descriptionShort: 'On the C&D Canal on the Castle Trail. An outdoor stage built for full bands and a marina patio that makes you forget tomorrow exists.',
    descriptionLong: `Grain H2O sits right on the C&D Canal along the Castle Trail — one of the most scenic spots in Delaware for a cold drink on a warm night. Our outdoor stage was built for full bands, not acoustic solos. The marina patio is dog-friendly. Sunday Funday brunch is a religion here. If you've only been to our Newark location, you haven't seen what we're capable of.`,
    features: ['🐶 Dogs Welcome', '🎵 Live Music Fri–Sun', '🌊 Waterfront', '🎤 Outdoor Stage', '🍳 Sunday Brunch'],
    hours: [
      { days: 'Wed–Thu', time: '3pm – 11pm' },
      { days: 'Friday', time: '3pm – 12am' },
      { days: 'Saturday', time: '11am – 12am' },
      { days: 'Sunday', time: '11am – 9pm' },
    ],
    accentColor: '#2d5a3d',
    orderUrl: 'https://www.toasttab.com/grain-h2o-3006-summit-harbour-place',
    giftCardUrl: 'https://www.toasttab.com/grain-craft-bar-kitchen/giftcards',
    merchUrl: 'https://grain-craft-bar.printful.me',
    weeklyEvents: [
      { day: 'Wed–Fri', time: '4–7pm', name: 'Happy Hour', desc: '$1 off all drafts, well drinks & select apps.', icon: '🍺' },
      { day: 'Friday', time: '6pm', name: 'Live Music', desc: 'On the outdoor waterfront stage. No cover.', icon: '🎵' },
      { day: 'Saturday', time: '7pm', name: 'Live Music', desc: 'Full band nights under the open sky. No cover.', icon: '🎸' },
      { day: 'Sunday', time: '11am–2pm', name: 'Brunch + Music', desc: 'Sunday Funday on the canal. Full brunch menu.', icon: '🍳' },
    ],
    dogCopy: 'The marina patio is fully dog-friendly. Water bowls are always out. A canal-side patio with your dog and a cold drink — it doesn\'t get more Delaware than this.',
    parking: 'Free parking at the trailhead. Easy walk to the patio along the Castle Trail.',
    instagram: '@h2ograin',
    instagramUrl: 'https://www.instagram.com/h2ograin/',
    facebook: 'h2ograin',
    facebookUrl: 'https://www.facebook.com/h2ograin/',
    extraNote: 'Transient boat slips available at Dock G for dining guests.',
  },
  exchange: {
    name: 'Grain Exchange',
    heroHeadline: "Newark's First Outdoor Patio in 30 Years",
    heroSubhead: 'Big energy, a great lawn, fire features, and UD Athletics right across the street.',
    tagline: 'STAR Campus · Newark, DE',
    addressLine1: '591 Collaboration Way',
    addressLine2: 'Newark, DE 19713 · STAR Campus',
    phone: '(302) 722-2307',
    email: 'Exchange@GrainOnMain.com',
    googleMapsUrl: 'https://maps.google.com/?q=Grain+Exchange+STAR+Campus+Newark+DE',
    descriptionShort: "Newark's first outdoor patio in 30 years. Big city energy, a great lawn, and UD Athletics right across the street.",
    descriptionLong: `Grain Exchange brought something Newark hadn't seen in decades: a real outdoor patio experience. On STAR Campus, right across from UD Athletics, it's the spot for game day crowds and quiet Tuesday nights alike. The indoor/outdoor bar transitions seamlessly. Every Saturday kids eat free. And the weekly lineup — bingo, trivia, wings, music — gives regulars a reason to come back every single night of the week.`,
    features: ['🐶 Dogs Welcome', '🎵 Live Music', '🏟️ UD Game Days', '🔥 Fire Features', '👶 Kids Eat Free Sat'],
    hours: [
      { days: 'Mon–Thu', time: '11am – 11pm' },
      { days: 'Friday', time: '11am – 1am' },
      { days: 'Saturday', time: '10am – 1am' },
      { days: 'Sunday', time: '10am – 10pm' },
    ],
    accentColor: '#b03a18',
    orderUrl: 'https://order.toasttab.com/online/grain-new-executive-location-591-collaboration-way',
    giftCardUrl: 'https://www.toasttab.com/grain-craft-bar-kitchen/giftcards',
    merchUrl: 'https://grain-craft-bar.printful.me',
    weeklyEvents: [
      { day: 'Mon–Fri', time: '4–7pm', name: 'Happy Hour', desc: '$1 off drafts, well drinks & select apps. All week.', icon: '🍺' },
      { day: 'Monday', time: '4pm–close', name: 'All You Can Eat Wings', desc: '$15. Unlimited. Every Monday. No tricks.', icon: '🍗' },
      { day: 'Tuesday', time: '7pm', name: 'Bingo Night', desc: 'Free to play. Real prizes. Hosted live.', icon: '🎱' },
      { day: 'Thursday', time: '7pm', name: 'Trivia Night', desc: 'Teams of 2–6. Free. Come ready.', icon: '🧠' },
      { day: 'Saturday', time: 'All day', name: 'Kids Eat Free', desc: 'Every Saturday. Kids 12 & under. No minimum.', icon: '👶' },
      { day: 'Saturday', time: '7pm', name: 'Live Music', desc: 'Local and regional acts. Free, no cover.', icon: '🎵' },
      { day: 'Sat & Sun', time: '10am–2pm', name: 'Weekend Brunch', desc: 'Full brunch menu + bottomless mimosas.', icon: '🍳' },
    ],
    dogCopy: 'The lawn and patio are dog territory. We\'ve got water, shade, and space. Bring the dog, grab a patio table, and settle in.',
    parking: 'Ample free parking on the STAR Campus. No stress, even on game days.',
    instagram: '@grainxchg',
    instagramUrl: 'https://www.instagram.com/grainxchg/',
    facebook: 'grainstarcampus',
    facebookUrl: 'https://www.facebook.com/grainstarcampus/',
    extraNote: 'Coffee Shop open Mon–Fri 8am–2pm.',
  },
}

const locationImages: Record<string, string> = {
  newark: '/images/location-newark-hero.jpg',
  h2o: '/images/location-h2o-hero.jpg',
  exchange: '/images/hero-exchange-1.jpeg',
}

const galleryImages: Record<string, string[]> = {
  newark: [
    '/images/locations/newark/exterior-day.jpg',
    '/images/locations/newark/patio-night.jpg',
    '/images/location-newark.jpg',
    '/images/food-patio.jpg',
  ],
  h2o: [
    '/images/locations/h2o/waterfront.jpg',
    '/images/locations/h2o/stage.jpg',
    '/images/location-h2o.jpg',
  ],
  exchange: [
    '/images/locations/exchange/exterior.jpeg',
    '/images/locations/exchange/lawn.jpeg',
    '/images/location-exchange.jpg',
  ],
}

const dogPhotos: Record<string, string> = {
  newark: '/images/locations/newark/dog-patio.jpg',
  h2o: '/images/locations/h2o/dog-patio.jpg',
  exchange: '/images/locations/exchange/dog-patio.jpg',
}

// ─── Static params & metadata ───────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await getLocationSlugs()
    return slugs
  } catch {
    return [{ slug: 'newark' }, { slug: 'h2o' }, { slug: 'exchange' }]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cfg = locationConfig[params.slug]
  if (!cfg) return {}
  return {
    title: `${cfg.name} — Grain Craft Bar + Kitchen`,
    description: cfg.descriptionShort,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  if (!['newark', 'h2o', 'exchange'].includes(slug)) notFound()

  const cfg = locationConfig[slug]
  const imgSrc = locationImages[slug]
  const gallery = galleryImages[slug] || []
  const dogPhoto = dogPhotos[slug]

  // Fetch CMS override + live data in parallel
  const [location, weather, events] = await Promise.all([
    getLocation(slug).catch(() => null),
    fetchWeather().catch(() => null),
    fetchEvents(slug).catch(() => []),
  ])

  const name = location?.name || cfg.name
  const heroHeadline = location?.heroHeadline || cfg.heroHeadline
  const heroSubhead = location?.heroSubhead || cfg.heroSubhead

  const showPatio = weather?.showPatioBadge && weather?.day
  const upcomingEvents = events.slice(0, 4)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ minHeight: '80vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {imgSrc && (
          <Image src={imgSrc} alt={name} fill priority style={{ objectFit: 'cover' }} sizes="100vw" />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,6,2,1) 0%, rgba(10,6,2,.65) 40%, rgba(10,6,2,.15) 100%)' }} />

        {/* Patio weather badge */}
        {showPatio && (
          <div style={{ position: 'absolute', top: '32px', right: '52px', background: 'rgba(212,114,14,.9)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: '12px', fontWeight: 800, padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ☀️ {weather!.message}
          </div>
        )}

        <div style={{ position: 'relative', zIndex: 2, padding: '0 52px 72px' }}>
          {/* Badge */}
          <div style={{ display: 'inline-block', background: cfg.accentColor, color: '#fff', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '20px', marginBottom: '16px' }}>
            {slug === 'newark' ? 'Est. 2015 · The Original' : slug === 'h2o' ? 'C&D Canal · Castle Trail' : 'STAR Campus · Newark'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, lineHeight: 0.95, color: '#fff', marginBottom: '16px' }}>
            {heroHeadline}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 400, color: 'rgba(255,255,255,.75)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '32px' }}>
            {heroSubhead}
          </p>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={cfg.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '14px 28px', background: cfg.accentColor, color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              🛒 Order Online
            </a>
            <a
              href={cfg.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.35)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
            >
              📍 Directions
            </a>
            <Link
              href={`/menus#${slug}`}
              style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.35)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
            >
              🍽 Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Info Bar ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--night)', padding: '52px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }} className="loc-info-grid">

          <div>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: `${cfg.accentColor}bb`, marginBottom: '12px' }}>Address</div>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#fff', lineHeight: 1.6, marginBottom: '8px' }}>
              {cfg.addressLine1}<br />{cfg.addressLine2}
            </p>
            <a href={cfg.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 700, color: cfg.accentColor, textDecoration: 'none' }}>Get Directions →</a>
          </div>

          <div>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: `${cfg.accentColor}bb`, marginBottom: '12px' }}>Hours</div>
            {cfg.hours.map((h) => (
              <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '5px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,.5)' }}>{h.days}</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{h.time}</span>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: `${cfg.accentColor}bb`, marginBottom: '12px' }}>Call / Park</div>
            <a href={`tel:${cfg.phone.replace(/\D/g, '')}`} style={{ display: 'block', fontSize: '17px', fontWeight: 800, color: '#fff', textDecoration: 'none', marginBottom: '10px', letterSpacing: '0.02em' }}>
              {cfg.phone}
            </a>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>{cfg.parking}</p>
          </div>

          <div>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: `${cfg.accentColor}bb`, marginBottom: '12px' }}>This Location</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {cfg.features.map((feat) => (
                <span key={feat} style={{ fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: `${cfg.accentColor}22`, color: cfg.accentColor, border: `1px solid ${cfg.accentColor}44` }}>
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`.loc-info-grid { } @media (max-width: 900px) { .loc-info-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } } @media (max-width: 600px) { .loc-info-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Order + Commerce Strip ───────────────────────────────────── */}
      <section style={{ background: cfg.accentColor, padding: '28px 52px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '22px', fontWeight: 700, color: '#fff', margin: 0 }}>
            Ready to order?
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={cfg.orderUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '12px 28px', background: '#fff', color: cfg.accentColor, fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px', letterSpacing: '0.02em' }}>
              🛒 Order Online
            </a>
            <a href={cfg.giftCardUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '11px 24px', border: '2px solid rgba(255,255,255,.5)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}>
              🎁 Gift Cards
            </a>
            <a href={cfg.merchUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '11px 24px', border: '2px solid rgba(255,255,255,.5)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}>
              👕 Merch
            </a>
          </div>
        </div>
      </section>

      {/* ── Weekly Lineup ────────────────────────────────────────────── */}
      <section style={{ background: '#0f0a04', padding: '80px 52px' }}>
        <div style={{ marginBottom: '44px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: cfg.accentColor, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: cfg.accentColor }} />
            What&apos;s Always On
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: '#fff', lineHeight: 1.08 }}>
            Reasons to come back<br />
            <em style={{ fontStyle: 'italic', color: cfg.accentColor, fontWeight: 300 }}>every single week.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {cfg.weeklyEvents.map((ev) => (
            <div
              key={ev.name}
              style={{ background: 'rgba(255,255,255,.04)', borderRadius: '10px', padding: '24px', borderLeft: `3px solid ${cfg.accentColor}`, transition: 'background .25s' }}
              className="lineup-card"
            >
              <div style={{ fontSize: '26px', marginBottom: '10px' }}>{ev.icon}</div>
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: cfg.accentColor, marginBottom: '6px' }}>
                {ev.day} · {ev.time}
              </div>
              <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.1 }}>
                {ev.name}
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', lineHeight: 1.65 }}>{ev.desc}</p>
            </div>
          ))}
        </div>

        {/* Live events from Google Calendar */}
        {upcomingEvents.length > 0 && (
          <div style={{ marginTop: '52px', borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '40px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '20px' }}>
              Coming Up
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
              {upcomingEvents.map((ev) => (
                <div key={ev.id} style={{ background: 'rgba(255,255,255,.03)', borderRadius: '8px', padding: '16px 18px', border: '1px solid rgba(255,255,255,.07)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: cfg.accentColor, marginBottom: '5px' }}>
                    {ev.date ? new Date(ev.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : ''}
                    {ev.time && ev.time !== 'All Day' ? ` · ${ev.time}` : ''}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{ev.title}</div>
                  {ev.freeAdmission && <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.35)', marginTop: '4px' }}>Free admission</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        <style>{`
          .lineup-card:hover { background: rgba(255,255,255,.07) !important; }
        `}</style>
      </section>

      {/* ── About + Photo Gallery ────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-grid">
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '12px' }}>About This Location</div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--night)', marginBottom: '20px', lineHeight: 1.15 }}>
              {name}
            </h2>
            {location?.descriptionLong ? (
              <div style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                <PortableText value={location.descriptionLong as Parameters<typeof PortableText>[0]['value']} />
              </div>
            ) : (
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)' }}>
                {cfg.descriptionLong}
              </p>
            )}
          </div>

          {/* Photo grid */}
          {gallery.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {gallery.map((src, i) => (
                <div
                  key={src}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: i === 0 ? '1' : '4/3',
                    gridColumn: i === 0 ? '1 / -1' : 'auto',
                  }}
                >
                  <Image src={src} alt={`${name} photo ${i + 1}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          )}
        </div>
        <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Dog-Friendly ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '72px 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="dog-grid">
          <div>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐶</div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: 'var(--night)', marginBottom: '16px', lineHeight: 1.15 }}>
              Your dog is welcome here.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}>Actually welcome.</em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '16px' }}>
              {cfg.dogCopy}
            </p>
            <p style={{ fontSize: '14px', fontStyle: 'italic', color: 'var(--text-soft)', borderLeft: '3px solid var(--amber)', paddingLeft: '14px', lineHeight: 1.6 }}>
              All three Grain locations are dog-friendly on the patio. Water bowls always ready.
            </p>
          </div>

          {/* Dog patio photo */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }} className="dog-photo-placeholder">
            <Image
              src={dogPhoto}
              alt={`Dogs welcome at ${cfg.name}`}
              fill
              style={{
                objectFit: 'cover',
                // Portrait photos: shift down to bring dog into frame
                objectPosition: slug === 'newark' ? 'center 75%' : 'center center',
              }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .dog-grid { grid-template-columns: 1fr !important; } .dog-photo-placeholder { display: none !important; } }`}</style>
      </section>

      {/* ── Follow Us ────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--night)', padding: '56px 52px' }}>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: cfg.accentColor, marginBottom: '10px' }}>
              Follow {cfg.name}
            </div>
            <p style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 }}>
              See what&apos;s on. Follow for live updates,
              <br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: cfg.accentColor }}>
                daily specials, and what&apos;s on tap.
              </em>
            </p>
            {cfg.extraNote && (
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', marginTop: '10px', fontStyle: 'italic' }}>
                {cfg.extraNote}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={cfg.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#fff',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                transition: 'background .2s',
              }}
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {cfg.instagram}
            </a>
            <a
              href={cfg.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#fff',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                transition: 'background .2s',
              }}
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
        <style>{`.social-btn:hover { background: rgba(255,255,255,.1) !important; }`}</style>
      </section>

      {/* ── Exchange-only: Rewards + Catering ───────────────────────── */}
      {slug === 'exchange' && (
        <section style={{ background: '#b03a18', padding: '72px 52px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="rewards-strip-grid">
            {/* Rewards */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>Exchange Rewards</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
                Earn points. Get $10 off.
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: '8px' }}>
                Join free and get <strong style={{ color: '#fff' }}>5 bonus points</strong> just for signing up.
                Earn <strong style={{ color: '#fff' }}>1 point per $1</strong> spent.
                Hit 100 points and we&apos;ll give you <strong style={{ color: '#fff' }}>$10 off</strong> your next visit.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', marginBottom: '24px', fontStyle: 'italic' }}>Exclusive to Grain Exchange.</p>
              <a
                href="https://www.toasttab.com/grain-new-executive-location-591-collaboration-way/loyalty"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '13px 28px', background: '#fff', color: '#b03a18', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px', letterSpacing: '0.03em' }}
              >
                🏆 Join Rewards Free
              </a>
            </div>

            {/* Catering */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,.15)', paddingLeft: '48px' }} className="catering-divider">
              <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '12px' }}>Lunch Exchange · Catering</div>
              <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
                Feed your whole team.
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: '24px' }}>
                Party trays, lunch boxes, wings — delivered to STAR Campus or South Campus.
                Order online through EZCater or call us to plan something bigger.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.ezcater.com/catering/grain-exchange-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '12px 22px', background: '#fff', color: '#b03a18', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px' }}
                >
                  🧺 Order Catering
                </a>
                <Link
                  href="/lunch-exchange"
                  style={{ padding: '11px 20px', border: '2px solid rgba(255,255,255,.35)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .rewards-strip-grid { grid-template-columns: 1fr !important; }
              .catering-divider { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,.15); padding-top: 36px !important; }
            }
          `}</style>
        </section>
      )}

      {/* ── Email Signup ─────────────────────────────────────────────── */}
      <EmailSignup />
    </>
  )
}
