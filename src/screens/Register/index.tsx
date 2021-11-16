import React from 'react';

import PageLayout from '../../components/PageLayout';
import SwitchCaseForm from './SwitchCaseForm';
import { RegisterFormContextProvider } from './context/RegisterForm';

const Register = () => {
  return (
    <PageLayout
      title="Registrar"
      subtitle="Bem-vindo, selecione uma das opções abaixo para prosseguir"
    >
      <RegisterFormContextProvider>
        <SwitchCaseForm />
      </RegisterFormContextProvider>
    </PageLayout>
  );
};

export default Register;
