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
  error?: string;
  ref?: React.Ref<any>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = React.forwardRef(
  ({ title, ...props }, ref) => {
    return (
      <label>
        {title && (
          <span className='block text-xs md text-gray-500 my-2 uppercase tracking-wide'>
            {title}
          </span>
        )}
        <div className='relative'>
          <input
            ref={ref}
            {...props}
            className={clsx(
              props.error
                ? 'focus:border-danger border-danger'
                : 'focus:border-primary border-gray-200',
              'p-4 rounded-lg placeholder:text-gray-400 w-full border outline-none ring-0 focus:ring-0 transition-colors duration-300'
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

TextInput.displayName = 'TextInput';
export default TextInput;
