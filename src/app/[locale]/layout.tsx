import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR, Noto_Sans_JP } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

const notoSansJp = Noto_Sans_JP({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Teunsol International',
  description: 'Global Project Managemen',
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // local 언어에 따라 폰트 변경. 현재 예시로 한국어,일본어,영어만 지원
  let fontClass = notoSansKr.className;
  if (locale === 'jp') {
    fontClass = notoSansJp.className;
  }
  return (
    <html lang={locale}>
      <body className={fontClass}>{children}</body>
    </html>
  );
}
