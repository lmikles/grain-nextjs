'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // In production, this would call a Mailchimp endpoint or API route
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 800)
  }

  return (
    <section
      style={{
        background: 'var(--night)',
        padding: '96px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(212,114,14,.1) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="email-inner-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#fff',
              marginBottom: '12px',
              lineHeight: 1.1,
            }}
          >
            Get on the
            <br />
            Grain Train.
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255,255,255,.42)',
              lineHeight: 1.7,
            }}
          >
            Weekly events, specials, and the occasional heads-up worth knowing about. One
            email a week. No spam, ever.
          </p>
        </div>

        <div>
          {status === 'success' ? (
            <div
              style={{
                padding: '24px',
                background: 'rgba(45,90,61,.3)',
                borderRadius: '8px',
                border: '1px solid rgba(45,90,61,.5)',
                color: '#7dd4a0',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              You&apos;re on the list! Welcome to the Grain Train. 🍺
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  marginBottom: '14px',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,.07)',
                    border: '2px solid rgba(255,255,255,.1)',
                    borderRight: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-nunito), sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    outline: 'none',
                    borderRadius: '6px 0 0 6px',
                    transition: 'border-color .25s',
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLInputElement).style.borderColor = 'var(--amber)')
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLInputElement).style.borderColor =
                      'rgba(255,255,255,.1)')
                  }
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    padding: '16px 28px',
                    background: 'var(--amber)',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-nunito), sans-serif',
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderRadius: '0 6px 6px 0',
                    whiteSpace: 'nowrap',
                    transition: 'background .25s',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.background = 'var(--amber-bright)')
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.background = 'var(--amber)')
                  }
                >
                  {status === 'loading' ? 'Signing up...' : 'Sign Up'}
                </button>
              </form>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,.3)',
                }}
              >
                Join 2,000+ Delaware regulars already on the list.
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .email-inner-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
