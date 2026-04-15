import { NextRequest, NextResponse } from 'next/server'

const WORKER_URL =
  process.env.NEXT_PUBLIC_CALENDAR_WORKER_URL ||
  'https://grain-calendar-worker.lee-1d3.workers.dev'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get('location')

  const url = new URL(`${WORKER_URL}/events`)
  if (location) url.searchParams.set('location', location)

  try {
    const res = await fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream error' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (err) {
    console.error('Events proxy error:', err)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
