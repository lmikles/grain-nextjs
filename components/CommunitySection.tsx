'use client'

import Link from 'next/link'

export default function CommunitySection() {
  return (
    <section
      style={{
        background: 'var(--warm)',
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
        className="comm-inner-grid"
      >
        {/* Left: stat visual */}
        <div
          style={{
            background: 'var(--night)',
            borderRadius: '16px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '52px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(ellipse 75% 65% at 35% 35%, rgba(212,114,14,.22) 0%, transparent 58%),
                radial-gradient(ellipse 60% 70% at 75% 72%, rgba(45,90,61,.16) 0%, transparent 52%)
              `,
            }}
          />
          <div style={{ position: 'relative' }}>
            <div
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: '90px',
                fontWeight: 900,
                fontStyle: 'italic',
                color: 'var(--orange)',
                lineHeight: 1,
                marginBottom: '12px',
              }}
            >
              $350K+
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: 'rgba(255,255,255,.45)',
                lineHeight: 1.6,
              }}
            >
              Raised for Delaware organizations
              <br />
              since 2015
            </div>
          </div>
        </div>

        {/* Right: text */}
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
            Community
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: 'var(--night)',
              marginBottom: '20px',
            }}
          >
            We&apos;re from here.
            <br />
            We act like it.
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
            Since 2015, Grain has helped hundreds of Delaware organizations raise money
            through our Celebrity Bartender and Fork Support programs. First responders get
            more than a discount — they get a home base.
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-mid)',
              marginBottom: '14px',
            }}
          >
            We even built a formal management training program with the University of
            Delaware. The Grain Way isn&apos;t an accident.
          </p>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-mid)',
              marginBottom: '24px',
            }}
          >
            That&apos;s not a marketing line. It&apos;s just what we do.
          </p>
          <Link
            href="/our-story"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'var(--sage)',
              color: '#fff',
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background .25s, transform .2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--sage-bright)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--sage)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Learn About Our Programs
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comm-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
