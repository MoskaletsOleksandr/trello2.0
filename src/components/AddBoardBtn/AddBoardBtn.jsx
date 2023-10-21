import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { CreateBoardModal } from '../modals/CreateBoardModal';
import { Button, ButtonWrapper, Icon, Text } from './AddBoardBtn.styled';

export const AddBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonWrapper>
        <Text>Create a new board</Text>
        <Button type="button" onClick={openModal}>
          <Icon width="20px" height="20px">
            <use href={sprite + '#icon-plus'}></use>
          </Icon>
        </Button>
      </ButtonWrapper>
      {isModalOpen && <CreateBoardModal onClose={closeModal} />}
    </>
  );
};
