import React from 'react';
import Button from '@/components/sharedComponents/button';
import Link from 'next/link';
import Error404 from '@/components/sharedComponents/svg/404';
import { NextSeo } from 'next-seo';

const Error = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center px-5 md:px-10 lg:px-5'>
      <NextSeo
        title='Halaman tidak ditemukan — Jadiberkesan'
        description='Kami tidak dapat menemukan halaman yang Anda cari!'
        nofollow
        noindex
      />
      <Error404 className='w-full md:w-1/4 mx-auto my-5 md:my-10' />
      <div className='max-w-2xl mx-auto text-center'>
        <p className='my-5'>
          Kami tidak dapat menemukan halaman yang Anda cari!
        </p>
        <Link href='/'>
          <Button variant='solid' color='primary' customClassName='mx-auto'>
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
