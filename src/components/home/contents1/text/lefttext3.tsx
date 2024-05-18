import { useTranslations } from 'next-intl';
import React from 'react';

export default function LeftText3(): JSX.Element {
  const body = useTranslations('MainBodyContents1');

  return (
    <>
      <span className="text-lg lg:text-2xl text-gray-200 mt-4 ">
        {body('Text4')}
      </span>
    </>
  );
}
