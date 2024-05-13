import createNextIntlPlugin from 'next-intl/plugin';
import 'dotenv/config';

const withNextIntl = createNextIntlPlugin();

dotenv.config({ path: '.env.local' });//설정

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: { //Next.js 이미지경로 설정
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.teunsol.co.kr', // 실제 도메인
      },
    ],
  },
};

export default withNextIntl(nextConfig);
