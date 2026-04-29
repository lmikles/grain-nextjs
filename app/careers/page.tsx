import { Metadata } from 'next'
import Image from 'next/image'
import CareersForm from '@/components/forms/CareersForm'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Work at Grain — Careers',
  description: 'Join the Grain team. We hire people who actually like people. Walk-in interviews welcome.',
}

const perks = [
  { icon: '🍺', title: 'Shift meals & drinks', desc: 'Eat before your shift. On us.' },
  { icon: '📈', title: 'Room to grow', desc: 'We promote from within. Multiple managers came up through the ranks.' },
  { icon: '🎓', title: 'UD Training Program', desc: 'Formal management training in partnership with the University of Delaware.' },
  { icon: '🐕', title: 'Dog-friendly workplaces', desc: 'Our patios are dog-friendly. Sometimes staff dogs show up too.' },
  { icon: '🎵', title: 'Free live music', desc: 'Work where the music happens. Literally.' },
  { icon: '❤️', title: 'Community first', desc: 'We give back. A lot. And our team is part of that.' },
]

const openings = [
  { role: 'Bartender', location: 'All Locations', type: 'Full-time / Part-time' },
  { role: 'Server', location: 'All Locations', type: 'Full-time / Part-time' },
  { role: 'Line Cook', location: 'Newark & Exchange', type: 'Full-time' },
  { role: 'Barback / Support', location: 'All Locations', type: 'Part-time' },
  { role: 'Event Coordinator', location: 'Corporate', type: 'Full-time' },
]

const walkIns = [
  { location: 'Grain on Main', address: '270 East Main St · Newark', days: 'Mon–Wed', time: '3–5pm', note: '' },
  { location: 'Grain H2O', address: 'C&D Canal · Castle Trail', days: 'Wed–Thu', time: '3–6pm', note: 'Kitchen staff only' },
  { location: 'Grain Exchange', address: '591 Collaboration Way · STAR Campus', days: 'Mon–Wed', time: '2–5pm', note: '' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero — team photo full bleed */}
      <section style={{ minHeight: '70vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Image
          src="/images/team-careers.jpg"
          alt="The Grain team — people who actually like people"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,6,2,1) 0%, rgba(10,6,2,.5) 50%, rgba(10,6,2,.1) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 52px 72px', maxWidth: '720px' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>
            CAREERS
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '20px',
            }}
          >
            We hire people
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              who like people.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, marginBottom: '28px' }}>
            Grain isn&apos;t just a place to work. It&apos;s a career, a community, and a
            crew worth being part of. We&apos;re always looking for the right people.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#apply"
              style={{ padding: '14px 28px', background: 'var(--amber)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px', letterSpacing: '0.03em' }}
            >
              Apply Now
            </a>
            <a
              href="mailto:Jobs@GrainOnMain.com"
              style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.3)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
            >
              Jobs@GrainOnMain.com
            </a>
          </div>
        </div>
      </section>

      {/* Why Grain */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>
          WHY GRAIN
        </div>
        <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--night)', marginBottom: '48px' }}>
          What makes it different
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="perks-grid">
          {perks.map((perk) => (
            <div key={perk.title} className="perk-card">
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{perk.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px', fontWeight: 700, color: 'var(--night)', marginBottom: '8px' }}>
                {perk.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-mid)' }}>{perk.desc}</p>
            </div>
          ))}
        </div>
        <style>{`
          .perk-card { background: var(--cream); border-radius: 10px; padding: 28px; border-bottom: 3px solid transparent; transition: border-color .3s, transform .25s; }
          .perk-card:hover { border-bottom-color: var(--amber); transform: translateY(-4px); }
          @media (max-width: 900px) { .perks-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .perks-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Walk-in Interviews */}
      <section style={{ background: 'var(--cream)', padding: '72px 52px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '14px' }}>
          Walk-in Interviews
        </div>
        <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: 'var(--night)', marginBottom: '12px' }}>
          No appointment needed.
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '540px' }}>
          Stop by during walk-in hours at any location. Bring your personality — we&apos;ll handle the rest. Can&apos;t make the times below? Email us to arrange something.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="walkin-grid">
          {walkIns.map((w) => (
            <div key={w.location} style={{ background: 'var(--night)', borderRadius: '12px', padding: '28px', borderTop: '3px solid var(--amber)' }}>
              <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{w.location}</h3>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)', marginBottom: '16px' }}>{w.address}</p>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--amber)', marginBottom: '4px' }}>{w.days} · {w.time}</div>
              {w.note && <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.4)', fontStyle: 'italic' }}>{w.note}</div>}
            </div>
          ))}
        </div>
        <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-soft)' }}>
          Can&apos;t make those times? Email <a href="mailto:Jobs@GrainOnMain.com" style={{ color: 'var(--amber)', fontWeight: 700, textDecoration: 'none' }}>Jobs@GrainOnMain.com</a> to arrange an alternative.
        </p>
        <style>{`@media (max-width: 768px) { .walkin-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Open Positions + Form */}
      <section id="apply" style={{ background: 'var(--night)', padding: '80px 52px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>
          CURRENT OPENINGS
        </div>
        <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: '36px' }}>
          We&apos;re always looking for the right people
        </h2>
        <div style={{ display: 'grid', gap: '12px', marginBottom: '56px' }}>
          {openings.map((o) => (
            <div
              key={o.role}
              style={{ background: 'rgba(255,255,255,.05)', borderRadius: '10px', padding: '20px 24px', border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{o.role}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)' }}>{o.location} · {o.type}</div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--amber)', background: 'rgba(212,114,14,.15)', padding: '4px 12px', borderRadius: '12px', whiteSpace: 'nowrap' }}>
                Now Hiring
              </span>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }} className="careers-form-grid">
          <div>
            <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Apply now.
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: '20px' }}>
              No resume needed — just tell us who you are. We&apos;ll take it from there.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>
              A big part of the Grain experience is our team. We&apos;re looking for fun, friendly people who are eager to create great experiences.
            </p>
          </div>
          <CareersForm />
        </div>
        <style>{`@media (max-width: 900px) { .careers-form-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <EmailSignup />
    </>
  )
}
