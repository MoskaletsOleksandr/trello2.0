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

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
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

        <StyledField
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <StyledErrorMessage name="password" />

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
