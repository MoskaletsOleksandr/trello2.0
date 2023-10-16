import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBoardCards } from '../../redux/cards/selectors';
import { selectBoardColumns } from '../../redux/columns/selectors';
import { Card } from '../Card';
import { Column } from '../Column';
import { ColumnList } from './Board.styled';

export const Board = () => {
  const boardColumns = useSelector(selectBoardColumns);
  const boardCards = useSelector(selectBoardCards);
  const [filteredColumnCards, setFilteredColumnCards] = useState([]);

  //   const cardsMap = {};
  //   boardCards.forEach((column) => {
  //     cardsMap[column.columnId] = [...column.cards];
  //   });

  //   const columnsWithCards = boardColumns.map((column) => ({
  //     ...column,
  //     cards: cardsMap[column._id] || [],
  //   }));

  const combinedData = boardColumns.map((column) => {
    const columnId = column._id;
    const cardsInColumn =
      boardCards.find((item) => item.columnId === columnId)?.cards || [];
    return { ...column, cards: cardsInColumn };
  });
  return (
    <ColumnList>
      {combinedData.map((column) => {
        console.log('column: ', column);
        return (
          <Column key={column._id} column={column} columns={boardColumns}>
            {column.cards.map((card) => {
              console.log('card: ', card);
              return (
                <Card key={card._id} card={card} columnTitle={column.title} />
              );
            })}
          </Column>
        );
      })}
    </ColumnList>
  );
};
