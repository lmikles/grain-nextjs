'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GrainEvent } from '@/lib/events'

type EventType = 'music' | 'bingo' | 'trivia' | 'wings' | 'brunch' | 'special'

const typeColors: Record<EventType, { bg: string; color: string }> = {
  music: { bg: 'rgba(212,114,14,.28)', color: 'var(--orange)' },
  bingo: { bg: 'rgba(45,90,61,.5)', color: '#7dd4a0' },
  trivia: { bg: 'rgba(26,92,88,.4)', color: '#6dccc8' },
  wings: { bg: 'rgba(176,58,24,.35)', color: '#f09080' },
  brunch: { bg: 'rgba(240,176,48,.2)', color: 'var(--gold)' },
  special: { bg: 'rgba(212,114,14,.2)', color: 'var(--orange)' },
}

const fallbackEvents: GrainEvent[] = [
  { id: '1', title: 'Grain Bingo w/ Rylie', time: '6pm', location: 'Newark', eventType: 'bingo', date: 'Mon' },
  { id: '2', title: 'All You Can Eat Wings', time: '4pm', location: 'Exchange', eventType: 'wings', date: 'Mon' },
  { id: '3', title: 'Trivia Night', time: '6pm', location: 'Newark', eventType: 'trivia', date: 'Tue' },
  { id: '4', title: 'Weekend Wind Down', time: '5pm', location: 'Exchange', eventType: 'music', date: 'Thu' },
  { id: '5', title: 'Live Music', time: '7pm', location: 'Newark', eventType: 'music', date: 'Sat' },
]

interface ThisWeekCardProps {
  events: GrainEvent[]
}

export default function ThisWeekCard({ events: initialEvents }: ThisWeekCardProps) {
  const [events, setEvents] = useState<GrainEvent[]>(initialEvents.length > 0 ? initialEvents.slice(0, 5) : [])
  const [loading, setLoading] = useState(initialEvents.length === 0)

  useEffect(() => {
    if (initialEvents.length === 0) {
      fetch('/api/events')
        .then((r) => r.json())
        .then((data: unknown) => {
          const evArr = Array.isArray(data) ? data : (data as { events?: GrainEvent[] })?.events || []
          setEvents((evArr as GrainEvent[]).slice(0, 5))
        })
        .catch(() => setEvents(fallbackEvents))
        .finally(() => setLoading(false))
    }
  }, [initialEvents.length])

  const displayEvents = events.length > 0 ? events : fallbackEvents

  return (
    <div
      className="animate-fade-in-delay"
      style={{
        background: 'rgba(255,255,255,.06)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: '12px',
        padding: '28px 28px 24px',
        minWidth: '260px',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--orange)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '18px',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            background: 'var(--orange)',
            borderRadius: '50%',
          }}
          className="animate-pulse-dot"
        />
        This Week
      </div>

      {loading ? (
        // Loading skeleton
        <>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,.08)',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  height: '10px',
                  width: '40px',
                  background: 'rgba(255,255,255,.1)',
                  borderRadius: '4px',
                  marginBottom: '6px',
                  animation: 'pulse 1.5s ease infinite',
                }}
              />
              <div
                style={{
                  height: '14px',
                  width: '160px',
                  background: 'rgba(255,255,255,.1)',
                  borderRadius: '4px',
                  marginBottom: '4px',
                  animation: 'pulse 1.5s ease infinite',
                }}
              />
            </div>
          ))}
        </>
      ) : (
        displayEvents.map((event) => {
          const typeKey = (event.eventType?.toLowerCase() as EventType) || 'special'
          const colors = typeColors[typeKey] || typeColors.special

          return (
            <div
              key={event.id}
              style={{
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,.08)',
                marginBottom: '10px',
              }}
            >
              {event.date && (
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.38)',
                    marginBottom: '3px',
                  }}
                >
                  {event.date}
                </div>
              )}
              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '2px',
                }}
              >
                {event.title}
              </div>
              {(event.location || event.time) && (
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,.45)',
                  }}
                >
                  {event.location}
                  {event.time && ` · ${event.time}`}
                </div>
              )}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  marginTop: '4px',
                  background: colors.bg,
                  color: colors.color,
                }}
              >
                {event.eventType || 'Event'}
              </span>
            </div>
          )
        })
      )}

      <Link
        href="/whats-happening"
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '16px',
          padding: '10px',
          background: 'rgba(212,114,14,.18)',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 700,
          color: 'var(--orange)',
          textDecoration: 'none',
          transition: 'background .2s',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = 'rgba(212,114,14,.3)')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = 'rgba(212,114,14,.18)')
        }
      >
        See Full Calendar →
      </Link>
    </div>
  )
}
