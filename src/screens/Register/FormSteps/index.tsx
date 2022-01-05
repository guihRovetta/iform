import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';

import AccountForm from '../AccountForm';
import AddressForm from '../AddressForm';
import BasicInfoForm from '../BasicInfoForm';
import CodeConfirmationForm from '../CodeConfirmationForm';
import SuccessStep from '../SuccessStep';
import RegisterFormContext from '../context/RegisterForm';
import { Container, StepNumber, StepDescription } from './styles';

const FormSteps = () => {
  const { step } = useContext(RegisterFormContext);

  useEffect(() => {
    if (step < 4) return;

    Alert.alert(
      '🙌 Aí sim...',
      'Seus dados foram enviados com sucesso! Aguarde o seu convite que será enviado por e-mail.'
    );
  }, [step]);

  const formSteps = {
    0: {
      number: 1,
      title: 'Informações pessoais',
      component: <BasicInfoForm />,
    },
    1: {
      number: 2,
      title: 'Endereço',
      component: <AddressForm />,
    },
    2: {
      number: 3,
      title: 'Conta',
      component: <AccountForm />,
    },
    3: {
      number: 4,
      title: 'Confirmação',
      component: <CodeConfirmationForm />,
    },
  };

  return (
    <Container>
      {formSteps[step] && (
        <>
          <StepNumber>{`${formSteps[step]?.number}.`}</StepNumber>
          <StepDescription>{formSteps[step]?.title}</StepDescription>
          {formSteps[step]?.component}
        </>
      )}

      {step === 4 && <SuccessStep />}
    </Container>
  );
};

export default FormSteps;
