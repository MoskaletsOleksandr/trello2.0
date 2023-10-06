import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../api/authApi/authApi';
import { logoutThunk } from '../../redux/auth/thunks';
import { BackDrop, SidebarContainer } from './Sidebar.styled';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const handleGetUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
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
        <button onClick={handleGetUsers}>get users</button>
        <ul>
          {users.map((user) => (
            <li key={user.email}>{user.email}</li>
          ))}
        </ul>
      </SidebarContainer>
    </>
  );
};
