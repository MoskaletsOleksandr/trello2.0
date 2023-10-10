import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { Modal } from '../common/Modal';
import { Button, ButtonWrapper, Icon, Text } from './AddBoardBtn.styled';

export const AddBoardButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
      {isModalOpen && <Modal onClose={closeModal} title={'Test modal'} />}
    </>
  );
};
