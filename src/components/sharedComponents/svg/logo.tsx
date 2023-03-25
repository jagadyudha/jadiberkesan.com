import * as React from 'react';

const LogoSvg = (props: any) => (
  <svg
    fill='none'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMinYMin slice'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.673.007 34.759 27H15.21L5.944 16.615V.007h4.729Z'
      fill='#FF477E'
    />
    <path
      d='M34.76 27 21.647 12.304H34.76V27ZM5.945.007 0 6.095h5.945V.007Z'
      fill='#DA235A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M34.769 0 45.36 12.304H21.65L34.768 0Z'
      fill='#FF477E'
    />
  </svg>
);

export default LogoSvg;
