import { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Lunch Exchange, Catering & Rewards — Grain Exchange',
  description:
    'The Lunch Exchange brings Grain to your desk. Catering for any size. Plus our Exchange Rewards loyalty program.',
}

const lunchItems = [
  { name: 'Lunch Boxes', desc: 'Individual boxed lunches, perfect for meetings and working sessions. Sandwich, side, and dessert.' },
  { name: 'Party Trays', desc: 'Shareable trays of our most popular apps and mains — Crab Nachos, wings, sliders. Built for groups.' },
  { name: 'Wings', desc: 'By the pound or in bulk. Sauced to order. A STAR Campus lunch staple.' },
  { name: 'Custom Orders', desc: 'Need something specific? Contact our catering team and we\'ll build it around your event.' },
]

const cateringPerks = [
  { icon: '🚚', title: 'Delivery to Campus', desc: 'We deliver to STAR Campus and South Campus. No need to leave the office.' },
  { icon: '🧺', title: 'Drop-off or Full Service', desc: 'We can drop and go, or our team can stay and help serve and clean up. Your call.' },
  { icon: '📋', title: 'EZCater Online', desc: 'Order instantly through EZCater — no phone tag, no hassle. Pick your items and go.' },
  { icon: '📞', title: 'Book a Consultation', desc: 'For bigger events, schedule a 15-minute call with our catering team on Calendly.' },
]

const rewardSteps = [
  { num: '01', title: 'Sign Up', reward: '+5 points free', desc: 'Create your account and get 5 points just for joining. No purchase required.' },
  { num: '02', title: 'Eat & Drink', reward: '1 pt per $1 spent', desc: 'Every dollar you spend at Grain Exchange earns one point. Lunch, happy hour, dinner — it all counts.' },
  { num: '03', title: 'Earn $10 Off', reward: 'At 100 points', desc: 'Hit 100 points and we\'ll automatically credit your account a $10 certificate to use on your next visit.' },
]

