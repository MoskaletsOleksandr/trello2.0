import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBoardBackgrounds,
  selectBoardTitle,
} from '../../redux/boards/selectors';
import {
  BoardContainer,
  Container,
  FilterBtn,
  FilterIcon,
  Header,
  Title,
} from './MainDashboard.styled';
import sprite from '../../assets/sprite.svg';
import { Column } from '../Column';
import { AddColumnButton } from '../AddColumnButton';
import { selectBoardColumns } from '../../redux/columns/selectors';

export const MainDashDoard = () => {
  const boardTitle = useSelector(selectBoardTitle);
  const boardBackgrounds = useSelector(selectBoardBackgrounds);
  const boardColumns = useSelector(selectBoardColumns);

  return (
    <Container background={boardBackgrounds}>
      <Header>
        <Title>{boardTitle}</Title>
        <FilterBtn>
          <FilterIcon>
            <use href={sprite + '#icon-filter'}></use>
          </FilterIcon>
          Filters
        </FilterBtn>
      </Header>
      <BoardContainer>
        {boardColumns.map((column) => (
          <Column key={column._id} column={column} />
        ))}
        <AddColumnButton />
      </BoardContainer>
    </Container>
  );
};
