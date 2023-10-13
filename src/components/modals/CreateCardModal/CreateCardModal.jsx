import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Modal } from '../../common/Modal';
import {
  CardModalTitle,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextarea,
} from '../../common/ModalComponents/ModalComponents.styled';
import { Button } from '../../common/Button';
import { useDispatch } from 'react-redux';
import { PriorityRadioBtns } from '../../common/ModalComponents/PriorityRadioBtns';

export const CreateCardModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      text: values.text,
      selectedPriority: values.selectedPriority,
      selectedDate: values.selectedDate,
    };
    console.log(body);
    // dispatch(createNewBoardThunk(body));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'New board'}>
      <Formik
        initialValues={{
          title: '',
          text: '',
          selectedPriority: '',
          selectedDate: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Name is required'),
          text: Yup.string()
            .min(5, 'Must be 5 characters or more')
            .max(150, 'Must be 150 characters or less')
            .required('Description is required'),
          selectedPriority: Yup.string().required('Priority is required'),
          //   selectedBg: Yup.string().required('Background is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="title" placeholder="Title" />
          <StyledErrorMessage name="title" />
          <StyledTextarea as="textarea" name="text" placeholder="Description" />
          <StyledErrorMessage name="text" />
          <CardModalTitle>Priority color</CardModalTitle>
          <PriorityRadioBtns name={'selectedPriority'} />
          {/* <IconRadioBtns name={'selectedIcon'} icons={icons} /> */}
          <StyledErrorMessage name="selectedPriority" />
          <CardModalTitle>Deadline</CardModalTitle>
          {/* <StyledErrorMessage name="selectedDate" /> */}
          <Button type="submit">Add</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
