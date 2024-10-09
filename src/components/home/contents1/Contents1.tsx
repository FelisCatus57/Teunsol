'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Contents1(): JSX.Element {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const images = [
    '/image/ppt/img (1).jpg',
    '/image/ppt/img (2).jpg',
    '/image/ppt/img (3).jpg',
    '/image/ppt/img (4).jpg',
    '/image/ppt/img (5).jpg',
    '/image/ppt/img (6).jpg',
    '/image/ppt/img (7).jpg',
    '/image/ppt/img (8).jpg',
    '/image/ppt/img (9).jpg',
    '/image/ppt/img (10).jpg',
    '/image/ppt/img (11).jpg',
    '/image/ppt/img (12).jpg',
    '/image/ppt/img (13).jpg',
    '/image/ppt/img (14).jpg',
  ]; // Replace with your image paths

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="h-[30rem] flex flex-col lg:flex-row">
        {/* Left Content */}
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
          <div className="group bg-black bg-opacity-65 w-full h-full absolute"></div>
          <div className="group relative flex flex-col justify-center items-center w-full h-full transition-transform duration-500 ease-in-out hover:scale-110">
            <header className="w-full flex justify-center items-center text-3xl lg:text-4xl text-white drop-shadow-lg px-4 lg:px-6 mt-4 lg:mt-6">
              <span>Project management for the tooling of Automotive</span>
            </header>
            <div
              onClick={openModal}
              className="z-10 mt-6 lg:mt-8 flex justify-center items-center w-20 h-20 border-[3px] border-white rounded-full text-white text-base cursor-pointer transition-all duration-500 hover:border-orange-500 hover:text-orange-500"
            >
              Touch
            </div>
          </div>
          <div
            className={`w-full h-[45%] relative transition-all duration-700 ease-out transform ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          ></div>
        </div>

        {/* Right Content */}
        <div
          ref={rightSectionRef}
          className="relative flex flex-col items-center justify-center w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden"
        >
          <Image
            src="/image/home/contents1/img2.jpg"
            alt="contents1"
            layout="fill"
            objectFit="cover"
          />
          <header className="w-full h-1/3 flex justify-center items-center text-3xl lg:text-5xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] px-4 lg:px-6 mt-4 lg:mt-6">
            Uzbekistan Business and Tour
          </header>
          <div
            className={`w-full h-[45%] relative transition-all duration-700 ease-out transform ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          ></div>
          <footer
            className={`w-full h-[22%] flex justify-center items-center text-2xl lg:text-3xl bg-white text-gray-600 transition-opacity duration-700 ease-out transform ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span>어린이집 후원 및 교육기관 지원</span>
          </footer>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-8 w-[98vw] h-[90vh] max-w-7xl mx-4 lg:mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &#x2715;
            </button>
            <div className="flex flex-col h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <button
                  className="absolute left-4 text-gray-500 hover:text-gray-800 text-3xl bg-white bg-opacity-70 rounded-full p-2"
                  onClick={prevSlide}
                >
                  &larr;
                </button>
                <button
                  className="absolute right-4 text-gray-500 hover:text-gray-800 text-3xl bg-white bg-opacity-70 rounded-full p-2"
                  onClick={nextSlide}
                >
                  &rarr;
                </button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Image {currentSlide + 1} of {totalSlides}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
