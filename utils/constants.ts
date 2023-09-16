import * as yup from 'yup';
import { InputDataTypes } from '@/utils/types';

export const defaultTime = {
  day: '--',
  month: '--',
  year: '--',
};

export const framerXVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 2 },
  },
};

export const inputData: InputDataTypes = [
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

export const schema = yup.object({
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
    .max(new Date().getFullYear(), 'Must be in the past')
    .required('The field is required'),
});
