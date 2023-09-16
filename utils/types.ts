export type TimeType = {
  day: string;
  month: string;
  year: string;
};

export type FormValues = {
  day: number;
  month: number;
  year: number;
};

export type PeriodsType = 'year' | 'month' | 'day';

export type InputDataTypes = {
  name: 'day' | 'month' | 'year';
  placeholder: string;
}[];
