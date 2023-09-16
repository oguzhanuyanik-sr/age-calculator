import React from 'react';
import Input from '../common/input';

type Props = {};

const inputData = [
  {
    name: 'day',
    placeholder: 'DD',
  },
  {
    name: 'month',
    placeholder: 'MM',
  },
  {
    name: 'year',
    placeholder: 'YYYY',
  },
];

const Inputs = (props: Props) => {
  return (
    <form className='flex flex-wrap xs:flex-nowrap justify-center md:justify-start gap-4'>
      {inputData.map(({ name, placeholder }) => (
        <Input name={name} placeholder={placeholder} />
      ))}
    </form>
  );
};

export default Inputs;
