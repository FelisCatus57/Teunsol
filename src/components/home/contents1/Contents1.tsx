'use client';

import React, { useEffect, useState, useRef } from 'react';

import Image from 'next/image';
import LeftText1 from './text/lefttext1';
import LeftText2 from './text/lefttext2';
import LeftText3 from './text/lefttext3';

export default function Contents1() {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) {
        observer.unobserve(leftSectionRef.current);
      }
      if (rightSectionRef.current) {
        observer.unobserve(rightSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isIntersecting && count < 120) {
      timer = setTimeout(() => setCount(count + 1), 1000 / 120);
    }
    return () => clearTimeout(timer);
  }, [count, isIntersecting]);

  return (
    <section className="h-[41.75rem] flex">
      {/* 왼쪽 컨텐츠 */}
      <div
        ref={leftSectionRef}
        className="relative flex flex-col items-center justify-center w-1/2 h-full pb-16"
      >
        <Image
          src="/Image/home/contents1/img1.jpg"
          alt="contents1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute flex flex-col justify-center items-center w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <header className="mb-24 text-5xl text-white">TeunSol</header>
          <LeftText1 />
          <div className="flex justify-between w-3/6">
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl text-white ">{count}</span>
              <LeftText2 />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-6xl text-white ">{count}</span>
              <LeftText3 />
            </div>
          </div>
        </div>
      </div>
      {/* 오른쪽 컨텐츠 */}
      <div
        ref={rightSectionRef}
        className="relative flex flex-col items-center justify-center w-1/2 h-full overflow-hidden"
      >
        <Image
          src="/Image/home/contents1/img2.jpg"
          alt="contents1"
          layout="fill"
          objectFit="cover"
        />
        <header className="w-full h-1/3 flex justify-center items-center text-5xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Business
        </header>
        <div
          className={`w-full h-[45%] relative transition-all duration-700 ease-out transform ${
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/Image/home/contents1/img3.jpg"
              alt="contents1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <footer
          className={`w-full h-[22%] flex justify-center items-center text-3xl bg-white text-gray-600 transition-opacity duration-700 ease-out transform ${
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span>Steel</span>
        </footer>
      </div>
    </section>
  );
}
