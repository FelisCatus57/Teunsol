import React from 'react';
import { useTranslations } from 'next-intl';
import BackgroundImage from './backgroundImage/backgroundImage';
import Navbar from './navbar/navbar';
import Logo from './logo/logo';
import TransLocale from './transLocale/transLocale';

export default function LayoutHeader() {
  const header = useTranslations('Header');
  return (
    <>
      {/* 헤더 */}
      <header className="w-screen  h-[100vh] relative z-30">
        {/* 배경 이미지 및 텍스트*/}
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
    </>
  );
}
