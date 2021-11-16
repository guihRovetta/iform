import React from 'react';

import {
  Container,
  HeaderContainer,
  TitleWrapper,
  Title,
  Subtitle,
  ContentContainer,
  Content,
  ContentWrapper,
} from './styles';

type Props = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  direction?: 'down-up' | 'up-down';
};

const PageLayout = ({
  title,
  subtitle,
  children,
  direction = 'down-up',
}: Props) => {
  return (
    <Container contentContainerStyle={{ flex: 1 }}>
      <HeaderContainer direction={direction}>
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TitleWrapper>
      </HeaderContainer>

      <ContentContainer>
        <Content direction={direction}>
          <ContentWrapper>{children}</ContentWrapper>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default PageLayout;
