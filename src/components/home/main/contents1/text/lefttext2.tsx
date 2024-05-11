import { useTranslations } from 'next-intl';
import React from 'react';

export default function LeftText2(): JSX.Element {
  const body = useTranslations('MainBodyContents1');

  return (
    <>
      <span className="text-2xl text-gray-200 mt-4"> {body('Text3')}</span>
    </>
  );
}
