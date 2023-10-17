import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBoardBackgrounds,
  selectBoardTitle,
} from '../../redux/boards/selectors';
import {
  BoardContainer,
  BoardSection,
  Container,
  FilterBtn,
  FilterBtnWrapper,
  FilterIcon,
  Header,
  Title,
} from './MainDashboard.styled';
import sprite from '../../assets/sprite.svg';
import { Column } from '../Column';
import { AddColumnButton } from '../AddColumnButton';
import { selectBoardColumns } from '../../redux/columns/selectors';
import { selectPriority } from '../../redux/cards/selectors';
import { CustomSelect } from '../CustomSelect';
import { priorities } from '../../data/constants';
import { changePriority } from '../../redux/cards/slice';
import { moveColumnByIdThunk } from '../../redux/columns/thunks';
import { moveCardByIdThunk } from '../../redux/cards/thunks';

export const MainDashDoard = () => {
  const boardTitle = useSelector(selectBoardTitle);
  const boardBackgrounds = useSelector(selectBoardBackgrounds);
  const boardColumns = useSelector(selectBoardColumns);
  const priority = useSelector(selectPriority);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentColumn, setCurrentColumn] = useState(null);
  const [columnToMove, setColumnToMove] = useState(null);
  const [isCardOverAnotherCard, setIsCardOverAnotherCard] = useState(false);
  const filterBtnRef = useRef(null);
  const dispatch = useDispatch();

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const openCustomOptionList = (event) => {
    event.stopPropagation();
    toggleCustomOptionList();
  };

  const handleChangePriority = (selectedPriority) => {
    if (selectedPriority !== priority) {
      dispatch(changePriority(selectedPriority));
      toggleCustomOptionList();
    }
  };

  const dragStartHandler = (e, column) => {
    setColumnToMove(column);
  };

  const dragEndHandler = (e) => {
    e.stopPropagation();
    e.target.style.boxShadow = 'none';
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = '0 4px 3px grey';
  };

  const dropHandler = (e, column) => {
    e.preventDefault();
    if (currentCard && !isCardOverAnotherCard) {
      const newColumnId = column._id;
      // const oldColumnId = currentCard.columnId;
      const newOrderInColumn = 'null';

      // if (newColumnId !== oldColumnId) {
      const cardId = currentCard._id;
      const body = {
        newColumnId,
        newOrderInColumn,
      };
      dispatch(moveCardByIdThunk({ cardId, body }));
      // }
    }

    const newOrder = column.order;
    const columnToMoveOrder = columnToMove.order;
    if (newOrder !== columnToMoveOrder) {
      const body = {
        newOrder,
      };
      const columnId = columnToMove._id;
      if (!currentCard) {
        dispatch(moveColumnByIdThunk({ columnId, body }));
      }
    }
    setCurrentCard(null);
  };

  return (
    <Container background={boardBackgrounds}>
      <Header>
        <Title>{boardTitle}</Title>
        <FilterBtnWrapper>
          <FilterBtn ref={filterBtnRef} onClick={openCustomOptionList}>
            <FilterIcon>
              <use href={sprite + '#icon-filter'}></use>
            </FilterIcon>
            Filters
          </FilterBtn>
          {isCustomOptionListOpen && (
            <CustomSelect
              title="Filter by priority"
              options={['all priorities', ...priorities]}
              selectedOption={priority}
              isOpen={isCustomOptionListOpen}
              onClose={toggleCustomOptionList}
              handleOptionClick={handleChangePriority}
              openBtnRef={filterBtnRef}
            />
          )}
        </FilterBtnWrapper>
      </Header>
      <BoardSection>
        <BoardContainer>
          {boardColumns.map((column) => (
            <div
              key={column._id}
              draggable={true}
              onDragStart={(e) => {
                dragStartHandler(e, column);
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
                dropHandler(e, column);
              }}
            >
              <Column
                column={column}
                columns={boardColumns}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                currentColumn={currentColumn}
                setCurrentColumn={setCurrentColumn}
                setIsCardOverAnotherCard={setIsCardOverAnotherCard}
              />
            </div>
          ))}
          <AddColumnButton />
        </BoardContainer>
      </BoardSection>
    </Container>
  );
};
