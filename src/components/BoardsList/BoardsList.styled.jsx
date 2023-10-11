import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  scroll-behavior: smooth;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 300ms linear;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &:hover {
    opacity: 1;
    /* background-color: var(--sidebar-active-board-bg-color); */
  }
`;

export const ActiveItem = styled.li`
  position: relative;
  display: flex;
  padding: 20px 14px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--sidebar-active-board-bg-color);
  opacity: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-left: 4px solid var(--sidebar-border-left-color);
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const Icon = styled.svg`
  stroke: var(--icon-stroke);
  fill: var(--sidebar-active-board-bg-color);
  opacity: 1;
`;

export const Title = styled.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  display: block;
  background-color: transparent;
  border: none;
`;

export const ButtonIcon = styled.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill: var(--sidebar-active-board-bg-color);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`;
