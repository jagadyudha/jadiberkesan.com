import React from 'react';

export type Props = {
  title?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

const TextArea: React.FC<Props> = ({ title, ...props }) => {
  return (
    <div className='my-4'>
      <label>
        {title && (
          <span className='block text-xs md text-gray-500 my-2 uppercase tracking-wide'>
            {title}
          </span>
        )}
        <textarea
          className='p-4 min-h-[200px] text-sm outline-none transition-colors duration-300 rounded-lg w-full border focus:ring-primary focus:border-primary focus:border-opacity-20 border-black border-opacity-10'
          {...props}
        />
      </label>
    </div>
  );
};

export default TextArea;
