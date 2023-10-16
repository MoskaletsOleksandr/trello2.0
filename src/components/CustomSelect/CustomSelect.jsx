import React, { useEffect, useRef } from 'react';
import {
  Container,
  Current,
  CustomOption,
  CustomOptionList,
  Title,
} from './CustomSelect.styled';

export const CustomSelect = ({
  title,
  options,
  selectedOption,
  isOpen,
  onClose,
  handleOptionClick,
  openBtnRef,
  forCard,
}) => {
  const customOptionListRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        customOptionListRef.current &&
        !customOptionListRef.current.contains(event.target) &&
        openBtnRef.current !== event.target
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container ref={customOptionListRef} forCard={forCard}>
      <Title>{title}</Title>
      <CustomOptionList>
        {options.map((option) => {
          return (
            <CustomOption
              key={option}
              onClick={() => handleOptionClick(option)}
              selected={selectedOption === option}
            >
              {option}
              {selectedOption === option && <Current>(current)</Current>}
            </CustomOption>
          );
        })}
      </CustomOptionList>
    </Container>
  );
};
