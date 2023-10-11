import {
  Container,
  InfoText,
  InfoTextAccent,
  MainIcon,
} from './PlaceHolderBoard.styled';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import { CreateBoardModal } from '../modals/CreateBoardModal';

export const PlaceHolderBoard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <MainIcon>
        <use href={sprite + '#icon-main-trello'}></use>
      </MainIcon>
      <InfoText>
        Before starting your project, it is essential
        <InfoTextAccent onClick={openModal}> to create a board </InfoTextAccent>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </InfoText>
      {isModalOpen && <CreateBoardModal onClose={closeModal} />}
    </Container>
  );
};
