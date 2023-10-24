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
import { registerThunk } from '../../redux/auth/thunks';
import { PasswordToggle } from '../common/FormComponents/PasswordToggle';
import { GoogleButton } from '../../components/common/GoogleButton';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      email: values.email,
      name: values.name,
      password: values.password,
    };

    dispatch(registerThunk(body));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Name is required'),
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
        <StyledField type="text" name="name" placeholder="Enter your name" />
        <StyledErrorMessage name="name" />
        <StyledField type="email" name="email" placeholder="Enter your email" />
        <StyledErrorMessage name="email" />
        <PasswordToggle name="password" />
        <StyledErrorMessage name="password" />
        <AuthButton type="submit">Register</AuthButton>
        <GoogleButton />
      </StyledForm>
    </Formik>
  );
};
