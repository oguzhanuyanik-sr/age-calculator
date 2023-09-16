'use client';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { TimeType } from '@/utils/types';
import { defaultTime } from '@/utils/constants';

interface ContextProps {
  time: TimeType;
  setTime: Dispatch<SetStateAction<TimeType>>;
}

const GlobalContext = createContext<ContextProps>({
  time: {
    day: '',
    month: '',
    year: '',
  },
  setTime: (): string => '',
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [time, setTime] = useState(defaultTime);

  return (
    <GlobalContext.Provider value={{ time, setTime }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
