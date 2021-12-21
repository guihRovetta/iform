import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, ButtonWrapper, Label, Icon } from './styles';

export type ButtonVariant = 'filled' | 'outlined' | 'disabled';

type Props = TouchableOpacityProps & {
  iconName?: keyof typeof Feather.glyphMap;
  children?: React.ReactNode;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  isLoading?: boolean;
};

const Button = ({
  iconName,
  children,
  fullWidth = true,
  variant = 'filled',
  isLoading = false,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  if (rest?.disabled || isLoading) variant = 'disabled';

  return (
    <Container activeOpacity={0.5} {...rest}>
      <ButtonWrapper fullWidth={fullWidth} variant={variant}>
        {children && (
          <Label variant={variant}>
            {isLoading ? 'Carregando...' : children}
          </Label>
        )}

        {iconName && !isLoading && <Icon name={iconName} variant={variant} />}

        {isLoading && <ActivityIndicator color={colors?.text500} />}
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
