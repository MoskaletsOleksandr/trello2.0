import React from 'react';
import { Modal } from '../../common/Modal';

export const CardModal = ({ card, onClose }) => {
  return (
    <Modal onClose={onClose} title={'Card details'}>
      <p>{card.title}</p>
    </Modal>
  );
};
