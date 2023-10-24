import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { updateCurrentBoardIdThunk } from '../../redux/auth/thunks';
import {
  selectAllBoards,
  selectCurrentBoard,
} from '../../redux/boards/selectors';
import {
  deleteBoardByIdThunk,
  getCurrentBoardThunk,
} from '../../redux/boards/thunks';
import { UpdateBoardModal } from '../modals/UpdateBoardModal';
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [boardId, setBoardId] = useState(false);
  const boards = useSelector(selectAllBoards);
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenBoard = async (boardId, boardTitle) => {
    await dispatch(getCurrentBoardThunk(boardId));
    await dispatch(updateCurrentBoardIdThunk({ boardId }));
    const normalizedTitle = boardTitle.toLowerCase().replace(/[\s/]+/g, '-');
    navigate(normalizedTitle);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEditBoard = (boardId) => {
    setBoardId(boardId);
    openModal();
  };

  const handleDeleteBoard = (boardId) => {
    dispatch(deleteBoardByIdThunk(boardId));
    navigate('/home');
  };

  return (
    <>
      <List>
        {boards.map((board) => {
          if (board._id === currentBoard?._id) {
            return (
              <ActiveItem key={board._id}>
                <Icon width="18px" height="18px">
                  <use href={`${sprite}#${board.icon}`}></use>
                </Icon>
                <Title>{board.title}</Title>
                <ButtonsWrapper>
                  <Button
                    type="button"
                    onClick={() => handleEditBoard(board._id)}
                  >
                    <ButtonIcon width="16px" height="16px">
                      <use href={sprite + '#icon-pencil'}></use>
                    </ButtonIcon>
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleDeleteBoard(board._id)}
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
            <Item
              key={board._id}
              onClick={() => {
                handleOpenBoard(board._id, board.title);
              }}
            >
              <Icon width="18px" height="18px">
                <use href={`${sprite}#${board.icon}`}></use>
              </Icon>
              <Title>{board.title}</Title>
            </Item>
          );
        })}
      </List>
      {isModalOpen && (
        <UpdateBoardModal boardId={boardId} onClose={closeModal} />
      )}
    </>
  );
};
