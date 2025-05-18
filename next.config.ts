/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['qffyjnqpreeidnmytgpj.supabase.co'],
  },
}

module.exports = nextConfig

