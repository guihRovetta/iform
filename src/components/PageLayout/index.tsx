import React from 'react';
import { ScrollViewProps } from 'react-native';

import {
  Wrapper,
  Container,
  HeaderContainer,
  TitleWrapper,
  Title,
  Subtitle,
  ContentContainer,
  Content,
  ContentWrapper,
} from './styles';

type Props = ScrollViewProps & {
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
  ...rest
}: Props) => {
  return (
    <Wrapper>
      <Container
        showsVerticalScrollIndicator={
          rest?.showsVerticalScrollIndicator
            ? rest?.showsVerticalScrollIndicator
            : false
        }
        contentContainerStyle={
          rest?.contentContainerStyle
            ? rest?.contentContainerStyle
            : { paddingBottom: 32 }
        }
        {...rest}
      >
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
    </Wrapper>
  );
};

export default PageLayout;
