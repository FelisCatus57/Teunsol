import { useTranslations } from 'next-intl';
import React from 'react';

export default function LeftText1(): JSX.Element {
  const body = useTranslations('MainBodyContents1');

  return (
    <>
      <span className="text-2xl lg:text-4xl  text-white mb-20 lg:mb-32">
        {body('Text1')}
        <span className="text-3xl lg:text-5xl"> {body('Text2')}</span>
      </span>
    </>
  );
}
