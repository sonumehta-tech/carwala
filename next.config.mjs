/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'img.gaadicdn.com'
      },
      {
        protocol: 'https',
        hostname: 'imgd.aeplcdn.com'
      },
    ]
  }
};

export default nextConfig;
