import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonWrapper, Label, Icon } from './styles';

export type ButtonVariant = 'filled' | 'outlined' | 'disabled';

type Props = TouchableOpacityProps & {
  iconName?: keyof typeof Feather.glyphMap;
  children?: React.ReactNode;
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

const Button = ({
  iconName,
  children,
  fullWidth = true,
  variant = 'filled',
  ...rest
}: Props) => {
  if (rest?.disabled) variant = 'disabled';

  return (
    <Container activeOpacity={0.5} {...rest}>
      <ButtonWrapper fullWidth={fullWidth} variant={variant}>
        {children && <Label variant={variant}>{children}</Label>}

        {iconName && <Icon name={iconName} variant={variant} />}
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
