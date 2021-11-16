import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

const BORDER_RADIUS_SIZE = 56;

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

type HeaderProps = {
  direction?: 'down-up' | 'up-down';
};

export const HeaderContainer = styled.View<HeaderProps>`
  ${({ theme, direction }) => css`
    background-color: ${theme.colors.primary};

    ${direction === 'down-up'
      ? css`
          border-bottom-right-radius: ${moderateScale(BORDER_RADIUS_SIZE)}px;
        `
      : css`
          border-bottom-left-radius: ${moderateScale(BORDER_RADIUS_SIZE)}px;
        `}
  `}
`;

export const TitleWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + moderateScale(40)}px;
  padding: 0 ${moderateScale(24)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xxlarge}px;
    font-family: ${theme.fonts.bold};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.regular};
    margin: ${moderateScale(16)}px 0 ${moderateScale(24)}px 0;
  `};
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    flex: 1;
  `};
`;

export const Content = styled.View<HeaderProps>`
  ${({ theme, direction }) => css`
    background-color: ${theme.colors.background};
    padding: 0 ${moderateScale(24)}px;
    flex: 1;

    ${direction === 'down-up'
      ? css`
          border-top-left-radius: ${moderateScale(BORDER_RADIUS_SIZE)}px;
        `
      : css`
          border-top-right-radius: ${moderateScale(BORDER_RADIUS_SIZE)}px;
        `};
  `};
`;

export const ContentWrapper = styled.View`
  margin-top: ${moderateScale(16)}px;
`;
