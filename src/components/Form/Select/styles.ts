import { Feather } from '@expo/vector-icons';
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

    ${!!formStatus && formFieldStatusBorderModifiers[formStatus](theme)}

    ${!!disabled && formFieldDisabledModifiers.disabled()}
  `}
`;

export const ChevronDownIcon = styled(Feather)`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.text400};
  `};
`;
