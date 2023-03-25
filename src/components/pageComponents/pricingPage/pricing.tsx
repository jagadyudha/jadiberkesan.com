import React from 'react';
import { dataPricing } from '@/lib/dummy';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Button from '@/components/sharedComponents/button';
import CustomLink from '@/components/sharedComponents/customLink';

const Pricing = () => {
  return (
    <section className='bg-white py-10 md:py-24 flex flex-col space-y-4 md:text-left max-w-7xl mx-auto md:flex justify-center items-center px-5 md:px-10 lg:px-20'>
      {/* Header */}
      <div className='mb-4 md:mb-8 text-center'>
        <h2 className='text-2xl lg:text-5xl font-bold'>
          Paket Harga <span></span>
        </h2>
        <p className='my-4 max-w-2xl'>
          Pilih paket harga sesuai kebutuhan dan seleramu
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 w-full text-center'>
        {dataPricing.map((item, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-lg p-6 flex flex-col '
          >
            <h3 className=' font-bold mb-3'>{item.name}</h3>
            <span className='block text-gray-500'>{item.descriptiobn}</span>
            <span className='block text-3xl my-8 font-bold mb-3'>
              {item.price}
            </span>

            <div className='text-left space-y-2 my-8'>
              {item.detail.map((item, index) => (
                <span key={index} className='flex items-center'>
                  <IoCheckmarkCircleOutline className='mr-1 text-xl text-emerald-600' />{' '}
                  {item}
                </span>
              ))}
            </div>
            {item.name.includes('Reseller') ? (
              <Button
                variant='solid'
                color='primary'
                disabled
                customClassName='w-full'
              >
                Segera Hadir
              </Button>
            ) : (
              <CustomLink
                href={
                  'https://api.whatsapp.com/send?phone=6285156026240&text=Saya%20ingin%20bertanya%20terkait%20paket%20harga'
                }
              >
                <Button
                  variant='solid'
                  color='primary'
                  customClassName='w-full'
                >
                  Hubungi Admin
                </Button>
              </CustomLink>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
