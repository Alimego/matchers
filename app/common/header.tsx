import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-4 md:px-8 lg:px-24 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='text-[#1b4285] font-bold text-xl md:text-2xl'>
            CoFounderMatch
          </span>
        </div>
        <Link href={'/register'}>
          <button className='bg-[#1b4285] hover:bg-[#163769] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
