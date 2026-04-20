'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        className="hidden md:flex"
        style={{
          gap: '28px',
          listStyle: 'none',
          alignItems: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { label: 'Locations', href: '/locations/newark' },
          { label: 'Menus', href: '/menus' },
          { label: "What's On", href: '/whats-happening' },
          { label: 'Events', href: '/events' },
          { label: 'Our Story', href: '/our-story' },
          { label: 'Order Online', href: '/order' },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                fontFamily: 'var(--font-nunito), sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255,255,255,.72)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(255,255,255,.72)')
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="https://order.toasttab.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-nunito), sans-serif',
              fontSize: '14px',
              fontWeight: 600,
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
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#fff',
            transition: 'all .3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#fff',
            transition: 'all .3s',
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '24px',
            height: '2px',
            background: '#fff',
            transition: 'all .3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(24,18,10,.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px 48px',
            borderTop: '1px solid rgba(255,255,255,.06)',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: 'Locations', href: '/locations/newark' },
              { label: 'Menus', href: '/menus' },
              { label: "What's On", href: '/whats-happening' },
              { label: 'Events', href: '/events' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'Careers', href: '/careers' },
              { label: 'Order Online', href: 'https://order.toasttab.com' },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '16px' }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-nunito), sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,.8)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
