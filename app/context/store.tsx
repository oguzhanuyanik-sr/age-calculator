'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type TimeType = {
  day: string;
  month: string;
  year: string;
};

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
  const [time, setTime] = useState('--');

  return (
    <GlobalContext.Provider value={{ time, setTime }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
