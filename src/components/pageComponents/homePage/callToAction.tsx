import React from 'react';
import Link from 'next/link';
import Animation from '@/components/sharedComponents/animation';
const Cta = () => {
  return (
    <section className='relative w-full flex flex-col justify-center'>
      <Animation variants='fadedown' duration={1} delay={0.1}>
        <div className='flex flex-col my-5 gap-y-5 items-center justify-center max-w-7xl mx-auto gap-x-5 py-14 md:y-16   lg:py-32 px-5 lg:px-20 w-full'>
          <h2 className='text-2xl lg:text-5xl font-bold max-w-xl text-center text-primary'>
            Siap untuk membuat undanganmu sendiri?
          </h2>
          <p className='text-center max-w-xl mx-auto'>
            Coba Gratis — Coba berbagai macam tema kami
          </p>
          <Link href='https://app.jadiberkesan.com/auth?type=signin'>
            <button className='btn btn-primary text-white md:h-14'>
              Buat Undangan
            </button>
          </Link>
        </div>
      </Animation>
    </section>
  );
};

export default Cta;
