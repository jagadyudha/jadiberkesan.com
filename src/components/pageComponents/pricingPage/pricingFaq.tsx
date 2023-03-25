import React from 'react';
import Collapse from '@/components/sharedComponents/collapse';

const PricingFaq = () => {
  return (
    <section className='bg-white flex flex-col space-y-4 md:text-left max-w-7xl mx-auto md:flex justify-center items-center px-5 md:px-10 lg:px-20 py-10 md:py-24 pt-8 md:pt-20'>
      {/* Header */}
      <div className='mb-4 md:mb-8 text-center'>
        <h2 className='text-2xl lg:text-5xl font-bold'>
          Pertanyaan Terkait Pembayaran <span></span>
        </h2>
      </div>
      <div className='max-w-4xl w-full'>
        <Collapse
          title='Pembayaran dapat dilakukan dengan apa saja?'
          description='Pembayaran dapat dilakukan menggunakan pembayaran otomatis (BCA, BRI, Mandiri, Permata, Kartu Debit, QRIS, dan GoPay.'
        />
        <Collapse
          title='Apakah aman melakukan pembayaran online?'
          description='Ya, Sebagian besar sistem pembayaran online menggunakan enkripsi aman untuk melindungi informasi pribadi kamu. Namun, penting untuk hanya melakukan pembayaran di situs web yang kamu percayai dan memiliki sambungan aman (https).'
        />
        <Collapse
          title='Apakah ada jaminan uang kembali?'
          description='Ya. Kami menawarkan jaminan uang kembali dalam 24 jam untuk paket kustom jika kamu berubah pikiran.'
        />
      </div>
    </section>
  );
};

export default PricingFaq;
