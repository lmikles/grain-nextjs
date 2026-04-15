import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}

export interface Location {
  _id: string
  name: string
  slug: { current: string }
  shortName?: string
  tagline?: string
  addressLine1?: string
  addressLine2?: string
  mapUrl?: string
  heroHeadline?: string
  heroSubhead?: string
  descriptionShort?: string
  descriptionLong?: unknown[]
  features?: string[]
  badgeLabel?: string
  hours?: unknown[]
  happyHourNote?: string
  phone?: string
  email?: string
  onlineOrderUrl?: string
  menuUrl?: string
  accentColor?: string
}

export async function getLocations(): Promise<Location[]> {
  return client.fetch(`*[_type == "location"] | order(_createdAt asc)`)
}

export async function getLocation(slug: string): Promise<Location | null> {
  return client.fetch(
    `*[_type == "location" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function getLocationSlugs(): Promise<{ slug: string }[]> {
  const locations = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "location"]{ slug }`
  )
  return locations.map((l) => ({ slug: l.slug.current }))
}
