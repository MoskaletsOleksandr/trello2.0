import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AuthTitle,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLink,
} from '../common/FormComponents/FormComponents.styled';
import { Button } from '../common/Button';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/thunks';

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
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
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

        <StyledField
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <StyledErrorMessage name="password" />

        <Button type="button">Login</Button>
      </StyledForm>
    </Formik>
  );
};
