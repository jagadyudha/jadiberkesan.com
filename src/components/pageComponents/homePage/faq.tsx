import React from 'react';
import Collapse from '@/components/sharedComponents/collapse';
import Animation from '@/components/sharedComponents/animation';

const Faq = () => {
  return (
    <section className='relative w-full '>
      <div className='max-w-7xl mx-auto text-center px-5 md:px-10 lg:px-20'>
        <Animation
          className=' text-center max-w-2xl mx-auto space-y-4'
          variants='fadedown'
          duration={1}
          delay={0.1}
        >
          <h3 className='text-3xl lg:text-4xl font-bold '>
            Pertanyaan yang sering ditanyakan
          </h3>
        </Animation>
        <Animation
          variants='fadedown'
          duration={1}
          delay={0.1}
          className='my-8 md:my-12 max-w-4xl mx-auto'
        >
          <Collapse
            title='Apakah semua undangan berbayar'
            description='Ya. Semua undangan di sini berbayar, tetapi kamu dapat membuat undangan terlebih dahulu tanpa membayar. Hanya bayar jika kamu ingin undanganmu dibagikan secara publik.'
          />
          <Collapse
            title='Apakah undangan bisa aktif selamanya?'
            description='Ya, bisa. Undanganmu akan aktif selamanya. Juga, kamu dapat menghapusnya.'
          />
          <Collapse
            title='Apakah masih bisa diubah setelah undangan dibayar?'
            description='Ya, bisa. Undanganmu dapat diubah sesuka hati, tanpa ada batasan.'
          />
          <Collapse
            title='Apakah saya buat sendiri undangan saya dari nol'
            description='tidak. kamu tidak perlu mempelajari coding untuk membuat undangan. Semua tema yang kami sediakan siap pakai dan mudah digunakan.'
          />
          <Collapse
            title='Bagaimana jika saya ingin membuat tema secara kustom'
            description='Kamu dapat memesan paket kustom pada halaman paket harga.'
          />
        </Animation>
      </div>
    </section>
  );
};

export default Faq;
