import React from 'react';
import { useParams } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { RegistrationForm } from '../../components/RegistrationForm';
import { Container } from './AuthPage.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetBoardsState } from '../../redux/boards/slice';
import { resetCardsState } from '../../redux/cards/slice';
import { resetColumnsState } from '../../redux/columns/slice';
import { selectAuthError } from '../../redux/auth/selectors';

const AuthPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const errorMessage = useSelector(selectAuthError);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  useEffect(() => {
    dispatch(resetBoardsState());
    dispatch(resetCardsState());
    dispatch(resetColumnsState());
  }, []);

  if (id === 'register') {
    return (
      <Container>
        <RegistrationForm />
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    );
  }
  if (id === 'login') {
    return (
      <Container>
        <LoginForm />
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    );
  }
};

export default AuthPage;
