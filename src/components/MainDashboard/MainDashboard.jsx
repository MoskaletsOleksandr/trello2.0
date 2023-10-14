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

export const MainDashDoard = () => {
  const boardTitle = useSelector(selectBoardTitle);
  const boardBackgrounds = useSelector(selectBoardBackgrounds);
  const boardColumns = useSelector(selectBoardColumns);
  const priority = useSelector(selectPriority);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
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
            <Column key={column._id} column={column} columns={boardColumns} />
          ))}
          <AddColumnButton />
        </BoardContainer>
      </BoardSection>
    </Container>
  );
};