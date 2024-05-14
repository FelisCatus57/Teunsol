import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ko', 'jp'], // 지원 언어
  defaultLocale: 'ko', // 기본 언어
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/:locale(ko|en|jp)/:path*'],
};
