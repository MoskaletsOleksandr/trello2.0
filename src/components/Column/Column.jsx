import React, { useState } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonsWrapper,
  CardsContainer,
  ColumnTitle,
  ColumnTitleWrapper,
  Container,
} from './Column.styled';
import sprite from '../../assets/sprite.svg';
import { UpdateColumnModal } from '../modals/UpdateColumnModal';

export const Column = ({ column }) => {
  const { title, _id } = column;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <ColumnTitleWrapper>
        <ColumnTitle>{title}</ColumnTitle>
        <ButtonsWrapper>
          <Button type="button" onClick={openModal}>
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-pencil'}></use>
            </ButtonIcon>
          </Button>
          <Button type="button">
            <ButtonIcon width="16px" height="16px">
              <use href={sprite + '#icon-trash'}></use>
            </ButtonIcon>
          </Button>
        </ButtonsWrapper>
      </ColumnTitleWrapper>
      <CardsContainer></CardsContainer>
      {isModalOpen && (
        <UpdateColumnModal
          columnId={_id}
          onClose={closeModal}
          columnTitle={title}
        />
      )}
    </Container>
  );
};
