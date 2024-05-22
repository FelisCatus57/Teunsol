import { useTranslations } from 'next-intl';
import React from 'react';

export default function LeftText2(): JSX.Element {
  const body = useTranslations('MainBodyContents1');

  return (
    <>
      <span className="mt-4 text-lg lg:text-2xl text-gray-200">
        {body('Text3')}
      </span>
    </>
  );
}
