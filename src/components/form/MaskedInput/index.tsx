import React from 'react';
import { MaskInputProps } from 'react-native-mask-input';
import { useTheme } from 'styled-components';

import ErrorMessage from '../ErrorMessage';
import { CheckCircleIcon, XCircleIcon } from '../FormFieldStatusIcons/styles';
import Label from '../Label';
import { Container, StyledInput } from './styles';

type Props = MaskInputProps & {
  label: string;
  touched?: boolean;
  error?: string;
};

const MaskedInput = ({ label, touched = false, error, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Label>{label}</Label>

      <Container
        formStatus={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
      >
        <StyledInput {...rest} selectionColor={theme.colors.primary} />

        {touched && error && <XCircleIcon name="x-circle" />}
        {touched && !error && <CheckCircleIcon name="check-circle" />}
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default MaskedInput;
