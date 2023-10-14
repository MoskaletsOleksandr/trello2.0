import styled from '@emotion/styled';

export const Container = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const ColumnTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 18px;
  background-color: var(--card-bg-color);
  border-radius: 8px;
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--card-title-color);
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`;

export const ButtonIcon = styled.svg`
  stroke: var(--card-icon-color);
  fill: none;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: var(--progress-popup-text-color-hover);
  }
`;

export const CardsContainer = styled.div`
  overflow-y: hidden;
`;

export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  box-sizing: border-box;
  height: calc(100vh - 340px);

  ::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    height: 10px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    height: 130px;
    margin-left: 8px;
  }
`;
