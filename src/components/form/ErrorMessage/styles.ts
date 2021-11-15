import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const StyledErrorMessage = styled.Text`
  ${({ theme }) => css`
    margin-top: ${moderateScale(4)}px;
    margin-left: ${moderateScale(4)}px;
    color: ${theme.colors.red500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
  `};
`;
