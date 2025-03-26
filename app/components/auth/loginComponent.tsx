'use client';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='w-full md:max-w-2xl lg:max-w-xl m-auto flex flex-col gap-4 items-center justify-center pt-16 md:pt-24 px-4 md:px-8 lg:px-12'>
      <h1 className='text-2xl md:text-3xl font-bold text-[#1b4285] mb-6'>
        CofounderMatch
      </h1>

      <div className='w-full space-y-4'>
        <div className='relative w-full'>
          <Mail className='absolute left-3 top-4 text-gray-400' size={18} />
          <Input
            type='email'
            name='email'
            placeholder='Email address'
            className='pl-10 h-12 bg-gray-50 border-gray-200 focus:border-[#1b4285] rounded-lg'
          />
        </div>

        <div className='relative w-full'>
          <Lock className='absolute left-3 top-4 text-gray-400' size={18} />
          <Input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            className='pl-10 pr-10 h-12 bg-gray-50 border-gray-200 focus:border-[#1b4285] rounded-lg'
          />
          <button
            type='button'
            className='absolute right-3 top-4 text-gray-400'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className='flex justify-between items-center w-full text-sm'>
          <div className='flex items-center'>
            <input type='checkbox' id='remember' className='mr-2' />
            <label htmlFor='remember' className='text-gray-600'>
              Remember me
            </label>
          </div>
          <a href='#' className='text-[#1b4285]'>
            Forgot password?
          </a>
        </div>

        <Button className='w-full h-12 bg-[#1b4285] text-white font-medium rounded-lg'>
          Log in
        </Button>

        <div className='text-center mt-6'>
          <p className='text-gray-600'>
            Don&apos;t have an account?{' '}
            <a href='/register' className='text-[#1b4285] font-medium'>
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
