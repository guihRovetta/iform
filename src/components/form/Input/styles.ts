import { Feather } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-bottom: ${moderateScale(4)}px;
    margin-left: ${moderateScale(4)}px;
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
  `};
`;

const containerBorderModifiers = {
  normal: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: transparent;
  `,

  error: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: ${theme.colors.red500};
  `,

  success: (theme: DefaultTheme) => css`
    border-width: 1px;
    border-color: ${theme.colors.green500};
  `,
};

type ContainerProps = {
  status?: 'normal' | 'error' | 'success';
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, status }) => css`
    background-color: ${theme.colors.grey100};
    border-radius: ${moderateScale(8)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${moderateScale(16)}px;

    ${!!status && containerBorderModifiers[status](theme)}
  `}
`;

export const StyledInput = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-family: ${theme.fonts.regular};
    flex: 1;
  `}
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text400};
  font-size: 18px;
  margin-left: ${moderateScale(8)}px;
`;

export const EyeOnIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const EyeOffIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const ErrorMessage = styled.Text`
  ${({ theme }) => css`
    margin-top: ${moderateScale(4)}px;
    margin-left: ${moderateScale(4)}px;
    color: ${theme.colors.red500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
  `};
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
