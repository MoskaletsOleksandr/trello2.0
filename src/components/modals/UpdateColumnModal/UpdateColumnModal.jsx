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
import { updateColumnByIdThunk } from '../../../redux/columns/thunks';

export const UpdateColumnModal = ({ columnId, onClose, columnTitle }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      columnId,
    };
    dispatch(updateColumnByIdThunk(body));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'Edit column'}>
      <Formik
        initialValues={{
          title: columnTitle,
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
          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
