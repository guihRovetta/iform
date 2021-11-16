import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import ErrorMessage from '../ErrorMessage';
import {
  CheckCircleIcon,
  EyeOffIcon,
  EyeOnIcon,
  XCircleIcon,
} from '../FormFieldStatusIcons/styles';
import Label from '../Label';
import { Container, StyledInput, ShowPasswordButton } from './styles';

type Props = TextInputProps & {
  label: string;
  isPassword?: boolean;
  touched?: boolean;
  error?: string;
};

const Input = ({
  label,
  isPassword = false,
  touched = false,
  error,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Label>{label}</Label>

      <Container
        formStatus={
          touched && error ? 'error' : touched && !error ? 'success' : 'normal'
        }
      >
        <StyledInput
          {...rest}
          secureTextEntry={showPassword}
          selectionColor={theme.colors.primary}
        />

        {isPassword && (
          <ShowPasswordButton onPress={handleShowPassword}>
            {showPassword ? (
              <EyeOffIcon name="eye-off" />
            ) : (
              <EyeOnIcon name="eye" />
            )}
          </ShowPasswordButton>
        )}

        {touched && error && <XCircleIcon name="x-circle" />}
        {touched && !error && <CheckCircleIcon name="check-circle" />}
      </Container>

      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Input;
