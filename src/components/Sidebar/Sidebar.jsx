import React, { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { AddBoardButton } from '../AddBoardBtn';
import { BoardsList } from '../BoardsList/BoardsList';
import Logo from '../Logo/Logo';
import { LogoutBtn } from '../LogoutBtn';
import { FeedbackModal } from '../modals/FeedbackModal';
import {
  BackDrop,
  FeedbackBtn,
  FeedbackContainer,
  FeedbackIcon,
  FeedbackText,
  FeedbackTitle,
  SidebarContainer,
  Title,
} from './Sidebar.styled';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <BoardsList />
        <FeedbackContainer>
          <FeedbackTitle>Leave feedback</FeedbackTitle>
          <FeedbackText>
            Share your thoughts to help us. Your feedback on improvements or
            errors makes this app better!
          </FeedbackText>
          <FeedbackBtn onClick={openModal}>
            <FeedbackIcon>
              <use href={`${sprite}#icon-help-circle`} />
            </FeedbackIcon>
            Click me to write
          </FeedbackBtn>
          {isModalOpen && <FeedbackModal onClose={closeModal} />}
        </FeedbackContainer>
        <LogoutBtn />
      </SidebarContainer>
    </>
  );
};
