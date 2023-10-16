import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import icon from '../../../assets/icon-calendar.png';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  color: var(--modal-primary-text-color);
`;

export const StyledField = styled(Field)`
  background-color: var(--modal-input-bg-color);
  border: 1px solid var(--modal-input-border-color);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5rem;
  font-weight: 400;
  padding: 12px 20px;
  color: var(--modal-input-text-color);

  &:-webkit-autofill {
    -webkit-box-shadow: rgb(22, 22, 22) 0px 0px 0px 50px inset;
    -webkit-text-fill-color: var(--modal-input-text-color);
    -webkit-border-before-color: var(--modal-input-border-color);
    -webkit-border-color: var(--modal-input-border-color);
    outline: transparent;
  }

  &:-webkit-autofill:focus {
    outline: transparent;
  }

  &::placeholder {
    font-size: 14px;
    color: var(--modal-input-placeholder-color);
  }
`;

export const StyledTextarea = styled(StyledField)`
  resize: none;
  height: 154px;
  margin-top: 14px;
`;

export const StyledDataPicker = styled(StyledField)`
  width: 125px;
  padding: 6px 10px;
  font-size: 14px;
  cursor: text;
  background: url(${icon});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: 95%;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
  }
`;

export const BoardModalTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 14px;
`;

export const CardModalTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 4px;

  &:last-of-type {
    margin-top: 14px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)``;
