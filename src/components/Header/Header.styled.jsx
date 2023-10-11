import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  flex-grow: 1;
  height: 68px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 32px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconMenu = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`;

export const CustomSelect = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
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
