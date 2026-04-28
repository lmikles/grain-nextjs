import { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Community Programs — Grain Craft Bar + Kitchen',
  description:
    'Celebrity Bartender nights, Fork Support, first responder appreciation, and more. $350K+ raised for Delaware since 2015.',
}

const programs = [
  {
    icon: '🎤',
    name: 'Celebrity Bartender Nights',
    tagline: '100% of tips go to your cause.',
    desc: 'Your organization takes over the bar for a night. Every dollar in tips goes directly to your cause — Grain handles the bar, the staff, and everything else. You just bring your people and raise money.',
    details: ['Your org runs the bar for one night', 'All bar tips go to your cause', 'Grain provides staff and support', 'Available at all three locations'],
    cta: 'Book a Fundraiser',
    ctaHref: '/events#fundraiser',
    accent: '#d4720e',
  },
  {
    icon: '🍴',
    name: 'Fork Support',
    tagline: 'A percentage of food sales donated.',
    desc: 'On a designated night, Grain donates a percentage of food sales directly to your organization. Great for smaller nonprofits, school groups, and community organizations who want an easier entry point.',
    details: ['Designated dining night for your cause', 'Percentage of food sales donated', 'Lower barrier to entry than Celebrity Bartender', 'Great for schools and small nonprofits'],
    cta: 'Learn More',
    ctaHref: '/events#fundraiser',
    accent: '#2d5a3d',
  },
  {
    icon: '🚒',
    name: 'First Responders',
    tagline: 'A home base, not just a discount.',
    desc: 'Grain has supported Delaware\'s first responders since we opened. That means more than a discount — it means a place where police, fire, EMS, and their families are genuinely appreciated. We\'ve hosted Fire vs. Police wing-eating championships, fundraisers, and more.',
    details: ['Ongoing first responder appreciation', 'Special events and fundraisers', 'Fire vs. Police competitions', 'All three locations'],
    cta: null,
    ctaHref: null,
    accent: '#b03a18',
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--night)',
          padding: '160px 52px 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(45,90,61,.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
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
            Community
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 76px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '22px',
            }}
          >
            We&apos;re from here.
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              We act like it.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: '20px' }}>
            Since 2015, Grain has helped hundreds of Delaware organizations raise money,
            built programs for first responders, and showed up for the community in ways
            that go beyond a bar tab.
          </p>
          {/* Stat */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              background: 'rgba(212,114,14,.1)',
              border: '1px solid rgba(212,114,14,.25)',
              borderRadius: '10px',
              padding: '16px 24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: '44px',
                fontWeight: 900,
                fontStyle: 'italic',
                color: 'var(--orange)',
                lineHeight: 1,
              }}
            >
              $350K+
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', lineHeight: 1.5 }}>
              Raised for Delaware<br />organizations since 2015
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            marginBottom: '48px',
          }}
        >
          Our Programs
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {programs.map((prog) => (
            <div
              key={prog.name}
              style={{
                background: 'var(--cream)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1.6fr',
              }}
              className="program-row"
            >
              {/* Left */}
              <div
                style={{
                  background: 'var(--night)',
                  padding: '48px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRight: `4px solid ${prog.accent}`,
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{prog.icon}</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.1,
                    marginBottom: '10px',
                  }}
                >
                  {prog.name}
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: prog.accent,
                    marginBottom: '0',
                  }}
                >
                  {prog.tagline}
                </p>
              </div>

              {/* Right */}
              <div style={{ padding: '48px 36px' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
                  {prog.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {prog.details.map((d) => (
                    <li key={d} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--text-mid)' }}>
                      <span style={{ color: prog.accent, fontWeight: 800, marginTop: '1px', flexShrink: 0 }}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                {prog.cta && prog.ctaHref && (
                  <Link
                    href={prog.ctaHref}
                    style={{
                      display: 'inline-block',
                      padding: '12px 24px',
                      background: prog.accent,
                      color: '#fff',
                      fontFamily: 'var(--font-nunito), sans-serif',
                      fontSize: '13px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {prog.cta} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .program-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--sage)', padding: '80px 52px', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Want to bring your cause to Grain?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.65)', marginBottom: '32px', lineHeight: 1.6 }}>
          Fill out our event inquiry form and someone will be in touch within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/events#fundraiser"
            style={{
              padding: '14px 32px',
              background: '#fff',
              color: 'var(--sage)',
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Submit an Inquiry
          </Link>
          <a
            href="mailto:events@meetatgrain.com"
            style={{
              padding: '13px 28px',
              border: '2px solid rgba(255,255,255,.4)',
              color: '#fff',
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            events@meetatgrain.com
          </a>
        </div>
      </section>

      <EmailSignup />
    </>
  )
}
