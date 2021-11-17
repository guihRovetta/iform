import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '../../../components/Button';
import Input from '../../../components/Form/Input';
import FormLayout from '../../../components/FormLayout';
import RegisterFormContext from '../context/RegisterForm';
import { schema } from './schema';
import { FormFieldWrapper } from './styles';

type FormProps = {
  name: string;
};

const defaultValues = {
  name: undefined,
};

const BasicInfoForm = () => {
  const { step, setStep } = useContext(RegisterFormContext);

  const {
    control,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <FormLayout>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormFieldWrapper>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              onBlur={onBlur}
              onChangeText={(newValue) => onChange(newValue)}
              value={value}
              error={errors?.name?.message}
              touched={touchedFields?.name}
            />
          </FormFieldWrapper>
        )}
        name="name"
      />

      <Button
        iconName="arrow-right"
        onPress={handleNextStep}
        disabled={!isDirty || !isValid}
      >
        Próximo
      </Button>
    </FormLayout>
  );
};

export default BasicInfoForm;
