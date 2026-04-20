import { WeatherData } from '@/lib/events'

export default function PatioBadge({ weather }: { weather: WeatherData | null }) {
  if (!weather?.showPatioBadge || !weather.day) return null

  const temp = weather.details?.tempF ? `${Math.round(weather.details.tempF)}°F · ` : ''

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(212,114,14,.15)',
        border: '1px solid rgba(212,114,14,.3)',
        borderRadius: '20px',
        padding: '6px 16px',
        fontSize: '12px',
        fontWeight: 700,
        color: 'var(--orange)',
      }}
    >
      <span>☀️</span>
      <span>{temp}{weather.message}</span>
    </div>
  )
}
