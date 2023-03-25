import React from 'react';
import CustomLink from '@/components/sharedComponents/customLink';
import { NextSeo } from 'next-seo';
import Button from '@/components/sharedComponents/button';

const Linktree = () => {
  return (
    <section className='relative w-full bg-white'>
      <NextSeo
        title={`Linktree — Jadiberkesan`}
        description='Cara sederhana dan mudah untuk membuat situs web pernikahan dalam hitungan menit.'
        nofollow={true}
        noindex={true}
      />
      <div className='flex flex-col items-center max-w-7xl mx-auto py-10 md:py-12 lg:py-24 px-5 md:px-10 lg:px-20'>
        <img src='/assets/svg/logo-linktree.svg' className='w-24' alt='logo' />
        <div className='text-center mt-8'>
          <div className='space-y-2'>
            <h2 className='text-xl lg:text-3xl font-bold'>Jadiberkesan</h2>
            <p className='max-w-lg mx-auto'>
              Cara sederhana dan mudah untuk membuat situs web pernikahan dalam
              hitungan menit.
            </p>
          </div>
          <div className='flex flex-col mt-8 space-y-4'>
            {dataLinkTree.map((item) => (
              <CustomLink key={item.name} href={item.href}>
                <Button
                  variant='outline'
                  color='primary'
                  customClassName='w-full'
                >
                  {item.name}
                </Button>
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const dataLinkTree = [
  { name: 'Katalog Undangan', href: 's' },
  {
    name: 'Kontak Admin',
    href: 'https://api.whatsapp.com/send?phone=6285156026240&text=%5BSaya%20ingin%20bertanya%5D',
  },
  {
    name: 'Shopee',
    href: 'https://shopee.co.id/jadiberkesan',
  },
  {
    name: 'Tiktok',
    href: 'https://www.tiktok.com/@jadiberkesan',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jadiberkesan',
  },
];

export default Linktree;
