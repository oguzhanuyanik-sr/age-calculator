import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGlobalContext } from '@/app/context/store';
import { FormValues } from '@/utils/types';
import { schema, defaultTime } from '@/utils/constants';

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

      setTime(calculate(data));
    } else {
      setTime(defaultTime);
    }
  }, [isValid, isValidating, form, setTime]);

  return {
    form,
    register,
    errors,
    watch,
  };
}
