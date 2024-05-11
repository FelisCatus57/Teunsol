'use client';

import React, { useEffect, useState } from 'react';
import BlackKlogo from '../../../../public/Image/SVG/NonCC(all).svg';
import BlackElogo from '../../../../public/Image/SVG/NonCC(EN).svg';
import WhiteKlogo from '../../../../public/Image/SVG/BlackCC(all).svg';
import WhiteElogo from '../../../../public/Image/SVG/BlackCC(en).svg';
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
          <BlackKlogo className="absolute left-10 w-36" />
        ) : (
          <BlackElogo className="absolute left-10 w-36" />
        )
      ) : // 스크롤이 false인 경우
      locale === 'ko' ? (
        <WhiteKlogo className="absolute left-10 w-36" />
      ) : (
        <WhiteElogo className="absolute left-10 w-36" />
      )}
    </>
  );
}
