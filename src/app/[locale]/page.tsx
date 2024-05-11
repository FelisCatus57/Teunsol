import React from 'react';
import { useTranslations } from 'next-intl';
import Logo from '@/components/main/header/logo';
import TransLocale from '@/components/main/header/transLocale';
import Navbar from '@/components/main/header/navbar';
import Image from 'next/image';
import BackgroundImage from '@/components/main/backgroundImage';
 
export default function Home() {
  const t = useTranslations('Header');

  return (
    <>
      {/* 헤더 */}
      {/* 배경 이미지 */}
      <header className="w-screen  h-[100vh] relative">
        {/* <Image src="/image/BackGround/메인배경1.jpg" alt="logo" layout="fill" /> */}
        <BackgroundImage />
        {/* 네비게이션 */}
        <Navbar>
          {/* 로고 */}
          <Logo />
          {/* 네비게이션 메뉴 */}
          <div className="flex w-2/3 justify-between ">
            <div>{t('Nav1')}</div>
            <div>{t('Nav2')}</div>
            <div>{t('Nav3')}</div>
            <div>{t('Nav4')}</div>
          </div>
          {/* 언어 변경 */}
          <TransLocale />
        </Navbar>
      </header>
      <div className="h-96">asdsad</div>
    </>
  );
}
