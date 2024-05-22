'use client';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute left-0 z-10 text-3xl text-black cursor-pointer top-1/2"
    style={{ left: '-40px' }}
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute right-0 z-10 text-3xl text-black cursor-pointer top-1/2"
    style={{ right: '-40px' }}
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  nextArrow: <NextArrow onClick={() => {}} />,
  prevArrow: <PrevArrow onClick={() => {}} />,
  responsive: [
    {
      breakpoint: 1024, // lg 이하
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 600, // md 이하
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function NewsCarousel(): JSX.Element {
  // 테스트를 위한 임시 배열
  const slides = [1, 2, 3, 4];

  return (
    <Slider {...settings}>
      {slides.map((index) => (
        <div
          key={index}
          className="relative px-1 lg:px-4 xl:px-6 2xl:px-8 pt-14"
        >
          <div className="h-[21.875rem] lg:h-[25.063rem] flex flex-col cursor-pointer  ">
            <div className="relative w-full mb-4 h-[7.5rem]">
              <Image
                src="/image/home/contents2/img1.jpg"
                alt="news"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="mb-2 text-sm lg:text-base text-orange-400">
              NEWS
            </span>
            <span className="mb-4 text-lg lg:text-xl text-black max-h-20 title-text-overflow">
              뉴스 타이틀입니다.{index}
            </span>
            <span className="mb-4 text-sm lg:text-base text-gray-500 contents-text-overflow">
              뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다...
              뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다...
              뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다... 뉴스 컨텐츠입니다...
              뉴스 컨텐츠입니다...
            </span>
            <span className="absolute text-sm lg:text-base text-gray-600 bottom-0 contents-text-overflow">
              2024-05-14
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
}
