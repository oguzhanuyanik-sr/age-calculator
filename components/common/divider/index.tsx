import React from 'react';
import Arrow from '@/public/icon-arrow.svg';
import Image from 'next/image';

type Props = {};

const Divider = (props: Props) => {
  return (
    <div className='flex items-center relative justify-center md:justify-end my-8'>
      <div className='h-[1px] w-full bg-white-300 my-6'></div>
      <div className='bg-purple-100 min-w-[64px] md:min-w-[96px] min-h-[64px] md:min-h-[96px] rounded-full flex justify-center items-center absolute hover:bg-black-100 transition-all cursor-pointer'>
        <Image src={Arrow} alt='Arrow' height={44} width={44} sizes='100%' />
      </div>
    </div>
  );
};

export default Divider;
