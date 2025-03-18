import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12 px-4 md:px-12 lg:px-24 mt-auto'>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-xl font-bold mb-4'>CoFounderMatch</h3>
        <p className='text-gray-400 max-w-lg mx-auto'>
          Helping entrepreneurs connect, collaborate, and build great startups
          together.
        </p>
        <div className='border-t border-gray-700 mt-8 pt-4'>
          <p className='text-gray-400'>
            &copy; 2025 CoFounderMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
