import React from 'react';
import Hero from '@/components/pageComponents/homePage/hero';
// import Info from '@/components/landing/info';
// import Feature from '@/components/landing/feature';
// import Faq from '@/components/landing/faq';
// import Cta from '@/components/landing/cta';
import dynamic from 'next/dynamic';

// const Hero = dynamic(() => import('@/components/landing/hero'));
const Info = dynamic(() => import('@/components/pageComponents/homePage/info'));
const FeatureList = dynamic(
  () => import('@/components/pageComponents/homePage/featureList')
);
const Faq = dynamic(() => import('@/components/pageComponents/homePage/faq'));

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Info />
        <div className='md:my-16 my-10 flex justify-center space-x-1'>
          <div className='w-4 h-4 rounded-full'></div>
        </div>
        <FeatureList />
        <div className='md:my-16 my-10 flex justify-center space-x-1'>
          <div className='w-4 h-4 rounded-full'></div>
        </div>
        <Faq />
        <div className='md:my-16 my-10 flex justify-center space-x-1'>
          <div className='w-4 h-4 rounded-full'></div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
