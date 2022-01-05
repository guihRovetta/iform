import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: ${theme.spacing.small}px;
  `};
`;

export const InputWrapper = styled.View`
  flex: 1;
  min-width: 60px;
  max-width: 64px;
`;
