import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View``;

export const ActionWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.small}px;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.large}px;
    font-family: ${theme.fonts.bold};
    margin: ${moderateScale(2)}px 0 ${moderateScale(16)}px 0;
    align-self: center;
  `};
`;
