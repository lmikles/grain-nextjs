import { Metadata } from 'next'
import Link from 'next/link'
import { fetchEvents } from '@/lib/events'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: "Events & Live Music — Grain Delaware",
  description: "See what's happening this week at Grain. Live music, trivia, bingo, and more. No cover ever.",
}

export const revalidate = 300

const weeklyEvents = [
  { day: 'Monday', events: ['All You Can Eat Wings @ Exchange (4pm)', 'Bingo w/ Rylie @ Newark (6pm)'] },
  { day: 'Tuesday', events: ['Trivia Night @ Newark (6pm)', 'Trivia Night @ Exchange (6pm)'] },
  { day: 'Thursday', events: ['Weekend Wind Down — Live Music @ Exchange (5pm)'] },
  { day: 'Friday', events: ['Happy Hour (3–6pm)', 'Live Music @ H2O (varies)'] },
  { day: 'Saturday', events: ['Live Music @ Newark (7pm)', 'Sunday Funday starts @ H2O'] },
  { day: 'Sunday', events: ['Sunday Funday Brunch @ H2O (10am)'] },
]

export default async function WhatsHappeningPage() {
  const events = await fetchEvents().catch(() => [])

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
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,114,14,.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
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
            WHAT&apos;S ON
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '20px',
            }}
          >
            Always Something
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              Going On.
            </em>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,.55)',
              maxWidth: '540px',
              lineHeight: 1.7,
            }}
          >
            Live music. Bingo. Trivia. AYCE Wings. Brunch. Every week, across all three
            locations.{' '}
            <strong style={{ color: 'rgba(255,255,255,.85)' }}>No cover. Ever.</strong>
          </p>
        </div>
      </section>

      {/* Weekly Regulars */}
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
          Every Week
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
          Your Weekly Lineup
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="weekly-grid"
        >
          {weeklyEvents.map((day) => (
            <div
              key={day.day}
              style={{
                background: 'var(--cream)',
                borderRadius: '10px',
                padding: '24px',
                borderTop: '3px solid var(--amber)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--night)',
                  marginBottom: '14px',
                }}
              >
                {day.day}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {day.events.map((ev) => (
                  <li
                    key={ev}
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-mid)',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(212,114,14,.1)',
                      lineHeight: 1.5,
                    }}
                  >
                    {ev}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .weekly-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .weekly-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Coming Up — from Google Calendar */}
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
          COMING UP
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
          On the Calendar
        </h2>

        {events.length > 0 ? (
          <div style={{ display: 'grid', gap: '14px' }}>
            {events.map((event) => (
              <div
                key={event.id}
                style={{
                  background: 'rgba(255,255,255,.05)',
                  borderRadius: '10px',
                  padding: '20px 24px',
                  border: '1px solid rgba(255,255,255,.07)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ minWidth: '120px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--amber)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {event.date || 'Upcoming'}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.4)' }}>
                    {event.time || ''}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                    {event.title}
                  </div>
                  {event.location && (
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)' }}>
                      {event.location}
                    </div>
                  )}
                </div>
                {event.type && (
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'rgba(212,114,14,.2)',
                    color: 'var(--orange)',
                  }}>
                    {event.type}
                  </span>
                )}
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,.3)', fontWeight: 600 }}>
                  No cover
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.4)', fontStyle: 'italic' }}>
            Check back soon — events are updated weekly.
          </p>
        )}
      </section>

      <EmailSignup />
    </>
  )
}
