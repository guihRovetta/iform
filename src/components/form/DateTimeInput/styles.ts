import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import {
  formFieldStatusBorderModifiers,
  FormFieldStatusBorderProps,
} from '../FormFieldStatusBorder/styles';

export const Container = styled.TouchableOpacity<FormFieldStatusBorderProps>`
  ${({ theme, status }) => css`
    background-color: ${theme.colors.grey100};
    border-radius: ${moderateScale(8)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${moderateScale(16)}px;

    ${!!status && formFieldStatusBorderModifiers[status](theme)}
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
