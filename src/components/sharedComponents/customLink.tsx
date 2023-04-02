import React from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/link';

export type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  isNotNewTab?: boolean;
} & LinkProps;

const CustomLink: React.FC<Props> = ({
  href,
  children,
  isNotNewTab,
  ...props
}) => {
  const isExternal = href.startsWith('http') ? false : true;
  // if (isExternal) {
  //   return (
  //     <Link href={href}>
  //       <a className='block'>{children}</a>
  //     </Link>
  //   );
  // }

  return (
    <>
      {isExternal ? (
        <Link href={href}>
          <span className='block'>{children}</span>
        </Link>
      ) : (
        <a
          {...props}
          href={href}
          target={isNotNewTab ? '_self' : '_blank'}
          rel='noopener noreferrer'
          className='block'
        >
          {children}
        </a>
      )}
    </>
  );
};

export default CustomLink;
