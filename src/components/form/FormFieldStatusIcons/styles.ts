import { Feather } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text400};
  font-size: 18px;
  margin-left: ${moderateScale(8)}px;
`;

export const CheckCircleIcon = styled(Feather)`
  ${({ theme }) => css`
    ${baseIconStyle}
    color: ${theme.colors.green500};
  `};
`;

export const XCircleIcon = styled(Feather)`
  ${({ theme }) => css`
    ${baseIconStyle}
    color: ${theme.colors.red500};
  `};
`;

export const EyeOnIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const EyeOffIcon = styled(Feather)`
  ${baseIconStyle}
`;
