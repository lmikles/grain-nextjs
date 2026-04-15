import { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Lunch Exchange — Grain Craft Bar + Kitchen',
  description: 'Corporate lunch, catering, and private dining at Grain Exchange.',
}

const steps = [
  { num: '01', title: 'Pick your group', desc: 'Teams, departments, client meetings — works for 8 to 80.' },
  { num: '02', title: 'Choose your setup', desc: 'Semi-private area, full buyout, or pre-set catering packages.' },
  { num: '03', title: 'We handle everything else', desc: 'Menu, setup, timing, service. You just show up.' },
  { num: '04', title: 'Impress your people', desc: 'Great food, real bar, and no credit card fees. Easy to be the hero.' },
]

const reasons = [
  { title: 'Right on STAR Campus', desc: 'Walking distance from UD, Chemours, W.L. Gore, and the broader Newark tech corridor.' },
  { title: 'Indoor / Outdoor', desc: 'The first indoor/outdoor bar space on STAR Campus. Patio seats available in season.' },
  { title: 'Real food, not catering food', desc: 'The same made-from-scratch menu your team already loves. Just reserved for you.' },
  { title: 'No fees', desc: 'No sales tax, no card fees. Just the price on the menu, plus your gratuity.' },
]

export default function LunchExchangePage() {
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
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(176,58,24,.12) 0%, transparent 60%)',
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
              color: '#b03a18',
              marginBottom: '16px',
            }}
          >
            GRAIN EXCHANGE · CORPORATE LUNCH
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
            Team lunches
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#f09080' }}>
              worth showing up for.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: '32px' }}>
            Grain Exchange is built for campus life — right on STAR Campus, with
            indoor/outdoor space, a full bar, and food that doesn&apos;t feel like a
            catering order.
          </p>
          <Link
            href="/events#fundraiser"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: '#b03a18',
              color: '#fff',
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            Inquire About Lunch →
          </Link>
        </div>
      </section>

      {/* How It Works */}
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
          HOW IT WORKS
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
          Four steps to a great lunch
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: 'var(--cream)',
                borderRadius: '10px',
                padding: '28px',
                borderTop: '3px solid var(--amber)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '40px',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'rgba(212,114,14,.25)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--night)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) {
            .steps-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Why It Works */}
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
          WHY IT WORKS
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
          Built for this
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="reasons-grid"
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              style={{
                background: 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '28px',
                borderLeft: '3px solid #b03a18',
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
                {r.title}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,.55)' }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .reasons-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <div
        style={{
          background: 'var(--sage)',
          padding: '80px 52px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Ready to book?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.6)', marginBottom: '28px', lineHeight: 1.6 }}>
          Email us or fill out the event inquiry form and we&apos;ll get back to you within 24 hours.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            Inquire Now
          </Link>
          <a
            href="mailto:events@meetatgrain.com"
            style={{
              padding: '13px 32px',
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
      </div>

      <EmailSignup />
    </>
  )
}
