'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function HamburgerMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const header = useTranslations('Header');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      {/* 햄버거 버튼 */}
      <div className="lg:hidden flex items-center absolute right-6 cursor-pointer">
        <RxHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      {/* 모달 오버레이 */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDropdown}
        ></div>
      )}
      {/* 모달 */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-80 flex flex-col  bg-[#444A53FA] z-50 transform transition-transform duration-300 ${
          dropdownOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-[5%] px-4 bg-black flex justify-between items-center border-b-[1px] border-gray-400 text-sm ">
          <span>Teunsol International</span>
          <span className="text-base cursor-pointer " onClick={closeDropdown}>
            X
          </span>
        </div>
        <div className="text-sm h-[6.7%] border-b-[1px] border-gray-700 flex items-center px-4 cursor-pointer ">
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            {header('Nav1')}
          </span>
        </div>
        <div className="text-sm h-[6.7%] border-b-[1px] border-gray-700 flex items-center px-4 cursor-pointer ">
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            {header('Nav2')}
          </span>
        </div>
        <div className="text-sm h-[6.7%] border-b-[1px] border-gray-700 flex items-center px-4 cursor-pointer  ">
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            {header('Nav3')}
          </span>
        </div>
        <div className="text-sm h-[6.7%] border-b-[1px] border-gray-700 flex items-center px-4 cursor-pointer  ">
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            {header('Nav4')}
          </span>
        </div>
      </div>
    </>
  );
}
