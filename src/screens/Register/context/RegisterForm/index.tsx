import React, { createContext, useState } from 'react';

type Props = {
  step: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
};

const RegisterFormContext = createContext<Props>({ step: 0 });

const RegisterFormContextProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  return (
    <RegisterFormContext.Provider value={{ step, setStep }}>
      {children}
    </RegisterFormContext.Provider>
  );
};

export { RegisterFormContextProvider };
export default RegisterFormContext;
