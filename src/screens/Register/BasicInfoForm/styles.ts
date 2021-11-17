import styled, { css } from 'styled-components/native';

export const FormFieldWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.small}px;
  `};
`;
