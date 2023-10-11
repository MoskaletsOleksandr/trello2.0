import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Modal } from '../../common/Modal';
import {
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from '../../common/ModalComponents/ModalComponents.styled';
import { Button } from '../../common/Button';
import { useDispatch } from 'react-redux';
import { createNewColumnThunk } from '../../../redux/columns/thunks';

export const CreateColumnModal = ({ boardId, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      boardId,
    };
    dispatch(createNewColumnThunk(body));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'Add column'}>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="title" placeholder="Title" />
          <StyledErrorMessage name="title" />
          <Button type="submit">Add</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
