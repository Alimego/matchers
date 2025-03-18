'use client';
import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import GoogleIcon from '../../assets/googleIcon';

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className='w-full md:max-w-2xl lg:max-w-xl m-auto flex flex-col gap-4 items-center justify-center pt-16 md:pt-24 px-4 md:px-8 lg:px-12'>
      <h1 className='text-2xl md:text-3xl font-bold text-[#1b4285] mb-6'>
        CofounderMatch
      </h1>

      <div className='w-full space-y-4'>
        <div className='relative w-full'>
          <User className='absolute left-3 top-4 text-gray-400' size={18} />
          <Input
            type='text'
            name='fullName'
            placeholder='Full Name'
            className='pl-10 h-12 bg-gray-50 border-gray-200 focus:border-[#1b4285] rounded-lg'
          />
        </div>

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

        <div className='relative w-full'>
          <Lock className='absolute left-3 top-4 text-gray-400' size={18} />
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            placeholder='Confirm Password'
            className='pl-10 pr-10 h-12 bg-gray-50 border-gray-200 focus:border-[#1b4285] rounded-lg'
          />
          <button
            type='button'
            className='absolute right-3 top-4 text-gray-400'
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className='flex items-start w-full text-sm'>
          <input type='checkbox' id='terms' className='mr-2 mt-1' />
          <label htmlFor='terms' className='text-gray-600'>
            I agree to the{' '}
            <a href='#' className='text-[#1b4285]'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href='#' className='text-[#1b4285]'>
              Privacy Policy
            </a>
          </label>
        </div>

        <Button className='w-full h-12 bg-[#1b4285] text-white font-medium rounded-lg'>
          Create Account
        </Button>

        <div className='relative flex items-center my-4'>
          <div className='flex-grow border-t border-gray-200'></div>
          <span className='flex-shrink mx-4 text-gray-400'>or</span>
          <div className='flex-grow border-t border-gray-200'></div>
        </div>

        <Button
          variant='outline'
          className='w-full h-12 flex items-center justify-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50'
        >
          <GoogleIcon />
          <span className='text-gray-700'>Continue with Google</span>
        </Button>

        <div className='text-center mt-6'>
          <p className='text-gray-600'>
            Already have an account?{' '}
            <a href='/login' className='text-[#1b4285] font-medium'>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
