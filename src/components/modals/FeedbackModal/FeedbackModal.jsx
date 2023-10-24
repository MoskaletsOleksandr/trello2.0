import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { sendLetter } from '../../../api/authApi/authApi';
import { Modal } from '../../common/Modal';
import {
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextarea,
} from '../../common/ModalComponents/ModalComponents.styled';
import { Button } from '../../common/Button';
import toast, { Toaster } from 'react-hot-toast';

export const FeedbackModal = ({ onClose }) => {
  const handleSubmit = async (values) => {
    const body = {
      email: values.email,
      feedback: values.feedback,
    };
    try {
      const response = await sendLetter(body);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
    }
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'Leave feedback'}>
      <Formik
        initialValues={{
          email: '',
          feedback: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address'),
          feedback: Yup.string()
            .max(150, 'Must be 150 characters or less')
            .required('Feedback is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="email" name="email" placeholder="Your email" />
          <StyledErrorMessage name="email" />
          <StyledTextarea
            as="textarea"
            name="feedback"
            placeholder="Your feedback"
          />
          <StyledErrorMessage name="feedback" />
          <Button type="submit">Send feedback</Button>
        </StyledForm>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </Modal>
  );
};
