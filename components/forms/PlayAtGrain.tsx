'use client'

import { useState } from 'react'

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  background: 'rgba(255,255,255,.06)',
  border: '1px solid rgba(255,255,255,.12)',
  borderRadius: '6px',
  color: '#fff',
  fontFamily: 'var(--font-nunito), sans-serif',
  fontSize: '15px',
  fontWeight: 600,
  outline: 'none',
  transition: 'border-color .2s',
}

export default function PlayAtGrainForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bandName: '',
    genre: '',
    links: '',
    location: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'booking', ...formData }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '32px',
          background: 'rgba(45,90,61,.2)',
          border: '1px solid rgba(45,90,61,.4)',
          borderRadius: '12px',
          color: '#7dd4a0',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎵</div>
        <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
          We got it!
        </h3>
        <p style={{ color: 'rgba(255,255,255,.6)', lineHeight: 1.7 }}>
          Someone from our booking team will be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Your Name *
          </label>
          <input name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Jane Smith" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Email *
          </label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="jane@band.com" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Phone
          </label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="(302) 555-0100" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Band / Artist Name *
          </label>
          <input name="bandName" value={formData.bandName} onChange={handleChange} required style={inputStyle} placeholder="The Grain Shakers" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Genre
          </label>
          <input name="genre" value={formData.genre} onChange={handleChange} style={inputStyle} placeholder="Indie Rock, Country, Jazz..." />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Preferred Location
          </label>
          <select name="location" value={formData.location} onChange={handleChange} style={{ ...inputStyle }}>
            <option value="">Any Location</option>
            <option value="Newark">Newark — Main St</option>
            <option value="H2O">Grain H2O — Bear</option>
            <option value="Exchange">Grain Exchange</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Links (Spotify, YouTube, SoundCloud)
        </label>
        <input name="links" value={formData.links} onChange={handleChange} style={inputStyle} placeholder="https://open.spotify.com/artist/..." />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Anything else we should know?
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell us about your act, preferred dates, or anything relevant..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '16px 36px',
          background: 'var(--amber)',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'var(--font-nunito), sans-serif',
          fontSize: '14px',
          fontWeight: 800,
          letterSpacing: '0.04em',
          cursor: 'pointer',
          transition: 'background .25s, transform .2s',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        {status === 'loading' ? 'Sending...' : 'Submit Booking Inquiry'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#f09080', fontSize: '14px', fontWeight: 600 }}>
          Something went wrong. Please try again or email booking@meetatgrain.com directly.
        </p>
      )}
    </form>
  )
}
