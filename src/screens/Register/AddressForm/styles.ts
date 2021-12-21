import styled, { css } from 'styled-components/native';

export const ActionWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.small}px;
  `};
`;
