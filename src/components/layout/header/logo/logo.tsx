'use client';

import React, { useEffect, useState } from 'react';
import BlackKlogo from '../../../../../public/image/svg/NonCC(all).svg'; //NonCC(all).svg
import BlackElogo from '../../../../../public/image/svg/NonCC(en).svg';
import WhiteKlogo from '../../../../../public/image/svg/WTCC(all).svg';
import WhiteElogo from '../../../../../public/image/svg/WTCC(en).svg';
import { useParams } from 'next/navigation';

export default function Logo() {
  const params = useParams<{ locale: string }>();
  const locale = params.locale;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isScrolled ? (
        // 스크롤이 true인 경우
        locale === 'ko' ? (
          <BlackKlogo className="absolute left-2 w-32 md:left-10 md:w-40" />
        ) : (
          <BlackElogo className="absolute left-2 w-32 md:left-10 md:w-40" />
        )
      ) : // 스크롤이 false인 경우
      locale === 'ko' ? (
        <WhiteKlogo
          fill="#FFFFFF"
          className="absolute left-2 w-32 md:left-10 md:w-40"
        />
      ) : (
        <WhiteElogo
          fill="#FFFFFF"
          className="absolute left-2 w-32 md:left-10 md:w-40"
        />
      )}
    </>
  );
}
