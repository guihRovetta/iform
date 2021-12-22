import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';

import Button from '../../../components/Button';
import FormFieldWrapper from '../../../components/Form/FormFieldWrapper';
import Input from '../../../components/Form/Input';
import FormLayout from '../../../components/FormLayout';
import RegisterFormContext from '../context/RegisterForm';
import { schema } from './schema';

type FormProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: FormProps = {
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
};

const AccountForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { step, setStep } = useContext(RegisterFormContext);

  const initialValues = defaultValues;

  const onSubmit = (formData: FormProps) => {
    const payload = formData;
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
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          dirty,
          isValid,
        }) => (
          <>
            <FormFieldWrapper>
              <Input
                label="Email"
                placeholder="Digite seu email"
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                value={values?.email}
                error={errors?.email}
                touched={touched?.email}
              />
            </FormFieldWrapper>

            <FormFieldWrapper>
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values?.password}
                error={errors?.password}
                touched={touched?.password}
                isPassword
              />
            </FormFieldWrapper>

            <FormFieldWrapper>
              <Input
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                onBlur={handleBlur('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
                value={values?.confirmPassword}
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
                isPassword
              />
            </FormFieldWrapper>

            <Button
              iconName="arrow-right"
              onPress={() => handleSubmit()}
              disabled={!dirty || !isValid}
              isLoading={isLoading}
            >
              Próximo
            </Button>
          </>
        )}
      </Formik>
    </FormLayout>
  );
};

export default AccountForm;
