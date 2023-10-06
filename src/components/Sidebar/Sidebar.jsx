import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewBoard, fetchBoards } from '../../api/boardsApi/boardsApi';
import { logoutThunk } from '../../redux/auth/thunks';
import { AddBoardButton } from '../AddBoardBtn';
import Logo from '../Logo/Logo';
import { BackDrop, SidebarContainer, Title } from './Sidebar.styled';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const handleGetBoards = async () => {
    const data = await fetchBoards();
    setBoards(data);
  };

  const handleCreate = async () => {
    const body = {
      title,
      icon: 'icon',
      background: {},
      ownerId: '652052b691e27f6f6b5b3a68',
    };
    await createNewBoard(body);
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
        <Logo />
        <Title>My boards</Title>
        <AddBoardButton />
        <button onClick={handleLogout}>logout</button>
        <button onClick={handleGetBoards}>get boards</button>
        <ul>
          {boards.map((board) => (
            <li key={board._id}>{board.title}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleCreate}>Create</button>
      </SidebarContainer>
    </>
  );
};