export default function LunchExchangePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
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
            background: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(176,58,24,.14) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#b03a18',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '20px',
              marginBottom: '20px',
            }}
          >
            Grain Exchange · STAR Campus
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(40px, 6vw, 76px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: '22px',
            }}
          >
            Grain built
            <br />
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#f09080' }}>
              for the workday.
            </em>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: '12px' }}>
            The Lunch Exchange brings Grain right to your campus. Order for your team, cater
            your next meeting, and earn rewards every time you come back.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.35)', lineHeight: 1.6, marginBottom: '36px' }}>
            591 Collaboration Way · STAR Campus · Newark, DE · (302) 722-2307
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://www.ezcater.com/catering/grain-exchange-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '14px 28px', background: '#b03a18', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '4px' }}
            >
              🧺 Order Catering Now
            </a>
            <a
              href="#rewards"
              style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.3)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
            >
              🏆 Exchange Rewards
            </a>
          </div>
        </div>
      </section>

      {/* ── Lunch Exchange Program ────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="lunch-grid"
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '14px' }}>
              The Lunch Exchange
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(28px, 4vw, 46px)',
                fontWeight: 700,
                color: 'var(--night)',
                lineHeight: 1.05,
                marginBottom: '20px',
              }}
            >
              Real food.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--amber)', fontWeight: 300 }}>
                Delivered to your desk.
              </em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '14px' }}>
              Grain Exchange is right on STAR Campus — which means your team can have
              restaurant-quality lunch without anyone leaving the building.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '28px' }}>
              We deliver to STAR Campus and South Campus. Party trays, lunch boxes, wings —
              order through EZCater or give us a call.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.ezcater.com/catering/grain-exchange-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '13px 24px', background: 'var(--night)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px', letterSpacing: '0.02em' }}
              >
                Order on EZCater →
              </a>
              <a
                href="tel:3027222307"
                style={{ padding: '12px 20px', border: '2px solid var(--night)', color: 'var(--night)', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
              >
                (302) 722-2307
              </a>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
            className="lunch-items-grid"
          >
            {lunchItems.map((item) => (
              <div
                key={item.name}
                style={{
                  background: 'var(--cream)',
                  borderRadius: '10px',
                  padding: '24px',
                  borderTop: '3px solid #b03a18',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--night)',
                    marginBottom: '8px',
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-mid)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .lunch-grid { grid-template-columns: 1fr !important; }
            .lunch-items-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 500px) {
            .lunch-items-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Catering ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--night)', padding: '80px 52px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '14px' }}>
            Catering
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '16px',
            }}
          >
            We&apos;ll feed your whole team.
            <br />
            <em style={{ fontStyle: 'italic', color: '#f09080', fontWeight: 300 }}>
              You just show up.
            </em>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: '580px' }}>
            Party trays, lunch boxes, wings and more — for pickup or delivery. Order online
            in minutes or schedule a call to plan something bigger.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
          className="catering-grid"
        >
          {cateringPerks.map((perk) => (
            <div
              key={perk.title}
              style={{
                background: 'rgba(255,255,255,.05)',
                borderRadius: '10px',
                padding: '28px 22px',
                borderBottom: '2px solid rgba(176,58,24,.4)',
                transition: 'background .25s',
              }}
              className="catering-card"
            >
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{perk.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                {perk.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,.45)' }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '48px',
            padding: '36px 40px',
            background: 'rgba(176,58,24,.12)',
            borderRadius: '12px',
            border: '1px solid rgba(176,58,24,.3)',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
          className="catering-cta-bar"
        >
          <div>
            <p style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              Ready to order or plan something bigger?
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.45)' }}>
              Email us at <a href="mailto:catering@grainonmain.com" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 700 }}>catering@grainonmain.com</a> or book a quick call.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://www.ezcater.com/catering/grain-exchange-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '13px 24px', background: '#b03a18', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px' }}
            >
              Order on EZCater
            </a>
            <a
              href="https://calendly.com/catering-grainonmain/15min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 22px', border: '2px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
            >
              📅 Book a Call
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .catering-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            .catering-grid { grid-template-columns: 1fr !important; }
          }
          .catering-card:hover { background: rgba(255,255,255,.08) !important; }
        `}</style>
      </section>

      {/* ── Rewards Program ──────────────────────────────────────── */}
      <section id="rewards" style={{ background: 'var(--cream)', padding: '80px 52px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="rewards-grid"
        >
          {/* Left */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b03a18', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#b03a18' }} />
              Exchange Rewards
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 700,
                color: 'var(--night)',
                lineHeight: 1.05,
                marginBottom: '20px',
              }}
            >
              Come back.
              <br />
              <em style={{ fontStyle: 'italic', color: '#b03a18', fontWeight: 300 }}>
                Get rewarded.
              </em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '14px' }}>
              Grain Exchange has its own loyalty program, exclusive to our STAR Campus
              location. Every dollar you spend earns points. Points turn into dollars off
              your next visit.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-soft)', marginBottom: '32px', fontStyle: 'italic', borderLeft: '3px solid #b03a18', paddingLeft: '14px' }}>
              Exchange Rewards is exclusive to the Grain Exchange location.
            </p>
            <a
              href="https://www.toasttab.com/grain-new-executive-location-591-collaboration-way/loyalty"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '14px 32px', background: '#b03a18', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '4px' }}
            >
              Join Rewards Free →
            </a>
          </div>

          {/* Right: steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {rewardSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '24px 28px',
                  boxShadow: '0 2px 16px rgba(0,0,0,.06)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces), serif',
                    fontSize: '36px',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: 'rgba(176,58,24,.2)',
                    lineHeight: 1,
                    minWidth: '48px',
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px', fontWeight: 700, color: 'var(--night)', marginBottom: '4px' }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-mid)', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
                <div
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(176,58,24,.1)',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#b03a18',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.reward}
                </div>
              </div>
            ))}

            {/* Stat callout */}
            <div
              style={{
                background: '#b03a18',
                borderRadius: '12px',
                padding: '24px 28px',
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '44px', fontWeight: 900, fontStyle: 'italic', color: '#fff', lineHeight: 1 }}>$10</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.6)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>off certificate</div>
              </div>
              <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,.2)' }} />
              <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px', lineHeight: 1.6 }}>
                Automatically issued when you hit <strong style={{ color: '#fff' }}>100 points</strong>.<br />
                Start with <strong style={{ color: '#fff' }}>5 free points</strong> just for signing up.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .rewards-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--night)',
          padding: '80px 52px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          On STAR Campus? You&apos;re already home.
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', marginBottom: '32px', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 32px' }}>
          Walk in for lunch, order catering for the team, or start earning rewards today.
          Grain Exchange is your campus restaurant.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://order.toasttab.com/online/grain-new-executive-location-591-collaboration-way"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '14px 28px', background: '#b03a18', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '14px', fontWeight: 800, textDecoration: 'none', borderRadius: '4px', letterSpacing: '0.03em' }}
          >
            🛒 Order Online
          </a>
          <a
            href="https://www.ezcater.com/catering/grain-exchange-3"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
          >
            🧺 Order Catering
          </a>
          <Link
            href="/locations/exchange"
            style={{ padding: '13px 24px', border: '2px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: 'var(--font-nunito), sans-serif', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '4px' }}
          >
            📍 Location Info
          </Link>
        </div>
      </section>

      <EmailSignup />
    </>
  )
}
