import { NextResponse } from 'next/server'

const WORKER_URL =
  process.env.NEXT_PUBLIC_CALENDAR_WORKER_URL ||
  'https://grain-calendar-worker.lee-1d3.workers.dev'

export async function GET() {
  try {
    const res = await fetch(`${WORKER_URL}/weather`, {
      next: { revalidate: 1800 },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream error' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    })
  } catch (err) {
    console.error('Weather proxy error:', err)
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 })
  }
}
