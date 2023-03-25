import React from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloseOutline, IoAddOutline } from 'react-icons/io5';
import Loading from '@/components/sharedComponents/loading';

export type Props = {
  image: Array<string> | null;
  setForm: any;
  loading?: boolean;
  onDrop: (acceptedFiles: any) => void;
  icons?: React.ReactNode;
};

const MultipleDropzone: React.FC<Props> = ({
  image,
  setForm,
  onDrop,
  loading,
  icons,
}) => {
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg', '.gif'],
      },
      maxFiles: 6,
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }, index) => (
    <p key={index} className='text-red-400 font-bold'>
      {errors.map((e) =>
        e.message === 'Too many files'
          ? 'Mohon Upload satu per satu'
          : e.message
      )}
    </p>
  ));

  return (
    <div className='my-4'>
      <span className='block label-text text-gray-500'>
        Upload maksimal sebanyak 6 foto
      </span>
      <div
        className={`${
          isDragActive ? 'border-primary' : 'border-gray-200'
        } border-2 px-5 py-5 transition duration-300 rounded-lg text-center border-dashed my-2 cursor-pointer`}
      >
        {/* if not 0 image gallery */}
        {image?.length ? (
          <div className='grid grid-cols-3 gap-4'>
            {image?.map((item, index) => (
              <div key={index} className='relative'>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setForm(
                      'gallery',
                      image.filter((remove) => remove != item)
                    );
                  }}
                  className='z-0 absolute -right-2 -top-2 text-xl text-white bg-danger rounded-full'
                >
                  <IoCloseOutline />
                </button>
                <img
                  className='w-full aspect-square object-cover h-full mx-auto'
                  src={item}
                  alt={item}
                />
              </div>
            ))}
            {loading ? (
              <div className='flex items-center justify-center'>
                <Loading />
              </div>
            ) : (
              <>
                {image?.length! < 6 && (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <div>
                        <IoAddOutline className='my-3 mx-auto text-7xl text-primary transition duration-300' />
                      </div>
                    ) : (
                      <div>
                        <IoAddOutline className='my-3 mx-auto text-5xl text-gray-600' />
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div {...getRootProps()}>
            {loading ? (
              <div className='min-h-[200px] flex justify-center items-center'>
                <Loading />
              </div>
            ) : (
              <>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className='my-10'>
                    <div className='my-3 mx-auto flex justify-center text-7xl rounded-lg text-primary transition duration-300'>
                      {icons}
                    </div>
                    <p className='text-gray-500 max-w-[14rem] mx-auto'>
                      Seret gambar disini...
                    </p>
                  </div>
                ) : (
                  <div className='my-10'>
                    <div className='my-3 mx-auto flex justify-center text-7xl rounded-lg text-gray-500 transition duration-300'>
                      {icons}
                    </div>
                    <p className='text-gray-500 max-w-[14rem] mx-auto'>
                      Seret gambar disini atau {` `}
                      <span className='text-primary font-medium'>
                        pilih gambar
                      </span>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
        <input {...getInputProps()} />
        <ul>{fileRejectionItems}</ul>
      </div>
    </div>
  );
};

export default MultipleDropzone;
