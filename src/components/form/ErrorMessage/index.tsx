import React from 'react';

import { StyledErrorMessage } from './styles';

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

export default ErrorMessage;
