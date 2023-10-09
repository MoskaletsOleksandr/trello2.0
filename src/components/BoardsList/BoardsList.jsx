import React from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import {
  selectAllBoards,
  selectCurrentBoard,
} from '../../redux/boards/selectors';
import {
  ActiveItem,
  Button,
  ButtonIcon,
  ButtonsWrapper,
  Icon,
  Item,
  List,
  Title,
} from './BoardsList.styled';

export const BoardsList = () => {
  const boards = useSelector(selectAllBoards);
  const currentBoard = useSelector(selectCurrentBoard);

  const handleOpenBoard = () => {
    console.log('handleOpenBoard');
  };

  const handleEditBoard = (e, boardId) => {
    e.stopPropagation();
    console.log('handleEditBoard', boardId);
  };

  const handleDeleteBoard = (e, boardId) => {
    e.stopPropagation();
    console.log('handleDeleteBoard', boardId);
  };

  return (
    <List>
      {boards.map((board) => {
        // if (board._id === currentBoard._id) {
        if (board._id === '652059f261e7de9cb1659b32') {
          return (
            <ActiveItem key={board._id} onClick={handleOpenBoard}>
              <Icon width="18px" height="18px">
                <use href={`${sprite}#${board.icon}`}></use>
              </Icon>
              <Title>{board.title}</Title>
              <ButtonsWrapper>
                <Button
                  type="button"
                  onClick={(e) => handleEditBoard(e, board._id)}
                >
                  <ButtonIcon width="16px" height="16px">
                    <use href={sprite + '#icon-pencil'}></use>
                  </ButtonIcon>
                </Button>
                <Button
                  type="button"
                  onClick={(e) => handleDeleteBoard(e, board._id)}
                >
                  <ButtonIcon width="16px" height="16px">
                    <use href={sprite + '#icon-trash'}></use>
                  </ButtonIcon>
                </Button>
              </ButtonsWrapper>
            </ActiveItem>
          );
        }
        return (
          <Item key={board._id} onClick={handleOpenBoard}>
            <Icon width="18px" height="18px">
              <use href={`${sprite}#${board.icon}`}></use>
            </Icon>
            <Title>{board.title}</Title>
          </Item>
        );
      })}
    </List>
  );
};
