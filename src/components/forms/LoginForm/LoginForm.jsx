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
} from '../../common/FormComponents/FormComponents.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../redux/auth/thunks';
import { PasswordToggle } from '../../common/FormComponents/PasswordToggle';
import { GoogleButton } from '../../buttons/GoogleButton';

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
          .required('Email is required')
          .max(49, 'Must be 49 characters or less'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(49, 'Password must be 49 characters or less'),
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
