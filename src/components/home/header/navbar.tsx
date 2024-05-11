'use client';

import React, { useEffect, useState } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`w-screen fixed top-0 left-0 right-0  flex justify-center items-center h-20 px-64 transition-all duration-300 ease-in-out text-lg  ${
          isScrolled ? 'bg-white text-black' : 'bg-black bg-opacity-15 text-white'
        }`}
      >
        {children}
      </nav>
    </>
  );
}
