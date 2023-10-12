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
import { deleteColumnByIdThunk } from '../../redux/columns/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumnsAmount } from '../../redux/columns/selectors';

export const Column = ({ column }) => {
  const dispatch = useDispatch();
  const { title, _id } = column;
  const [isModalOpen, setModalOpen] = useState(false);
  const columnsAmount = useSelector(selectColumnsAmount);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumnByIdThunk(_id));
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
          {columnsAmount > 1 && (
            <Button
              type="button"
              onClick={() => {
                console.log('move');
              }}
            >
              <ButtonIcon width="16px" height="16px">
                <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
              </ButtonIcon>
            </Button>
          )}
          <Button
            type="button"
            onClick={() => {
              handleDeleteColumn();
            }}
          >
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
