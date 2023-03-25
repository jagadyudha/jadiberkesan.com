import React from 'react';
import clsx from 'clsx';

export type Props = {
  variants?: string;
  state?: boolean;
};

const Loading: React.FC<Props> = ({ variants, state }) => {
  const [isHidden, setIsHidden] = React.useState(false);
  // const [afterDelayLoading, setAfterDelayLoading] = React.useState(true);
  React.useEffect(() => {
    if (variants == 'page') {
      const body = document.querySelector('body')!;
      body.style.overflow = state ? 'hidden' : 'auto';
    }
    if (!state) {
      setTimeout(() => {
        setIsHidden(true);
      }, 800);
    } else {
      setIsHidden(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, isHidden]);

  if (variants === 'page') {
    return (
      <>
        <div
          className={clsx(
            !state ? 'opacity-0' : 'opacity-100',
            isHidden && 'hidden',
            ' duration-500 delay-300 backdrop-blur-4xl transition-opacity flex items-center justify-center absolute bg-white top-0 h-screen w-screen z-10'
          )}
        >
          <div className='heart'></div>
        </div>
      </>
    );
  }

  return <div className='heart'></div>;
};

export default Loading;
