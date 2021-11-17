import { css, DefaultTheme } from 'styled-components/native';

export const formFieldStatusBorderModifiers = {
  normal: (_: DefaultTheme) => css`
    border-width: 1px;
    border-color: transparent;
  `,

  error: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: ${theme.colors.red500};
  `,

  success: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: ${theme.colors.green500};
  `,
};

export const formFieldDisabledModifiers = {
  disabled: () => css`
    opacity: 0.5;
  `,
};

export type FormFieldStylesProps = {
  formStatus?: 'normal' | 'error' | 'success';
  disabled?: boolean;
};
