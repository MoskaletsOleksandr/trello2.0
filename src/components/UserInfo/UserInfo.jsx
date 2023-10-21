import React, { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  UserName,
  IconAvatar,
  Container,
  AvasarSetin,
  AvatarImg,
  Name,
} from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { EditProfileModal } from '../modals/EditProfileModal';

export const UserInfo = () => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, avatarUrl } = user;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <UserName>
        <Name>{name}</Name>
      </UserName>
      <AvasarSetin onClick={openModal}>
        {avatarUrl ? (
          <AvatarImg src={avatarUrl} />
        ) : (
          <IconAvatar>
            <use href={`${sprite}#icon-avatar`}></use>
          </IconAvatar>
        )}
      </AvasarSetin>
      {isModalOpen && <EditProfileModal onClose={closeModal} user={user} />}
    </Container>
  );
};
