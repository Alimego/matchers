import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../assets/images/heroImg.png';

const Hero = () => {
  return (
    <section className='bg-[#1b4285] text-white pt-32 pb-10 md:pt-32 md:pb-20 px-4 md:px-12 lg:px-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex flex-col md:items-start items-center gap-4 md:gap-6 md:w-1/2'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:text-left text-center'>
              Find Your Perfect Cofounder
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 md:text-left text-center max-w-xl'>
              Connect with like-minded entrepreneurs in a secure environment to
              bring your vision to life.
            </p>
            <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-5 w-full sm:w-auto'>
              <Link href={'/login'}>
                <button className='text-xs md:text-base bg-white text-[#1b4285] hover:bg-gray-300 hover:text-[#1b4285] border border-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer w-full sm:w-auto'>
                  Find a Cofounder
                </button>
              </Link>
              <Link href={'/register'}>
                <button className='text-xs md:text-base bg-transparent hover:bg-[#374b6d] border border-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer w-full sm:w-auto'>
                  Create Profile
                </button>
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <Image
              src={heroImg}
              alt='Entrepreneurs collaborating'
              width={550}
              height={550}
              className='w-full max-w-md md:max-w-lg h-auto'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
