import React, { useState } from 'react';
import { Icon, IconContainer, StyledButton } from './AddColumnButton.styled';
import sprite from '../../../assets/sprite.svg';
import { CreateColumnModal } from '../../modals/CreateColumnModal';
import { useSelector } from 'react-redux';
import { selectCurrentBoardId } from '../../../redux/auth/selectors';

export const AddColumnButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const boardId = useSelector(selectCurrentBoardId);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledButton onClick={openModal} type="button">
        <IconContainer>
          <Icon width="28px" height="28px">
            <use href={sprite + '#icon-plus'}></use>
          </Icon>
        </IconContainer>
        Add another column
      </StyledButton>
      {isModalOpen && (
        <CreateColumnModal boardId={boardId} onClose={closeModal} />
      )}
    </>
  );
};
