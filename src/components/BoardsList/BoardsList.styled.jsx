import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  /* height: calc(100vh - 611px); */
  scroll-behavior: smooth;
  overflow-y: auto;
  /* scroll-snap-type: y mandatory; */

  /* @media only screen and (min-width: 768px) {
    height: calc(100vh - 646px);
  } */

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  /* scroll-snap-align: start; */

  /* @media screen and (min-width: 768px) {
    padding: 20px 24px;
  } */
  /* 
  &:not(:last-child) {
    margin-bottom: 4px;
  } */
`;

export const ActiveItem = styled.li`
  background-color: red;
  background-color: var(--sidebar-active-board-bg-color);
  opacity: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-left: 4px solid red;
    /* border-left: 4px solid var(--sidebar-border-left-color); */
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const Icon = styled.svg`
  stroke: black;
  /* stroke: var(--icon-stroke); */
  fill: black;
  /* fill: var(--sidebar-active-board-bg-color); */
  opacity: 1;
`;

export const Title = styled.p`
  margin-right: auto;
  text-transform: capitalize;
  color: red;
  /* color: var(--sidebar-active-board-text-color); */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
  /* @media screen and (min-width: 768px) {
    margin-left: 24px;
  } */
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
  stroke: red;
  /* stroke: var(--sidebar-inactive-icon-color); */
  /* fill: var(--sidebar-active-board-bg-color); */
  &:hover,
  &:focus {
    stroke: orange;
    /* stroke: var(--progress-popup-text-color-hover); */
    cursor: pointer;
  }
`;
