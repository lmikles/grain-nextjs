import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import HHStrip from '@/components/HHStrip'
import LocationsSection from '@/components/LocationsSection'
import EventsGrid from '@/components/EventsGrid'
import BeerBible from '@/components/BeerBible'
import CommunitySection from '@/components/CommunitySection'
import EmailSignup from '@/components/EmailSignup'
import { getLocations } from '@/lib/sanity'
import { fetchEvents, fetchWeather } from '@/lib/events'

export const revalidate = 300 // 5 minutes

export default async function HomePage() {
  // Fetch data in parallel
  const [locations, events, weather] = await Promise.all([
    getLocations().catch(() => []),
    fetchEvents().catch(() => []),
    fetchWeather().catch(() => null),
  ])

  return (
    <>
      {/* 1. Hero */}
      <HeroSection weather={weather} events={events} />

      {/* 2. Happy Hour Strip */}
      <HHStrip />

      {/* 3. Brand Statement */}
      <section
        style={{
          background: 'var(--warm)',
          padding: '104px 52px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: '260px',
            fontWeight: 900,
            fontStyle: 'italic',
            color: 'rgba(212,114,14,.055)',
            top: '50%',
            right: '-20px',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          Grain
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          className="brand-inner-grid"
        >
          {/* Left: statement */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
                marginBottom: '18px',
              }}
            >
              The Short Version
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                lineHeight: 1.06,
                color: 'var(--night)',
                marginBottom: '28px',
              }}
            >
              Not a chain.
              <br />
              Not a dive.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}>
                Just Grain.
              </em>
            </h2>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'var(--text-mid)',
                marginBottom: '16px',
              }}
            >
              We opened in Newark in 2015 with one idea: Delaware deserves a place where
              the food is genuinely good, the drinks are worth talking about, and nobody
              makes you feel like a stranger.
            </p>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'var(--text-mid)',
                marginBottom: '16px',
              }}
            >
              We hire people who actually like people. It shows.
            </p>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'var(--text-mid)',
                marginBottom: '16px',
              }}
            >
              <strong style={{ color: 'var(--night)', fontWeight: 800 }}>
                Come for the Crab Nachos. Stay for the bartender who remembers you.
              </strong>
            </p>
            <p
              style={{
                marginTop: '28px',
                fontSize: '13px',
                fontWeight: 600,
                fontStyle: 'italic',
                color: 'var(--text-soft)',
                borderLeft: '3px solid var(--amber)',
                paddingLeft: '16px',
                lineHeight: 1.6,
              }}
            >
              Ten years. Three locations. One neighborhood feeling.
            </p>
          </div>

          {/* Right: stat cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
          >
            {[
              { num: '10', label: 'Years in Delaware' },
              { num: '3', label: 'Locations' },
              { num: '$100K+', label: 'Raised for local causes' },
              { num: '$0', label: 'Cover charge. Ever.' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-card stat-card-${i % 2 === 0 ? 'even' : 'odd'}`}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '46px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: 'var(--amber)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-soft)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .brand-inner-grid { grid-template-columns: 1fr !important; }
          }
          .stat-card {
            border-radius: 10px;
            padding: 30px 24px;
            border-bottom: 3px solid transparent;
            transition: border-color .3s, transform .25s, box-shadow .25s;
            cursor: default;
          }
          .stat-card-even { background: var(--cream); }
          .stat-card-odd { background: #fff8ee; }
          .stat-card:hover {
            border-bottom-color: var(--amber);
            transform: translateY(-4px);
            box-shadow: 0 12px 36px rgba(212,114,14,.12);
          }
        `}</style>
      </section>

      {/* 4. Food Section */}
      <section
        style={{
          background: 'var(--night)',
          padding: '96px 52px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 60% 80% at 8% 50%, rgba(212,114,14,.12) 0%, transparent 55%),
              radial-gradient(ellipse 50% 60% at 95% 30%, rgba(45,90,61,.1) 0%, transparent 50%)
            `,
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          className="food-inner-grid"
        >
          {/* Left text */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--amber)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--amber)' }} />
              The Food
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: '22px',
              }}
            >
              Made from scratch.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: 300 }}>
                Ordered by regulars.
              </em>
            </h2>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,.58)',
                marginBottom: '14px',
              }}
            >
              Real food made from scratch. The kind you talk about afterward.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,.58)',
                marginBottom: '14px',
              }}
            >
              <strong style={{ color: 'rgba(255,255,255,.88)', fontWeight: 700 }}>
                Crab Nachos with their own fan club. Smash burgers pressed to order.
                Brunch that earns the wait.
              </strong>
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,.58)',
                marginBottom: '28px',
              }}
            >
              No sales tax. No credit card fees. Just the price on the menu.
            </p>

            {/* Menu items */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {[
                { name: 'Crab Nachos', note: 'The one everyone orders' },
                { name: 'Smash Burger', note: 'Pressed to order, scratch sauces' },
                { name: 'Grillin\' Grain Wings', note: 'Fan favorite since 2015' },
                { name: 'Orange Crush', note: 'Squeezed fresh, always' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="food-item-card"
                >
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '3px',
                    }}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.45)' }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo mosaic */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '10px',
              height: '480px',
            }}
          >
            {/* Big photo */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                gridColumn: 1,
                gridRow: '1 / 3',
              }}
            >
              <Image
                src="/images/food-crab-nachos.jpg"
                alt="Crab Nachos"
                fill
                className="food-hero-img"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.7)',
                  background: 'rgba(0,0,0,.4)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}
              >
                Crab Nachos
              </div>
            </div>

            {/* Top right */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/food-patio.jpg"
                alt="The Patio"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 16vw"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.7)',
                  background: 'rgba(0,0,0,.4)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}
              >
                The Patio
              </div>
            </div>

            {/* Bottom right */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/food-smash-burger.jpg"
                alt="Smash Burger"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 16vw"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.7)',
                  background: 'rgba(0,0,0,.4)',
                  backdropFilter: 'blur(6px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}
              >
                Smash Burger
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .food-inner-grid { grid-template-columns: 1fr !important; }
          }
          .food-item-card {
            background: rgba(255,255,255,.05);
            border-radius: 8px;
            padding: 16px;
            border-left: 3px solid var(--amber);
            transition: background .25s;
          }
          .food-item-card:hover { background: rgba(255,255,255,.08); }
          .food-hero-img {
            transition: transform .5s ease;
          }
          .food-hero-img:hover { transform: scale(1.06); }
        `}</style>
      </section>

      {/* 5. Locations */}
      <LocationsSection locations={locations} />

      {/* 6. Events Grid */}
      <EventsGrid events={events} />

      {/* 7. Pull Quote */}
      <div
        style={{
          background: 'var(--sage)',
          padding: '80px 52px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="quote-break-wrap"
      >
        <p
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#fff',
            lineHeight: 1.4,
            maxWidth: '740px',
            margin: '0 auto 18px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          &ldquo;The kind of place where the bartender knows your order.&rdquo;
        </p>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.4)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          — actual customer quote
        </p>
      </div>

      {/* 8. Beer Bible */}
      <BeerBible />

      {/* 9. Community */}
      <CommunitySection />

      {/* 10. Email Signup */}
      <EmailSignup />
    </>
  )
}
