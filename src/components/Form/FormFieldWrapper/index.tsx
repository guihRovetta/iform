import React from 'react';

import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

const FormFieldWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FormFieldWrapper;
