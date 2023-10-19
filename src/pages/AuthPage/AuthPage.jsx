import React from 'react';
import { useParams } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { RegistrationForm } from '../../components/RegistrationForm';
import { Container } from './AuthPage.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import { useEffect } from 'react';

const AuthPage = () => {
  const { id } = useParams();
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

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
