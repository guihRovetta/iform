import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { ActivityIndicator, Alert } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { useTheme } from 'styled-components/native';

import Button from '../../../components/Button';
import FormFieldWrapper from '../../../components/Form/FormFieldWrapper';
import Input from '../../../components/Form/Input';
import MaskedInput from '../../../components/Form/MaskedInput';
import FormLayout from '../../../components/FormLayout';
import { getAddress } from '../../../services/api/address';
import RegisterFormContext from '../context/RegisterForm';
import { schema } from './schema';
import { ActionWrapper, Title } from './styles';

type FormProps = {
  address: {
    zipcode: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  }[];
};

const defaultValues = {
  address: [
    {
      zipcode: undefined,
      street: undefined,
      number: undefined,
      complement: undefined,
      neighborhood: undefined,
      city: undefined,
      state: undefined,
    },
  ],
};

const AdressForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { step, setStep } = useContext(RegisterFormContext);

  const { colors } = useTheme();

  const {
    control,
    formState: { errors, touchedFields, isDirty, isValid },
    watch,
    setValue,
    setError,
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'address',
  });

  const arrayWatchedField = watch('address');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleAddItemToAddressArray = () => {
    append({});
  };

  const handleRemoveItemFromAdressArray = (index: number) => {
    const arraySize = arrayWatchedField?.length;
    if (arraySize > 1) {
      remove(index);
    }
  };

  const handleChangeZipcode = async (zipcode: string, index: number) => {
    if (zipcode?.length !== 8) return;

    try {
      setIsLoading(true);
      const address = await getAddress(zipcode);
      setValue(`address.${index}`, address);
      if (!address?.city || !address?.state) {
        setZipcodeFormFieldError(index);
      }
    } catch (error) {
      Alert.alert('😔 Ops...', error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const setZipcodeFormFieldError = (index: number) => {
    setError(`address.${index}.zipcode`, {
      type: 'invalid',
      message: 'Informe um CEP válido',
    });
  };

  return (
    <FormLayout>
      {fields?.map((field, index) => (
        <React.Fragment key={field?.id}>
          <Title>{`${index + 1}. Endereço`}</Title>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormFieldWrapper>
                <MaskedInput
                  label="CEP"
                  placeholder="Digite seu CEP"
                  onBlur={onBlur}
                  onChangeText={(_, unmaskedValue) => {
                    onChange(unmaskedValue);
                    handleChangeZipcode(unmaskedValue, index);
                  }}
                  value={value}
                  error={errors?.address?.[index]?.zipcode?.message}
                  touched={touchedFields?.address?.[index]?.zipcode}
                  keyboardType="number-pad"
                  mask={Masks.ZIP_CODE}
                />
              </FormFieldWrapper>
            )}
            name={`address.${index}.zipcode`}
          />

          {isLoading && <ActivityIndicator color={colors?.primary} />}

          {arrayWatchedField?.[index]?.city &&
            arrayWatchedField?.[index]?.state && (
              <>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Rua"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.street?.message}
                        touched={touchedFields?.address?.[index]?.street}
                        disabled
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.street`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Número"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.number?.message}
                        touched={touchedFields?.address?.[index]?.number}
                        keyboardType="number-pad"
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.number`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Complemento (opcional)"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.complement?.message}
                        touched={touchedFields?.address?.[index]?.complement}
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.complement`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Bairro"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.neighborhood?.message}
                        touched={touchedFields?.address?.[index]?.neighborhood}
                        disabled
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.neighborhood`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Cidade"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.city?.message}
                        touched={touchedFields?.address?.[index]?.city}
                        disabled
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.city`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <FormFieldWrapper>
                      <Input
                        label="Estado"
                        onBlur={onBlur}
                        onChangeText={(newValue) => onChange(newValue)}
                        value={value}
                        error={errors?.address?.[index]?.state?.message}
                        touched={touchedFields?.address?.[index]?.state}
                        disabled
                      />
                    </FormFieldWrapper>
                  )}
                  name={`address.${index}.state`}
                />
              </>
            )}

          <ActionWrapper>
            <Button
              iconName="trash-2"
              variant="outlined"
              disabled={arrayWatchedField?.length < 2}
              onPress={() => handleRemoveItemFromAdressArray(index)}
            />

            <Button
              iconName="plus"
              disabled={arrayWatchedField?.length > 2}
              onPress={handleAddItemToAddressArray}
            />
          </ActionWrapper>
        </React.Fragment>
      ))}

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

export default AdressForm;
