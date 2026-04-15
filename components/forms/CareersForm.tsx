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

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
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
        body: JSON.stringify({ formType: 'careers', ...formData }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '32px', background: 'rgba(45,90,61,.2)', border: '1px solid rgba(45,90,61,.4)', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
          Application received!
        </h3>
        <p style={{ color: 'rgba(255,255,255,.6)', lineHeight: 1.7 }}>
          We&apos;ll be in touch soon. Thanks for wanting to be part of the Grain crew.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your Name" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email *</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="you@email.com" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Phone</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="(302) 555-0100" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Position Interested In *</label>
          <input name="position" value={formData.position} onChange={handleChange} required style={inputStyle} placeholder="Bartender, Server, etc." />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Experience</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your relevant experience..." />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Availability</label>
        <input name="availability" value={formData.availability} onChange={handleChange} style={inputStyle} placeholder="e.g. Weekends + 2 weeknights" />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Anything else? *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Why Grain? What makes you a great fit for our team?" />
      </div>

      <button type="submit" disabled={status === 'loading'} style={{ padding: '16px 36px', background: 'var(--amber)', color: '#fff', border: 'none', borderRadius: '6px', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', cursor: 'pointer', transition: 'background .25s', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Sending...' : 'Apply Now'}
      </button>

      {status === 'error' && <p style={{ color: '#f09080', fontSize: '14px', fontWeight: 600 }}>Something went wrong. Please try again or email careers@meetatgrain.com directly.</p>}
    </form>
  )
}
