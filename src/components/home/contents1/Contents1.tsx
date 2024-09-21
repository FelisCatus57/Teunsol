'use client';

import React, { useEffect, useState, useRef } from 'react';

import Image from 'next/image';
import LeftText1 from './text/lefttext1';
import LeftText2 from './text/lefttext2';
import LeftText3 from './text/lefttext3';

import Text2 from '../contents6/text/text2';
import Text1 from '../contents6/text/text1';

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
    <section className="h-[30rem] flex flex-col lg:flex-row">
      {/* 왼쪽 컨텐츠 */}
      <div
        ref={leftSectionRef}
        className="relative flex flex-col items-center justify-center w-full h-1/2 lg:h-full lg:w-1/2"
      >
        <Image
          src="/image/home/contents1/img1.jpg"
          alt="contents1"
          layout="fill"
          objectFit="cover"
        />
        <div className='bg-black bg-opacity-65 w-full h-full absolute'/>
          <header className="ml-[0%] mt-[8%] w-full  flex justify-center items-center text-3xl lg:text-5xl text-white drop-shadow-lg">
            <span>Uzbekistan Tour & Business</span>
          </header>
          <div className="z-10 mt-[10%] flex justify-center items-center w-20 h-20 border-[3px] border-white rounded-full text-white text-base transition-all duration-500 group-hover:border-orange-500 group-hover:text-orange-500">
            PPT
          </div>
        <div
          className={`w-full h-[45%] relative transition-all duration-700 ease-out transform ${
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        ></div>
      </div>
      {/* 오른쪽 컨텐츠 */}
      <div
        ref={rightSectionRef}
        className="relative flex flex-col items-center justify-center w-full h-1/2 lg:h-full  lg:w-1/2 overflow-hidden"
      >
         <div className="h-[18.75rem] md:h-[23.75rem] w-screen flex justify-center items-center flex-col relative group overflow-hidden">
        <div className="absolute w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-110">
          <Image
            src="/image/home/contents6/img1.jpg"
            alt="contents6"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-center items-center">
         
        </div>
      </div>
        {/* <Image
          src="/image/home/contents1/img2.jpg"
          alt="contents1"
          layout="fill"
          objectFit="cover"
        />
        <header className="ml-[0%] mb-[12%] w-full  flex justify-center items-center text-3xl lg:text-5xl text-white drop-shadow-lg">
          <span>Press tooling buisness for the automotive</span>
        </header>
        <div
          className={`w-full h-[45%] relative transition-all duration-700 ease-out transform ${
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
        </div> */}
      </div> 
    </section>
  );
}
