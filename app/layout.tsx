import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '700', '900'],
  style: ['normal', 'italic'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Grain Craft Bar + Kitchen — Delaware',
  description:
    'Good food, great drinks, free live music. Three locations across Delaware. Dogs welcome.',
  openGraph: {
    title: 'Grain Craft Bar + Kitchen — Delaware',
    description:
      'Good food, great drinks, free live music. Three locations across Delaware. Dogs welcome.',
    url: 'https://meetatgrain.com',
    siteName: 'Grain Craft Bar + Kitchen',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
