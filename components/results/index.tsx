import React from 'react';

type Props = {};

const periods = ['years', 'months', 'days'];

const Results = (props: Props) => {
  return (
    <div className='flex flex-col items-center font-extrabold italic text-[calc(8vw)] xs:text-[56px] md:text-[104px] leading-[1] w-full'>
      {periods.map((item) => (
        <p key={item} className='w-full whitespace-nowrap'>
          <span className='text-purple-100 mr-2'>--</span>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Results;
