/**
 * Run with: npx tsx scripts/seed-locations.ts
 * Requires SANITY_API_TOKEN and NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 */
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const locations = [
  {
    _type: 'location',
    name: 'Grain on Main',
    slug: { _type: 'slug', current: 'newark' },
    shortName: 'Newark',
    tagline: 'The original. Est. 2015.',
    addressLine1: 'Main Street',
    addressLine2: 'Newark, DE',
    heroHeadline: 'Where It All Started',
    heroSubhead: 'Dog-friendly patio, weekly live music, and the full Beer Bible.',
    descriptionShort:
      'Our original location. Dog-friendly patio, weekly live music, and free off-street parking.',
    features: ['Dogs Welcome', 'Live Music', 'Patio', 'Free Parking'],
    badgeLabel: 'Est. 2015 · The Original',
    accentColor: '#d4720e',
  },
  {
    _type: 'location',
    name: 'Grain H2O',
    slug: { _type: 'slug', current: 'h2o' },
    shortName: 'H2O',
    tagline: "Delaware's waterfront bar.",
    addressLine1: 'C+D Canal on the Castle Trail',
    addressLine2: 'Summit North Marina on the C+D Canal',
    heroHeadline: 'Drinks on the Water',
    heroSubhead:
      'Stunning waterfront views, an outdoor stage built for full bands and a marina patio.',
    descriptionShort:
      'Our neighborhood spot on the water. Stunning waterfront views, an outdoor stage built for full bands and a marina patio that makes you forget tomorrow exists.',
    features: ['Dogs Welcome', 'Live Music', 'Waterfront', 'Outdoor Stage'],
    badgeLabel: 'Waterfront · Castle Trail',
    accentColor: '#2d5a3d',
  },
  {
    _type: 'location',
    name: 'Grain Exchange',
    slug: { _type: 'slug', current: 'exchange' },
    shortName: 'Exchange',
    tagline: "Middletown's craft bar.",
    addressLine1: 'STAR Campus',
    addressLine2: 'Newark, DE',
    heroHeadline: "Newark's First Outdoor Patio in 30 Years",
    heroSubhead:
      'Big city energy, a great lawn, and UD Athletics right across the street.',
    descriptionShort:
      "Newark's first outdoor patio in 30 years. Big city energy, a great lawn, and UD Athletics right across the street.",
    features: ['Dogs Welcome', 'Live Music', 'Patio', 'Fire Features'],
    badgeLabel: 'STAR Campus · Newark',
    accentColor: '#b03a18',
  },
]

async function seed() {
  console.log('Seeding Sanity locations...')
  for (const loc of locations) {
    const result = await client.create(loc)
    console.log(`Created: ${loc.name} (${result._id})`)
  }
  console.log('Done!')
}

seed().catch(console.error)
