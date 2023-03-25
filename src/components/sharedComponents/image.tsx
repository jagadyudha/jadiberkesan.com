import React from 'react';
import NextImage, { ImageProps } from 'next/image';

export type Props = {
  src: string;
  isModal?: boolean;
  effect?: string;
  index?: number;
  images?: Array<string>;
} & ImageProps;

const Image: React.FC<Props> = ({
  src,
  className,
  isModal,
  effect,
  index,
  images,
  ...props
}) => {
  // create function to detect cloudinary
  const adaptiveCloudinaryImage = (src: string, effect?: string) => {
    const convertToWebp = src.replace(/\.(png|jpg|jpeg)$/, '.webp');
    const isCloudinary = src.startsWith('/');

    if (effect) {
      return isCloudinary
        ? `https://res.cloudinary.com/dlpb6j88q/image/upload/${effect}${convertToWebp}`
        : src.replace('image/upload/', `image/upload/${effect ?? ''}/`);
    } else {
      return isCloudinary
        ? `https://res.cloudinary.com/dlpb6j88q/image/upload/c_limit%2Cf_auto%2Cfl_progressive%2Cq_75%2Cw_800${convertToWebp}`
        : src;
    }
  };

  return (
    <>
      <figure
        className={`${
          className ? className : 'rounded-md'
        } flex justify-center overflow-hidden relative w-full h-full`}
      >
        <NextImage
          src={adaptiveCloudinaryImage(src, effect)}
          placeholder='blur'
          blurDataURL={adaptiveCloudinaryImage(src, effect)}
          className={`${className ? className : 'rounded-md'}`}
          {...props}
          unoptimized={true}
        />
      </figure>
    </>
  );
};

export default Image;
