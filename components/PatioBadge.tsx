import { WeatherData, isGoodPatioWeather, formatTemp } from '@/lib/weather'

export default function PatioBadge({ weather }: { weather: WeatherData | null }) {
  if (!isGoodPatioWeather(weather)) return null

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
      <span>
        {weather?.temp !== undefined ? formatTemp(weather.temp) : ''} — Patio weather today
      </span>
    </div>
  )
}
