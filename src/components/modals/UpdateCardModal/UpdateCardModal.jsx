import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Modal } from '../../common/Modal';
import {
  CardModalTitle,
  StyledDataPicker,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextarea,
} from '../../common/ModalComponents/ModalComponents.styled';
import { Button } from '../../common/Button';
import { useDispatch } from 'react-redux';
import { PriorityRadioBtns } from '../../common/ModalComponents/PriorityRadioBtns';
import { updateCardByIdThunk } from '../../../redux/cards/thunks';

export const UpdateCardModal = ({ onClose, card }) => {
  const dispatch = useDispatch();
  const { _id: cardId } = card;

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      text: values.text,
      priority: values.selectedPriority,
      deadline: values.selectedDate,
    };
    dispatch(updateCardByIdThunk({ cardId, body }));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'Edit card'}>
      <Formik
        initialValues={{
          title: card.title,
          text: card.text,
          selectedPriority: card.priority,
          selectedDate: card.deadline,
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
          selectedDate: Yup.string().required('Deadline is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="title" placeholder="Title" />
          <StyledErrorMessage name="title" />
          <StyledTextarea as="textarea" name="text" placeholder="Description" />
          <StyledErrorMessage name="text" />
          <CardModalTitle>Priority color</CardModalTitle>
          <PriorityRadioBtns
            name={'selectedPriority'}
            selectedItem={card?.priority}
          />
          <StyledErrorMessage name="selectedPriority" />
          <CardModalTitle>Deadline</CardModalTitle>
          <StyledDataPicker type="date" name="selectedDate" />
          <StyledErrorMessage name="selectedDate" />
          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
