import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { selectCurrentBoardId } from '../../redux/auth/selectors';
import { selectCurrentBoard } from '../../redux/boards/selectors';
import {
  getAllBoardsThunk,
  getBackgroundsThunk,
  getCurrentBoardThunk,
} from '../../redux/boards/thunks';
import { Container } from './Homepage.styled';
import { Outlet } from 'react-router-dom';
import { PlaceHolderBoard } from '../../components/PlaceHolderBoard/PlaceHolderBoard';
import { selectIsLoading } from '../../redux/selectors';
import { Loader } from '../../components/Loader';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getAllBoardsThunk());
    dispatch(getBackgroundsThunk());
    if (currentBoardId) {
      dispatch(getCurrentBoardThunk(currentBoardId));
    }
  }, []);

  useEffect(() => {
    if (currentBoard) {
      const normalizedTitle = currentBoard.title
        .toLowerCase()
        .replace(/[\s/]+/g, '-');
      navigate(normalizedTitle);
    }
  }, [currentBoard]);

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      {currentBoard ? <Outlet /> : <PlaceHolderBoard />}
      {isLoading && <Loader />}
    </Container>
  );
};

export default HomePage;
