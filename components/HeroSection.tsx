'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThisWeekCard from './ThisWeekCard'
import PatioBadge from './PatioBadge'
import { WeatherData } from '@/lib/weather'
import { GrainEvent } from '@/lib/events'

interface HeroSectionProps {
  weather: WeatherData | null
  events: GrainEvent[]
}

export default function HeroSection({ weather, events }: HeroSectionProps) {
  return (
    <section
      className="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/hero-main.jpg"
          alt="Grain Craft Bar + Kitchen"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay layers */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 55% 45% at 15% 75%, rgba(240,144,32,.25) 0%, transparent 55%),
            radial-gradient(ellipse 100% 35% at 50% 5%, rgba(200,100,20,.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 65% at 80% 40%, rgba(212,114,14,.22) 0%, transparent 55%),
            linear-gradient(165deg, rgba(58,34,8,.85) 0%, rgba(40,22,8,.9) 25%, rgba(30,16,6,.92) 55%, rgba(18,12,4,.96) 100%)
          `,
        }}
      />

      {/* String lights */}
      <div className="s-lights" />

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '75%',
          background:
            'linear-gradient(to top, rgba(18,12,4,1) 0%, rgba(18,12,4,.85) 25%, rgba(18,12,4,.4) 55%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div
        className="hero-body"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 52px 88px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '48px',
          alignItems: 'flex-end',
        }}
      >
        {/* Left side */}
        <div style={{ maxWidth: '680px' }}>
          {/* Tag */}
          <div
            className="animate-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(212,114,14,.2)',
              border: '1px solid rgba(212,114,14,.35)',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                background: 'var(--orange)',
                borderRadius: '50%',
              }}
              className="animate-pulse-dot"
            />
            Delaware&apos;s Craft Bar
          </div>

          {/* H1 */}
          <h1
            className="animate-up-delay-1"
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(56px, 9vw, 112px)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            Good Food.
          </h1>
          <span
            className="animate-up-delay-2"
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(56px, 9vw, 112px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              color: 'var(--orange)',
              display: 'block',
              marginBottom: '36px',
            }}
          >
            Great Drinks.
          </span>

          {/* Subhead */}
          <p
            className="animate-up-delay-3"
            style={{
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,.62)',
              maxWidth: '500px',
              marginBottom: '42px',
            }}
          >
            Three locations. Dogs welcome.{' '}
            <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 700 }}>
              No cover, ever.
            </strong>
          </p>

          {/* Buttons */}
          <div
            className="animate-up-delay-4"
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
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
                el.style.boxShadow = '0 8px 28px rgba(212,114,14,.45)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--amber)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 20px rgba(212,114,14,.35)'
              }}
            >
              See Our Menus
            </Link>
            <Link
              href="/locations/newark"
              style={{
                display: 'inline-block',
                padding: '15px 36px',
                border: '2px solid rgba(255,255,255,.22)',
                color: 'rgba(255,255,255,.8)',
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all .25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--orange)'
                el.style.color = 'var(--orange)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,.22)'
                el.style.color = 'rgba(255,255,255,.8)'
              }}
            >
              Find a Location
            </Link>
          </div>

          {/* Perks */}
          <div
            className="animate-up-delay-5"
            style={{
              marginTop: '28px',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {[
              'No cover charge',
              'Dogs welcome',
              'Free parking',
            ].map((perk) => (
              <span
                key={perk}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,.42)',
                }}
              >
                <span style={{ color: 'var(--orange)', fontSize: '15px' }}>✓</span>
                {perk}
              </span>
            ))}
          </div>

          {/* Weather badge */}
          {weather && <PatioBadge weather={weather} />}
        </div>

        {/* Right side — This Week card */}
        <ThisWeekCard events={events} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-body {
            grid-template-columns: 1fr !important;
            padding: 0 24px 64px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-body {
            padding: 0 20px 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
