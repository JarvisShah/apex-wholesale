/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
          unoptimized: false,
          formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    poweredByHeader: false,
    headers: async () => {
          return [
            {
                      source: '/:path*',
                      headers: [
                        {
                                      key: 'X-DNS-Prefetch-Control',
                                      value: 'on',
                        },
                        {
                                      key: 'Strict-Transport-Security',
                                      value: 'max-age=31536000; includeSubDomains',
                        },
                        {
                                      key: 'X-Frame-Options',
                                      value: 'SAMEORIGIN',
                        },
                        {
                                      key: 'X-Content-Type-Options',
                                      value: 'nosniff',
                        },
                        {
                                      key: 'X-XSS-Protection',
                                      value: '1; mode=block',
                        },
                                ],
            },
                ];
    },
};

export default nextConfig;
