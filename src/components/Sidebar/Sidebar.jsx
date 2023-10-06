import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';
import { BackDrop, SidebarContainer } from './Sidebar.styled';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('handleLogout');
    dispatch(logoutThunk());
  };

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
        <button onClick={handleLogout}>logout</button>
      </SidebarContainer>
    </>
  );
};
