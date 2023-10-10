import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../../assets/sprite.svg';
import {
  CloseSVG,
  ModalBackdrop,
  ModalContent,
  ModalTitle,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children, title }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <CloseSVG
          width={24}
          height={24}
          onClick={() => {
            onClose();
          }}
        >
          <use href={sprite + '#icon-x-close'}></use>
        </CloseSVG>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  //   children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
