import React from 'react';
import { FaUsers, FaRocket, FaUserCheck } from 'react-icons/fa';

const Features = () => {
  return (
    <section className='py-10 md:py-16 px-4 md:px-12 lg:px-24 bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#1b4285]'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          <div className='p-6 md:p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow text-center'>
            <div className='flex justify-center mb-4'>
              <FaUsers className='text-[#1b4285] text-4xl md:text-5xl' />
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2'>
              Find a Cofounder
            </h3>
            <p className='text-sm md:text-base text-gray-600'>
              Connect with vetted entrepreneurs who complement your skills and
              share your vision.
            </p>
          </div>

          <div className='p-6 md:p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow text-center'>
            <div className='flex justify-center mb-4'>
              <FaRocket className='text-[#1b4285] text-4xl md:text-5xl' />
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2'>
              Join a Startup
            </h3>
            <p className='text-sm md:text-base text-gray-600'>
              Get matched with a co-founder who values your skills and is
              looking for someone like you to join their startup.
            </p>
          </div>

          <div className='p-6 md:p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow text-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none'>
            <div className='flex justify-center mb-4'>
              <FaUserCheck className='text-[#1b4285] text-4xl md:text-5xl' />
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2'>
              Find the Right Skills
            </h3>
            <p className='text-sm md:text-base text-gray-600'>
              Get matched with co-founders based on complementary skills,
              personality fit, and shared goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
