import styled, { css } from 'styled-components/native';

import {
  formFieldDisabledModifiers,
  formFieldStatusBorderModifiers,
  FormFieldStylesProps,
} from '../FormFieldStyles/styles';

export const Container = styled.TouchableOpacity<FormFieldStylesProps>`
  ${({ theme, formStatus, disabled }) => css`
    background-color: ${theme.colors.grey100};
    border-radius: ${theme.radii.regular}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.regular}px;

    ${!!formStatus && formFieldStatusBorderModifiers[formStatus](theme)}

    ${!!disabled && formFieldDisabledModifiers.disabled()}
  `}
`;

export const PlaceholderDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-family: ${theme.fonts.regular};
    flex: 1;
    opacity: 0.4;
  `}
`;

export const SelectedDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-family: ${theme.fonts.regular};
    flex: 1;
  `}
`;
