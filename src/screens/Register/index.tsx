import React from 'react';

import PageLayout from '../../components/PageLayout';
import FormSteps from './FormSteps';
import { RegisterFormContextProvider } from './context/RegisterForm';

const Register = () => {
  return (
    <PageLayout
      title="Registrar"
      subtitle="Bem-vindo, selecione uma das opções abaixo para prosseguir"
    >
      <RegisterFormContextProvider>
        <FormSteps />
      </RegisterFormContextProvider>
    </PageLayout>
  );
};

export default Register;
