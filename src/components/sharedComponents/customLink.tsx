import React from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/link';

export type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & LinkProps;

const CustomLink: React.FC<Props> = ({ href, children, ...props }) => {
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
        <a {...props} href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )}
    </>
  );
};

export default CustomLink;
