import React, { useEffect, useRef } from 'react';
import {
  Container,
  CustomOption,
  CustomOptionList,
} from './CustomSelect.styled';

export const CustomSelect = ({
  options,
  selectedOption,
  isOpen,
  onClose,
  handleOptionClick,
  openBtnRef,
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
    <Container ref={customOptionListRef}>
      <CustomOptionList isOpen={isOpen}>
        {options.map((option) => {
          return (
            <CustomOption
              key={option}
              onClick={() => handleOptionClick(option)}
              selected={selectedOption === option}
            >
              {option}
            </CustomOption>
          );
        })}
      </CustomOptionList>
    </Container>
  );
};
