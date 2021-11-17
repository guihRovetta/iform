import { Feather } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled, { css, DefaultTheme } from 'styled-components/native';

import { ButtonVariant } from '.';

export const Container = styled.TouchableOpacity``;

const buttonVariantsModifiers = {
  filled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    border-width: 1px;
    border-color: transparent;
  `,

  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.primary};
  `,

  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.grey100};
    border-width: 1px;
    border-color: transparent;
    opacity: 0.5;
  `,
};

type ButtonProps = {
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

export const ButtonWrapper = styled.View<ButtonProps>`
  ${({ theme, fullWidth, variant }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.radii.regular}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.regular}px;
    align-self: ${fullWidth ? 'stretch' : 'baseline'};

    ${!!variant && buttonVariantsModifiers[variant](theme)};
  `};
`;

const buttonTextVariantsModifiers = {
  filled: (theme: DefaultTheme) => css`
    color: ${theme.colors.text500};
  `,

  outlined: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.text400};
  `,
};

export const Label = styled.Text<ButtonProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
    margin-right: ${moderateScale(8)}px;

    ${!!variant && buttonTextVariantsModifiers[variant](theme)};
  `};
`;

export const Icon = styled(Feather)<ButtonProps>`
  ${({ theme, variant }) => css`
    font-size: ${moderateScale(16)}px;

    ${!!variant && buttonTextVariantsModifiers[variant](theme)};
  `};
`;
