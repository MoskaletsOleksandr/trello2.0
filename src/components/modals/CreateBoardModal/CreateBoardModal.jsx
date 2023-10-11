import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Modal } from '../../common/Modal';
import {
  RadioBtnsTitle,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from '../../common/ModalComponents/ModalComponents.styled';
import { IconRadioBtns } from '../../common/ModalComponents/IconRadioBtns';
import { BgRadioBtns } from '../../common/ModalComponents/BgRadioBtns';
import { Button } from '../../common/Button';
import { useDispatch } from 'react-redux';
import { createNewBoardThunk } from '../../../redux/boards/thunks';
import { icons } from '../../../data/constants';

export const CreateBoardModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      icon: values.selectedIcon,
      backgroundId: values.selectedBg,
    };
    dispatch(createNewBoardThunk(body));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'New board'}>
      <Formik
        initialValues={{
          title: '',
          selectedIcon: '',
          selectedBg: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is required'),
          selectedIcon: Yup.string().required('Icon is required'),
          selectedBg: Yup.string().required('Background is required'),
        })}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledField type="text" name="title" placeholder="Title" />
          <StyledErrorMessage name="title" />
          <RadioBtnsTitle>Icons</RadioBtnsTitle>
          <IconRadioBtns name={'selectedIcon'} icons={icons} />
          <StyledErrorMessage name="selectedIcon" />
          <RadioBtnsTitle>Backgrounds</RadioBtnsTitle>
          <BgRadioBtns name={'selectedBg'} />
          <StyledErrorMessage name="selectedBg" />
          <Button type="submit">Create</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
