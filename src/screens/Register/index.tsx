import React from 'react';

import PageLayout from '../../components/PageLayout';
import FormSteps from './FormSteps';
import { RegisterFormContextProvider } from './context/RegisterForm';

const Register = () => {
  return (
    <PageLayout
      title="Registrar"
      subtitle="Bem-vindo, preencha os passos do formulário a seguir para se cadastrar na nossa plataforma"
    >
      <RegisterFormContextProvider>
        <FormSteps />
      </RegisterFormContextProvider>
    </PageLayout>
  );
};

export default Register;
