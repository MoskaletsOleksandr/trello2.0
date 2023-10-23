import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import { GoogleButton } from '../../components/common/GoogleButton';
import Logo from '../../components/Logo/Logo';
import { WaitingLoader } from '../../components/WaitingLoader';
import { selectIsBackendReady } from '../../redux/auth/selectors';
import { refreshUserThunk, wakeUpBackendThunk } from '../../redux/auth/thunks';

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
  const isBackendReady = useSelector(selectIsBackendReady);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const deviceId = urlParams.get('deviceId');

    if (deviceId) {
      localStorage.setItem('deviceId', deviceId);
      dispatch(refreshUserThunk());
    }
  }, []);

  useEffect(() => {
    dispatch(wakeUpBackendThunk());

    const timeout = setTimeout(() => {
      if (!isBackendReady) {
        setShowLoader(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
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
      {showLoader && !isBackendReady && <WaitingLoader />}
    </Container>
  );
};

export default WelcomePage;
