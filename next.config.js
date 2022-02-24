/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.aha.video", "image-resizer-cloud-api.akamaized.net"],
  },
}

module.exports = nextConfig
