'use client';
import React from 'react';
import { useGlobalContext } from '@/app/context/store';
import { motion } from 'framer-motion';

type PeriodsType = 'year' | 'month' | 'day';

const periods: PeriodsType[] = ['year', 'month', 'day'];

const Results = () => {
  const { time } = useGlobalContext();

  return (
    <div className='flex flex-col items-center font-extrabold italic text-[calc(8vw)] xs:text-[56px] md:text-[104px] leading-[1] w-full'>
      {periods.map((item, index) => {
        return (
          <motion.p
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', duration: 0.75 * (index + 1) },
            }}
            key={item}
            className='w-full whitespace-nowrap'
          >
            <span className='text-purple-100 mr-2'>{time[item]}</span>
            {item}s
          </motion.p>
        );
      })}
    </div>
  );
};

export default Results;
