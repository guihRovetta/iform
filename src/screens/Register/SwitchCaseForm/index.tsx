import React, { useContext } from 'react';

import BasicInfoForm from '../BasicInfoForm';
import RegisterFormContext from '../context/RegisterForm';
import { Container, StepNumber, StepDescription } from './styles';

const STEPS = ['Informações pessoais', 'Endereço', 'Conta', 'Confirmação'];

const SwitchCaseForm = () => {
  const { step } = useContext(RegisterFormContext);

  return (
    <Container>
      <StepNumber>{step + 1}.</StepNumber>
      <StepDescription>{STEPS[step]}</StepDescription>

      {(() => {
        switch (step) {
          case 0:
            return <BasicInfoForm />;
          case 1:
            return null;
          case 2:
            return null;
          case 3:
            return null;
          default:
            return null;
        }
      })()}
    </Container>
  );
};

export default SwitchCaseForm;
