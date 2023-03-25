import React from 'react';
import Image from '@/components/sharedComponents/image';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Button from '@/components/sharedComponents/button';
import { ThemeProps } from '@/lib/types';
import defaultConfig from '@/lib/defaultConfig';

export type ThemesProps = {
  themes: ThemeProps[];
};

const ThemePage = ({ themes }: ThemesProps) => {
  // logic view
  const priceData = (discount: number, price: number) => {
    return (
      'Rp.' +
      (discount ? discount : price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );
  };
  return (
    <main>
      <NextSeo
        title='Tema undangan — Jadiberkesan'
        description='Setiap tema undangan dirancang oleh ahli yang tepat sehingga
            undangan pernikahanmu menjadi lebih berkesan dan unik.'
      />
      <section className='bg-white py-10 md:py-18 flex flex-col space-y-4 md:text-left max-w-7xl mx-auto md:flex justify-center items-center px-5 md:px-10 lg:px-20'>
        <div className='mb-4 md:mb-8 text-center'>
          <h2 className='text-2xl lg:text-5xl font-bold'>
            Tema undangan <span></span>
          </h2>
          <p className='my-4 max-w-xl'>
            Setiap tema undangan dirancang oleh ahli yang tepat sehingga
            undangan pernikahanmu menjadi lebih berkesan dan unik.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 my-10'>
          {themes.map((item: ThemeProps) => (
            <Link
              key={item.id}
              href={`${defaultConfig['appUrl']}/create?theme=${item.name}`}
            >
              <div className='relative group border  border-gray-200 rounded-lg h-full flex flex-col'>
                <div className='opacity-0 group-hover:lg:opacity-100 translate-y-12 group-hover:translate-y-0 duration-200 absolute z-[1] h-full w-full flex justify-center items-center'>
                  <Button variant='solid' color='primary'>
                    Pilih tema ini
                  </Button>
                </div>

                <div className='bg-base-200 w-full relative aspect-[14/9] rounded-t-lg duration-300'>
                  <Image
                    className='rounded-t-lg bg-gray-100 duration-300'
                    src={item.image}
                    alt={item.name}
                    fill
                  />
                </div>
                <div className='flex flex-col justify-between md:space-y-14 p-4 relative text-left'>
                  <div className='space-y-4'>
                    <h3 className='text-lg font-bold group-hover:text-primary duration-300'>
                      {item.name}
                    </h3>
                    <p>{item.description}</p>
                    <div>
                      {item.discount && (
                        <del className=' font-bold'>
                          Rp.{' '}
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </del>
                      )}

                      <div className='flex space-x-1 md:space-x-2 items-center my-2'>
                        {item.discount && (
                          <span className='block bg-primary bg-opacity-40 py-1 px-2 text-xs text-primary font-bold rounded-md'>
                            {Math.floor(
                              ((item.price - item.discount) / item.price) * 100
                            )}{' '}
                            %
                          </span>
                        )}
                        <span className='font-bold block'>
                          {priceData(item.discount, item.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ThemePage;
