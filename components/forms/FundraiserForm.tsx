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

export default function FundraiserForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventType: '',
    attendance: '',
    preferredDate: '',
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
        body: JSON.stringify({ formType: 'fundraiser', ...formData }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '32px', background: 'rgba(45,90,61,.2)', border: '1px solid rgba(45,90,61,.4)', borderRadius: '12px', color: '#7dd4a0', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
          We got it. Someone from our team will be in touch within 24 hours.
        </h3>
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
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Organization</label>
          <input name="organization" value={formData.organization} onChange={handleChange} style={inputStyle} placeholder="Your org name" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email *</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="email@org.com" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Phone</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="(302) 555-0100" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Event Type</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange} style={inputStyle}>
            <option value="">Select type...</option>
            <option value="Celebrity Bartender">Celebrity Bartender Night</option>
            <option value="Fork Support">Fork Support</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Private Party">Private Party</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Expected Attendance</label>
          <input name="attendance" value={formData.attendance} onChange={handleChange} style={inputStyle} placeholder="~50 guests" />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Preferred Date(s)</label>
        <input name="preferredDate" value={formData.preferredDate} onChange={handleChange} style={inputStyle} placeholder="e.g. Any Thursday in March" />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your event and goals..." />
      </div>

      <button type="submit" disabled={status === 'loading'} style={{ padding: '16px 36px', background: 'var(--amber)', color: '#fff', border: 'none', borderRadius: '6px', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', cursor: 'pointer', transition: 'background .25s', opacity: status === 'loading' ? 0.7 : 1 }}>
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'error' && <p style={{ color: '#f09080', fontSize: '14px', fontWeight: 600 }}>Something went wrong. Please try again or email events@meetatgrain.com directly.</p>}
    </form>
  )
}
