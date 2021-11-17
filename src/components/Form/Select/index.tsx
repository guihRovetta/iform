import React from 'react';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import { useTheme } from 'styled-components';

import ErrorMessage from '../ErrorMessage';
import { CheckCircleIcon, XCircleIcon } from '../FormFieldStatusIcons/styles';
import Label from '../Label';
import { Container } from './styles';

type Props = PickerSelectProps & {
  label: string;
  touched?: boolean;
  error?: string;
  disabled?: boolean;
};

const Select = ({
  label,
  touched = false,
  error,
  disabled,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <Label>{label}</Label>

      <Container
        formStatus={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
        disabled={disabled}
      >
        <RNPickerSelect
          {...rest}
          style={{
            viewContainer: {
              flex: 1,
            },
            inputIOS: {
              fontFamily: theme.fonts.regular,
              color: theme.colors.text500,
              paddingRight: 30,
            },
            inputAndroid: {
              fontFamily: theme.fonts.regular,
              color: theme.colors.text500,
              paddingRight: 30,
            },
            placeholder: {
              fontFamily: theme.fonts.regular,
            },
          }}
          doneText={rest?.doneText ? rest?.doneText : 'Selecionar'}
          disabled={disabled}
        />

        {touched && error && <XCircleIcon name="x-circle" />}
        {touched && !error && <CheckCircleIcon name="check-circle" />}
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Select;
