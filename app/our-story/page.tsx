import { Metadata } from 'next'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Our Story — Grain Craft Bar + Kitchen',
  description: 'Grain opened in Newark in 2015 with one idea: Delaware deserves better.',
}

const stats = [
  { num: '2015', label: 'Year opened in Newark' },
  { num: '3', label: 'Locations across Delaware' },
  { num: '$100K+', label: 'Raised for Delaware nonprofits' },
  { num: '0', label: 'Cover charges. Ever.' },
]

const grainWay = [
  { title: 'Hire people who like people', desc: 'Our team is our product. We invest in training, culture, and career growth.' },
  { title: 'No hidden fees', desc: 'No sales tax. No credit card surcharges. Just the price on the menu.' },
  { title: 'Show up for the community', desc: 'Celebrity Bartender nights, Fork Support, first responder discounts — it\'s baked in.' },
  { title: 'Make it worth the drive', desc: 'Whatever location you come to, you\'re getting the same Grain quality and hospitality.' },
]

export default function OurStoryPage() {
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
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,114,14,.1) 0%, transparent 60%)',
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
            OUR STORY
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '24px',
            }}
          >
            Ten years.
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              Same neighborhood.
            </em>
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="story-grid"
        >
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              position: 'sticky',
              top: '100px',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--cream)',
                  borderRadius: '10px',
                  padding: '24px 20px',
                  borderBottom: '3px solid var(--amber)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '40px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: 'var(--amber)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-soft)', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div>
            <p style={{ fontSize: '20px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px', fontWeight: 400 }}>
              We opened on Main Street in Newark in 2015 with one simple idea: Delaware
              deserves a place where the food is genuinely good, the drinks are worth
              talking about, and nobody makes you feel like a stranger.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              We didn&apos;t open a chain. We didn&apos;t follow a playbook. We hired
              people who actually like people, and we built a culture around that.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              Come for the Crab Nachos. Stay for the bartender who remembers you.
            </p>

            <hr style={{ border: 'none', borderTop: '2px solid var(--border-warm)', margin: '36px 0' }} />

            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '32px', fontWeight: 700, color: 'var(--night)', marginBottom: '8px' }}>
              The People
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              The Grain Way isn&apos;t a slogan — it&apos;s how we operate. We invest in
              our team because we know hospitality starts with the people serving you.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              We even built a formal management training program with the University of
              Delaware. The Grain Way isn&apos;t an accident.
            </p>

            <hr style={{ border: 'none', borderTop: '2px solid var(--border-warm)', margin: '36px 0' }} />

            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '32px', fontWeight: 700, color: 'var(--night)', marginBottom: '8px' }}>
              What&apos;s Next
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)' }}>
              Three locations, ten years deep, and still growing. Grain H2O brought us to
              the water. Grain Exchange brought us to STAR Campus. Whatever&apos;s next,
              it&apos;ll still feel like Grain.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* The Grain Way */}
      <section style={{ background: 'var(--night)', padding: '80px 52px' }}>
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
          HOW WE OPERATE
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '48px',
          }}
        >
          The Grain Way
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="grain-way-grid"
        >
          {grainWay.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '28px',
                borderLeft: '3px solid var(--amber)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,.55)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .grain-way-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Community stats */}
      <section style={{ background: 'var(--sage)', padding: '80px 52px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(24px, 4vw, 44px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#fff',
            maxWidth: '680px',
            margin: '0 auto 16px',
            lineHeight: 1.4,
          }}
        >
          &ldquo;We&apos;re from here. We act like it.&rdquo;
        </p>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
          $100K+ raised for Delaware organizations since 2015
        </p>
      </section>

      <EmailSignup />
    </>
  )
}
