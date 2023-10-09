import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { getAllBoardsThunk } from '../../redux/boards/thunks';
import { Container } from './Homepage.styled';
// import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, []);

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
    </Container>
  );
};

export default HomePage;
