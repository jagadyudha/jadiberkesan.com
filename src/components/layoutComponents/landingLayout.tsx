import React from 'react';
import Navbar from '@/components/layoutComponents/landingNavbar';
import Footer from '@/components/layoutComponents/landingFooter';

export type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className='pt-16 md:pt-24'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
