import React, { useRef, useState } from 'react';
import {
  Button,
  ButtonIcon,
  ButtonsWrapper,
  CardsContainer,
  ColumnTitle,
  ColumnTitleWrapper,
  Container,
  ScrollContent,
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
import { selectBoardCards, selectPriority } from '../../redux/cards/selectors';
import { AddCardButton } from '../AddCardButton';
import { useEffect } from 'react';
import { changePriority } from '../../redux/cards/slice';
import { moveCardByIdThunk } from '../../redux/cards/thunks';

export const Column = ({
  column,
  columns,
  currentCard,
  setCurrentCard,
  currentColumn,
  setCurrentColumn,
  setIsCardOverAnotherCard,
}) => {
  const dispatch = useDispatch();
  const { title, _id: columnId, order } = column;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const [filteredColumnCards, setFilteredColumnCards] = useState([]);
  const boardCards = useSelector(selectBoardCards);
  const columnsAmount = columns.length;
  const moveColumnBtnRef = useRef(null);
  const priority = useSelector(selectPriority);
  const columnOptionsList = columns.map((column) => column.order);
  const columnCards = boardCards.find(
    (columnCards) => columnCards.columnId === columnId
  );

  useEffect(() => {
    setFilteredColumnCards((prevFilteredCards) =>
      columnCards?.cards.filter((card) => {
        if (priority === 'all priorities') {
          return true;
        } else {
          return card.priority === priority;
        }
      })
    );
  }, [columnCards, priority]);

  useEffect(() => {
    dispatch(changePriority('all priorities'));
  }, [columnCards]);

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
      newOrder: selectedColumn,
    };
    dispatch(moveColumnByIdThunk({ columnId, body }));
    toggleCustomOptionList();
  };

  const dragStartHandler = (e, column, card) => {
    e.target.style.opacity = '0.5';
    setCurrentColumn(column);
    setCurrentCard(card);
  };

  const dragEndHandler = (e) => {
    e.stopPropagation();
    e.target.style.boxShadow = 'none';
    setIsCardOverAnotherCard(false);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = '0 4px 3px grey';
    if (currentCard) {
      setIsCardOverAnotherCard(true);
    }
  };

  const dropHandler = (e, column, card) => {
    if (currentCard) {
      const newColumnId = card.columnId;
      const oldColumnId = currentCard.columnId;
      const newOrderInColumn = card.order;

      if (newColumnId !== oldColumnId) {
        const cardId = currentCard._id;
        const body = {
          newColumnId,
          newOrderInColumn,
        };
        dispatch(moveCardByIdThunk({ cardId, body }));
      }
    }
    setCurrentColumn(null);
    setCurrentCard(null);
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
        <ScrollContent>
          {filteredColumnCards &&
            filteredColumnCards.map((card) => (
              <div
                key={card._id}
                draggable={true}
                onDragStart={(e) => {
                  dragStartHandler(e, column, card);
                }}
                onDragLeave={(e) => {
                  dragEndHandler(e);
                }}
                onDragEnd={(e) => {
                  dragEndHandler(e);
                }}
                onDragOver={(e) => {
                  dragOverHandler(e);
                }}
                onDrop={(e) => {
                  dropHandler(e, column, card);
                }}
              >
                <Card card={card} columnTitle={title} />
              </div>
            ))}
        </ScrollContent>
      </CardsContainer>
      <AddCardButton columnId={columnId} />
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
