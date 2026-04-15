import { Metadata } from 'next'
import EmailSignup from '@/components/EmailSignup'
import PlayAtGrainForm from '@/components/forms/PlayAtGrain'
import FundraiserForm from '@/components/forms/FundraiserForm'

export const metadata: Metadata = {
  title: 'Private Events & Fundraisers — Grain',
  description:
    'Host your next event at Grain. Private parties, celebrity bartender nights, corporate events.',
}

const programs = [
  {
    icon: '🎤',
    name: 'Celebrity Bartender Nights',
    desc: 'Your organization runs the bar for a night. 100% of bar tips go to your cause. We handle everything else.',
  },
  {
    icon: '🍴',
    name: 'Fork Support',
    desc: 'We donate a percentage of food sales on a designated night. Great for smaller nonprofits and community groups.',
  },
  {
    icon: '🎉',
    name: 'Private Parties',
    desc: 'Reserve a section or the whole venue. We can do full buyouts, semi-private events, and custom menus.',
  },
  {
    icon: '🏢',
    name: 'Corporate Events',
    desc: 'Happy hour buyouts, team dinners, client events. All three locations have private-friendly spaces.',
  },
  {
    icon: '🎵',
    name: 'Play at Grain',
    desc: 'We book local and regional acts across all three locations. Fill out the form below to get on our radar.',
  },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--night)',
          padding: '160px 52px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,114,14,.12) 0%, transparent 60%)',
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
            EVENTS & PRIVATE DINING
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '20px',
            }}
          >
            Make it a
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              Grain night.
            </em>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,.55)',
              lineHeight: 1.7,
            }}
          >
            From fundraiser nights to live music to private parties — Grain is where
            Delaware does it right.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
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
          WHAT WE DO
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: 'var(--night)',
            marginBottom: '48px',
          }}
        >
          Ways to Make Grain Yours
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="programs-grid"
        >
          {programs.map((p) => (
            <div
              key={p.name}
              style={{
                background: 'var(--cream)',
                borderRadius: '12px',
                padding: '32px 28px',
                borderBottom: '3px solid transparent',
                transition: 'border-color .3s, transform .25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderBottomColor = 'var(--amber)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderBottomColor = 'transparent'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--night)',
                  marginBottom: '10px',
                }}
              >
                {p.name}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-mid)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .programs-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .programs-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Fundraiser Form */}
      <section
        id="fundraiser"
        style={{ background: 'var(--night)', padding: '80px 52px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="fundraiser-grid"
        >
          <div>
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
              HOST AN EVENT
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '16px',
                lineHeight: 1.1,
              }}
            >
              Let&apos;s make it happen.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              Fill out the form and someone from our team will be in touch within 24 hours.
            </p>
          </div>
          <FundraiserForm />
        </div>
        <style>{`
          @media (max-width: 900px) {
            .fundraiser-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Play at Grain */}
      <section style={{ background: 'var(--brown)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="booking-grid"
        >
          <div>
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
              MUSICIANS
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '16px',
                lineHeight: 1.1,
              }}
            >
              Play at Grain.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              We book local and regional acts across all three locations. Indoor stages,
              outdoor stages, and patios. All free admission for guests.
            </p>
          </div>
          <PlayAtGrainForm />
        </div>
        <style>{`
          @media (max-width: 900px) {
            .booking-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <EmailSignup />
    </>
  )
}
