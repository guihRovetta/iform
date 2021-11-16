import { Feather } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import {
  formFieldStatusBorderModifiers,
  FormFieldStatusBorderProps,
} from '../FormFieldStatusBorder/styles';

const AVATAR_SIZE = 64;

export const Container = styled.TouchableOpacity<FormFieldStatusBorderProps>`
  ${({ theme, status }) => css`
    align-items: center;
    justify-content: center;
    width: ${moderateScale(AVATAR_SIZE)}px;
    height: ${moderateScale(AVATAR_SIZE)}px;
    border-radius: ${moderateScale(AVATAR_SIZE / 2)}px;

    ${!!status && formFieldStatusBorderModifiers[status](theme)}
  `}
`;

export const AvatarImage = styled.Image`
  width: ${moderateScale(AVATAR_SIZE)}px;
  height: ${moderateScale(AVATAR_SIZE)}px;
  border-radius: ${moderateScale(AVATAR_SIZE / 2)}px;
`;

export const IconWrapper = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${moderateScale(-4)}px;
    right: ${moderateScale(-4)}px;
    background-color: ${theme.colors.primary};
    padding: ${moderateScale(4)}px;
    border-radius: 14px;
  `}
`;

export const CameraIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 14px;
  `};
`;

export const UserIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${AVATAR_SIZE / 1.5}px;
  `};
`;
