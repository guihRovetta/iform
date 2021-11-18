import React from 'react';
import { Keyboard } from 'react-native';

import { Container, Button, ContentWrapper } from './styles';

type Props = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: Props) => {
  return (
    <Container>
      <Button onPress={Keyboard.dismiss}>
        <ContentWrapper>{children}</ContentWrapper>
      </Button>
    </Container>
  );
};

export default FormLayout;
