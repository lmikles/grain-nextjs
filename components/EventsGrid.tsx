import Link from 'next/link'
import { GrainEvent } from '@/lib/events'

type EventType = 'music' | 'bingo' | 'trivia' | 'wings' | 'brunch' | 'special'

const chipColors: Record<EventType, { bg: string; color: string }> = {
  music: { bg: 'rgba(212,114,14,.28)', color: 'var(--orange)' },
  bingo: { bg: 'rgba(45,90,61,.45)', color: '#7dd4a0' },
  trivia: { bg: 'rgba(26,92,88,.4)', color: '#6dccc8' },
  wings: { bg: 'rgba(176,58,24,.35)', color: '#f09080' },
  brunch: { bg: 'rgba(240,176,48,.2)', color: 'var(--gold)' },
  special: { bg: 'rgba(212,114,14,.2)', color: 'var(--orange)' },
}

const fallbackEvents: GrainEvent[] = [
  {
    id: 'f1', title: 'Live Music: Chris Giakas', date: 'Saturday · Mar 14 · Newark · 7pm',
    location: '270 East Main Street · Free outdoor patio', eventType: 'music', featured: true, freeAdmission: true,
  },
  {
    id: 'f2', title: 'All You Can Eat Wings', date: 'Mon · Every Week · 4pm',
    location: 'Grain Exchange', eventType: 'wings',
  },
  {
    id: 'f3', title: 'Grain Bingo w/ Rylie', date: 'Mon · Every Week · 6pm',
    location: 'Newark', eventType: 'bingo',
  },
  {
    id: 'f4', title: 'Trivia Night', date: 'Tue · Every Week · 6pm',
    location: 'Newark & Exchange', eventType: 'trivia',
  },
  {
    id: 'f5', title: 'Weekend Wind Down', date: 'Thu · Every Week · 5pm',
    location: 'Grain Exchange · Free live music', eventType: 'music',
  },
  {
    id: 'f6', title: 'Sunday Funday Brunch', date: 'Sun · Every Week · 10am',
    location: 'Grain H2O', eventType: 'brunch',
  },
]

interface EventsGridProps {
  events: GrainEvent[]
}

export default function EventsGrid({ events }: EventsGridProps) {
  const displayEvents = events.length > 0 ? events.slice(0, 6) : fallbackEvents

  return (
    <section
      style={{
        background: 'var(--night)',
        padding: '104px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '55vw',
          height: '80vh',
          background: 'radial-gradient(ellipse, rgba(212,114,14,.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '45vw',
          height: '60vh',
          background: 'radial-gradient(ellipse, rgba(45,90,61,.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'end',
          marginBottom: '56px',
          position: 'relative',
          zIndex: 1,
        }}
        className="ev-head-grid"
      >
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
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                background: 'var(--orange)',
                borderRadius: '50%',
              }}
              className="animate-pulse-dot"
            />
            Always Something Going On
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fff',
            }}
          >
            Plan your week
            <br />
            around this.
          </h2>
        </div>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,.55)',
          }}
        >
          Live music. Bingo. Trivia. AYCE Wings. Happy hour. We built programming because
          a great bar gives you a reason to show up on a Tuesday.{' '}
          <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 700 }}>
            No cover. Ever.
          </strong>
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '14px',
          position: 'relative',
          zIndex: 1,
        }}
        className="ev-grid"
      >
        {displayEvents.map((event, i) => {
          const isFeatured = event.featured || i === 0
          const typeKey = (event.eventType?.toLowerCase() as EventType) || 'special'
          const chip = chipColors[typeKey] || chipColors.special
          const dateStr = event.date
            ? event.date
            : [
                event.recurring ? 'Every Week' : '',
                event.time || '',
                event.location || '',
              ]
                .filter(Boolean)
                .join(' · ')

          return (
            <Link
              key={event.id}
              href="/whats-happening"
              style={{
                background: isFeatured
                  ? 'rgba(212,114,14,.12)'
                  : 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '24px',
                border: `1px solid ${isFeatured ? 'rgba(212,114,14,.25)' : 'rgba(255,255,255,.07)'}`,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block',
                transition: 'background .25s, transform .25s, border-color .25s',
                position: 'relative',
                overflow: 'hidden',
                gridColumn: isFeatured ? '1 / 3' : 'auto',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = isFeatured
                  ? 'rgba(212,114,14,.18)'
                  : 'rgba(255,255,255,.08)'
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = isFeatured
                  ? 'rgba(212,114,14,.4)'
                  : 'rgba(255,255,255,.14)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = isFeatured
                  ? 'rgba(212,114,14,.12)'
                  : 'rgba(255,255,255,.05)'
                el.style.transform = 'translateY(0)'
                el.style.borderColor = isFeatured
                  ? 'rgba(212,114,14,.25)'
                  : 'rgba(255,255,255,.07)'
              }}
            >
              {dateStr && (
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.38)',
                    marginBottom: '8px',
                  }}
                >
                  {dateStr}
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: isFeatured ? '28px' : '22px',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.15,
                  marginBottom: '6px',
                }}
              >
                {event.title}
              </div>
              {event.location && (
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,.45)',
                    marginBottom: '12px',
                  }}
                >
                  {event.location}
                </div>
              )}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: chip.bg,
                  color: chip.color,
                }}
              >
                {event.eventType || 'Event'}
              </span>
              {(event.freeAdmission || isFeatured) && (
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,.3)',
                    marginTop: '8px',
                  }}
                >
                  Free admission · No cover
                </div>
              )}
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '40px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <Link
          href="/whats-happening"
          style={{
            display: 'inline-block',
            padding: '15px 36px',
            background: 'var(--amber)',
            color: '#fff',
            fontFamily: 'var(--font-nunito), sans-serif',
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            borderRadius: '6px',
            boxShadow: '0 4px 20px rgba(212,114,14,.4)',
            transition: 'all .25s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--amber-bright)'
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = '0 8px 28px rgba(212,114,14,.5)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--amber)'
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = '0 4px 20px rgba(212,114,14,.4)'
          }}
        >
          See Full Calendar
        </Link>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 600,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,.38)',
          }}
        >
          Sign up for the weekly email — never miss a show.
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ev-head-grid { grid-template-columns: 1fr !important; }
          .ev-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .ev-grid { grid-template-columns: 1fr !important; }
          .ev-grid a[style*="1 / 3"] { grid-column: auto !important; }
        }
      `}</style>
    </section>
  )
}
