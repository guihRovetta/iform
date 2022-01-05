import { Feather } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.green500};
    font-size: ${theme.fontSize.xlarge}px;
    font-family: ${theme.fonts.bold};
    text-align: center;
    margin-top: ${theme.spacing.small}px;
  `};
`;

export const CheckCircleIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.green500};
    font-size: ${moderateScale(64)}px;
  `};
`;
