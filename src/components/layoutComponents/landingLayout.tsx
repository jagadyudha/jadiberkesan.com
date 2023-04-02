import React from 'react';
import Navbar from '@/components/layoutComponents/landingNavbar';
import Footer from '@/components/layoutComponents/landingFooter';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const exclude = ['/wa', '/linktree', '/[redirect]'].includes(router.pathname);
  if (exclude) {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      <Navbar />
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='pt-16 md:pt-24'
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
