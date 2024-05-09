import React from 'react';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <div className="flex space-x-4 px-64 bg-slate-200 h-24 ">
        <div>{t('title')}</div>
      </div>
    </>
  );
}
