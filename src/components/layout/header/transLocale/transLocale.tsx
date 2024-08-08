'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function TransLocale() {
  const params = useParams<{ locale: string }>();
  const locale = params.locale;
  return (
    <>
      <>
        {locale === 'ko' ? (
          <Link
            className="absolute right-20 text-sm md:text-base lg:right-10 cursor-pointer"
            href="/en"
          >
            <div className="rounded-3xl text-sm px-3 py-1 bg-slate-700 text-white">
              English
            </div>
          </Link>
        ) : (
          <Link
            className="absolute right-20  md:text-base lg:right-10 cursor-pointer "
            href="/ko"
          >
            <div className="rounded-3xl text-sm px-3 py-1 bg-slate-700 text-white">
              한국어
            </div>
          </Link>
        )}
      </>
    </>
  );
}
