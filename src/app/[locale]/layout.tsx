import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR, Noto_Sans_JP } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import LayoutFooter from '@/components/layout/footer/LayoutFooter';
import LayoutHeader from '@/components/layout/header/LayoutHeader';

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
  description: 'Global Project Management',
  openGraph: {
    title: 'Teunsol International',
    description: 'Global Project Management',
  },
};

export default async function LocaleLayout({
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

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Failed to load messages:', error);
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        />
      </head>
      <body className={fontClass}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
