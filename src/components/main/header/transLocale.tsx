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
          <Link className="absolute right-10 cursor-pointer" href="/en">
            Eng
          </Link>
        ) : (
          <Link className="absolute right-10 cursor-pointer" href="/ko">
            한국어
          </Link>
        )}
      </>
    </>
  );
}
