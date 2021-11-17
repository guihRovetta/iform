import React from 'react';

import { StyledLabel } from './styles';

type Props = {
  children: React.ReactNode;
};

const Label = ({ children }: Props) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
