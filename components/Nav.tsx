'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const locations = [
  { label: 'Grain on Main', sub: 'Newark · Est. 2015', href: '/locations/newark' },
  { label: 'Grain H2O', sub: 'C&D Canal · Castle Trail', href: '/locations/h2o' },
  { label: 'Grain Exchange', sub: 'STAR Campus · Newark', href: '/locations/exchange' },
  { label: 'Grain on the Rocks', sub: 'Lewes · Independently owned', href: 'https://grainontheroacks.com', external: true },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [locOpen, setLocOpen] = useState(false)
  const locCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openLoc = () => {
    if (locCloseTimer.current) clearTimeout(locCloseTimer.current)
    setLocOpen(true)
  }
  const closeLoc = () => {
    locCloseTimer.current = setTimeout(() => setLocOpen(false), 180)
  }

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Menus', href: '/menus' },
    { label: "What's On", href: '/whats-happening' },
    { label: 'Events', href: '/events' },
    { label: 'Our Story', href: '/our-story' },
  ]

  const linkStyle = {
    fontFamily: 'var(--font-nunito), sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255,255,255,.72)' as const,
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'color .2s',
  }

  return (
    <nav
      id="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: solid ? '14px 48px' : '22px 48px',
        background: solid ? 'rgba(24,18,10,.97)' : 'transparent',
        backdropFilter: solid ? 'blur(20px)' : 'none',
        boxShadow: solid ? '0 2px 32px rgba(0,0,0,.3)' : 'none',
        transition: 'all .4s ease',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-fraunces), serif',
          fontSize: '20px',
          fontWeight: 700,
          fontStyle: 'italic',
          color: '#fff',
          letterSpacing: '-0.01em',
          textDecoration: 'none',
        }}
      >
        Grain Craft Bar + Kitchen
      </Link>

      {/* Desktop nav */}
      <ul
        style={{
          gap: '28px',
          listStyle: 'none',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          display: 'flex',
        }}
        className="nav-desktop"
      >
        {/* Locations dropdown */}
        <li style={{ position: 'relative' }}>
          <button
            style={{
              ...linkStyle,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            onMouseEnter={openLoc}
            onMouseLeave={closeLoc}
            onClick={() => setLocOpen(!locOpen)}
          >
            Locations
            <span style={{ fontSize: '10px', opacity: 0.6, marginTop: '1px' }}>▾</span>
          </button>

          {/* Dropdown */}
          {locOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 16px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(20,14,6,.98)',
                backdropFilter: 'blur(20px)',
                borderRadius: '10px',
                padding: '10px',
                minWidth: '240px',
                boxShadow: '0 20px 60px rgba(0,0,0,.5)',
                border: '1px solid rgba(255,255,255,.08)',
                zIndex: 400,
              }}
              onMouseEnter={openLoc}
              onMouseLeave={closeLoc}
            >
              {locations.map((loc, i) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  target={loc.external ? '_blank' : undefined}
                  rel={loc.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setLocOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    transition: 'background .15s',
                    borderTop: i === 3 ? '1px solid rgba(255,255,255,.07)' : 'none',
                    marginTop: i === 3 ? '6px' : '0',
                    paddingTop: i === 3 ? '14px' : '10px',
                  }}
                  className="loc-dropdown-item"
                >
                  <div style={{ fontSize: '14px', fontWeight: 700, color: i === 3 ? 'rgba(255,255,255,.45)' : '#fff', marginBottom: '2px' }}>
                    {loc.label}
                    {loc.external && <span style={{ fontSize: '10px', marginLeft: '5px', opacity: 0.4 }}>↗</span>}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.35)', fontWeight: 500 }}>
                    {loc.sub}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Regular links */}
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={linkStyle}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,.72)')}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Order CTA */}
        <li>
          <Link
            href="/order"
            style={{
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              background: 'var(--amber)',
              padding: '8px 20px',
              borderRadius: '24px',
              letterSpacing: '0.01em',
              transition: 'background .2s, transform .2s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--amber-bright)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--amber)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Order Online
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all .3s', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(20,14,6,.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px 32px',
            borderTop: '1px solid rgba(255,255,255,.06)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '12px' }}>Locations</div>
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                target={loc.external ? '_blank' : undefined}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,.8)', textDecoration: 'none', marginBottom: '12px' }}
              >
                {loc.label}
              </Link>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '20px' }}>
            {[...navLinks, { label: 'Careers', href: '/careers' }, { label: 'Order Online', href: '/order' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: '16px', fontWeight: 700, color: 'rgba(255,255,255,.7)', textDecoration: 'none', marginBottom: '14px' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .loc-dropdown-item:hover { background: rgba(255,255,255,.07) !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
