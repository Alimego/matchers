import React from 'react';
import Image from 'next/image';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import SecondHero from '../components/home/secondHero';
import Newsletter from '../components/home/newsletter';

export default function Home(): React.ReactElement {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <Features />
      <SecondHero />
      <Newsletter />
    </div>
  );
}
