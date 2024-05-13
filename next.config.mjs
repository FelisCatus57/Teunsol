import createNextIntlPlugin from 'next-intl/plugin';

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
        pathname: `${process.env.NEXT_PUBLIC_IMGURL}/**`,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
