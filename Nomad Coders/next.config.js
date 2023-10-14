/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form", // 재접속 할 주소 (외부주소도 가능)
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
