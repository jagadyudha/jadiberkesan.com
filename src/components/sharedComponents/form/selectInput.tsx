import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiCheck, HiOutlineSearch } from 'react-icons/hi';
import clsx from 'clsx';

export type Props = {
  title: string;
  options: Array<any>;
  value: any;
  placeholder?: string;
  ref?: React.Ref<any>;
  onChange?: (option: any) => void;
  disabled?: boolean;
  itemText: string;
  itemValue: string;
  isValueString?: boolean;
};

export default function Example({ ...props }: Props) {
  const finalValue = props.isValueString
    ? props.value
    : props.value[props.itemValue];
  const value = props.options.findIndex(
    (item) => item[props.itemValue] == finalValue
  );

  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? props.options
      : props.options.filter((option) =>
          option[props.itemText]
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <>
      {props.title && (
        <span className='block text-xs md text-gray-500 !my-2 uppercase tracking-wide'>
          {props.title}
        </span>
      )}
      <Combobox
        disabled={props.disabled}
        value={props.options[value < 0 ? 0 : value]}
        onChange={props.onChange}
      >
        <div className='relative !m-0'>
          <div
            className={clsx(
              props.disabled && 'opacity-60',
              'relative w-full cursor-default overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm'
            )}
          >
            <Combobox.Button className='w-full'>
              <Combobox.Input
                className={clsx(
                  props.disabled && 'bg-gray-100',
                  'w-full border-gray-200 text-sm leading-5 p-4 rounded-lg text-gray-900 focus:ring-0 border focus:border focus:border-primary'
                )}
                displayValue={(option: any) => option[props.itemText]}
                onChange={(event) => setQuery(event.target.value)}
              />
              <HiOutlineSearch className='absolute right-4 bottom-[1.1rem] text-gray-400 text-lg' />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredOptions.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-3 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-3 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option[props.itemText]}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary'
                            }`}
                          >
                            <HiCheck className='text-xl' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
}
