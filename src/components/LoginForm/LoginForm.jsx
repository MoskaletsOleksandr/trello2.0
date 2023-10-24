import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AuthButton,
  AuthTitle,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLink,
} from '../common/FormComponents/FormComponents.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/thunks';
import { PasswordToggle } from '../common/FormComponents/PasswordToggle';
import { GoogleButton } from '../../components/common/GoogleButton';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    dispatch(loginThunk(body));
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Password is required'),
      })}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <AuthTitle>
          <StyledLink to="/auth/register">Registration</StyledLink>
          <StyledLink to="/auth/login"> Log In</StyledLink>
        </AuthTitle>
        <StyledField type="email" name="email" placeholder="Enter your email" />
        <StyledErrorMessage name="email" />
        <PasswordToggle name="password" />
        <StyledErrorMessage name="password" />
        <AuthButton type="submit">Login</AuthButton>
        <GoogleButton />
      </StyledForm>
    </Formik>
  );
};
