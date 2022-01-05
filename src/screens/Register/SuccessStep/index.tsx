import React from 'react';

import { Container, Label, CheckCircleIcon } from './styles';

const SuccessStep = () => {
  return (
    <Container>
      <CheckCircleIcon name="check-circle" />
      <Label>{`Parabéns!\nAgora é só aguardar a\n chegada do seu convite`}</Label>
    </Container>
  );
};

export default SuccessStep;
