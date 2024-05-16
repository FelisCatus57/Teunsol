'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import LeftText1 from '../../contents1/text/lefttext1';
import LeftText2 from '../../contents1/text/lefttext1';
import LeftText3 from '../../contents1/text/lefttext1';

export default function Contents1() {
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 이벤트 핸들러와 스크롤 위치 확인
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // isScrolled가 true일 때 숫자 증가 로직
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isScrolled && count < 120) {
      timer = setTimeout(() => setCount(count + 1), 1000 / 120);
    }
    return () => clearTimeout(timer);
  }, [count, isScrolled]);

  return (
    <>
      {/* 왼쪽 컨텐츠 */}
      <div className="h-[41.75rem] flex ">
        <div className="w-1/2 h-full flex flex-col justify-center items-center relative pb-16 ">
          <Image src="/Image/homebody/contents1/img1.jpg" alt="contents1" layout="fill" objectFit="cover" />
          <div className="absolute flex flex-col justify-center items-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <span className="text-5xl text-white mb-24">TeunSol</span>
            <LeftText1 />
            <div className="flex justify-between w-3/6 ">
              <div className="flex flex-col justify-center items-center ">
                <span className="text-6xl text-white">{count}</span>
                <LeftText2 />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <span className="text-6xl text-white">{count}</span>
                <LeftText3 />
              </div>
            </div>
          </div>
        </div>
        {/* 오른쪽 컨텐츠 */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center relative overflow-hidden">
          <Image src="/Image/homebody/contents1/img2.jpg" alt="contents1" layout="fill" objectFit="cover" />
          <div className="w-full h-1/3 flex justify-center items-center text-5xl text-white">
            <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Business</span>
          </div>
          <div
            className={`w-full h-[45%] relative transition-all duration-700 ease-out transform  ${
              isScrolled ? ' opacity-100 translate-y-0' : ' opacity-0  translate-y-10 '
            }`}
          >
            <div className="relative w-full h-full hover:scale-110 transition-transform duration-500 ease-in-out  ">
              <Image src="/Image/homebody/contents1/img3.jpg" alt="contents1" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div
            className={`w-full h-[22%] flex justify-center items-center text-3xl bg-white text-gray-600 transition-opacity duration-700 ease-out transform transition-transform ${
              isScrolled ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-y-8 '
            }`}
          >
            <span>Steel</span>
          </div>
        </div>
      </div>
    </>
  );
}
