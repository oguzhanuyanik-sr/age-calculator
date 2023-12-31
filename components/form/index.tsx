'use client';
import React from 'react';
import Input from '../common/input';
import { useFormHandling } from '@/hooks/useFormHandling';
import { inputData } from '@/utils/constants';

const Form = () => {
  const { register, errors } = useFormHandling();

  return (
    <form
      noValidate
      className='flex flex-wrap xs:flex-nowrap justify-center md:justify-start gap-4'
    >
      {inputData.map(({ name, placeholder }, i) => (
        <Input
          key={name}
          name={name}
          i={i}
          register={register}
          errors={errors}
          placeholder={placeholder}
        />
      ))}
    </form>
  );
};

export default Form;
