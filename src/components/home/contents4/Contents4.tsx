'use client';

import React, { useEffect, useRef } from 'react';
import Text1 from './text/text1';
import Image from 'next/image';
import Text2 from './text/text2';
import Text3 from './text/text3';

export default function Contents4() {
  const textRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    textRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      textRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [textRefs]);

  return (
    <>
      <section className="h-[23.188rem] w-screen flex flex-col md:flex-row  overflow-hidden">
        <div className="w-full h-1/3 md:h-full md:w-1/3 flex justify-center items-center relative overflow-hidden">
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img1.jpg"
              alt="img1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRefs[0]} className="relative">
            <Text1 />
          </div>
        </div>
        <div className="w-full h-1/3 md:h-full md:w-1/3 flex justify-center items-center relative overflow-hidden">
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img2.jpg"
              alt="img2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRefs[1]} className="relative">
            <Text2 />
          </div>
        </div>
        <div className="w-full h-1/3 md:h-full  md:w-1/3 flex justify-center items-center relative overflow-hidden">
          <div className="absolute w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              src="/image/home/contents4/img3.jpg"
              alt="img3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={textRefs[2]} className="relative">
            <Text3 />
          </div>
        </div>
      </section>
    </>
  );
}
