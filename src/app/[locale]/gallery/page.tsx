import React from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Contents from '@/components/gallery/contents/contentsl';

export default function Gallery() {
  const body = useTranslations('Gallery');

  return (
    <div className="w-full pb-44 flex flex-col items-center ">
      {/* 배너 이미지 */}

      <div className="relative w-full h-[15rem] ">
        <Image
          src={'/image/background/메인배경1.jpg'}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      {/* 텍스트 */}
      <div className="flex flex-col w-[70vw] mt-28 ">
        <h1 className="font-bold text-2xl">{body('Text1')}</h1>
        <h2 className="font-medium text-lg">{body('Text2')}</h2>
        <Contents />
      </div>
    </div>
  );
}
