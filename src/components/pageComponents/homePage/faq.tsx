import React from 'react';
import Collapse from '@/components/sharedComponents/collapse';
import Animation from '@/components/sharedComponents/animation';

const data = [
  {
    title: 'Apa itu undangan Website/Digital?',
    description:
      'Undangan website/digital merupakan undangan yang disebarkan melalui platform digital. Jadi, para tamu bisa akses halaman web melalui link yang dikirim via Whatsapp atau pesan lainnya.',
  },
  {
    title:
      'Apa keuntungan menggunakan undangan Website/Digital dibandingkan undangan fisik?',
    description:
      'undangan website/digital lebih fleksibel dalam hal desain dan konten. Juga dapat menghemat waktu dan biaya yang biasanya terkait dengan pencetakan.',
  },
  {
    title: 'Apakah semua undangan berbayar?',
    description:
      'Ya. Semua undangan di sini berbayar, tetapi kamu dapat membuat undangan terlebih dahulu tanpa membayar. Hanya membayar jika kamu ingin undanganmu dibagikan secara publik.',
  },
  {
    title: 'Apakah undangan akan aktif selamanya?',
    description:
      'Ya. Undanganmu akan aktif selamanya. Juga, kamu dapat menghapusnya.',
  },
  {
    title: 'Apakah undangan masih bisa diubah setelah dibayar?',
    description:
      'Bisa. Undanganmu dapat diubah sesuka hati, kecuali pada bagian tema dan domain.',
  },
  {
    title: 'Apakah undangan bisa tanpa menggunakan foto mempelai?',
    description:
      'Bisa. Semua tema yang terdapat dalam katalog kami dapat digunakan tanpa menggunakan foto, melainkan dengan animasi.',
  },
  {
    title: 'Apakah saya buat sendiri undangan saya dari nol',
    description:
      'Tidak. kamu tidak perlu mempelajari coding untuk membuat undangan. Semua tema yang kami sediakan siap pakai.',
  },
  {
    title: 'Apakah undangan dapat diakses melalui handphone?',
    description:
      'Bisa. Semua tema undangan di jadiberkesan sudah otomatis dapat diakses di semua perangkat.',
  },
  {
    title: 'Apakah ada jaminan uang kembali?',
    description:
      'Ya. Kami menawarkan jaminan pengembalian uang dalam waktu 24 jam jika kamu kurang puas dengan produk kami.',
  },
];

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
          {data.map((item) => (
            <Collapse
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Animation>
      </div>
    </section>
  );
};

export default Faq;
