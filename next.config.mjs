/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/contact', destination: '/', permanent: true }];
  },
};

export default nextConfig;
