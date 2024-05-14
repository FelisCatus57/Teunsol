import Image from 'next/image';
import React from 'react';
import Text1 from './text/text1';

export default function Contents3() {
  return (
    <>
      <section className="h-[16.563rem] w-screen flex justify-center items-center  flex-col ">
        <span className="text-4xl text-black mb-7 text-semibold">
          ABOUT TEUNSOL
        </span>
        <span className="text-xl gray-700">
          <Text1 />
        </span>
      </section>
    </>
  );
}
