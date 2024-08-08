import { useTranslations } from 'next-intl';
import React from 'react';

export default function Text7(): JSX.Element {
  const footer = useTranslations('Footer');

  return (
    <>
      <span>{footer('Text7')}</span>
    </>
  );
}
