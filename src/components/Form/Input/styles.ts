import styled, { css } from 'styled-components/native';

import {
  formFieldDisabledModifiers,
  formFieldStatusBorderModifiers,
  FormFieldStylesProps,
} from '../FormFieldStyles/styles';

export const Container = styled.View<FormFieldStylesProps>`
  ${({ theme, formStatus, disabled }) => css`
    background-color: ${theme.colors.grey100};
    border-radius: ${theme.radii.regular}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.regular}px;
    flex: 1;

    ${!!formStatus && formFieldStatusBorderModifiers[formStatus](theme)}

    ${disabled && formFieldDisabledModifiers.disabled()}
  `}
`;

export const StyledInput = styled.TextInput`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text500};
    flex: 1;
  `}
`;

export const ShowPasswordButton = styled.TouchableOpacity``;
