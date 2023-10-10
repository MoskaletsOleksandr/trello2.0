import React from 'react';
import { AddBoardButton } from '../AddBoardBtn';
import { BoardsList } from '../BoardsList/BoardsList';
import Logo from '../Logo/Logo';
import { LogoutBtn } from '../LogoutBtn';
import { BackDrop, SidebarContainer, Title } from './Sidebar.styled';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <BackDrop
          onClick={() => {
            toggleSidebar();
          }}
          isOpen={isOpen}
        />
      )}
      <SidebarContainer isOpen={isOpen}>
        <Logo />
        <Title>My boards</Title>
        <AddBoardButton />
        <BoardsList />
        <LogoutBtn />
      </SidebarContainer>
    </>
  );
};
