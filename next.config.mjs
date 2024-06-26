/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
  },
};

export default nextConfig;
