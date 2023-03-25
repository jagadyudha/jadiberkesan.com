import React from 'react';
import {
  IoImage,
  IoAlarm,
  IoMusicalNote,
  IoBrush,
  IoShareSocial,
  IoChatbubbles,
  IoMail,
  IoCalendarNumberSharp,
  IoExpandOutline,
} from 'react-icons/io5';
import Animation from '@/components/sharedComponents/animation';

const FeatureList = () => {
  return (
    <section className='relative w-full'>
      <div className='max-w-7xl mx-auto text-center px-5 md:px-10 lg:px-20'>
        <Animation
          className=' text-center max-w-2xl mx-auto space-y-4'
          variants='fadedown'
          duration={1}
          delay={0.1}
        >
          <h3 className='text-3xl lg:text-4xl font-bold '>Fitur undangan</h3>
          <p className='max-w-xs sm:max-w-md mx-auto'>
            Fitur menarik dari undangan yang dapat membuat acara pernikahanmu
            menjadi lebih berkesan
          </p>
        </Animation>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 md:mt-16'>
          {data.map((item, index) => (
            <Animation key={index} duration={0.8} delay={0.1}>
              <div className='relative border border-gray-200 p-10 rounded-lg space-y-6'>
                <div className='bg-primary rounded-full w-fit text-3xl text-white p-3'>
                  {item.icon}
                </div>
                <div className='text-left space-y-1'>
                  <h3 className='font-bold'>{item.name}</h3>
                  <p className=' max-w-xs'>{item.description}</p>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    name: 'Galeri Foto',
    description: 'Bagikan foto moment indah kamu dengan pasangan',
    icon: <IoImage />,
  },
  {
    name: 'Hitung Mundur',
    description: 'Hitung mundur waktu acara pernikahanmu',
    icon: <IoAlarm />,
  },
  {
    name: 'Background Music',
    description: 'Pilih musik yang sesuai dengan selera kamu',
    icon: <IoMusicalNote />,
  },
  {
    name: 'Live Editing',
    description: 'Edit undangan sesuka hati secara real-time',
    icon: <IoBrush />,
  },
  {
    name: 'Berbagi Undangan',
    description: 'Bagikan dengan tamu yang ingin kamu undang',
    icon: <IoShareSocial />,
  },
  {
    name: 'Berbagi Ucapan',
    description: 'Tamu undangan dapat memberikan ucapan selamat',
    icon: <IoChatbubbles />,
  },
  {
    name: 'Amplop Digital',
    description: 'Tamu undangan bisa mengirim amplop melalui dompet digital',
    icon: <IoMail />,
  },
  {
    name: 'Google Kalender',
    description: 'Simpan tanggal acara di google Kalender',
    icon: <IoCalendarNumberSharp />,
  },
  {
    name: 'Responsive Website',
    description: 'Buka undangan di semua jenis perangkat ',
    icon: <IoExpandOutline />,
  },
];

export default FeatureList;
