import { useTranslations } from 'next-intl';
import React from 'react';

export default function LeftText1(): JSX.Element {
  const body = useTranslations('MainBodyContents1');

  return (
    <>
      <span className="text-4xl  text-white mb-32">
        {body('Text1')}
        <span className="text-5xl"> {body('Text2')}</span>
      </span>
    </>
  );
}
