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
import { useDispatch, useSelector } from 'react-redux';
import { updateBoardByIdThunk } from '../../../redux/boards/thunks';
import { selectCurrentBoard } from '../../../redux/boards/selectors';

export const UpdateBoardModal = ({ boardId, onClose }) => {
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const icons = [
    'icon-project',
    'icon-star',
    'icon-loading',
    'icon-puzzle-piece',
    'icon-container',
    'icon-lightning',
    'icon-colors',
    'icon-hexagon',
  ];

  const handleSubmit = (values) => {
    const body = {
      title: values.title,
      icon: values.selectedIcon,
      backgroundId: values.selectedBg,
    };
    dispatch(updateBoardByIdThunk({ boardId, body }));
    onClose();
  };

  return (
    <Modal onClose={onClose} title={'New board'}>
      <Formik
        initialValues={{
          title: currentBoard?.title,
          selectedIcon: currentBoard?.icon,
          selectedBg: currentBoard?.background?._id,
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
          <IconRadioBtns
            name={'selectedIcon'}
            icons={icons}
            selectedItem={currentBoard?.icon}
          />
          <StyledErrorMessage name="selectedIcon" />
          <RadioBtnsTitle>Backgrounds</RadioBtnsTitle>
          <BgRadioBtns
            name={'selectedBg'}
            selectedItem={currentBoard?.background?._id}
          />
          <StyledErrorMessage name="selectedBg" />
          <Button type="submit">Edit</Button>
        </StyledForm>
      </Formik>
    </Modal>
  );
};
