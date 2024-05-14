import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1(): JSX.Element {
  const body = useTranslations('MainBodyContents2');

  return (
    <>
      <span className="text-2xl">{body('Text1')}</span>
    </>
  );
}
