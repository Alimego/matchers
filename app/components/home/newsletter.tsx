'use client';
import axiosInstance from '@/app/utils/axiosInstance';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { HiMail, HiArrowRight, HiCheckCircle, HiXCircle } from 'react-icons/hi';

const Newsletter = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = { email: inputValue };
      const response = await axiosInstance.post('/subscribe', data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      toast.success(response.data.message || 'Successfully subscribed!', {
        icon: <HiCheckCircle className='text-green-500 w-6 h-6' />,
      });

      setInputValue('');
    } catch (error: any) {
      const errorMsg =
        error.response?.data?.message ||
        'Something went wrong. Please try again.';

      toast.error(errorMsg, {
        icon: <HiXCircle className='text-red-500 w-6 h-6' />,
      });
    }
  };

  return (
    <section className='py-10 md:py-20 px-4 md:px-12 lg:px-24 bg-white'>
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto p-4 sm:p-6 md:p-10'>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-8'>
            <div className='flex-shrink-0 bg-[#e6edf7] p-3 md:p-4 rounded-full'>
              <HiMail className='text-[#1b4285] w-8 h-8 md:w-10 md:h-10' />
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-2xl md:text-3xl font-bold mb-2 text-gray-800'>
                Stay in the Loop
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-gray-600'>
                Subscribe to our newsletter for the latest founder matching
                opportunities and startup insights.
              </p>
            </div>
          </div>

          <form
            className='flex flex-col sm:flex-row mb-4 sm:mb-6'
            onSubmit={handleSubmit}
          >
            <div className='flex-grow relative mb-2 sm:mb-0'>
              <input
                type='email'
                value={inputValue}
                onChange={handleChange}
                placeholder='Your email address'
                className='w-full px-4 md:px-5 py-3 md:py-4 border border-gray-200 rounded-xl sm:rounded-r-none focus:outline-none focus:border-[#1b4285] text-base md:text-lg'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-[#1b4285] hover:bg-[#163769] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl sm:rounded-l-none transition-all duration-300 flex items-center justify-center text-base md:text-lg group'
            >
              <span className='hidden sm:inline'>Subscribe</span>
              <span className='sm:hidden'>Subscribe</span>
              <HiArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
            </button>
          </form>

          <div className='mt-4 text-center text-gray-500 text-xs md:text-sm'>
            We respect your privacy. No spam, just valuable content.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
