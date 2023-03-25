import React from 'react';
import { NextSeo } from 'next-seo';
import PricingFaq from '@/components/pageComponents/pricingPage/pricingFaq';
import Pricing from '@/components/pageComponents/pricingPage/pricing';

const PricingPage = () => {
  return (
    <main>
      <NextSeo
        title='Paket Harga — Jadiberkesan'
        description='Pilih paket harga sesuai kebutuhan dan selera anda.'
      />
      <Pricing />
      <PricingFaq />
    </main>
  );
};

export default PricingPage;
