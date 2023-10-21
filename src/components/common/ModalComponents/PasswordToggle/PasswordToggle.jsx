import React, { useState } from 'react';
import sprite from '../../../../assets/sprite.svg';
import { StyledField } from '../ModalComponents.styled';
import { Container, EyeIcon, ToggleBtn } from './PasswordToggle.styled';

export const PasswordToggle = ({ name }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <StyledField
        name={name}
        type={visible ? 'text' : 'password'}
        placeholder="Enter your password"
      />
      <ToggleBtn type="button" onClick={toggleVisibility}>
        <EyeIcon>
          <use
            href={`${sprite}#${!visible ? 'icon-eye' : 'icon-eye-blocked'}`}
          ></use>
        </EyeIcon>
      </ToggleBtn>
    </Container>
  );
};
