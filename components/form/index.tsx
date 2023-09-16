'use client';
import React, { useEffect } from 'react';
import Input from '../common/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGlobalContext } from '@/app/context/store';

type FormValues = {
  day: number;
  month: number;
  year: number;
};

const now = new Date();

const schema = yup.object({
  day: yup
    .number()
    .typeError('The field is required')
    .min(1, 'Must be a valid date')
    .max(31, 'Must be a valid date')
    .required('The field is required'),
  month: yup
    .number()
    .typeError('The field is required')
    .min(1, 'Must be a valid date')
    .max(12, 'Must be a valid date')
    .required('The field is required'),
  year: yup
    .number()
    .typeError('The field is required')
    .min(1920, 'Must be a valid date')
    .max(now.getFullYear(), 'Must be in the past')
    .required('The field is required'),
});

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

const Form = (props: Props) => {
  const { time, setTime } = useGlobalContext();

  const form = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, watch, formState } = form;
  const { errors, isValidating, isValid } = formState;

  const data = watch();

  const calculate = ({ day, month, year }) => {
    let born = new Date(`${year}-${month}-${day}`);
    let diff = new Date(now - born);

    year = diff.toISOString().slice(0, 4) - 1970;
    month = diff.getMonth();
    day = diff.getDate();

    return {
      day,
      month,
      year,
    };
  };

  useEffect(() => {
    if (isValid && !isValidating) {
      setTime(calculate(data));
    } else {
      setTime({ day: '--', month: '--', year: '--' });
    }
  }, [isValid, isValidating, setTime]);

  return (
    <form
      noValidate
      className='flex flex-wrap xs:flex-nowrap justify-center md:justify-start gap-4'
    >
      {inputData.map(({ name, placeholder }) => (
        <Input
          key={name}
          name={name}
          register={register}
          errors={errors}
          placeholder={placeholder}
        />
      ))}
    </form>
  );
};

export default Form;
