import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Masks } from 'react-native-mask-input';

import Button from '../../../components/Button';
import FormFieldWrapper from '../../../components/Form/FormFieldWrapper';
import Input from '../../../components/Form/Input';
import MaskedInput from '../../../components/Form/MaskedInput';
import FormLayout from '../../../components/FormLayout';
import RegisterFormContext from '../context/RegisterForm';
import { schema } from './schema';
import { ActionWrapper } from './styles';

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
  const { step, setStep } = useContext(RegisterFormContext);

  const {
    control,
    formState: { errors, touchedFields, isDirty, isValid },
    getValues,
    setValue,
    watch,
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

  return (
    <FormLayout>
      {fields?.map((field, index) => (
        <React.Fragment key={field?.id}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormFieldWrapper>
                <MaskedInput
                  label="CEP"
                  placeholder="Digite seu CEP"
                  onBlur={onBlur}
                  onChangeText={(_, unmaskedValue) => onChange(unmaskedValue)}
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
