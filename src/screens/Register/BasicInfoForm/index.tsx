import { yupResolver } from '@hookform/resolvers/yup';
import { formatISO, sub } from 'date-fns';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { Masks } from 'react-native-mask-input';

import Button from '../../../components/Button';
import AvatarPicker from '../../../components/Form/AvatarPicker';
import DateTimeInput from '../../../components/Form/DateTimeInput';
import FormFieldWrapper from '../../../components/Form/FormFieldWrapper';
import Input from '../../../components/Form/Input';
import MaskedInput from '../../../components/Form/MaskedInput';
import Select from '../../../components/Form/Select';
import FormLayout from '../../../components/FormLayout';
import RegisterFormContext from '../context/RegisterForm';
import { schema } from './schema';

type FormProps = {
  name: string;
  dateOfBirth: Date;
  cellphone: string;
  cpf: string;
  maritalStatus: string;
  avatar: ImageInfo;
};

const defaultValues = {
  name: undefined,
  dateOfBirth: undefined,
  cellphone: undefined,
  cpf: undefined,
  maritalStatus: undefined,
  avatar: undefined,
};

const TODAY_DATE = new Date();
const EIGHTEEN_YEARS_DATE = sub(TODAY_DATE, { years: 18 });
const HUNDRED_YEARS_DATE = sub(TODAY_DATE, { years: 100 });

const MARITAL_STATUS_OPTIONS = [
  { label: 'Solteiro', value: 'single', key: 'single' },
  { label: 'Casado', value: 'married', key: 'married' },
  { label: 'Separado', value: 'separate', key: 'separate' },
  { label: 'Divorciado', value: 'divorced', key: 'divorced' },
  { label: 'Viúvo', value: 'widower', key: 'widower' },
];

const BasicInfoForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { step, setStep } = useContext(RegisterFormContext);

  const {
    control,
    formState: { errors, touchedFields, isDirty, isValid },
    setValue,
    handleSubmit,
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const handlePressNextStep = () => {
    handleSubmit(onSubmit)();
  };

  const formatDataToApi = (formData: FormProps) => {
    const { avatar, dateOfBirth } = formData || {};
    delete formData.avatar;
    delete formData.dateOfBirth;

    const payload = {
      avatar: avatar?.base64,
      dateOfBirth: formatISO(dateOfBirth),
      ...formData,
    };

    return payload;
  };

  const onSubmit = (formData: FormProps) => {
    const payload = formatDataToApi(formData);

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

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormFieldWrapper>
            <DateTimeInput
              label="Data de Nascimento"
              placeholder="Selecione sua data de nascimento"
              onChange={(newValue) => {
                onBlur();
                onChange(newValue);
              }}
              date={value || EIGHTEEN_YEARS_DATE}
              error={errors?.dateOfBirth?.message}
              touched={touchedFields?.dateOfBirth}
              maximumDate={EIGHTEEN_YEARS_DATE}
              minimumDate={HUNDRED_YEARS_DATE}
            />
          </FormFieldWrapper>
        )}
        name="dateOfBirth"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormFieldWrapper>
            <MaskedInput
              label="Celular"
              placeholder="Digite seu celular"
              onBlur={onBlur}
              onChangeText={(_, unmaskedValue) => onChange(unmaskedValue)}
              value={value}
              error={errors?.cellphone?.message}
              touched={touchedFields?.cellphone}
              keyboardType="number-pad"
              mask={Masks.BRL_PHONE}
            />
          </FormFieldWrapper>
        )}
        name="cellphone"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormFieldWrapper>
            <MaskedInput
              label="CPF"
              placeholder="Digite seu CPF"
              onBlur={onBlur}
              onChangeText={(_, unmaskedValue) => onChange(unmaskedValue)}
              value={value}
              error={errors?.cpf?.message}
              touched={touchedFields?.cpf}
              keyboardType="number-pad"
              mask={Masks.BRL_CPF}
            />
          </FormFieldWrapper>
        )}
        name="cpf"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormFieldWrapper>
            <Select
              label="Estado Civil"
              placeholder={{
                label: 'Selecione seu estado civil',
                value: undefined,
                key: 'empty',
              }}
              onClose={onBlur}
              onValueChange={(newValue) => onChange(newValue)}
              value={value}
              error={errors?.maritalStatus?.message}
              touched={touchedFields?.maritalStatus}
              items={MARITAL_STATUS_OPTIONS}
            />
          </FormFieldWrapper>
        )}
        name="maritalStatus"
      />

      <Controller
        control={control}
        render={({ field: { onBlur, value } }) => (
          <FormFieldWrapper>
            <AvatarPicker
              label="Avatar"
              onChange={(event) => {
                onBlur();
                setValue('avatar', event, { shouldValidate: true });
              }}
              value={value}
              error={errors?.avatar?.base64?.message}
              touched={touchedFields?.avatar as boolean}
              imagePickerOptions={{ base64: true }}
            />
          </FormFieldWrapper>
        )}
        name="avatar"
      />

      <Button
        iconName="arrow-right"
        onPress={handlePressNextStep}
        disabled={!isDirty || !isValid}
        isLoading={isLoading}
      >
        Próximo
      </Button>
    </FormLayout>
  );
};

export default BasicInfoForm;
