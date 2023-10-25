import React from 'react';
import { Modal } from '../../common/Modal';
import { Container } from './CardModal.styled';

export const CardModal = ({ card, onClose }) => {
  return (
    <Modal onClose={onClose} title={'Card details'}>
      <Container>
        <p>{card.title}</p>
        <p>{card.text}</p>
      </Container>
    </Modal>
  );
};
