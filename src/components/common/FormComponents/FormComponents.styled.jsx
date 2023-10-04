import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 424px;
  padding: 40px;
  background-color: #161616;
  font-size: 14px;
  border: solid 1px black;
  border-radius: 8px;
`;

export const StyledField = styled(Field)`
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 30%);
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-top: 15px;
  padding: 12px 20px;
  color: white;

  &:-webkit-autofill {
    -webkit-box-shadow: rgb(22, 22, 22) 0px 0px 0px 50px inset;
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-border-before-color: rgba(255, 255, 255, 30%);
    // -webkit-border-color:rgba(255, 255, 255, 30%);
    outline: transparent;
  }

  &:-webkit-autofill:focus {
    outline: transparent;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)``;

export const AuthTitle = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 30%);
  &.active {
    color: white;
  }
  &:hover {
    color: rgba(255, 255, 255, 70%);
  }
`;
