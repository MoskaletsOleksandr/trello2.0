import styled from '@emotion/styled';

export const Container = styled.div`
  max-height: ${({ forCard }) => (forCard ? '145px' : '200px')};
  position: absolute;
  top: ${({ forCard }) => (forCard ? '-112px' : '20px')};
  left: ${({ forCard }) => (forCard ? '-110px' : '-135px')};
  margin: 0;
  padding: 18px;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  font-size: ${({ forCard }) => (forCard ? '12px' : '14px')};
  z-index: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    margin-left: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    margin-left: 8px;
  }
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
  color: var(--card-title-color);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Current = styled.span`
  font-size: 12px;
  text-transform: lowercase;
`;
