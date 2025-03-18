import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import memberOne from '../../assets/images/member-one.jpg';
import memberTwo from '../../assets/images/member-two.jpg';
import memberThree from '../../assets/images/member-three.jpg';
import memberFour from '../../assets/images/member-four.jpg';

const SecondHero = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-24 bg-[#f0f8ff] text-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-8 lg:gap-12'>
          <div className='w-full md:w-1/2 text-center md:text-start'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#1b4285]'>
              Great Ideas Need the Right Team
            </h2>
            <p className='text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-700 max-w-xl mx-auto md:mx-0'>
              Research shows that the best ideas don&apos;t always come from
              those who can build them alone. We created this platform to help
              people with different skill sets connect, collaborate, and bring
              innovative ideas to life.
            </p>
            <Link href={'/register'}>
              <button className='text-white bg-[#1b4285] hover:bg-[#374b6d] border border-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors cursor-pointer'>
                Get Started
              </button>
            </Link>
          </div>

          {/* Team Visualization */}
          <div className='w-full md:w-1/2 mt-8 md:mt-0'>
            <div className='relative w-full h-64 sm:h-80 md:h-96'>
              {/* Central Circle */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full border-4 border-[#1b4285] z-10'>
                {/* Top Member */}
                <div className='absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2'>
                  <div className='w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 overflow-hidden rounded-full border-4 border-white shadow-lg'>
                    <Image
                      src={memberOne}
                      alt='Team member 1'
                      width={120}
                      height={120}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Right Member */}
                <div className='absolute top-1/2 -right-12 sm:-right-14 md:-right-16 transform -translate-y-1/2'>
                  <div className='w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 overflow-hidden rounded-full border-4 border-white shadow-lg'>
                    <Image
                      src={memberTwo}
                      alt='Team member 2'
                      width={120}
                      height={120}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Bottom Member */}
                <div className='absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2'>
                  <div className='w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 overflow-hidden rounded-full border-4 border-white shadow-lg'>
                    <Image
                      src={memberThree}
                      alt='Team member 3'
                      width={120}
                      height={120}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Left Member */}
                <div className='absolute top-1/2 -left-12 sm:-left-14 md:-left-16 transform -translate-y-1/2'>
                  <div className='w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 overflow-hidden rounded-full border-4 border-white shadow-lg'>
                    <Image
                      src={memberFour}
                      alt='Team member 4'
                      width={120}
                      height={120}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Center Icon */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md'>
                  <div className='w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-blue-50 rounded-full flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 text-[#1b4285]'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
