import React from 'react';
import Animation from '@/components/sharedComponents/animation';

const Info = () => {
  return (
    <section className='flex  flex-col mt-10 md:mt-20 space-y-10 overflow-hidden w-full mx-auto relative  max-w-7xl px-5 md:px-10 lg:px-20'>
      {/* Section 1 */}
      <div className=' bg-white bg-opacity-50 border border-gray-200 rounded-xl space-y-8 flex flex-col md:flex-row justify-between px-6 md:px-10 py-8 items-center'>
        <Animation
          variants='fadedown'
          duration={1.2}
          delay={0}
          className='max-w-xs lg:max-w-md space-y-4 text-center md:text-left'
        >
          <h3 className='text-xl lg:text-3xl font-bold max-w-sm'>
            Buat undangan <br />
            dengan mudah dan cepat
          </h3>
          <p>
            Membuat website undangan pernikahan yang sempurna dan disesuaikan
            dengan kebutuhan tidak pernah semudah dan secepat ini.
          </p>
        </Animation>

        <Animation
          variants='faderight'
          duration={1.2}
          delay={0}
          className='relative'
        >
          <img
            alt='easy'
            className='relative -mb-5 -ml-3'
            src='/assets/svg/landing/easy.svg'
          />
        </Animation>
      </div>

      {/* Section 2 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10'>
        <div className=' bg-white bg-opacity-50 border border-gray-200 rounded-xl space-y-8 flex flex-col px-6 md:px-10 py-8 md:py-10 items-center'>
          <Animation
            variants='fadeleft'
            duration={1.2}
            delay={0}
            className='text-center space-y-4'
          >
            <h3 className='text-xl lg:text-3xl font-bold'>
              Kontrol undangan <br /> lebih mudah
            </h3>
            <p>
              Kontrol undangan dengan dasbor yang memungkinkan kamu untuk
              mengelola dan mengatur undangan lebih mudah
            </p>
          </Animation>

          <Animation
            variants='fadedown'
            duration={1.2}
            delay={0}
            className=' relative'
          >
            <img
              alt='control'
              className='relative -mb-5 -right-3 '
              src='/assets/svg/landing/control.svg'
            />
          </Animation>
        </div>
        <div className=' bg-white bg-opacity-50 border border-gray-200 rounded-xl space-y-8 flex flex-col px-6 md:px-10 py-8 md:py-10 items-center'>
          <Animation
            variants='faderight'
            duration={1.2}
            delay={0}
            className='text-center space-y-4'
          >
            <h3 className='text-xl lg:text-3xl font-bold'>
              Beragam tema <br /> undangan menarik
            </h3>
            <p>
              Tema situs web pernikahan yang disediakan sangat bervariasi dengan
              pengalaman visual yang menarik
            </p>
          </Animation>

          <Animation
            variants='fadedown'
            duration={1.2}
            delay={0}
            className=' relative'
          >
            <img
              alt='theme'
              className='relative  -ml-3'
              src='/assets/svg/landing/theme.svg'
            />
          </Animation>
        </div>
      </div>

      {/* Section 3 */}
      <div className=' bg-white bg-opacity-50 border border-gray-200 rounded-xl space-y-8 md:space-y-0 flex flex-col md:flex-row-reverse justify-between px-6 md:px-10 py-8 items-center'>
        <Animation
          variants='faderight'
          duration={1.2}
          delay={0}
          className='max-w-xs lg:max-w-md space-y-4 text-center md:text-right'
        >
          <h3 className='text-xl lg:text-3xl font-bold'>
            Menyediakan berbagai
            <br /> macam pembayaran
          </h3>
          <p>
            Metode pembayaran yang bervariatif untuk memudahkan kamu dalam
            melakukan pembayaran secara aman.
          </p>
        </Animation>

        <Animation
          variants='fadeleft'
          duration={1.2}
          delay={0}
          className=' relative md:py-10 -ml-2'
        >
          <img alt='payment' src='/assets/svg/landing/payment.svg' />
        </Animation>
      </div>
    </section>
  );
};

export default Info;
