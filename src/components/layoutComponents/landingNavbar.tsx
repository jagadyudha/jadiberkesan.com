import React from 'react';
import CustomLink from '@/components/sharedComponents/customLink';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import NamedLogoSvg from '@/components/sharedComponents/svg/namedLogo';
import Button from '@/components/sharedComponents/button';

const navbar = [
  { name: 'Beranda', href: '/' },
  { name: 'Tema', href: '/themes' },
  { name: 'Paket Harga', href: '/pricing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const body = document.querySelector('body')!;
    body.style.overflow = isOpen ? 'hidden' : 'auto';

    if (isOpen) {
      window.addEventListener('scroll', (e) => {
        e.preventDefault();
      });
    }
  }, [isOpen]);

  return (
    <header>
      {/* navbar untuk dekstop */}
      <nav className='hidden md:block z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-90 mx-auto md:py-2 py-1 fixed  w-full shadow-sm'>
        <div className='py-1 mx-auto flex justify-between px-5 md:px-10 items-center'>
          <CustomLink href={'/'}>
            <NamedLogoSvg className=' w-36 md:w-auto' />
          </CustomLink>
          <div className='flex items-center space-x-10'>
            <div className='space-x-8 flex items-center'>
              {navbar.map((item, index) => (
                <CustomLink key={index} href={item.href}>
                  <span className=' hover:text-primary'>{item.name}</span>
                </CustomLink>
              ))}
            </div>
            <div className='space-x-4 flex items-center justify-center'>
              <CustomLink href='/auth?type=signin'>
                <button className='hover:text-primary'>Masuk</button>
              </CustomLink>
              <CustomLink href='/auth?type=signup'>
                <Button variant='solid' color='primary'>
                  Daftar
                </Button>
              </CustomLink>
            </div>
          </div>
        </div>
      </nav>

      {/* navbar untuk mobile */}
      <nav
        className={`md:hidden block fixed w-full top-0 z-10 bg-white shadow-sm`}
      >
        <div className='flex items-center justify-between py-4 px-4 text-black'>
          <CustomLink href={'/'}>
            <NamedLogoSvg className=' w-36 md:w-auto' />
          </CustomLink>
          <button
            className='rounded-md p-[5px]'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseOutline className={`text-2xl`} />
            ) : (
              <IoMenuOutline className='text-2xl' />
            )}
          </button>
        </div>
        {isOpen && (
          <div className='absolute z-20 h-screen px-8 w-full bg-white'>
            {navbar.map((item, index) => (
              <CustomLink key={index} href={item.href}>
                <motion.div
                  initial='pageInitial'
                  animate='pageAnimate'
                  variants={{
                    pageInitial: { opacity: 0, x: '-100%' },
                    pageAnimate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2 * index, ease: 'easeInOut' }}
                  className={`border-b border-black border-opacity-10 py-5 text-gray-800 `}
                >
                  {item.name}
                </motion.div>
              </CustomLink>
            ))}
            <div className='my-6 space-y-3 uppercase'>
              <CustomLink href='/auth?type=signin'>
                <Button
                  variant='outline'
                  color='primary'
                  customClassName='w-full'
                >
                  Masuk
                </Button>
              </CustomLink>
              <CustomLink href='/auth?type=signup'>
                <Button
                  variant='solid'
                  color='primary'
                  customClassName='w-full'
                >
                  Daftar
                </Button>
              </CustomLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
