/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  removeConsole: true,
  images: {
    domains: ["leverageedublog.s3.ap-south-1.amazonaws.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
