import { Icon, IconContainer, StyledButton } from './AddCardButton.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentBoardId } from '../../redux/auth/selectors';
import { CreateCardModal } from '../modals/CreateCardModal';

export const AddCardButton = ({ columnId }) => {
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
        Add another card
      </StyledButton>
      {isModalOpen && (
        <CreateCardModal
          onClose={closeModal}
          columnId={columnId}
          boardId={boardId}
        />
      )}
    </>
  );
};
