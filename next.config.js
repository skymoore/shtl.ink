/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:3000",
    API_BASE_URL: "http://api.shtl.ink:8000"
  }
}

module.exports = nextConfig
