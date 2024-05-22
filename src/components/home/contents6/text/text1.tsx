import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1(): JSX.Element {
  const body = useTranslations('MainBodyContents6');

  return (
    <>
      <span className="text-2xl md:text-4xl z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)] mb-5">
        {body('Text1')}
      </span>
    </>
  );
}
