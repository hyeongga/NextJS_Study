/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blow/:path*", // 재접속 할 주소 (:path*의 경우, 뒤어 어떤 값이 와도 중간 경로만 변함)
        permanent: false,
      },
      {
        source: "/google",
        destination: "https://www.google.com/", //외부 주소도 가능
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
