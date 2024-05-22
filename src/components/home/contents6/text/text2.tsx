import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text2(): JSX.Element {
  const body = useTranslations('MainBodyContents6');

  return (
    <>
      <span className="text-base md:text-xl z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] mb-9">
        {body('Text2')}
      </span>
    </>
  );
}
