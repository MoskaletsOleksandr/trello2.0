import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ selected }) =>
    selected
      ? 'var(--header-theme-select-text-color-hover)'
      : 'var(--header-theme-select-text-color)'};

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }
`;
