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
import { deleteColumnByIdThunk } from '../../redux/columns/thunks';
import { useDispatch } from 'react-redux';
import { CustomSelect } from '../CustomSelect';

export const Column = ({ column, columns }) => {
  const dispatch = useDispatch();
  const { title, _id } = column;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const columnsAmount = columns.length;
  const moveColumnBtnRef = useRef(null);
  const columnOptionsList = columns
    .filter((column) => column._id !== _id)
    .map((column) => column.title);

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
    dispatch(deleteColumnByIdThunk(_id));
  };

  const handleMoveColumn = (selectedColumn) => {
    // dispatch(updateThemeThunk({ theme: selectedTheme }));
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
              options={columnOptionsList}
              selectedOption={title}
              isOpen={isCustomOptionListOpen}
              onClose={toggleCustomOptionList}
              handleOptionClick={handleMoveColumn}
              openBtnRef={moveColumnBtnRef}
            />
          )}
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
