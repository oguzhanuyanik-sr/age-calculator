'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Arrow from '@/public/icon-arrow.svg';
import { framerXVariants } from '@/utils/constants';

const Divider = () => {
  return (
    <motion.div
      variants={framerXVariants}
      initial='initial'
      animate='animate'
      className='flex items-center relative justify-center md:justify-end my-8'
    >
      <div className='h-[1px] w-full bg-white-300 my-6'></div>
      <div className='bg-purple-100 min-w-[64px] md:min-w-[96px] min-h-[64px] md:min-h-[96px] rounded-full flex justify-center items-center absolute hover:bg-black-100 transition-all cursor-pointer'>
        <Image src={Arrow} alt='Arrow' height={44} width={44} sizes='100%' />
      </div>
    </motion.div>
  );
};

export default Divider;
