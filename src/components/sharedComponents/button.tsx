import React, { ReactElement } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import clsx from 'clsx';

type Props = {
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'danger' | 'success' | 'info' | 'neutral';
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  customClassName?: string;
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  variant,
  color,
  leftIcon,
  rightIcon,
  loading,
  customClassName,
  ...props
}) => {
  if (variant === 'solid') {
    return (
      <button
        {...props}
        className={clsx(
          color === 'primary' && ' bg-primary text-white focus:ring-primary',
          color === 'success' && ' bg-success text-white focus:ring-success',
          color === 'danger' && ' bg-danger text-white focus:ring-danger',
          color === 'neutral' &&
            ' bg-gray-100 text-gray-500 focus:ring-gray-400',
          props.disabled
            ? 'cursor-not-allowed bg-neutral bg-opacity-80'
            : 'hover:bg-opacity-90 focus:ring-opacity-30 focus:ring',
          'flex items-center justify-center space-x-2 rounded-lg px-4 py-3 capitalize',
          loading &&
            'cursor-not-allowed active:scale-100 hover:bg-opacity-80 bg-opacity-80',
          customClassName
        )}
        disabled={props?.disabled || loading}
      >
        {loading ? (
          <div className='lds-ellipsis [&>div]:bg-white'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {leftIcon && <div>{leftIcon}</div>}
            <span>{children}</span>
            {rightIcon && <div>{rightIcon}</div>}
          </>
        )}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        {...props}
        className={clsx(
          color === 'primary' &&
            `border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary ${
              !props?.disabled && 'hover:text-white'
            }`,
          color === 'success' &&
            `border-success  text-success hover:bg-success hover:text-white focus:ring-success ${
              !props?.disabled && 'hover:text-white'
            }`,
          color === 'danger' &&
            `border-danger text-danger hover:bg-danger focus:ring-danger ${
              !props?.disabled && 'hover:text-white'
            }`,
          !color && ' border-neutral-300 text-neutral-800 hover:opacity-90',
          !children && 'px-0.5 py-0.5',
          'flex items-center justify-center space-x-2 rounded-lg border px-4 py-3 duration-300 hover:bg-opacity-95 focus:ring-opacity-30 focus:ring capitalize',
          props.disabled &&
            'cursor-not-allowed opacity-40 hover:bg-transparent active:scale-100',
          loading &&
            'cursor-not-allowed active:scale-100 hover:bg-white opacity-80',
          customClassName
        )}
      >
        {loading ? (
          <div className='lds-ellipsis [&>div]:bg-primary'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {leftIcon && <div>{leftIcon}</div>}
            {children && <span>{children}</span>}
            {rightIcon && <div>{rightIcon}</div>}
          </>
        )}
      </button>
    );
  }

  return (
    <button
      {...props}
      disabled={props?.disabled || loading}
      className={clsx(
        color === 'primary' && ' text-primary',
        color === 'success' && ' text-success',
        color === 'danger' && ' text-danger',
        !color && 'text-neutral hover:text-primary',
        'flex items-center justify-center space-x-2',
        (props?.disabled || loading) &&
          'cursor-not-allowed opacity-60 hover:text-neutral',
        customClassName
      )}
    >
      {loading && (
        <div className=' animate-spin'>
          <AiOutlineLoading3Quarters />
        </div>
      )}
      {leftIcon && !loading && <div>{leftIcon}</div>}
      {children && <span>{children}</span>}
      {rightIcon && !loading && <div>{rightIcon}</div>}
    </button>
  );
};

export default Button;
