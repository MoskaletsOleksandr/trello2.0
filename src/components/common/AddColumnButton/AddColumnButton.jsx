import React from 'react';
import PropTypes from 'prop-types';
import { Icon, IconContainer, StyledButton } from './AddColumnButton.styled';
import sprite from '../../../assets/sprite.svg';

export const AddColumnButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <IconContainer>
        <Icon width="28px" height="28px">
          <use href={sprite + '#icon-plus'}></use>
        </Icon>
      </IconContainer>
      Add another column
    </StyledButton>
  );
};

AddColumnButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
