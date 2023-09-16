import React from 'react';

type Props = {};

const Input = ({ name, placeholder }: Props) => {
  return (
    <div className='flex flex-col max-w-[160px]'>
      <label htmlFor={name} className='text-grey-100 uppercase'>
        {name}
      </label>
      <input
        type='number'
        name={name}
        id={name}
        placeholder={placeholder}
        className='outline-none border border-white-300 placeholder:text-grey-100 text-black-100 rounded-lg pl-2 py-3 mt-2 w-full hover:border-purple-100 transition-all'
      />
      <p className='text-red-100 italic text-sm mt-1'>Must be a valid day</p>
    </div>
  );
};

export default Input;
