import React from 'react';
import { useTranslations } from 'next-intl';
import BackgroundImage from '@/components/home/header/backgroundImage';
import Navbar from '@/components/home/header/navbar';
import Logo from '@/components/home/header/logo';
import TransLocale from '@/components/home/header/transLocale';
import Contents1 from '@/components/home/main/contents1/Contents1';

export default function Home() {
  const header = useTranslations('MainHeader');
  return (
    <>
      {/* 헤더 */}
      {/* 배경 이미지 */}
      <header className="w-screen  h-[100vh] relative">
        <BackgroundImage>
          <div className="absolute inset-0 flex items-center justify-center mb-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            <div className="text-white text-3xl text-center  h-40 flex flex-col justify-between ">
              <span className="">{header('bannerText1')}</span>
              <br />
              <span className="text-6xl mb-4">
                {header('bannerText2')}
                <br />
              </span>
              <span className="text-lg"> {header('bannerText3')}</span>
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
      </main>
    </>
  );
}
