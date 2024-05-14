import React from 'react';
import { useTranslations } from 'next-intl';
import BackgroundImage from '@/components/main/header/backgroundImage';
import Navbar from '@/components/main/header/navbar';
import Logo from '@/components/main/header/logo';
import TransLocale from '@/components/main/header/transLocale';
import Contents1 from '@/components/main/contents1/Contents1';
import Contents2 from '@/components/main/contents2/Contents2';
import Contents3 from '@/components/main/contents3/Contents3';

export default function Home() {
  const header = useTranslations('MainHeader');
  return (
    <>
      {/* 헤더 */}
      {/* 배경 이미지 */}
      <header className="w-screen  h-[100vh] relative">
        <BackgroundImage>
          <div className="absolute inset-0 flex items-center  justify-center mb-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            <div className="text-white text-3xl text-center  h-40 flex flex-col justify-between ">
              <span>{header('bannerText1')}</span>
              <br />
              <span className="text-6xl mb-4 ">
                {header('bannerText2-1')}
                <span className="text-6xl mb-4 font-semibold">
                  {header('bannerText2-2')}
                </span>
                <span className="text-6xl mb-4 ">
                  {header('bannerText2-3')}
                </span>
                <br />
              </span>
              <span className="text-lg font-semibold">
                {' '}
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
          <div className="flex w-2/3 justify-between ">
            <span className="cursor-pointer">{header('Nav1')}</span>
            <span className="cursor-pointer">{header('Nav2')}</span>
            <span className="cursor-pointer">{header('Nav3')}</span>
            <span className="cursor-pointer">{header('Nav4')}</span>
          </div>
          {/* 언어 변경 */}
          <TransLocale />
        </Navbar>
      </header>
      <main>
        <Contents1 />
        <Contents2 />
        <Contents3 />
      </main>
    </>
  );
}
