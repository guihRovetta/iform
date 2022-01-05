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
  disabled?: boolean;
};

const Input = ({
  label,
  isPassword = false,
  touched = false,
  error,
  disabled = false,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(isPassword);

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
        disabled={disabled}
      >
        <StyledInput
          {...rest}
          secureTextEntry={showPassword}
          selectionColor={theme.colors.primary}
          editable={!disabled}
          returnKeyType={rest?.returnKeyType || 'next'}
        />

        {isPassword && (
          <ShowPasswordButton onPress={handleShowPassword}>
            {showPassword ? (
              <EyeOnIcon name="eye" />
            ) : (
              <EyeOffIcon name="eye-off" />
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
