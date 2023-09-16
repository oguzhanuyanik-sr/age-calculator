import React from 'react';
import { motion } from 'framer-motion';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormValues = {
  day: number;
  month: number;
  year: number;
};

type InputProps = {
  name: 'day' | 'month' | 'year';
  placeholder: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  i: number;
};

const Input = ({ name, placeholder, register, errors, i }: InputProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', duration: 0.75 * (i + 1) },
      }}
      className='flex flex-col max-w-[160px]'
    >
      <label htmlFor={name} className='text-grey-100 uppercase'>
        {name}
      </label>
      <input
        type='number'
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className='outline-none border border-white-300 placeholder:text-grey-100 text-black-100  font-bold text-xl md:text-2xl rounded-lg pl-2 py-3 mt-2 w-full hover:border-purple-100 transition-all'
      />
      <p className='text-red-100 italic text-sm mt-1'>
        {errors[name]?.message}
      </p>
    </motion.div>
  );
};

export default Input;
