import React from 'react';
import sprite from '../../assets/sprite.svg';

import {
  Container,
  Text,
  Title,
  SvgLogo,
  RegistrationBtn,
  LoginBtn,
  Nav,
  ContentMain,
  ContainerTitle,
  ContainerSvg,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <ContentMain>
        <ContainerTitle>
          <ContainerSvg>
            <SvgLogo>
              <use href={sprite + '#icon-trello'}></use>
            </SvgLogo>
          </ContainerSvg>
          <Title>Trello2.0</Title>
        </ContainerTitle>
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>

        <Nav>
          <RegistrationBtn to="/auth/register">Registration</RegistrationBtn>
          <LoginBtn to="/auth/login">Log In</LoginBtn>
          <LoginBtn to="/home">Home</LoginBtn>
        </Nav>
      </ContentMain>
    </Container>
  );
};

export default WelcomePage;
