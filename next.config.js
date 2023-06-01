/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://file.refilled.co.kr/:path*",
      },
    ];
  },
}

module.exports = nextConfig
