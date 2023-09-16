'use client';
import React from 'react';
import { useGlobalContext } from '@/app/context/store';

type Props = {};

const periods = ['years', 'months', 'days'];

const Results = (props: Props) => {
  const { time, setTime } = useGlobalContext();

  return (
    <div className='flex flex-col items-center font-extrabold italic text-[calc(8vw)] xs:text-[56px] md:text-[104px] leading-[1] w-full'>
      {periods.map((item) => (
        <p key={item} className='w-full whitespace-nowrap'>
          <span className='text-purple-100 mr-2'>
            {time[item.slice(0, -1)]}
          </span>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Results;
