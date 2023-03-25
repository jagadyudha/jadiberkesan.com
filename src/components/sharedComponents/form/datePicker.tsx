import React from 'react';
import DatePicker from 'react-datepicker';
import { HiOutlineCalendar } from 'react-icons/hi';
import { FocusEventHandler } from 'react';

export type Props = {
  title?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange: (date: Date) => void;
  onChangeRaw: (e: Event) => void;
  selected?: Date;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<Props> = ({ title, onChange, selected, onBlur }) => {
  return (
    <div className='my-4 relative'>
      {title && (
        <span className='block text-xs md text-gray-500 my-2 uppercase tracking-wide'>
          {title}
        </span>
      )}
      <div>
        <DatePicker
          className='p-4 rounded-lg placeholder:text-gray-400 w-full border outline-none ring-0 transition-colors duration-300 focus:ring-primary focus:border-primary focus:border-opacity-20 border-black border-opacity-10'
          selected={selected}
          onChange={onChange}
          onBlur={onBlur}
          // onFocus={(e) => {
          //   e.target.blur();
          // }}
          peekNextMonth
          showTimeInput
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          disabledKeyboardNavigation
          showDisabledMonthNavigation
          minDate={new Date()}
          required
        />
        <HiOutlineCalendar
          className={`absolute text-gray-400 text-lg top-11 z-0 pointer-events-none right-4 duration-300`}
        />
      </div>
    </div>
  );
};

export default TextInput;
