import React from 'react';
import sprite from '../../../assets/sprite.svg';
import { Container, Icon, StyledLink } from './GoogleButton.styled';

export const GoogleButton = () => {
  return (
    <Container>
      <Icon>
        <use href={`${sprite}#icon-google`} />
      </Icon>
      <StyledLink href="http://localhost:5000/users/google">
        {/* <StyledLink href="https://trello2-0-backend.onrender.com/users/google"> */}
        Continue with Google
      </StyledLink>
    </Container>
  );
};
