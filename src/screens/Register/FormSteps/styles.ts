import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const StepNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.xxlarge}px;
    font-family: ${theme.fonts.bold};
  `};
`;

export const StepDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${theme.fontSize.large}px;
    font-family: ${theme.fonts.bold};
    margin: ${moderateScale(2)}px 0 ${moderateScale(16)}px 0;
    text-transform: uppercase;
  `};
`;
