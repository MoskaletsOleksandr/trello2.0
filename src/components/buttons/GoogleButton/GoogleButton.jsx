import React from 'react';
import sprite from '../../../assets/sprite.svg';
import { Icon, StyledLink } from './GoogleButton.styled';

export const GoogleButton = () => {
  return (
    <StyledLink href="https://trello2-0-backend.onrender.com/users/google">
      <Icon>
        <use href={`${sprite}#icon-google`} />
      </Icon>
      Continue with Google
    </StyledLink>
  );
};
