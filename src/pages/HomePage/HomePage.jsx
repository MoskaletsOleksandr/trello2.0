import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Container } from './Homepage.styled';
// import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
    </Container>
  );
};

export default HomePage;
