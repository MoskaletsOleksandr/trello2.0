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
import { selectError, selectIsLoading } from '../../redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { logoutThunk } from '../../redux/auth/thunks';
import { Loader } from '../../components/common/Loader';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const currentBoard = useSelector(selectCurrentBoard);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllBoardsThunk());
      await dispatch(getBackgroundsThunk());
      if (currentBoardId && currentBoardId !== 'null') {
        await dispatch(getCurrentBoardThunk(currentBoardId));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (currentBoard) {
      const normalizedTitle = currentBoard.title
        .toLowerCase()
        .replace(/[\s/]+/g, '-');
      navigate(normalizedTitle);
    }
  }, [currentBoard]);

  useEffect(() => {
    if (errorMessage === 'Not authorized') {
      dispatch(logoutThunk());
    }

    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      {currentBoard ? <Outlet /> : <PlaceHolderBoard />}
      <Toaster position="bottom-right" reverseOrder={false} />
      {isLoading && <Loader />}
    </Container>
  );
};

export default HomePage;
