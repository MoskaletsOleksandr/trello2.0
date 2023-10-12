import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
  top: 20px;
  left: -135px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`;

export const CustomOptionList = styled.ul`
  list-style: none;
`;

export const CustomOption = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 3px;
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

export const Title = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Current = styled.span`
  font-size: 12px;
  text-transform: lowercase;
`;
