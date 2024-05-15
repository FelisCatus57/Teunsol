import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollToTop from './ScrollToTop';
import Text1 from './text/text1';
import Text2 from './text/text2';

export default function LayoutFooter() {
  const footer = useTranslations('Mainfooter');
  return (
    <>
      {/* 푸터 */}
      <footer className="w-screen h-[11.375rem] text-[#FFFFFF99] bg-[#2E2E2E] flex flex-col items-center justify-center">
        <div className="flex justify-start w-1/2 text-sm">
          <Text1 />
        </div>
        <div className="w-1/2 border-t border-gray-700 my-4"></div>
        <div className="flex justify-start w-1/2 text-sm">
          <Text2 />
        </div>
        <ScrollToTop />
      </footer>
    </>
  );
}
