import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 424px;
  padding: 40px;
  background-color: var(--auth-form-bg-color);
  font-size: 14px;
  border: solid 1px black;
  border-radius: 8px;
  color: var(--auth-input-text-color);

  & > :last-child {
    margin-top: 10px;
  }
`;

export const StyledField = styled(Field)`
  background-color: #161616;
  border: 1px solid var(--auth-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  color: var(--auth-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: rgb(22, 22, 22) 0px 0px 0px 50px inset;
    -webkit-text-fill-color: var(--auth-input-text-color);
    -webkit-border-before-color: var(--auth-input-border-color);
    -webkit-border-color: var(--auth-input-border-color);
    outline: transparent;
  }

  &:-webkit-autofill:focus {
    outline: transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--auth-input-border-color);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)``;

export const AuthTitle = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: var(--inactive-form-title-color);

  &.active {
    color: var(--active-form-title-color);
  }

  &:hover {
    color: rgba(255, 255, 255, 70%);
    color: var(--hover-form-title-color);
  }
`;
