import React from 'react';
import { BackDrop, SidebarContainer } from './Sidebar.styled';

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
      <SidebarContainer isOpen={isOpen} />
    </>
  );
};
