import React, { useRef, useState } from 'react';
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
import {
  deleteColumnByIdThunk,
  moveColumnByIdThunk,
} from '../../redux/columns/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { CustomSelect } from '../CustomSelect';
import { Card } from '../Card';
import { selectBoardCards } from '../../redux/cards/selectors';

export const Column = ({ column, columns }) => {
  const dispatch = useDispatch();
  const { title, _id: columnId, order } = column;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const boardCards = useSelector(selectBoardCards);
  const columnsAmount = columns.length;
  const moveColumnBtnRef = useRef(null);
  const columnOptionsList = columns.map((column) => column.order);
  const columnCards = boardCards.find(
    (columnCards) => columnCards.columnId === columnId
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const openCustomOptionList = (event) => {
    event.stopPropagation();
    toggleCustomOptionList();
  };

  const handleDeleteColumn = () => {
    dispatch(deleteColumnByIdThunk(columnId));
  };

  const handleMoveColumn = (selectedColumn) => {
    if (selectedColumn === order) {
      return;
    }
    const body = {
      oldOrder: order,
      newOrder: selectedColumn,
    };
    dispatch(moveColumnByIdThunk({ columnId, body }));
    toggleCustomOptionList();
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
              ref={moveColumnBtnRef}
              type="button"
              onClick={openCustomOptionList}
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
          {isCustomOptionListOpen && (
            <CustomSelect
              title="Move to position"
              options={columnOptionsList}
              selectedOption={order}
              isOpen={isCustomOptionListOpen}
              onClose={toggleCustomOptionList}
              handleOptionClick={handleMoveColumn}
              openBtnRef={moveColumnBtnRef}
            />
          )}
        </ButtonsWrapper>
      </ColumnTitleWrapper>
      <CardsContainer>
        {columnCards.cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </CardsContainer>
      {isModalOpen && (
        <UpdateColumnModal
          columnId={columnId}
          onClose={closeModal}
          columnTitle={title}
        />
      )}
    </Container>
  );
};
