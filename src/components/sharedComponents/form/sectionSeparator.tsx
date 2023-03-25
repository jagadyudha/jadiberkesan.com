import React from 'react';

export type Props = {
  title: string;
};

const SectionSeparator: React.FC<Props> = ({ title }) => {
  return (
    <div className='mb-12 flex-grow flex items-center justify-center relative'>
      <span className='bg-white absolute font-semibold border p-2 rounded-lg border-black border-opacity-10 text-sm text-primary'>
        {title}
      </span>
      <hr className='w-full' />
    </div>
  );
};

export default SectionSeparator;
