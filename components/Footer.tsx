'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0e0904', padding: '64px 52px 34px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(255,255,255,.06)',
          marginBottom: '28px',
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: '22px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#fff',
              marginBottom: '6px',
            }}
          >
            Grain Craft Bar + Kitchen
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--amber)',
              marginBottom: '14px',
            }}
          >
            Proudly Delaware since 2015
          </div>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(255,255,255,.28)',
              lineHeight: 1.75,
            }}
          >
            Part of the OMG Hospitality family.
            <br />
            Three locations. One neighborhood feeling.
          </p>
        </div>

        {/* Visit */}
        <FooterCol
          title="Visit"
          links={[
            { label: 'Newark — Main St', href: '/locations/newark' },
            { label: 'Grain H2O — Bear', href: '/locations/h2o' },
            { label: 'Grain Exchange', href: '/locations/exchange' },
          ]}
        />

        {/* Explore */}
        <FooterCol
          title="Explore"
          links={[
            { label: 'Menus', href: '/menus' },
            { label: "What's Happening", href: '/whats-happening' },
            { label: 'The Beer Bible', href: '/menus#beer-bible' },
            { label: 'Our Story', href: '/our-story' },
          ]}
        />

        {/* Connect */}
        <FooterCol
          title="Connect"
          links={[
            { label: 'Private Events', href: '/events' },
            { label: 'Fundraisers', href: '/events#fundraiser' },
            { label: 'Lunch Exchange', href: '/lunch-exchange' },
            { label: 'Careers', href: '/careers' },
            { label: 'Gift Cards', href: 'https://grain.bigcartel.com', external: true },
          ]}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'rgba(255,255,255,.16)',
          }}
        >
          © 2025 Grain Craft Bar + Kitchen · MeetAtGrain.com
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'Instagram', href: 'https://instagram.com/meetatgrain' },
            { label: 'Facebook', href: 'https://facebook.com/meetatgrain' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,.26)',
                textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--gold)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(255,255,255,.26)')
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}) {
  return (
    <div>
      <h4
        style={{
          fontSize: '10px',
          fontWeight: 800,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(212,114,14,.6)',
          marginBottom: '18px',
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link.href} style={{ marginBottom: '10px' }}>
            <Link
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgba(255,255,255,.32)',
                textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(255,255,255,.7)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(255,255,255,.32)')
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
