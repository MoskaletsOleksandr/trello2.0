import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../common/Modal';
import {
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from '../../common/ModalComponents/ModalComponents.styled';
import { Button } from '../../common/Button';
import { AvatarField } from '../../common/ModalComponents/AvatarField';
import { updateUserThunk } from '../../../redux/auth/thunks';

export const EditProfileModal = ({ onClose, user }) => {
  const [avatarImage, setAvatarImage] = useState(user.avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const dispatch = useDispatch();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarImage(imageUrl);
      setAvatarFile(file);
    }
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('newName', values.name);
    formData.append('newEmail', values.email);
    formData.append('avatar', avatarFile);

    dispatch(updateUserThunk(formData));
    onClose();
  };
  return (
    <Modal onClose={onClose} title={'Edit profile'}>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          avatarUrl: user.avatarUrl,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <AvatarField
            avatarUrl={avatarImage}
            onAvatarChange={handleAvatarChange}
          />
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            profile={'true'}
          />
          <StyledErrorMessage name="name" />
          <StyledField
            type="email"
            name="email"
            placeholder="Email"
            profile={'true'}
          />
          <StyledErrorMessage name="email" />
          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
