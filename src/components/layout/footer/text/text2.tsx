import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text1(): JSX.Element {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text2')}</span>
    </>
  );
}
