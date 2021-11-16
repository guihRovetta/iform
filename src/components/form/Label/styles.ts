import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const StyledLabel = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${moderateScale(2)}px;
    margin-left: ${moderateScale(4)}px;
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
  `};
`;
