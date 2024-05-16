import React from 'react';
import Logo from '../../../../public/Image/SVG/Logo1.svg';
export default function Contents5() {
  return (
    <>
      <section className="h-[20.25rem] w-screen flex ">
        <div className="w-1/3 bg-gray-200 flex justify-center items-center">
          <span className="text-gray-600 text-5xl">CERTIFICATION</span>
        </div>
        <div className="w-2/3 flex justify-between items-center px-44">
          <div className="w-40">
            <Logo />
          </div>
          <div className="w-40">
            <Logo />
          </div>
          <div className="w-40">
            <Logo />
          </div>
          <div className="w-40">
            <Logo />
          </div>
        </div>
      </section>
    </>
  );
}
