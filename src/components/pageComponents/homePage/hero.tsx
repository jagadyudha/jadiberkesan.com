/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Animation from '@/components/sharedComponents/animation';
import { dataHero } from '@/lib/dummy';
import useModal from '@/hooks/useModal';
import Button from '@/components/sharedComponents/button';

const Hero = () => {
  // hero position
  const [hero, setHero] = React.useState(0);

  // state modal video
  const {
    state: isModalVideoOpen,
    close: closeModalVideo,
    open: openModalVideo,
  } = useModal();

  // change image hero
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (hero >= dataHero.length - 1) {
        setHero(0);
      } else {
        setHero(hero + 1);
      }
    }, 1200);

    return () => clearInterval(intervalId);
  }, [hero]);

  return (
    <>
      <section className='relative pb-5 overflow-x-hidden md:overflow-x-clip pt-20 md:py-20 lg:py-32 lg:pb-48 flex flex-col justify-center'>
        <Animation variants='fadedown' duration={1} delay={0}>
          <div className='relative space-y-4 text-center md:text-left max-w-7xl mx-auto md:flex md:flex-row-reverse justify-center items-center px-5 md:px-10 lg:px-20'>
            <div className='bg-primary top-0 right-0 blur-3xl rounded-full absolute opacity-10 -z-10'></div>
            <div className='md:w-1/2 w-full absolute -right-[16%] md:-right-[10%] -top-[5%] md:-top-[10%] lg:-top-[32%]'>
              <Link href='/themes'>
                <img
                  className='relative'
                  draggable={false}
                  src='https://res.cloudinary.com/dlpb6j88q/image/upload/v1665816839/jadiberkesan.com/hero-min_obtnnf.webp'
                  alt=''
                />
              </Link>
              <img
                className='absolute top-[1.5%] w-[40%] right-[48%] rounded-3xl -z-10'
                draggable={false}
                src={dataHero[hero]}
                alt='hero'
              />
              <div className=' bg-gradient-to-t from-white to-transparent h-44 absolute bottom-0 w-full'></div>
            </div>
            <div className='w-full h-[100vw] sm:h-[42rem] md:h-0'></div>
            <div className='w-full mr-4 top-0 md:-top-0 relative'>
              <h1 className='text-4xl lg:text-6xl font-bold md:max-w-lg'>
                Buat Undangan Digital{' '}
                <span className='text-primary'>Instan</span>
              </h1>
              <p className='py-10 max-w-xl'>
                Cara sederhana dan mudah untuk membuat situs web pernikahan
                dalam hitungan menit dengan berbagai macam tema menarik.
              </p>
              <div className='flex space-x-2 justify-center md:justify-start'>
                <Link href='https://app.jadiberkesan.com/auth?type=signin'>
                  <div className='relative'>
                    <div className='absolute top-0 left-0 right-0 w-full h-full z-0 bg-primary blur-md opacity-80'></div>
                    <Button
                      customClassName='relative'
                      variant='solid'
                      color='primary'
                    >
                      Buat Undangan
                    </Button>
                  </div>
                </Link>
                <div className='relative'>
                  <Button variant='outline' color='primary'>
                    Lihat Harga
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Animation>
      </section>
    </>
  );
};

export default Hero;
