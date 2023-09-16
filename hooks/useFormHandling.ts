import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGlobalContext } from '@/app/context/store';

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

type FormValues = {
  day: number;
  month: number;
  year: number;
};

export function useFormHandling() {
  const { setTime } = useGlobalContext();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { register, watch, formState } = form;
  const { errors, isValidating, isValid } = formState;

  const calculate = ({ day, month, year }: FormValues) => {
    let born = Number(new Date(`${year}-${month}-${day}`));
    let now = Number(new Date());

    let diff = new Date(now - born);

    return {
      year: (Number(diff.toISOString().slice(0, 4)) - 1970).toString(),
      month: diff.getMonth().toString(),
      day: diff.getDate().toString(),
    };
  };

  useEffect(() => {
    if (isValid && !isValidating) {
      let data = form.getValues();

      let data2 = calculate(data);

      setTime(data2);
    } else {
      setTime({ day: '--', month: '--', year: '--' });
    }
  }, [isValid, isValidating, form, setTime]);

  return {
    form,
    register,
    errors,
    watch,
  };
}
