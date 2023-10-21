import React from 'react';
import sprite from '../../../../assets/sprite.svg';
import {
  AvatarImg,
  Container,
  IconAvatar,
  IconPlus,
  Label,
  StyledField,
} from './AvatarField.styled';

export const AvatarField = ({ avatarUrl, onAvatarChange }) => {
  return (
    <Container>
      {avatarUrl ? (
        <AvatarImg src={avatarUrl} />
      ) : (
        <IconAvatar>
          <use href={`${sprite}#icon-avatar`}></use>
        </IconAvatar>
      )}
      <Label>
        <StyledField type="file" accept="image/*" onChange={onAvatarChange} />
        <IconPlus>
          <use href={`${sprite}#icon-plus`}></use>
        </IconPlus>
      </Label>
    </Container>
  );
};
