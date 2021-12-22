import React, { useContext } from 'react';

import AccountForm from '../AccountForm';
import AddressForm from '../AddressForm';
import BasicInfoForm from '../BasicInfoForm';
import RegisterFormContext from '../context/RegisterForm';
import { Container, StepNumber, StepDescription } from './styles';

const FormSteps = () => {
  const { step } = useContext(RegisterFormContext);

  const formSteps = {
    0: {
      title: 'Informações pessoais',
      component: <BasicInfoForm />,
    },
    1: {
      title: 'Endereço',
      component: <AddressForm />,
    },
    2: {
      title: 'Conta',
      component: <AccountForm />,
    },
    3: {
      title: 'Confirmação',
      component: null,
    },
  };

  return (
    <Container>
      <StepNumber>{step + 1}.</StepNumber>
      <StepDescription>{formSteps[step]?.title}</StepDescription>
      {formSteps[step]?.component}
    </Container>
  );
};

export default FormSteps;
