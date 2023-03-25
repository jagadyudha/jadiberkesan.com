import React from 'react';
import CustomLink from '@/components/sharedComponents/customLink';

const data = [
  {
    name: 'Hal Umum',
    content: [
      { name: 'Beranda', href: '/' },
      { name: 'Tema', href: '/themes' },
      { name: 'Paket Harga', href: '/pricing' },
      {
        name: 'Status',
        href: 'https://stats.uptimerobot.com/zoW84tGQrw/792706265',
      },
    ],
  },
  {
    name: 'Company',
    content: [
      { name: 'Kritik dan Saran', href: 'https://jadiberkesan.canny.io/saran' },
      { name: 'Permintaan Fitur', href: 'https://jadiberkesan.canny.io/fitur' },
      {
        name: 'WhatsApp',
        href: 'https://api.whatsapp.com/send?phone=6285156026240&text=%5BSaya%20ingin%20bertanya%5D',
      },
      { name: 'Instagram', href: 'https://www.instagram.com/jadiberkesan/' },
    ],
  },
  {
    name: 'Legal',
    content: [
      { name: 'Persyaratan Layanan', href: '/legal/terms' },
      { name: 'Kebijakan Privasi', href: '/legal/privacy' },
      { name: 'Atribusi', href: '/legal/attribution' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=' bg-zinc-100 relative'>
      <div className='px-5 flex md:flex-row flex-col space-y-10 md:space-y-0 justify-between py-12 lg:py-20 max-w-6xl mx-auto'>
        <div className='flex flex-col justify-start h-full text-sm'>
          <img
            alt='logo'
            src='/assets/svg/logo-footer.svg'
            className='my-5 w-44'
          />
          <p className='text-gray-600'>
            Copyright {new Date().getFullYear()} - Jadiberkesan
            <br />
            Membuat undangan digital sejak 2022
          </p>
        </div>

        <div className='flex md:flex-row space-y-10 md:space-y-0 flex-col md:justify-end md:w-3/4 md:space-x-10 lg:space-x-20'>
          {data.map((item) => (
            <div key={item.name}>
              <span className='block mb-4 uppercase text-gray-400 text-sm font-semibold'>
                {item.name}
              </span>
              {item.content.map((item, index) => (
                <CustomLink key={index} href={item.href}>
                  <span className='block text-gray-600 my-2 hover:underline text-sm'>
                    {item.name}
                  </span>
                </CustomLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
