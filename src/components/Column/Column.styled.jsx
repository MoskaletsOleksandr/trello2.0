import styled from '@emotion/styled';

export const Container = styled.div`
  width: 334px;
  height: 100%;
  display: flex;
  gap: 14px;
  flex-direction: column;

  background-color: #ffa60078;
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
  background-color: red;
  height: 50px;
`;
