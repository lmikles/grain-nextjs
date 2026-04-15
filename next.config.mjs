/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Allow Sanity Studio to work
  transpilePackages: ['next-sanity'],
}

export default nextConfig
