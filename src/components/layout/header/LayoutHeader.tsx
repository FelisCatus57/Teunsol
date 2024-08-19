'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import BackgroundImage from './backgroundImage/backgroundImage';
import Navbar from './navbar/navbar';
import Logo from './logo/logo';
import TransLocale from './transLocale/transLocale';
import HamburgerMenu from './hamburgerMenu/hamburgerMenu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function LayoutHeader() {
  const header = useTranslations('Header');
  const params = useParams<{ locale: string }>();
  const locale = params.locale;
  const pathname = usePathname();
  const isMainPage =
    pathname === '/' || pathname === '/ko' || pathname === '/en';

  const headerHeight = isMainPage ? 'h-[60vh] lg:h-[100vh]' : 'h-[10vh]';
  return (
    <>
      {/* 헤더 */}
      <header className={`w-screen  ${headerHeight} relative z-30  `}>
        {/* 배경 이미지 및 텍스트 */}
        <BackgroundImage>
          <div className="absolute inset-0 flex items-center justify-center mb-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            <div className="text-white text-center h-40 flex flex-col justify-between">
              <span className="text-lg sm:text-xl md:text-3xl mb-4">
                {header('bannerText1')}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-6xl">
                {header('bannerText2-1')}
                <span className="text-2xl sm:text-3xl md:text-6xl font-semibold">
                  {header('bannerText2-2')}
                </span>
                <span className="text-2xl sm:text-3xl md:text-6xl">
                  {header('bannerText2-3')}
                </span>
                <br />
              </span>
              <span className="text-xs sm:text-sm md:text-lg font-semibold mt-4">
                {header('bannerText3')}
              </span>
            </div>
          </div>
        </BackgroundImage>
        {/* 네비게이션 */}
        <Navbar>
          {/* 로고 */}

          <Logo />

          {/* 네비게이션 메뉴 */}
          <div className="hidden lg:flex w-[60%] justify-between">
            <span className="cursor-pointer">{header('Nav1')}</span>
            {pathname === `/${locale}/consultation` ? (
              <span className="cursor-pointer">{header('Nav2')}</span>
            ) : (
              <Link href={`/${locale}/consultation`}>
                <span className="cursor-pointer">{header('Nav2')}</span>
              </Link>
            )}
            <span className="cursor-pointer">{header('Nav3')}</span>
            <span className="cursor-pointer">{header('Nav4')}</span>
          </div>
          {/* 언어 변경 */}
          <TransLocale />
          {/* 햄버거 버튼 */}
          <HamburgerMenu />
        </Navbar>
      </header>
    </>
  );
}
