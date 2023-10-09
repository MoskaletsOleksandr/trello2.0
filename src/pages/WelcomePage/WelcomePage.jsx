import React from 'react';
import sprite from '../../assets/sprite.svg';

import {
  Container,
  Text,
  Title,
  LogoIcon,
  RegistrationBtn,
  LoginBtn,
  Nav,
  MainContent,
  TitleContainer,
  IconContainer,
  MainIcon,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <MainContent>
        <MainIcon>
          <use href={sprite + '#icon-main-trello'}></use>
        </MainIcon>
        <TitleContainer>
          <IconContainer>
            <LogoIcon>
              <use href={sprite + '#icon-trello'}></use>
            </LogoIcon>
          </IconContainer>
          <Title>Trello2.0</Title>
        </TitleContainer>
        <Text>
          Supercharge your productivity and take control of your tasks with this
          Task Manager - Don't wait, start achieving your goals now!
        </Text>
        <Nav>
          <LoginBtn to="/auth/login">Log In</LoginBtn>
          <RegistrationBtn to="/auth/register">Registration</RegistrationBtn>
        </Nav>
      </MainContent>
    </Container>
  );
};

export default WelcomePage;
