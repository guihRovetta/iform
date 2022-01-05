import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';

import Button from '../../../components/Button';
import CodeInputGroup from '../../../components/Form/CodeInputGroup';
import FormLayout from '../../../components/FormLayout';
import RegisterFormContext from '../context/RegisterForm';

const CodeConfirmationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [codeGroup, setCodeGroup] = useState<string[]>([]);

  const { step, setStep } = useContext(RegisterFormContext);

  const onChangeCodeInputGroupValue = (inputValue: string[]) => {
    setCodeGroup(inputValue);
    validateFormField(inputValue);
  };

  const validateFormField = (inputValue: string[]) => {
    const isValidFormField = inputValue?.every((item) => !!item);
    setIsValid(isValidFormField);
  };

  const onSubmit = () => {
    if (!isValid) return;

    const payload = codeGroup;
    console.log(payload);

    try {
      setIsLoading(true);

      setStep(step + 1);
    } catch {
      Alert.alert(
        '😔 Ops...',
        'Não foi possível salvar seus dados.\nTente novamente!'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormLayout>
      <CodeInputGroup length={4} onChangeValue={onChangeCodeInputGroupValue} />

      <Button
        iconName="save"
        onPress={onSubmit}
        disabled={!isValid}
        isLoading={isLoading}
      >
        Finalizar
      </Button>
    </FormLayout>
  );
};

export default CodeConfirmationForm;
