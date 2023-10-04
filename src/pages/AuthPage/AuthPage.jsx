import React from 'react';
import { useParams } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { RegistrationForm } from '../../components/RegistrationForm';
import { Container } from './AuthPage.styled';

const AuthPage = () => {
  const { id } = useParams();

  if (id === 'register') {
    return (
      <Container>
        <RegistrationForm />
      </Container>
    );
  }
  if (id === 'login') {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }
};

export default AuthPage;
