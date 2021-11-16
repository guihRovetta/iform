import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import {
  formFieldStatusBorderModifiers,
  FormFieldStylesProps,
} from '../FormFieldStyles/styles';

export const Container = styled.TouchableOpacity<FormFieldStylesProps>`
  ${({ theme, formStatus }) => css`
    background-color: ${theme.colors.grey100};
    border-radius: ${moderateScale(8)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${moderateScale(16)}px;

    ${!!formStatus && formFieldStatusBorderModifiers[formStatus](theme)}
  `}
`;

export const PlaceholderDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-family: ${theme.fonts.regular};
    flex: 1;
  `}
`;

export const SelectedDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-family: ${theme.fonts.regular};
    flex: 1;
  `}
`;
