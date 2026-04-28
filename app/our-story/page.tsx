import { Metadata } from 'next'
import Image from 'next/image'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Our Story — Grain Craft Bar + Kitchen',
  description: 'Grain opened in Newark in 2015 with one idea: Delaware deserves better. Named for Oliver Evans, Delaware\'s most important unknown inventor.',
}

const stats = [
  { num: '2015', label: 'Year opened in Newark' },
  { num: '3', label: 'Locations across Delaware' },
  { num: '$350K+', label: 'Raised for Delaware nonprofits' },
  { num: '0', label: 'Cover charges. Ever.' },
]

const awards = [
  { label: 'Best New Restaurant', org: 'Delaware Today' },
  { label: 'Best Brunch', org: 'Delaware Today' },
  { label: 'Best of Business', org: '2018' },
  { label: 'Fastest 50', org: 'Winner' },
  { label: "Reader's Choice", org: 'Multiple Years' },
  { label: '30+ Awards', org: 'Since 2015' },
]

const grainWay = [
  { title: 'Hire people who like people', desc: 'Our team is our product. We invest in training, culture, and career growth.' },
  { title: 'No hidden fees', desc: 'No sales tax. No credit card surcharges. Just the price on the menu.' },
  { title: 'Show up for the community', desc: 'Celebrity Bartender nights, Fork Support, first responder discounts — it\'s baked in.' },
  { title: 'Make it worth the drive', desc: 'Whatever location you come to, you\'re getting the same Grain quality and hospitality.' },
]

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--night)',
          padding: '160px 52px 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(212,114,14,.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--amber)',
              marginBottom: '16px',
            }}
          >
            OUR STORY
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '24px',
            }}
          >
            Ten years.
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--orange)' }}>
              Same neighborhood.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7 }}>
            Founded in Newark in 2015 by the O&apos;Donoghue and Mikles families.
            Named for Delaware&apos;s most important — and least recognized — inventor.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="story-grid"
        >
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              position: 'sticky',
              top: '100px',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--cream)',
                  borderRadius: '10px',
                  padding: '24px 20px',
                  borderBottom: '3px solid var(--amber)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '40px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: 'var(--amber)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-soft)', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div>
            <p style={{ fontSize: '20px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px', fontWeight: 400 }}>
              We opened on Main Street in Newark in 2015 with one simple idea: Delaware
              deserves a place where the food is genuinely good, the drinks are worth
              talking about, and nobody makes you feel like a stranger.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              We didn&apos;t open a chain. We didn&apos;t follow a playbook. We hired
              people who actually like people, and we built a culture around that.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              Come for the Crab Nachos. Stay for the bartender who remembers you.
            </p>

            <hr style={{ border: 'none', borderTop: '2px solid var(--border-warm)', margin: '36px 0' }} />

            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '32px', fontWeight: 700, color: 'var(--night)', marginBottom: '8px' }}>
              The People
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              The Grain Way isn&apos;t a slogan — it&apos;s how we operate. We invest in
              our team because we know hospitality starts with the people serving you.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '24px' }}>
              We even built a formal management training program with the University of
              Delaware. The Grain Way isn&apos;t an accident.
            </p>

            <hr style={{ border: 'none', borderTop: '2px solid var(--border-warm)', margin: '36px 0' }} />

            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '32px', fontWeight: 700, color: 'var(--night)', marginBottom: '8px' }}>
              What&apos;s Next
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-mid)' }}>
              Three locations, ten years deep, and still growing. Grain H2O brought us to
              the water. Grain Exchange brought us to STAR Campus. Whatever&apos;s next,
              it&apos;ll still feel like Grain.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Oliver Evans */}
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
            background: `
              radial-gradient(ellipse 50% 70% at 10% 60%, rgba(212,114,14,.1) 0%, transparent 55%),
              radial-gradient(ellipse 40% 50% at 90% 20%, rgba(212,114,14,.06) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Large watermark letter */}
        <div
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: '400px',
            fontWeight: 900,
            fontStyle: 'italic',
            color: 'rgba(212,114,14,.04)',
            top: '50%',
            right: '-40px',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            lineHeight: 1,
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          G
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '80px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          className="evans-grid"
        >
          {/* Left: logo + name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
            {/* The Grain logo — Oruktor at top, Oliver Evans at bottom */}
            <div style={{ position: 'relative', width: '280px', height: '280px', flexShrink: 0 }}>
              <Image
                src="/images/grain-logo.png"
                alt="Grain Craft Bar + Kitchen — featuring Oliver Evans and the Oruktor Amphibolos"
                fill
                style={{ objectFit: 'contain' }}
                sizes="280px"
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--amber)',
                  marginBottom: '10px',
                }}
              >
                Why &ldquo;Grain&rdquo;
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: 'clamp(30px, 4vw, 52px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#fff',
                  marginBottom: '6px',
                }}
              >
                Oliver Evans
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '17px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--amber)',
                }}
              >
                Newport, Delaware · 1755–1819
              </p>
            </div>
          </div>

          {/* Right: the story */}
          <div>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,.7)',
                marginBottom: '22px',
                fontStyle: 'italic',
                borderLeft: '3px solid var(--amber)',
                paddingLeft: '20px',
              }}
            >
              &ldquo;A neighborhood gastropub in celebration of Delaware&apos;s most
              important, interesting, and unknown inventor.&rdquo;
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(255,255,255,.6)', marginBottom: '20px' }}>
              Oliver Evans was born in Newport, Delaware in 1755 and recognized by the
              Smithsonian Institution as one of America&apos;s 50 greatest inventors. His
              automated flour mill technology was so revolutionary that both George Washington
              and Thomas Jefferson commissioned Evans to install it in their mills. He held
              the third patent ever issued by the U.S. Patent and Trademark Office.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(255,255,255,.6)', marginBottom: '20px' }}>
              On the banks of the Red Clay Creek in Delaware, Evans built an integrated
              production line over a century before Henry Ford would be credited with the
              idea. He also built the first self-propelled vehicle in America — the
              Oruktor Amphibolos, or &ldquo;Amphibious Digger&rdquo; — a steam-powered
              machine that crawled the cobblestone streets of Philadelphia under its own power.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(255,255,255,.6)', marginBottom: '20px' }}>
              When the Oruktor broke down under its own weight, Evans charged people admission
              to come see it. That&apos;s the kind of guy he was — visionary, a little
              stubborn, Delaware-born and Delaware-proud.
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.85,
                color: 'rgba(255,255,255,.85)',
                fontWeight: 600,
              }}
            >
              We named our bar after him because we think Delaware deserves to celebrate its
              own. His story — the success, the quirks, the failures, the genius — provides
              the spirit of everything we do.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .evans-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Awards */}
      <section style={{ background: 'var(--warm)', padding: '64px 52px' }}>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          30+ Awards Since 2015
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
          }}
        >
          {awards.map((award) => (
            <div
              key={award.label}
              style={{
                background: 'var(--cream)',
                borderRadius: '10px',
                padding: '18px 24px',
                textAlign: 'center',
                borderBottom: '3px solid var(--amber)',
                minWidth: '150px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--night)',
                  marginBottom: '4px',
                  lineHeight: 1.2,
                }}
              >
                {award.label}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-soft)' }}>
                {award.org}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Grain Way */}
      <section style={{ background: 'var(--night)', padding: '80px 52px' }}>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            marginBottom: '16px',
          }}
        >
          HOW WE OPERATE
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '48px',
          }}
        >
          The Grain Way
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
          className="grain-way-grid"
        >
          {grainWay.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '28px',
                borderLeft: '3px solid var(--amber)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,.55)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .grain-way-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Community pull quote */}
      <section style={{ background: 'var(--sage)', padding: '80px 52px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(24px, 4vw, 44px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#fff',
            maxWidth: '680px',
            margin: '0 auto 16px',
            lineHeight: 1.4,
          }}
        >
          &ldquo;We&apos;re from here. We act like it.&rdquo;
        </p>
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>
          $350K+ raised for Delaware organizations since 2015
        </p>
      </section>

      <EmailSignup />
    </>
  )
}
