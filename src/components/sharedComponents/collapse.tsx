import React from 'react';
import { IoChevronUp } from 'react-icons/io5';
import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';

export type Props = {
  title: string;
  description: string;
};

const Collapse: React.FC<Props> = ({ title, description }) => {
  return (
    <div className='border-b border-b-neutral border-opacity-20 py-2'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-6'>
              <span className={clsx(open && 'text-primary')}>{title}</span>
              <IoChevronUp
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-primary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='text-sm text-gray-500 text-left pb-2'>
              {description}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Collapse;
