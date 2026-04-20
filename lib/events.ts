const WORKER_URL = process.env.NEXT_PUBLIC_CALENDAR_WORKER_URL || 'https://grain-calendar-worker.lee-1d3.workers.dev'

export interface GrainEvent {
  id: string
  title: string
  date?: string
  time?: string
  location?: string
  locationName?: string
  type?: string
  description?: string
  featured?: boolean
  recurring?: boolean
  freeAdmission?: boolean
}

export async function fetchEvents(location?: string): Promise<GrainEvent[]> {
  try {
    const url = new URL(`${WORKER_URL}/events`)
    if (location) url.searchParams.set('location', location)
    const res = await fetch(url.toString(), { next: { revalidate: 300 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : data.events || []
  } catch {
    return []
  }
}

export interface WeatherData {
  showPatioBadge: boolean
  day: string | null
  message: string
  details?: {
    tempF: number
    precipProbability: number
    windMph: number
  }
}

export async function fetchWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(`${WORKER_URL}/weather`, { next: { revalidate: 1800 } })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}
