import React, { ReactElement } from 'react';

import clsx from 'clsx';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Props = {
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'danger' | 'success' | 'info';
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
          color === 'primary' && ' bg-primary text-white',
          color === 'success' && ' bg-success text-white',
          color === 'danger' && ' bg-danger text-white',
          props.disabled
            ? 'cursor-not-allowed bg-neutral bg-opacity-80'
            : 'duration-300 hover:bg-opacity-90 active:scale-90',
          'flex items-center justify-center space-x-2 rounded-lg px-4 py-3 capitalize',
          loading && 'cursor-not-allowed active:scale-100',
          customClassName
        )}
        disabled={props?.disabled || loading}
      >
        {loading && (
          <div className=' animate-spin'>
            <AiOutlineLoading3Quarters />
          </div>
        )}
        {leftIcon && !loading && <div>{leftIcon}</div>}
        <span>{children}</span>
        {rightIcon && !loading && <div>{rightIcon}</div>}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        {...props}
        className={clsx(
          color === 'primary' &&
            `border-primary text-primary hover:bg-primary hover:text-white ${
              !props?.disabled && 'hover:text-white'
            }`,
          color === 'success' &&
            `border-success  text-success hover:bg-success hover:text-white ${
              !props?.disabled && 'hover:text-white'
            }`,
          color === 'danger' &&
            `border-danger text-danger hover:bg-danger ${
              !props?.disabled && 'hover:text-white'
            }`,
          !color && ' border-neutral-300 text-neutral-800 hover:opacity-90',
          !children && 'px-0.5 py-0.5',
          'flex items-center justify-center space-x-2 rounded-lg border px-4 py-3 duration-300 hover:bg-opacity-95 active:scale-90 capitalize',
          props.disabled &&
            'cursor-not-allowed opacity-40 hover:bg-transparent active:scale-100',
          customClassName
        )}
      >
        {leftIcon && <div>{leftIcon}</div>}
        {children && <span>{children}</span>}
        {rightIcon && <div>{rightIcon}</div>}
      </button>
    );
  }

  return (
    <button
      {...props}
      disabled={props?.disabled || loading}
      className={clsx(
        color === 'primary' && ' text-primary ',
        color === 'success' && ' text-success',
        color === 'danger' && ' text-danger',
        !color && 'text-neutral-800',
        'flex items-center justify-center space-x-2',
        (props?.disabled || loading) && 'cursor-not-allowed  text-neutral-400',
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
