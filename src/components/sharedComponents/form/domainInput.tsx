import React, { FocusEventHandler } from 'react';
import clsx from 'clsx';
import { HiExclamationCircle } from 'react-icons/hi';

export type Props = {
  title?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  className?: string;
  required?: boolean;
  type?: string;
  ref?: React.Ref<any>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  domain: string;
  error?: string;
};

const DomainInput: React.FC<Props> = React.forwardRef(
  ({ title, disabled, domain, ...props }, ref) => {
    return (
      <label className={`${disabled && 'opacity-60'}  my-2 md:my-4`}>
        {title && (
          <span className='block text-xs md text-gray-500 my-2 tracking-wide'>
            {title}
          </span>
        )}
        <div className='relative'>
          <span className='absolute top-4 left-4'>jadiberkesan.com/</span>
          <input
            disabled={disabled}
            {...props}
            ref={ref}
            placeholder='Wanita-Pria'
            className={clsx(
              props.error
                ? 'focus:border-danger border-danger'
                : 'focus:border-primary border-gray-200',
              disabled && 'bg-gray-100',
              'p-4 pl-[164px] rounded-lg placeholder:text-gray-400 w-full border outline-none ring-0 focus:ring-0 transition-colors duration-300'
            )}
          />
          {props.error && (
            <HiExclamationCircle className='absolute right-4 bottom-5 text-lg text-danger' />
          )}
        </div>
        {props.error && <p className=' text-danger text-sm'>{props.error}</p>}
      </label>
    );
  }
);

DomainInput.displayName = 'DomainInput';
export default DomainInput;
