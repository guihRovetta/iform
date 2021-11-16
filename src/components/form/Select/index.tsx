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
  formattedDate?: string;
};

const Select = ({
  label,
  touched = false,
  error,
  formattedDate,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <>
      <Label>{label}</Label>

      <Container
        status={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
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
          }}
          doneText={rest?.doneText ? rest?.doneText : 'Selecionar'}
        />

        {touched && error && <XCircleIcon name="x-circle" />}
        {touched && !error && <CheckCircleIcon name="check-circle" />}
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Select;
