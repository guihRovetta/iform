import React from 'react';
import { Keyboard } from 'react-native';

import { TouchableWrapper, ContentWrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <TouchableWrapper onPress={Keyboard.dismiss}>
      <ContentWrapper>{children}</ContentWrapper>
    </TouchableWrapper>
  );
};

export default FormLayout;
