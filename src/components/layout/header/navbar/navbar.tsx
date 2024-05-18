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
        className={`h-16 md:h-20 w-screen fixed top-0 flex justify-center items-center transition-all duration-300 ease-in-out text-lg ${
          isScrolled
            ? 'bg-white text-black shadow-lg'
            : 'bg-black bg-opacity-15 text-white '
        }`}
      >
        {children}
      </nav>
    </>
  );
}
