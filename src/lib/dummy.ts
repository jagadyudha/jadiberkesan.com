export const dataHero = [
  'https://res.cloudinary.com/dlpb6j88q/image/upload/jadiberkesan.com/hero/1.webp',
  'https://res.cloudinary.com/dlpb6j88q/image/upload/jadiberkesan.com/hero/2.webp',
  'https://res.cloudinary.com/dlpb6j88q/image/upload/jadiberkesan.com/hero/3.webp',
];

export const dataSeo = {
  title: 'Jadiberkesan — Buat Undangan Digital Instan',
  description:
    'cara sederhana dan mudah untuk membuat situs web pernikahan dalam hitungan menit.',
};

export const dataOpenGraph = {
  title: dataSeo.title,
  description: dataSeo.description,
  images: [
    {
      url: 'https://res.cloudinary.com/dlpb6j88q/image/upload/v1663229000/jadiberkesan.com/og_u1fxn2.webp',
      width: 1200,
      height: 630,
      alt: 'Social',
      type: 'image/jpeg',
    },
  ],
  site_name: dataSeo.title,
};

export const dataCardTwitter = {
  handle: '@handle',
  site: '@site',
  cardType: 'summary_large_image',
};

export const dataPricing = [
  {
    name: 'Paket Umum',
    descriptiobn:
      'Pilihan terbaik untuk calon mempelai yang tidak mau ribet memasukkan data mempelai',
    price: 'Rp. 100.000',
    detail: ['Bebas pilih tema yang ada', 'Tidak perlu ribet'],
  },
  {
    name: 'Paket Kustom',
    descriptiobn:
      'Pilihan terbaik untuk calon mempelai yang ingin melakukan kustom tema undangan',
    price: 'Rp. 200.000',
    detail: ['Semua yang ada di paket umum', 'Tema dan musik sesuai keinginan'],
  },
  {
    name: 'Paket Reseller',
    descriptiobn:
      'Pilihan terbaik untuk Wedding Orginzer yang ingin menjual ulang undangan dengan logo sendiri',
    price: 'Requested',
    detail: ['Dapat Harga lebih murah', 'Akses ke semua tema'],
  },
];
