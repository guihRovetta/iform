import MaskInput from 'react-native-mask-input';
import { moderateScale } from 'react-native-size-matters';
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
    padding: ${moderateScale(16)}px;

    ${!!formStatus && formFieldStatusBorderModifiers[formStatus](theme)}

    ${!!disabled && formFieldDisabledModifiers.disabled()}
  `}
`;

export const StyledInput = styled(MaskInput)`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-family: ${theme.fonts.regular};
    flex: 1;
  `}
`;

export const ShowPasswordButton = styled.TouchableOpacity``;
