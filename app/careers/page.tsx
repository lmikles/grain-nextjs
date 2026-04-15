import { Metadata } from 'next'
import CareersForm from '@/components/forms/CareersForm'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Work at Grain — Careers',
  description: 'Join the Grain team. We hire people who actually like people.',
}

const perks = [
  { icon: '🍺', title: 'Shift meals & drinks', desc: 'Eat before your shift. On us.' },
  { icon: '📈', title: 'Room to grow', desc: 'We promote from within. Multiple management came up through the ranks.' },
  { icon: '🎓', title: 'UD Training Program', desc: 'Formal management training in partnership with the University of Delaware.' },
  { icon: '🐕', title: 'Dog-friendly workplaces', desc: 'Our patios are dog-friendly. Sometimes staff dogs show up too.' },
  { icon: '🎵', title: 'Free live music', desc: 'Work where the music happens. Literally.' },
  { icon: '❤️', title: 'Community first', desc: 'We give back. A lot. And our team is part of that.' },
]

const openings = [
  { role: 'Bartender', location: 'All Locations', type: 'Full-time / Part-time' },
  { role: 'Server', location: 'All Locations', type: 'Full-time / Part-time' },
  { role: 'Line Cook', location: 'Newark & Exchange', type: 'Full-time' },
  { role: 'Barback / Support', location: 'All Locations', type: 'Part-time' },
  { role: 'Event Coordinator', location: 'Corporate', type: 'Full-time' },
]

export default function CareersPage() {
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
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,114,14,.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
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
            CAREERS
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
            We hire people
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              who like people.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
            Grain isn&apos;t just a place to work. It&apos;s a career, a community, and a
            crew worth being part of.
          </p>
        </div>
      </section>

      {/* Perks */}
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
          WHY GRAIN
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
          What makes it different
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="perks-grid"
        >
          {perks.map((perk) => (
            <div
              key={perk.title}
              style={{
                background: 'var(--cream)',
                borderRadius: '10px',
                padding: '28px',
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
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{perk.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--night)',
                  marginBottom: '8px',
                }}
              >
                {perk.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) {
            .perks-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .perks-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Open Positions */}
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
          CURRENT OPENINGS
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '36px',
          }}
        >
          We&apos;re always looking for the right people
        </h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '48px' }}>
          {openings.map((o) => (
            <div
              key={o.role}
              style={{
                background: 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '20px 24px',
                border: '1px solid rgba(255,255,255,.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '4px',
                  }}
                >
                  {o.role}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)' }}>
                  {o.location} · {o.type}
                </div>
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--amber)',
                  background: 'rgba(212,114,14,.15)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Now Hiring
              </span>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="careers-form-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '16px',
              }}
            >
              Apply now.
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
              No resume needed — just tell us who you are. We&apos;ll take it from there.
            </p>
          </div>
          <CareersForm />
        </div>
        <style>{`
          @media (max-width: 900px) {
            .careers-form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <EmailSignup />
    </>
  )
}
