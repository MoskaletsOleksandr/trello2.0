import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { GoogleButton } from '../../components/buttons/GoogleButton';
import Logo from '../../components/common/Logo/Logo';
import { refreshUserThunk } from '../../redux/auth/thunks';

import {
  Container,
  Text,
  RegistrationBtn,
  LoginBtn,
  Nav,
  MainContent,
  MainIcon,
} from './WelcomePage.styled';

const WelcomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const deviceId = urlParams.get('deviceId');

    if (deviceId) {
      localStorage.setItem('deviceId', deviceId);
      dispatch(refreshUserThunk());
    }
  }, []);

  return (
    <Container>
      <MainContent>
        <MainIcon>
          <use href={sprite + '#icon-main-trello'}></use>
        </MainIcon>
        <Logo large={true} />
        <Text>
          Supercharge your productivity and take control of your tasks with this
          Task Manager - Don't wait, start achieving your goals now!
        </Text>
        <Nav>
          <LoginBtn to="/auth/login">Log In</LoginBtn>
          <RegistrationBtn to="/auth/register">Registration</RegistrationBtn>
          <GoogleButton />
        </Nav>
      </MainContent>
    </Container>
  );
};

export default WelcomePage;
