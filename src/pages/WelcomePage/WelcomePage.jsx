import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import Logo from '../../components/Logo/Logo';
import { WitingLoader } from '../../components/WaitingLoader';
import { selectIsBackendReady } from '../../redux/auth/selectors';
import { wakeUpBackendThunk } from '../../redux/auth/thunks';

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

  useEffect(() => {
    dispatch(wakeUpBackendThunk());
  }, []);

  console.log('isBackendReady: ', isBackendReady);
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
        </Nav>
      </MainContent>
      {!isBackendReady && <WitingLoader />}
    </Container>
  );
};

export default WelcomePage;
