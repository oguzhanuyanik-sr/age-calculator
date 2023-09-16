import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const Input = ({ name, placeholder, register, errors, i }: Props) => {
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
        name={name}
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
