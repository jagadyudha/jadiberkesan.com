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
    name: 'Paket Regular',
    descriptiobn:
      'Pilihan terbaik untuk calon mempelai yang tidak ingin repot mengatur undangan.',
    price: 'Rp. 100.000',
    detail: ['Tidak perlu repot', 'Proses mudah dan cepat'],
  },
  {
    name: 'Paket Reseller',
    descriptiobn:
      'Pilihan terbaik untuk pengguna yang ingin menjual ulang undangan.',
    price: 'Requested',
    detail: ['Potongan harga hingga 15%', 'Akses ke seluruh tema'],
  },
  {
    name: 'Paket Vendor',
    descriptiobn:
      'Pilihan terbaik untuk Wedding Organizer yang ingin menjual undangan dengan kustomisasi branding',
    price: 'Requested',
    detail: [
      'Semua yang ada di paket reseller',
      'Halaman vendor profile',
      'Kustomisasi logo dan nama vendor',
    ],
  },
];
